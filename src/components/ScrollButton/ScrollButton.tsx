import React, { useState } from "react";

import '../ScrollButton/ScrollButton.css'



const ScrollButton:React.FC = () => {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    }
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return(

      <i className="bi bi-arrow-up-circle btn_scroll" onClick={scrollToTop}
         style={{display: visible ? 'inline' : 'none'}}/>


             );
 }
 export default ScrollButton