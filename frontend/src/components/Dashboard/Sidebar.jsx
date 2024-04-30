import {
    faBullseye,
    faClipboardCheck,
    faBagShopping,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { logo } from "../../assets";
import ProfileCard from "./helpers/ProfileCard";
import SidebarComp from "./helpers/SidebarComp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const user = useSelector((state) => state?.user?.user);

    return (
        <div className="bg-gray-950 text-gray-100 w-auto h-auto sticky">
            <div className="p-4 mb-3">
                <Link to="/mainpage">
                    {/* <h1 className="text-xl font-semibold">W I Z L A N C E</h1>
                     */}
                    <img
                        src={logo}
                        alt="logo"
                        className="w-[160px] h-auto object-contain"
                    />
                </Link>
            </div>
            <ProfileCard />
            <nav className="mt-10">
                {user.isFreelancer ? (
                    <SidebarComp
                        to="/dashboard"
                        tabName="Dashboard"
                        tabIcon={faBullseye}
                    />
                ) : (
                    <SidebarComp
                        to="/dashboard"
                        tabName="Profile"
                        tabIcon={faUser}
                    />
                )}
                <SidebarComp
                    to="/dashboard/orders"
                    tabName="Orders"
                    tabIcon={faBagShopping}
                />
                {user.isFreelancer ? (
                    <>
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
                    </>
                ) : null}
            </nav>
        </div>
    );
};

export default Sidebar;
