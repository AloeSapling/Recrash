import React from "react";
import { useState } from "react";
import  './hero.css';

const Hero = () => {
  return (
    <>
    <div className=" absolute text-center">
      <img
        className="image "
        src="./eco img.jpg"
        alt=""
      /> 
      <h1 className="text1">Sprawdź gdzie</h1>
      <p className="text2">musisz wyrzucisz papier</p>
      <p className="text3">Na naszej stronie zobaczysz gdzie warto wyrzucać różne odpady w twoim mieście </p>
      </div>
      
    <div className="z-10 bg-[#486619] h-14 w-4 text-center text-3xl font-bold"/>
      
      </>
  );
};

 
export default Hero;