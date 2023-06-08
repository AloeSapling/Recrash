import React from "react";


const Footer = () => {
    return ( 
        <>
        <footer className="bg-[#71AC57] rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        
            <ul class="flex items-center justify-center flex-wrap text-white">
                <li className="ml-[50px]">
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Github</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
            
        <hr className="my-6  border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="text-white block text-sm  sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>
        </>
     );
}
 
export default Footer;