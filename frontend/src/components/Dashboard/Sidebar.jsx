import {
  faBullseye,
  faClipboardCheck,
  faBagShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import ProfileCard from "./helpers/ProfileCard";
import SidebarComp from "./helpers/SidebarComp";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-blue-950 text-gray-100 w-64 h-auto sticky">
      <div className="p-4 mb-3">
        <Link to="/mainpage">
          <h1 className="text-2xl font-semibold">W I Z L A N C E</h1>
        </Link>
      </div>
      <ProfileCard />
      <nav className="mt-10">
        <SidebarComp to="/dashboard" tabName="Dashboard" tabIcon={faBullseye} />
        <SidebarComp
          to="/dashboard/orders"
          tabName="Orders"
          tabIcon={faBagShopping}
        />
        <SidebarComp
          to="/dashboard/projects"
          tabName="Projects"
          tabIcon={faClipboardCheck}
        />
        <SidebarComp
          to="/dashboard/profile"
          tabName="Profile"
          tabIcon={faUser}
        />
      </nav>
    </div>
  );
};

export default Sidebar;
