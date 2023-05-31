<<<<<<< HEAD
import React from "react";
import { useState, useRef, useEffect  } from "react";
import Typed from "typed.js";
=======
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Typed from "typed.js";

>>>>>>> 39788b5e01a4817c1ea46a2f2383841e87dacb23
import  './hero.css';

const Hero = () => {

<<<<<<< HEAD
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["papier", "baterie", "tworzywa sztuczne", "szkło", "odzież używaną"], 
      typeSpeed: 140,
      backSpeed: 160,
=======
  const el = useRef(null);   

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['papier', 'tworzywa sztuczne', 'zakrętki', 'baterie', 'szkło', 'używane ubrania', 'sprzęt elektroniczny'], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      typeSpeed: 140,
      backSpeed: 170,
>>>>>>> 39788b5e01a4817c1ea46a2f2383841e87dacb23
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

<<<<<<< HEAD

=======
>>>>>>> 39788b5e01a4817c1ea46a2f2383841e87dacb23
  return (
    <>
    <div className=" absolute text-center">
      <img
        className="image "
        src="./eco img.jpg"
        alt=""
      /> 
      <h1 className="text1">Sprawdź gdzie</h1>
<<<<<<< HEAD
      <p className="text2">musisz wyrzucisz <span ref={el}></span></p>
      <p className="text3">Na naszej stronie zobaczysz gdzie warto wyrzucać różne odpady w twoim mieście </p>
      </div>
      
    <div className="z-10 bg-[#486619] h-14 w-4 text-center text-3xl font-bold"/>
=======
      <p className="text2">musisz wyrzucić &nbsp; 
      <span className="span-text" ref={el}></span>
      </p>
      <p className="text3">Na naszej stronie zobaczysz gdzie warto wyrzucać różne odpady w twoim mieście </p>
      </div>
      
      <div className="dot"/>
      <div className="line "/>
>>>>>>> 39788b5e01a4817c1ea46a2f2383841e87dacb23
      
      </>
  );
};

 
export default Hero;