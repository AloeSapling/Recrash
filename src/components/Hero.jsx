import React from "react";
import { useState, useRef, useEffect  } from "react";
import Typed from "typed.js";
import  './hero.css';

const Hero = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["papier", "baterie", "tworzywa sztuczne", "szkło", "odzież używaną"], 
      typeSpeed: 140,
      backSpeed: 160,
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
      <p className="text2">musisz wyrzucisz <span ref={el}></span></p>
      <p className="text3">Na naszej stronie zobaczysz gdzie warto wyrzucać różne odpady w twoim mieście </p>
      </div>
      
    <div className="z-10 bg-[#486619] h-14 w-4 text-center text-3xl font-bold"/>
      
      </>
  );
};

 
export default Hero;