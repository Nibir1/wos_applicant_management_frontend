/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isSessionValid, useSession } from '@/session';

import LoginBody from './Body';
import LoginGreeting from './Greeting';

import type { SessionUser } from '@/session';

import './page.scss'
export default function LoginPage() {
  const location = useLocation();
  const session = useSession();

  const backTo = location.state?.from?.pathname || "/dashboard";

  const handleSuccess = useCallback((usr:SessionUser) => {
    if(session) {
      session.setUser(usr);
    } else {
      throw new Error(`Session is undefined during success handler`);
    }
  }, []);

  return <article id='page-login' className='page'>
    { isSessionValid(session) && <Navigate to={backTo} replace /> }
    <LoginBody onSuccess={handleSuccess} />
    <LoginGreeting />
  </article>
}
