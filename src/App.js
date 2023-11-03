


import {Routes, Route} from "react-router-dom";

import Home2 from './Home2/Home2';
import Piramide from "./Pages/Quartos/Piramide";
import Beija from "./Pages/Quartos/BeijaFlor";
import Contato from "./Pages/Contato";
import Footer from "./Footer/Footer";

import Quartos from "./Pages/Quartos/Quartos";
import Navbarmenu2 from "./components/menu/Navbarmenu";
import Sabia from "./Pages/Quartos/Sabia";
import Tucano from "./Pages/Quartos/Tucano"






function App() {
  return (
       <> 
        
        <Navbarmenu2/>
       
            <Routes>
            <Route path="/" element={<Home2/>}/>
            <Route path="/quartos" element ={ <Quartos/>}/>
            <Route path="/piramide" element ={ <Piramide/>}/>
            <Route path="/beija-flor" element ={ <Beija/>}/>
            <Route path="/contato" element ={ <Contato/>}/>
            <Route path="/sabia" element ={ <Sabia/>}/>
            <Route path="/tucano" element ={ <Tucano/>}/>
           
             
          </Routes>
          <Footer/>
          </>
  )
}

export default App;
