


import {Routes, Route} from "react-router-dom";

import Home2 from './Home2/Home2';

import Footer from "./Footer/Footer";

import Programacao from "./Pages/Programacao";
import Navbarmenu2 from "./components/menu/Navbarmenu";







function App() {
  return (
       <> 
        
        <Navbarmenu2/>
       
            <Routes>
            <Route path="/" element={<Home2/>}/>
            <Route path="/programacao" element ={ <Programacao/>}/>
           
           
             
          </Routes>
          <Footer/>
          </>
  )
}

export default App;
