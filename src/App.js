import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Login from './components/Login';
import Registrarse from "./components/Registrarse";
import Foro from "./components/Foro";
import CrearHilo from "./components/CrearHilo";
import Hilos from "./components/Hilos";
import HiloContent from "./components/HiloContent";

function App() {
  return (
    <Router>
      <Link to="/"> HOME </Link>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/registrarse" element={<Registrarse/>}></Route>
        <Route path="/hilos/:id" element={<Hilos/>}></Route>
        <Route path="/foro" element={<Foro/>}></Route>
        <Route path="/hilocontent" element={<HiloContent/>}></Route>
        <Route path="/crearhilo/:id" element={<CrearHilo/>}></Route>
        <Route path="*" element={<Login/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
