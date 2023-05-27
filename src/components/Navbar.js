import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return ( 
        <div className='bg-[#71AC57] flex justify-between items-center h-24  mx-auto px-4 text-white'>
        <img className="w-[266px] h-[90px]" src="./Recrash.png" alt="" />
        <ul className='hidden md:flex '>
          <li className='p-4 mr-10 text-3xl font-bold cursor-pointer hover:text-[#38761D]'>Home</li>
          <li className='p-4 mr-10 text-3xl font-bold cursor-pointer hover:text-[#38761D]'>Map</li>
          <li className='p-4  text-3xl font-bold cursor-pointer hover:text-[#38761D]'>About</li>
        </ul>


        <div>
          <img className="w-[50px] h-[50px]" src="./menu.png" alt="" />
        </div>

        <div className="fixed right-0 top-0 h-full w-[50%]  text-right">
          <ul className="pt-[95px]">
          <li className='p-4 mr-10 text-3xl font-bold cursor-pointer hover:text-[#38761D]'>Home</li>
          <li className='p-4 mr-10 text-3xl font-bold cursor-pointer hover:text-[#38761D]'>Map</li>
          <li className='p-4 mr-10 text-3xl font-bold cursor-pointer hover:text-[#38761D]'>About</li>
          </ul>
        </div>


        </div>
     );
}
 
export default Navbar;