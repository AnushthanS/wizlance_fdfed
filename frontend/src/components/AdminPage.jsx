import { Navbar, AdminMail, Users, Dashboard, Gigs, Categories, Messages } from "./partials/index";
import { useState } from "react";

const AdminPage = () => {
    const [active, setActive] = useState('dashboard');

    const pageComponents = {
        dashboard: Dashboard,
        users: Users,
        gigs: Gigs,
        categories: Categories,
        messages: Messages,
        sendMail: AdminMail,
    };

    const Selected = pageComponents[active];

    return (
        <div>
            <Navbar />

            <div className="flex">
                <div className="w-1/5 min-w-fit my-14 h-[70vh] justify-self-start p-8 rounded-r-3xl bg-pink-800 text-white overflow-y-auto no-scrollbar">
                    <div className="logo">
                        <h2 className="text-[2rem] font-bold mb-16">Admin Panel</h2>
                    </div>
                    <ul className="nav-links text-2xl mt-[100px]">
                        <li className="mb-14 hover:cursor-pointer" onClick={() => setActive('dashboard')}>
                            <span>Dashboard</span>
                        </li>
                        <li className="mb-14 hover:cursor-pointer" onClick={() => setActive('users')}>
                            <span>Users</span>
                        </li>
                        <li className="mb-14 hover:cursor-pointer" onClick={() => setActive('gigs')}>
                            <span>Gigs</span>
                        </li>
                        <li className="mb-14 hover:cursor-pointer" onClick={() => setActive('categories')}>
                            <span>Categories</span>
                        </li>
                        <li className="mb-14 hover:cursor-pointer" onClick={() => setActive('messages')}>
                            <span>Messages</span>
                        </li>
                        <li className=" hover:cursor-pointer" onClick={() => setActive('sendMail')}>
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
