import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Typed from "typed.js";

import  './hero.css';

const Hero = () => {

  const el = useRef(null);   

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['papier', 'tworzywa sztuczne', 'zakrętki', 'baterie', 'szkło', 'używane ubrania', 'sprzęt elektroniczny'], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      typeSpeed: 140,
      backSpeed: 170,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    <div className=" absolute text-center">
      <img
        className="image "
        src="./eco img.jpg"
        alt=""
      /> 
      <h1 className="text1">Sprawdź gdzie</h1>
      <p className="text2">musisz wyrzucić &nbsp; 
      <span className="span-text" ref={el}></span>
      </p>
      <p className="text3">Na naszej stronie zobaczysz gdzie warto wyrzucać różne odpady w twoim mieście </p>
      </div>
      
      <div className="dot"/>
      <div className="line "/>
      
      </>
  );
};

 
export default Hero;