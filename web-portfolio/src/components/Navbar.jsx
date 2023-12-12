import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-40 h-10 rounded-lg bg-white items-center
        justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">Harvin Park</p>
        </NavLink>
        <nav className="flex justify-center align-middle text-lg gap-7 
        font-medium w-80 h-15 rounded-lg bg-white shadow-md">
            <NavLink to="/Work" className={( {isActive}) => isActive ?
            'text-blue-600 font-bold' : 'text-black'}>
                Work
            </NavLink>
            <NavLink to="/Life" className={( {isActive}) => isActive ?
            'text-blue-600 font-bold' : 'text-black'}>
                Life
            </NavLink>
            <NavLink to="/contact" className={( {isActive}) => isActive ?
            'text-blue-600 font-bold' : 'text-black'}>
                Contact
            </NavLink>
            
            
        </nav>
        
    </header>
  )
}

export default Navbar