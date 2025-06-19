import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#121212] flex flex-col items-center justify-center">
        <div className="relative size-12 mb-4">
          <div className="absolute h-12 w-12 rounded-full animate-spin bg-gradient-to-b from-white/80 to-transparent"></div>
          <div className="absolute flex items-center justify-center bg-[#121212] rounded-full h-[46px] w-[46px]">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="text-white font-medium mb-2">PRISM CEILINGS</div>
        <div className="text-gray-400 text-sm">Crafting Elegant Spaces</div>
      </div>
    );
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/calculator" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
