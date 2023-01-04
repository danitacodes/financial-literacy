import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { MenuOutlined, Close } from '@material-ui/icons'



const Navbar = () => {

    const [active, setActive] = useState(false);
    const handleClick = () => setActive(!active)

  return (
    <div className="fixed w-full h-[80px] text-seagreen bg-[#555B6E] flex justify-between px-4 items-center">
        <div className="text-3xl font-bold text-center">
            <h1 className="font-Lora"><a href='/'>FinanciaLiteracy</a></h1>
        </div>

            {/* Nav Links */}
            <ul className="hidden md:flex gap-8 px-4 uppercase text-xl">
               <li>
                    <Link to='/'>Home</Link>
                </li>
               <li>
                    <Link to='/vocab'>Vocabulary</Link>
                </li>
               <li>
                    <Link to='/spend/start'>Spend or Save</Link>
                </li>
            </ul>
    

        {/* Hamburger Menu */}
        <div onClick={handleClick} className="md:hidden absolute right-6 top-6 scale-150">
            {!active ? <MenuOutlined  className='scale-150 cursor-pointer'/>  : <Close className='cursor-pointer'/>}  
        </div>

        {/* Small Screen Menu */}
        <ul className={!active ? 'hidden': "flex-col flex items-center fixed inset-0 left-1/4 uppercase gap-8 p-8 bg-black/40 backdrop-blur-lg justify-center"}> 
        {!active ? <MenuOutlined  className='scale-150 cursor-pointer'/>  : <Close onClick={handleClick} className='cursor-pointer'/>} 
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/vocab'>Vocabulary</a>
            </li>
            <li>
                <a href='/spend/start'>Spend or Save</a>
            </li>
        </ul>
    
       </div>
  )
}

export default Navbar