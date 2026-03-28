import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import clicksound from "/assets/click.mp3";

function DelayedLink({ to, children, delay = 200 }) {
const navigate = useNavigate();
const clickRef = useRef(new Audio(clicksound));

const handleClick = (e) => {
e.preventDefault(); 
clickRef.current.currentTime = 0; 
clickRef.current.play(); 
setTimeout(() => {
navigate(to);
}, delay);
};

return (
<div onClick={handleClick} style={{ cursor: "pointer" }}>
{children}
</div>
);
}

export default DelayedLink;