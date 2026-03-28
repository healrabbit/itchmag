
import { useEffect, useRef } from "react";
import soundtrack from "${base}/assets/themetrack.mp3";

function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 0.5; 
    audio.play().catch(() => {
   
      const startAudio = () => {
        audio.play().catch(() => {});
        window.removeEventListener("click", startAudio);
      };
      window.addEventListener("click", startAudio);
    });
  }, []);

  return <audio ref={audioRef} src={soundtrack} />;
}

export default BackgroundMusic;