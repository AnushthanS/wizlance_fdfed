import {
    Navbar,
    AdminMail,
    Users,
    Dashboard,
    Categories,
    AllGigs,
} from "./partials/index";
import { useState } from "react";
import { FiTarget } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { IoMdMailOpen } from "react-icons/io";

const AdminPage = () => {
    const [active, setActive] = useState("dashboard");

    const pageComponents = {
        dashboard: Dashboard,
        users: Users,
        categories: Categories,
        gigs: AllGigs,
        sendMail: AdminMail,
    };

    const Selected = pageComponents[active];

    return (
        <div>
            <Navbar />
            <div className="flex">
                <div className="w-1/5 min-w-fit my-14 h-[70vh] justify-self-start p-8 rounded-r-3xl bg-black text-white overflow-y-auto">
                    <div className="logo">
                        <h2 className="text-3xl font-bold mb-6">
                            Admin Panel
                        </h2>
                        <hr />
                    </div>
                    <ul className="nav-links text-xl mt-10">
                        <li
                            className="py-4 hover:cursor-pointer flex gap-4 items-center hover:bg-gray-800 rounded-xl px-2"
                            onClick={() => setActive("dashboard")}
                        >
                            <FiTarget />
                            <span>Dashboard</span>
                        </li>
                        <li
                            className="py-4 hover:cursor-pointer flex gap-4 items-center hover:bg-gray-800 rounded-xl px-2"
                            onClick={() => setActive("users")}
                        >
                            <FaUserAlt />
                            <span>Users</span>
                        </li>
                        <li
                            className="py-4 hover:cursor-pointer flex gap-4 items-center hover:bg-gray-800 rounded-xl px-2"
                            onClick={() => setActive("categories")}
                        >
                            <MdCategory />
                            <span>Categories</span>
                        </li>
                        <li
                            className="py-4 hover:cursor-pointer flex gap-4 items-center hover:bg-gray-800 rounded-xl px-2"
                            onClick={() => setActive("gigs")}
                        >
                            <GrProjects />
                            <span>Gigs</span>
                        </li>
                        <li
                            className="py-4 hover:cursor-pointer flex gap-4 items-center hover:bg-gray-800 rounded-xl px-2"
                            onClick={() => setActive("sendMail")}
                        >
                            <IoMdMailOpen />
                            <span>Send mail</span>
                        </li>
                    </ul>
                </div>

                <div className="w-4/5 my-14 max-h-[70vh] overflow-y-auto no-scrollbar">
                    {Selected && <Selected />}
                </div>
            </div>

            {/* <section className="px-6 py-2"></section> */}
        </div>
    );
};
export default AdminPage;
