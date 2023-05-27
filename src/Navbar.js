import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className=' bg-[#83B239] p-4 no-underline w-full flex items-center py-5 fixed top-0 z-20'>
             <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
            <img src="" alt="LOGO" className='w-12 h-12 object-contain' />
        <ul className=' list-none hidden sm:flex flex-row gap-10'>
            
            <li className="text-2xl hover: font-medium cursor-pointer">
                <Link to='/'>Home</Link>
            </li>
            <li className="text-2xl hover: font-medium cursor-pointer">
                <Link to='/about'>About</Link>
            </li>
            <li className="text-2xl hover:text-lime-800  font-medium cursor-pointer">
            <Link to='/map'>Map</Link>
            </li>
        </ul>
        </div>
       </nav> 
     );
}
 
export default Navbar;