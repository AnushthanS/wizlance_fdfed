import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircle } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="h-12 flex m-4 box-border rounded-lg justify-between px-5 py-6 items-center shadow-md bg-white">
      <FontAwesomeIcon icon={faBars} className="h-5" />
      <div className="flex gap-4">
        <FontAwesomeIcon icon={faBell} className="h-5" />
        <Link to="/dashboard/profile">
          <FontAwesomeIcon icon={faCircle} className="h-5" />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
