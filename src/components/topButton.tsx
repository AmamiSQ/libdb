import React from "react";
import {useEffect, useState} from 'react';

//scrolls back to the top of the page
export default function TopButton() {

  const [backButton, setBackButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackButton(true);
      }
      else{
        setBackButton(false);
      }
      
    })
  }, []); 

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div>
      {backButton && (
        <button className="topButton" onClick={scrollUp}>^</button>
      )}   
    </div>
    );
  }