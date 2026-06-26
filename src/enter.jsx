import LinkDelay from './linkdelay.jsx';
import logo from '/assets/itchlogo.png';
function EnterPage() {

    return(
        <div >
   <LinkDelay to="/home">  <div id="enterdiv"><button id="enterbtn"><img src={logo}/></button></div> 
     </LinkDelay>
  </div>
  );
};

export default EnterPage;