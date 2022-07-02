import React from 'react'
import { Close } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const NavItems = ({showNav, active}) => {
  return (
    <ul className={active ? 'flex-col flex items-center fixed left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 inset-0 justify-center p-8 md:hidden' : 'hidden'}>
        <Close onClick={showNav} className='cursor-pointer'/>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Vocabulary</Link></li>
        <li><Link to='/'>Spend/Save</Link></li>
    </ul>
  )
}

export default NavItems