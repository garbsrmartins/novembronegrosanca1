// App.tsx
import { Route, Routes } from 'react-router-dom';
import { EventoInterface } from './constants';
import Footer from "./Footer/Footer";
import Home2 from './Home2/Home2';
import Programacao from "./Pages/Programacao";
import Navbarmenu2 from "./components/menu/Navbarmenu";
import { EVENTOS_CONSTANTS } from './constants';

const eventos: EventoInterface[] = EVENTOS_CONSTANTS;

function App() {
  return (
    <>
      <Navbarmenu2 />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/programacao/:filtro?" element={<Programacao eventos={eventos} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

