import { styles } from "../styles";
import { secondaryNavLinks } from "../constants";
import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import {setTag} from "../store/slices/appSlice";
import { Link } from "react-router-dom";



export default function SecondaryNav() {
    const dispatch = useAppDispatch();
    const [active, setActive] = useState("");

    const handleClick = (tag) => {
        dispatch(setTag(tag));
        console.log(tag);
    }

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-4 border-b-2 border-slate-200 fixed top-24 border-t-2 z-20 bg-white`}>
            
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {secondaryNavLinks.map((link) => (
                        <li key={link.id} onClick={() => {setActive(link.id); handleClick(link.id)}}
                        className={`${
                            active === link.title
                            ? 'text-slate-500'
                            : 'text-black'
                        }`}
                        >
                                <p className="font-playfair cursor-pointer hover:text-slate-500 font-medium">
                                {link.title}
                                </p>
                        </li>
                    ))}
                </ul>

            </div>
            
        </nav>
    )
}