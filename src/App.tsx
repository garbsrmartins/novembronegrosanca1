// App.tsx
import { Route, Routes } from 'react-router-dom';
import Navbarmenu2 from "./components/menu/Navbarmenu";
import { EventoInterface, EVENTOS_CONSTANTS } from './constants';
import Footer from "./Footer/Footer";
import Home2 from './Home2/Home2';
import Programacao from "./Pages/Programacao";

const eventos: EventoInterface[] = EVENTOS_CONSTANTS;

function App() {
  return (
    <>
      <Navbarmenu2 />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/programacao" element={<Programacao eventos={eventos} />} />
        <Route path="/programacao/:filtro" element={<Programacao eventos={eventos} />} /> {/* Adicionando rota para filtro */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;


