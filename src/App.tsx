import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Opportunity } from './pages/Opportunity';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { useEffect } from 'react';
import './styles/globals.css';

type Section = 'home' | 'about' | 'opportunity' | 'services' | 'contact';

const AppContent = () => {
  const location = useLocation();
  
  // Get active section from URL path
  const getActiveSection = (): Section => {
    const path = location.pathname.split('/')[1] || 'home';
    return (['home', 'about', 'opportunity', 'services', 'contact'].includes(path) ? path : 'home') as Section;
  };

  const activeSection = getActiveSection();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeSection={activeSection} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/opportunity" element={<Opportunity />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  const basename = (import.meta as any).env.BASE_URL?.replace(/\/$/, '') || '';
  return (
    <Router basename={basename}>
      <AppContent />
    </Router>
  );
};

export default App;
