import React from "react";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


import "./hero.css"
import '../css/sld.css'

const Sld = () => {
    return ( 
        <div className="gra">
            <Fade top>
                <div className="w-[100%] ">
                    <h1 className="flex justify-center mb-[50px] text-[70px] font-bold text-[#3C7339] mt-[0px]">Dowiedź się więcej o wyrzucaniu odpadów</h1>
                </div>
            </Fade>
            <br />
            <Slide left>
                <div className="text-white w-[100%] h-[20%] bg-[#91C53F] rounded-[45px] ml-[-50px] grid grid-cols-3 grid-rows-2 gap-1 lg:w-[70%] lg:h-[40%] mb-[50px] justify-center items-center">
                    <h1 className="ml-[100px] text-[170%] col-span-2">O bateriach</h1>
                    <p className="ml-[100px] mt-[-5%] max-w-[750px] col-span-2 col-start-1 row-start-2 text-[130%] mb-[2%]">Recrash to serwis internetowy który ma na celu ułatwienie znalezienie koszów do wyrzucania “specjalnych” śmieci. Te śmieci nie powinno wyrzucać do zwykłych koszy ale do specjalnych koszy, których lokalizacje można znaleźć np. na naszej mapie. To są śmieci typu: baterie, śmieci elektroniczne, itd. Nazwa “Recrash” to połączenie dwóch słów: recycle i trash (rec(ycle)(tr)ash).</p>
                    <img className="row-span-2 col-start-3 row-start-1 w-[225px] h-[225px] mt-[-10px] ml-[35px]" src="./Battery.png" alt="battery" />
                </div>
            </Slide>
            <Slide right className=" ">
            <div className="flex justify-end mb-[50px]">
                <div className="w-[100%] h-[20%] bg-[#7CAA29] rounded-[45px] mr-[-50px] grid grid-cols-3 grid-rows-2 gap-2 lg:w-[70%] lg:h-[40%]  justify-center items-center" >
                    <img className="row-span-2 w-[225px] h-[200px] ml-[65px] mb-[120px]" src="./clothes.png" alt="" />
                     <h1 className="col-span-2 flex justify-end mr-[210px] text-[200%] text-white">O ubraniu</h1>
                     <p className="col-span-2 col-start-2 row-start-2 mr-[100px] text-white text-right justify-end flex items-center max-w-[600px] text-[130%] mt-[-8.5%] mb-[2%]">Ubrania nie powinno się wyrzucać. Jeżeli chcemy się pozbyć starych ubrań to najlepiej albo je oddać albo je sprzedać. Kontenery do oddawania można znaleźć w wielu miastach pod postacią PCK, Eco Textil, itd. Alternatywą tego są portale jak np. “ubrania do oddania”, które wysyłają darmowego kuriera, który odbierze ubrania. Jeżeli mamy ubrania, które już nie są do użytku, można często znaleźć kosze na tkaniny w PSZOKu. Choć powinno się wyrzucić do tych koszy, nie będzie to zbyt duży problem jak wyrzucimy do zwykłych śmieci.</p>
                </div>
            </div>
            </Slide>
            <Slide left>
                <div className=" bg-[#558231] text-white w-[100%] h-[20%] rounded-[45px] ml-[-50px] grid grid-cols-3 grid-rows-2 gap-1 lg:w-[70%] lg:h-[40%] justify-center items-center">
                <h1 className="ml-[100px] text-[170%] col-span-2">O plastiku</h1>
                    <p className=" mt-[-5%] ml-[100px] max-w-[750px] col-span-2 col-start-1 row-start-2 text-[130%] mb-[2%]">W wielu gminach zbiórka śmieci umożliwia segregację. Do żółtych worków można włożyć tworzywa sztuczne (czyli plastik) i oddać do zbiórki śmieci. Gmina powinna zająć się resztą sprawy. Plastik można również wyrzucić w PSZOKu. Wiele budynków również mają segregowane kosze, np. sklepy.</p>
                    <img className="row-span-2 col-start-3 row-start-1 w-[225px] h-[225px] mt-[-10px] ml-[35px]" src="./AK.png" alt="Zakr" />
                </div>
            </Slide>
        </div>
     );
}//adhfuahjfa
 
export default Sld;