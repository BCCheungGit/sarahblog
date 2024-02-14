import React, {useEffect, useState} from "react";

import { Link } from "react-router-dom";
import { styles } from "../styles";


export default function NavBar() {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState("");

    return (

            <nav className={`${styles.paddingX} w-full flexitems-center py-5 fixed top-0 z-20 bg-black`}>
                <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                    <p>Item 1</p>
                    <p>Item 2</p>
                </div>
            </nav>

        
    )
}
