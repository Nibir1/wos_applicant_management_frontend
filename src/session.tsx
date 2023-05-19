/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export interface SessionUser {
  id: string;
  name: string;
  picture: string;
  designation: string;
  user_email: string;
}
export type OptSessionUser = SessionUser | null;

export type Session = {
  user: OptSessionUser;

  setUser: (user: SessionUser) => void;
  destroy: () => void;
};
export type OptSession = Session | null;

const SessionContext = createContext<OptSession>(null);

export function isSessionValid(session: OptSession): boolean {
  return !!(session && session.user && session.user.id);
}

export function useSession() {
  return useContext<OptSession>(SessionContext);
}

export function useValidSession() {
  const session = useSession();
  return isSessionValid(session);
}

export function SessionProvider({ children }: { children: ReactNode }) {
  const [user, setStateUser] = useState<OptSessionUser>(() => {
    // Rehydrate from storage
    if ("localStorage" in window) {
      const existing = localStorage.getItem("session");
      if (existing) {
        console.info("Session rehydrated from storage");
        return JSON.parse(existing);
      }
    }

    return null;
  });

  // Persist to storage
  useEffect(() => {
    if ("localStorage" in window) {
      if (user) {
        const stamped = JSON.stringify(user);
        localStorage.setItem("session", stamped);
        console.info("Session persisted");
      } else {
        localStorage.removeItem("session");
      }
    }
  }, [user]);

  const setUser = (user: SessionUser) => {
    if (user && user.id && user.name) setStateUser(user);
  };

  const destroy = () => {
    setStateUser(null);
  };

  const session = {
    user,
    setUser,
    destroy,
  };

  console.log("Session provider rendered");

  console.log("Session provider rendered");

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
}

export function SessionRootRedirect() {
  const session = useSession();

  return (
    <Navigate to={session && session.user ? "/dashboard" : "/login"} replace />
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function RequireSession({ children }: { children: ReactNode }): any {
  const session = useSession();

  if (!isSessionValid(session)) return <Navigate to="/login" replace />;

  return children;
}
