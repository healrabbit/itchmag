import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useIsMobile from "./mobiledesktop.jsx";
import homevideo from '/assets/homepageloop.mp4';
import LinkDelay from './linkdelay.jsx';
// import flyer from '/assets/cltflyer.png';
import logo from '/assets/itchlogo.png';
import BuyButton from './eventbuybutton.jsx';

function HomePage() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
const isMobile = useIsMobile();

useEffect(() => {
  if (isMobile) return; 

  const video = videoRef.current;

  video.play().catch(() => {
    navigate("/");
  });

}, [isMobile, navigate]);

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        loop
        src={homevideo}
      />

      <LinkDelay to="/magazine">
        <div id="link1"></div>
      </LinkDelay>

      <LinkDelay to="/video">
        <div id="link2"></div>
      </LinkDelay>

      <LinkDelay to="/notebook">
        <div id="link3"></div>
      </LinkDelay>

      <LinkDelay to="/clothes">
        <div id="link4"></div>
      </LinkDelay>
<div className="content"> <img id="logo" src={logo}/><div id="flyer" >  </div>   
 <div id="footer"> <p> ITCH Magazine 2026</p>
</div></div>

      <audio id="click" src="assets/click.mp3" type="audio/mpeg" />
    </div>
  );
}

export default HomePage;