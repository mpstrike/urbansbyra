import React from "react";
import { useState, useEffect } from "react";

const CookieBar = () => {


  
  
  


  function active (){
    localStorage.setItem('Cookie', 'active' );

    NoCookie();
  }

  function NoCookie (){

    const data = localStorage.getItem('Cookie');
    let bar = document.querySelector('.cookie-wrap'); 

    if (data){

        bar.classList.add('test'); 

    }

  }


  useEffect(()=>{

    NoCookie();
    
    }, [])

  
 
  





  return (

    <div className="cookie-wrap">

    

      
      
      <div className="cookie-bar">

        <p>Genom att fortsätta använda webbplatsen utan att ändra dina webbläsarinställningar godkänner du att vi använder cookies. </p>
        <button className="cookie" onClick={active}>
          Jag förstår
        </button>
        </div>
    

    
  


  </div>
  


    
  );
  };

export default CookieBar;