import React from "react";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


import "./hero.css"


const Sld = () => {
    return ( 
        <>   
        
        <Fade top>
            <div className="w-[100%] ">
                <h1 className="flex justify-center mb-[50px] text-[70px] font-bold text-[#3C7339] font-playfire ">Dowiedź się więcej o odpadach</h1>
            </div>
        </Fade>
        <br />
            <Slide left>
                <div className="text-white w-[70%] h-[200px] bg-[#91C53F] rounded-[45px] ml-[-50px] grid grid-cols-3 grid-rows-2 gap-1 ">
                    <h1 className="ml-[100px] mt-[25px] font-playfire text-3xl col-span-2">O bateriach</h1>
                    <p className="ml-[100px] mt-[-20px] max-w-[750px] col-span-2 col-start-1 row-start-2 ">Kosze do wyrzucania baterii można znaleźć w wielu miejscach. Po pierwsze to każdy sklep powżej 25m2 sprzedający baterie lub akumulatory ma obowiązek przyjęcia zużytych baterii. Gminy również powinny mieć swój PSZOK ( Punkt Selektywnej Zbiórki Odpadów Komunalnych ), które przyjmuje zużyte baterie. Można sobie ten punkt znaleźć wyszukując w internecie.</p>
                    <img className="row-span-2 col-start-3 row-start-1 w-[225px] h-[225px] mt-[-10px] ml-[35px]" src="./Battery.png" alt="battery" />
                </div>
            </Slide>
          
            <div className="h-[70px] bg-white w-[5px]" />
            <Slide right className=" ">
            <div className="flex justify-end">
                <div className="w-[70%] h-[200px] bg-[#7CAA29] rounded-[45px] mr-[-50px] grid grid-cols-3 grid-rows-2 gap-2">
                    <img className="row-span-2 w-[225px] h-[200px] ml-[65px] mb-[120px]" src="./clothes.png" alt="" />
                     <h1 className="col-span-2 flex justify-end mr-[110px] mt-[25px] text-3xl text-white font-playfire">O ubraniach</h1>
                     <p className="col-span-2 col-start-2 row-start-2 mr-[100px] mt-[-40px] text-white text-right justify-end flex items-center max-w-[600px]">Ubrania nie powinno się wyrzucać. Jeżeli chcemy się pozbyć starych ubrań to najlepiej albo je oddać albo je sprzedać. Kontenery do oddawania można znaleźć w wielu miastach pod postacią PCK, Eco Textil, itd. Alternatywą tego są portale jak np. “ubrania do oddania”, które wysyłają darmowego kuriera, który odbierze ubrania. Jeżeli mamy ubrania, które już nie są do użytku, można często znaleźć kosze na tkaniny w PSZOKu. Choć powinno się wyrzucić do tych koszy, nie będzie to zbyt duży problem jak wyrzucimy do zwykłych śmieci.</p>
                </div>
            </div>
            </Slide>
            <div className="h-[70px] bg-white w-[5px]" />
            <Slide left>
                <div className=" bg-[#558231] text-white w-[70%] h-[200px] rounded-[45px] ml-[-50px] grid grid-cols-3 grid-rows-2 gap-1 mb-[200px]">
                <h1 className="ml-[100px] mt-[25px] font-playfire text-3xl col-span-2">O plastiku</h1>
                    <p className="ml-[100px] mt-[-20px] max-w-[750px] col-span-2 col-start-1 row-start-2 ">W wielu gminach zbiórka śmieci umożliwia segregację. Do żółtych worków można włożyć tworzywa sztuczne (czyli plastik) i oddać do zbiórki śmieci. Gmina powinna zająć się resztą sprawy. Plastik można również wyrzucić w PSZOKu. Wiele budynków również mają segregowane kosze, np. sklepy.</p>
                    <img className="row-span-2 col-start-3 row-start-1 w-[225px] h-[225px] mt-[-10px] ml-[35px]" src="./AK.png" alt="Zakr" />
                </div>
            </Slide>
        </>
     );
}//adhfuahjfa
 
export default Sld;