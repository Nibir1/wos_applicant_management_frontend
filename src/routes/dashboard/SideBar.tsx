import { NavLink } from "react-router-dom";

import WayOutTitle from "@/components/WayOutTitle";
import UserSummary from "@/components/UserSummary";
// import StatsBar from '@/components/StatsBar';
import LogoutLink from "@/components/LogoutLink";

import "./SideBar.scss";
export default function SideBar() {
  return (
    <aside id="sidebar">
      <WayOutTitle />

      <UserSummary />

      {/* <StatsBar /> */}

      <div className="vert-center fill">
        <nav id="sidebar-buttons">
          <NavLink to="/dashboard" end>
            Dashboard Home
          </NavLink>
          <NavLink to="/dashboard/registration">Applicant Registration</NavLink>
          <NavLink to="/dashboard/form-fill">Form Fill-Out</NavLink>
          <NavLink to="/dashboard/chat">Visa Chat</NavLink>
        </nav>
      </div>

      <LogoutLink />

      <span className="copyright">
        ©Copyright {new Date().getFullYear()} Chronophase, All Rights Reserved.
      </span>
    </aside>
  );
}
