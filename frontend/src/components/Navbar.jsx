import React, {useState} from "react";
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import "../App.css";

import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    return(
        <nav className="px-6 sm:px-16 w-full flex justify-between items-center py-5 fixed z-0 top-0 bg-black">
            <div className="flex items-center max-w-7xl mx-auto">
                <Link
                    to='/'
                    className="flex items-center"
                    onClick={ () => {
                        setActive("");
                        window.scrollTo(0, 0);
                    } }
                >
                    <img src={logo} alt="logo" className="w-[180px] h-auto object-contain"/>
                </Link>
            </div>

            <ul className="list-none hidden sm:flex flex-row gap-10">
                {navLinks.map(
                    (link) => {
                        <li 
                        key={link.id}
                        className={`${active === link.title ? "text-white" : "text-gray-200"} hover:text-white text-[18px] font-medium cursor-pointer`}
                        onClick={ () => {
                            setActive(link.title);
                        } }
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    }
                )}
            </ul>
        </nav>
    )
}

export default Navbar;