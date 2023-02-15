import { Routes, Route, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil"
import Apropos from "./pages/Apropos"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil/>}></Route>
      <Route path="/apropos" element={<Apropos/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
  );
};

export default App;
