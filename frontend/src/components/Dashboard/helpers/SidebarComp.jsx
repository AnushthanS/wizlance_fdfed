import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarComp = ({ to, tabName, tabIcon }) => {
  const location = useLocation();
  return (
    <Link
      to={to}
      className={`px-4 py-2 cursor-pointer rounded-md mx-4 my-1 flex gap-3 items-center ${
        location.pathname === to ? "bg-gray-700" : ""
      }`}
    >
      <div className="flex gap-3 items-center">
        <FontAwesomeIcon icon={tabIcon} />
        {tabName}
      </div>
    </Link>
  );
};

export default SidebarComp;
