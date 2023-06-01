import React from "react";
import Slide from 'react-reveal/Slide';


const Sld = () => {
    return ( 
        <>       
            <Slide left>
                <div className="w-[60%] h-[150px] bg-[#91C53F] rounded-[45px] ml-[-50px]">
                    <h1>React Reveal</h1>
                </div>
            </Slide>
            <div className="h-[70px] bg-white w-[5px]" />
            <Slide right>
                <div className=" flex justify-end w-[60%] h-[150px] bg-[#7CAA29] rounded-[45px] ml-[-50px]">
                    <h1>React Reveal</h1>
                </div>
            </Slide>
        </>
     );
}
 
export default Sld;