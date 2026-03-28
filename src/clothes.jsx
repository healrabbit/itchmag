import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import video11 from "/assets/clothesenter.mp4";
import video22 from "/assets/clothesloop.mp4";
import video33 from "/assets/clothesexit.mp4";
import click from "/assets/click.mp3";
import logo from '/assets/itchlogo.png'

function ClothesPage() {
const navigate = useNavigate();

const video1Ref = useRef(null);
const video2Ref = useRef(null);
const video3Ref = useRef(null);
const clickRef = useRef(null);
const hasRun = useRef(false);

const [activeVideo, setActiveVideo] = useState("video1");

// --------------------------
// VIDEO 1: intro
// --------------------------
useEffect(() => {
if (hasRun.current) return;
hasRun.current = true;

const video1 = video1Ref.current;
const video2 = video2Ref.current;

video1.src = video11;
video2.src = video22;
video2.preload = "auto";

video1.currentTime = 0;
video1.play().catch(() => {

navigate("/", { replace: true });
});


const handleVideo1Ended = () => {
setActiveVideo("video2");
video2.loop = true;
video2.currentTime = 0;
video2.play().catch(() => {

navigate("/", { replace: true });
});
};
video1.addEventListener("canplaythrough", () => {
video1.addEventListener("ended", handleVideo1Ended);
});
return () => {
video1.removeEventListener("ended", handleVideo1Ended);
};
}, [navigate]);

// --------------------------
// VIDEO 3: exit
// --------------------------
useEffect(() => {
if (activeVideo === "video3") {
const video3 = video3Ref.current;
video3.src = video33;
video3.currentTime = 0;

video3
.play()
.catch(() => {

navigate("/", { replace: true });
});

video3.onended = () => {
navigate("/home");
};
}
}, [activeVideo, navigate]);

// --------------------------
// BUTTON: switch to video3
// --------------------------
const changeVideo = () => {
const video1 = video1Ref.current;
const video2 = video2Ref.current;
const clickAudio = clickRef.current;

clickAudio.play(); 

video1.pause();
video1.currentTime = 0;
video2.pause();

setActiveVideo("video3");
};

return (
<div>
<div className="gallery">
<video
ref={video1Ref}
preload="auto"
playsInline
className={activeVideo === "video1" ? "active" : ""}
/>
<video
ref={video2Ref}
preload="auto"
playsInline
className={activeVideo === "video2" ? "active" : ""}
/>
<video
ref={video3Ref}
preload="auto"
playsInline
className={activeVideo === "video3" ? "active" : ""}
/>
</div>

<div className="content">
<img id="logo" src={logo}/>
{activeVideo === "video2" && (
<button id="backbtn" onClick={changeVideo}>
BACK
</button>
)}
</div>

<audio ref={clickRef} src={click} />
</div>
);
}

export default ClothesPage;