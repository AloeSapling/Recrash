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
                <div className="text-white w-[70%] h-[200px] bg-[#91C53F] rounded-[45px] ml-[-50px]">
                    <h1 className="ml-[100px] font-playfire text-3xl">React Reveal</h1>
                    <p className="ml-[100px] max-w-[700px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus deserunt magnam, amet quis ut aliquid, nostrum illum esse aliquam optio ducimus eius. Culpa temporibus dolore molestias voluptatum eaque consequatur!
                    Deleniti voluptas </p>
                   
                </div>
            </Slide>
            <div className="h-[70px] bg-white w-[5px]" />
            <Slide right className=" ">
            <div className="flex justify-end">
                <div className="w-[70%] h-[200px] bg-[#7CAA29] rounded-[45px] mr-[-50px]">
                     <h1>React Reveal</h1>
                </div>
            </div>
            </Slide>
            <div className="h-[70px] bg-white w-[5px]" />
            <Slide left>
                <div className="w-[70%] h-[200px] bg-[#3C7339] rounded-[45px] ml-[-50px]">
                    <h1>React Reveal</h1>
                </div>
            </Slide>
        </>
     );
}//adhfuahjfa
 
export default Sld;