import React from "react";
import '../css/footer.css'
import { Link } from "react-router-dom";
const Footer = () => {
    return ( 
        <>
        <footer className=" rounded-lg shadow dark:bg-gray-900 m-4 fo">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        
            <ul className="flex items-center justify-center w-[100%] text-white">
                <li>
                    <Link to="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
                </li>
            </ul>
            
        <hr className="my-6  border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex items-center justify-center w-[100%] text-white"><span className="text-white block text-sm  sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Recrash™</a>. All Rights Reserved.</span></div>
    </div>
</footer>
        </>
     );
}
 
export default Footer;