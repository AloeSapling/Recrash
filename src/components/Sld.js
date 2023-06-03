import React from "react";
import Slide from 'react-reveal/Slide';


const Sld = () => {
    return ( 
        <>       
        <Slide top>   
        <div className="w-[100%]">
            <h1 className="flex justify-center mb-[50px] text-[70px] font-bold text-[#3C7339] font-playfire ">Dowiedź się więcej o odpadach</h1>
        </div>
        </Slide>
        <br />
            <Slide left>
                <div className="text-white w-[70%] h-[200px] bg-[#91C53F] rounded-[45px] ml-[-50px] grid grid-cols-3 grid-rows-2 gap-1 ">
                    <h1 className="ml-[100px] mt-[25px] font-playfire text-3xl col-span-2">React Reveal</h1>
                    <p className="ml-[100px] mt-[-20px] max-w-[750px] col-span-2 col-start-1 row-start-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus deserunt magnam, amet quis ut aliquid, nostrum illum esse aliquam optio ducimus eius. Culpa temporibus dolore molestias voluptatum eaque consequatur!
                    Deleniti voluptas </p>
                    <img className="row-span-2 col-start-3 row-start-1 w-[225px] h-[225px] mt-[-10px] ml-[35px]" src="./Battery.png" alt="battery" />
                </div>
            </Slide>
            <div className="h-[70px] bg-white w-[5px]" />
            <Slide right className=" ">
            <div className="flex justify-end">
                <div className="w-[70%] h-[200px] bg-[#7CAA29] rounded-[45px] mr-[-50px] grid grid-cols-3 grid-rows-2 gap-2">
                    <img className="row-span-2 w-[225px] h-[200px]" src="./clothes.png" alt="" />
                     <h1 className="col-span-2 flex justify-end mr-[100px] items-center text-3xl text-white font-playfire">React Reveal</h1>
                     <p className="col-span-2 col-start-2 row-start-2 mr-[100px] justify-end flex items-center">amogus</p>
                </div>
            </div>
            </Slide>
            <div className="h-[70px] bg-white w-[5px]" />
            <Slide left>
                <div className="w-[70%] h-[200px] bg-[#558231] rounded-[45px] ml-[-50px]">
                    <h1>React Reveal</h1>
                </div>
            </Slide>
        </>
     );
}//adhfuahjfa
 
export default Sld;