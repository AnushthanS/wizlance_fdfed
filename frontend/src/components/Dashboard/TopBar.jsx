import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FaUserCircle } from "react-icons/fa";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TopBar = () => {
    return (
        <div className="h-12 flex m-4 box-border rounded-lg justify-between px-5 py-6 items-center shadow-md bg-white">
            <FontAwesomeIcon icon={faBars} className="h-5" />
            <div className="flex gap-4">
                <FontAwesomeIcon icon={faBell} className="h-5" />
                <Link to="/dashboard/profile">
                    <FaUserCircle className="h-5 text-3xl" />
                </Link>
            </div>
        </div>
    );
};

export default TopBar;
