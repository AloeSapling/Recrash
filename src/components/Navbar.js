import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

//add md:flex to first ul
const Navbar = () => {

    const [toggle, setToggle] = useState(true);

    const handleToggle = () =>{
      setToggle(!toggle)
    }

    return ( 
      <nav className="fixed w-full">
        <div className='bg-[#71AC57] flex justify-between items-center h-24 mx-auto px-4 text-white z-50 '>
        <img className="w-[250px] h-[90px]" src="./Recrash.png" alt="" />
        <ul className='hidden md:flex'>
          <Link  to="/"> <li className='p-4 mr-10 text-3xl font-bold cursor-pointer hover:text-[#38761D]'>Home</li></Link>
          <Link to="/map"><li className='p-4 mr-10 text-3xl font-bold cursor-pointer hover:text-[#38761D]'>Map</li></Link>
          <Link to="/about"><li className='p-4 mr-10 text-3xl font-bold cursor-pointer hover:text-[#38761D]'>About</li></Link>
        </ul>


        <div onClick={handleToggle} className="block md:hidden">
          {!toggle ? <img className="w-[50px] h-[50px] cursor-pointer" src="./close.png" alt="" /> : <img className="w-[50px] h-[50px] cursor-pointer" src="./list.png" alt="" /> }

        </div>
        
        <div className={ !toggle ? "fixed left-0 top-0 h-full w-[50%] bg-[#71AC57] ease-in-out duration-500 block md:hidden z-50" : 'ease-in-out duration-500 top-0 h-full w-[50%] fixed left-[-100%] z-50'}>
        <img className=" w-[260px] h-[96px]" src="./Recrash.png" alt="" />
            <ul className="pt-[95px] uppercase z-50">
            <Link  to="/"><li className='pl-4 ml-14 text-3xl border-b border-lime-900 font-bold cursor-pointer hover:text-[#38761D] pt-[0px]'>Home</li></Link>
            <Link to="/map"> <li className='pl-4 ml-14 text-3xl border-b border-lime-900 font-bold cursor-pointer hover:text-[#38761D] pt-[70px]'>Map</li></Link>
            <Link to="/about"> <li className='pl-4 ml-14 text-3xl border-b border-lime-900 font-bold cursor-pointer hover:text-[#38761D] pt-[70px]'>About</li></Link>
            </ul> 

        </div> 


        </div>
        </nav>
     );
}
 
export default Navbar;