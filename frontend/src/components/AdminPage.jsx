import { Navbar, AdminMail, Users, Dashboard, Gigs, Categories, Messages } from "./partials/index";
import { useState } from "react";

const AdminPage = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);


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
        <div className="relative">
          <Navbar />
          <div className="flex"> {/* Wrap both sections in a flex container */}
            {/* left section */}
            <div className="sidebar w-[250px] my-14 h-[80vh] sticky top-0 p-10 py-14 rounded-tr-3xl rounded-br-3xl bg-pink-800 text-white">
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
    
            {/* right section */}
            <div className="flex-1"> {/* Use flex-1 to make the right section fill the remaining space */}
            {Selected && <Selected />}
            </div>
          </div>
    
          <section className="px-6 py-2"></section>
        </div>
      );
    };
export default AdminPage;
