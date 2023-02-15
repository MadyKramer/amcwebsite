import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Accueil />} />
      </Routes>
    </>
  );
};

export default App;
