import "./App.css";
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import useIsMobile from './mobiledesktop.jsx';
import HomePage from './home.jsx';
import MagazinePage from './magazine.jsx';
import VideoPage from './video.jsx';
import AboutPage from './notebook.jsx';
import ClothesPage from './clothes.jsx';
import MHomePage from './mobilehome.jsx';
import MMagazinePage from './mobilemagazine.jsx';
import MVideoPage from './mobilevideo.jsx';
import MAboutPage from './mobilenotebook.jsx';
import MClothesPage from './mobileclothes.jsx';
import BackgroundMusic from './music.jsx';
import EnterPage from './enter.jsx';


function Enter() {
  return(
<EnterPage/>
  );
}
function Home() {


  return <HomePage />;
}


function Magazine() {


  return  <MagazinePage />
}

function Vid() {


  return <VideoPage />;
}

function About() {


  return <AboutPage />;
}

function Clothes() {


  return  <ClothesPage />;

}
function MobileHome() {


  return <MHomePage />;
}


function MobileMagazine() {


  return  <MMagazinePage />
}

function MobileVid() {


  return <MVideoPage />;
}

function MobileAbout() {


  return <MAboutPage />;
}

function MobileClothes() {


  return  <MClothesPage />;

}
function DesktopRoutes(){
    return (
 <Routes>
  
        <Route path="/home" element={<Home/>} />
        <Route path="/magazine" element={<Magazine/>} />
        <Route path="/" element={<Enter/>} />
        <Route path="/notebook" element={<About/>} />
        <Route path="/video" element ={<Vid/>} /> 
        <Route path="/clothes" element ={<Clothes/>} /> 
      </Routes>
    );
}

function MobileRoutes(){
    return (
   <Routes>
       <Route path="/home" element={<MobileHome/>} />
        <Route path="/magazine" element={<MobileMagazine/>} />
        <Route path="/" element={<Enter/>} />
        <Route path="/notebook" element={<MobileAbout/>} />
        <Route path="/video" element ={<MobileVid/>} /> 
        <Route path="/clothes" element ={<MobileClothes/>} /> 
      </Routes>
    );
}

function Routesroutes(){
   const isMobile = useIsMobile();
    return isMobile ? <MobileRoutes /> : <DesktopRoutes/>;
}

function App() {
   const isMobile = useIsMobile();
  return(
     <HashRouter>
     <div id="bg"></div>
  <BackgroundMusic enabled={!isMobile}/>
  
<Routesroutes/>

 </HashRouter>
  );
}
 

export default App;