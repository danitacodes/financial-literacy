import { MenuOutlined } from "@mui/icons-material";
import React, { useState} from "react";
import { Link } from 'react-router-dom'
import NavItems from "../NavItems";


function Header () {

    const [active, setActive] = useState(false)

    const showNav = () => {
        setActive(!active)
    }


    return (
       <div className="fixed w-full text-white flex justify-between p-4 items-center">
        <div className="text-2xl font-bold text-center">
            <h1 className="font-Lora">FinanciaLiteracy</h1>
        </div>

        <nav>

            <div className="absolute right-6 md:hidden top-6 scale-150">
                <MenuOutlined onClick={showNav} className='scale-150 cursor-pointer'/>
            </div>

            <ul className="hidden md:flex gap-8 p-6 uppercase bg-white/10">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>Vocabulary</Link></li>
                <li><Link to='/'>Spend/Save</Link></li>
            </ul>

            <NavItems showNav={showNav} active={active}/>
        </nav>
       </div>
    )
}

export default Header;

