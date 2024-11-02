// App.tsx
import { Route, Routes } from 'react-router-dom';
import Navbarmenu2 from "./components/menu/Navbarmenu";
import Footer from "./Footer/Footer";
import Home2 from './Home2/Home2';
import Programacao from "./Pages/Programacao";

function App() {
  return (
    <>
      <Navbarmenu2 />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/programacao" element={<Programacao />} />
        <Route path="/programacao/:filtro" element={<Programacao />} /> {/* Rota com filtro */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
