
import { useEffect, useRef } from "react";
import soundtrack from "/assets/themetrack.mp3";

function BackgroundMusic({ enabled = true }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.5;

    audio.play().catch(() => {
      const startAudio = () => {
        audio.play().catch(() => {});
        window.removeEventListener("click", startAudio);
      };
      window.addEventListener("click", startAudio);
    });
  }, [enabled]);

  if (!enabled) return null;

  return <audio ref={audioRef} src={soundtrack} />;
}

export default BackgroundMusic;