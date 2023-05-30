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
      
      <div className="dot"/>
      <div className="line"/>
      
      </>
  );
};

 
export default Hero;