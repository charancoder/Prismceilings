import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${scrolled ? 'glass-nav' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-light">
            PRISM <span className="font-semibold">CEILINGS</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
            <Link to="/#services" className="text-gray-300 hover:text-white transition" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}>Services</Link>
            <Link to="/#calculator" className="text-gray-300 hover:text-white transition" onClick={(e) => { e.preventDefault(); document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' }); }}>Calculator</Link>
            <Link to="/#projects" className="text-gray-300 hover:text-white transition" onClick={(e) => { e.preventDefault(); document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' }); }}>Projects</Link>
            <Link to="/#contact" className="text-gray-300 hover:text-white transition" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact</Link>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#121212] border-t border-gray-800 py-4 px-6">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-300 hover:text-white transition py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/#services" className="text-gray-300 hover:text-white transition py-2" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}>Services</Link>
            <Link to="/#calculator" className="text-gray-300 hover:text-white transition py-2" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' }); }}>Calculator</Link>
            <Link to="/#projects" className="text-gray-300 hover:text-white transition py-2" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' }); }}>Projects</Link>
            <Link to="/#contact" className="text-gray-300 hover:text-white transition py-2" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
