import React, {useEffect, useState} from "react";

import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import collapse from "../assets/collapsenav.svg";

export default function NavBar() {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState("");

    return (

            <nav className={`${styles.paddingX} w-full flex items-center py-8 border-b-2 border-slate-200 fixed top-0 z-20 bg-white`}>
                <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <ul className=" list-none hidden sm:flex flex-row gap-10">
                    <Link 
                        to="/"
                        className="flex items-center gap-2"
                        onClick={() => setActive("home")}
                    >
                        <p className="font-playfair font-extrabold cursor-pointer text-[20px]">Home</p>
                    </Link>
                    
                        {navLinks.map((link) => (
                            <li key={link.id}
                                className={`${
                                    active === link.title 
                                    ? 'text-slate-500'
                                    : 'text-black'
                                } hover:text-slate-500 cursor-pointer font-medium text-[20px]`}
                                onClick={() => setActive(link.title)}
                            >
                            <Link
                                to={`/${link.title.toLowerCase()}`}
                                className="font-playfair"
                            >
                                {link.title}
                            </Link> 
                            </li>
                        ))}

                    </ul>

                    <div className="sm:hidden flex flex-1 justify-end items-center">
                        <img 
                            src={collapse}
                            alt="menu"
                            className="cursor-pointer w-[28px] h-[28px] object-contain"
                            onClick={() => setToggle(!toggle)}
                        />
                        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 absolute bg-white top-20 right-0 mx-0 my-2 min-w[140px] z-10 border-slate-200 border-2`}>
                            <ul className="list-none flex justify-end items-start flex-col gap-2">
                                <li>
                                    <Link
                                        to="/"
                                        className="font-semibold font-playfair text-[18px] text-black"
                                    >
                                        Home
                                    </Link>
                                </li>
                                {navLinks.map((link) => (
                                    <li key={link.id}>
                                        <Link
                                            to={`/${link.title.toLowerCase()}`}
                                            className="font-medium font-playfair text-[18px] text-black"
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                    
                </div>
            </nav>

        
    )
}
