import React, { useState, useEffect, useRef } from 'react';
import './mobilescroll.css';
import flyer from '/assets/cltflyer.png';
import logo from '/assets/itchlogo.png';
import EBuyButton from './eventbuybutton.jsx';
import MBuyButton from './magbuybutton.jsx';
import SBuyButton from './shirtbuybutton.jsx';
import shirt from '/assets/vol3shirt.png';
import magazine from '/assets/magazinezine.png';
import Video from './youtubevideo.jsx';

function HomePage() {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {

      setIsScrolling(true);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 80);
    };

  
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <div 
      id="mflex"     
      style={{
       
        backgroundColor: isScrolling ? 'rgb(30, 30, 30)' : 'rgb(0, 0, 0)',
       
        transition: isScrolling 
          ? 'background-color 0.4s ease-out' 
          : 'background-color 0.4s ease-in-out',
        color: '#fff',
      }}
    >   
      <div>
        <img id="mlogo" src={logo} alt="Logo" /> 
      </div>
      
      <div id="mflyer"> 
        <img id="mflyerimg" src={flyer} alt="Flyer" /> 
        <div id="mflyerbtn"><EBuyButton/></div> 
      </div> 

      <div id="mflyer"> 
        <img id="mflyerimg" src={magazine} alt="Magazine" /> 
        <div id="mflyerbtn"><MBuyButton/></div> 
      </div> 
      
      <div id="mflyer"> 
        <img id="mflyerimg" src={shirt} alt="Shirt" /> 
        <div id="mflyerbtn"><SBuyButton/></div> 
      </div> 

      <div id="vidcontainer">   
        <Video/> 
      </div>
      
      <div id="mfooter"> 
        <p> ITCH Magazine 2026</p>
      </div>
    </div>
  );
}

export default HomePage;
