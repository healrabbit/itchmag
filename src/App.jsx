const base = import.meta.env.BASE_URL.replace(/\/$/, "");
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './home.jsx';
import MagazinePage from './magazine.jsx';
import VideoPage from './video.jsx';
import AboutPage from './notebook.jsx';
import ClothesPage from './clothes.jsx';
import BackgroundMusic from './music.jsx';
import EnterPage from './enter.jsx';
function Enter() {
return(
<EnterPage/>
);
}
function Home() {
return(
<HomePage/>
);
}


function Magazine() {
return(
 <MagazinePage/>
);
}

function Vid() {
 return(
<VideoPage/>
);
}

function About() {
return(
<AboutPage/>
);
}

function Clothes() {
return(
<ClothesPage/>
);
}
function App() {
return(
 <BrowserRouter>
 <div id="bg"></div>
<BackgroundMusic />
 <Routes>

<Route path="/home" element={<Home/>} />
<Route path="/magazine" element={<Magazine/>} />
<Route path="/" element={<Enter/>} />
<Route path="/notebook" element={<About/>} />
<Route path="/video" element ={<Vid/>} /> 
<Route path="/clothes" element ={<Clothes/>} /> 
</Routes>

 </BrowserRouter>
);
}

export default App;