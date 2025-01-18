import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white shadow-lg bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo et titre */}
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center px-2 py-4">
                <span className="text-lg font-bold transition duration-300 hover:text-blue-300">MR. Bassiriki Mangane</span>
              </Link>
            </div>
            {/* Menu principal */}
            <div className="items-center hidden space-x-4 md:flex">
              <Link to="/" className="px-3 py-2 text-sm font-semibold transition duration-300 hover:text-blue-300">Accueil</Link>
              <Link to="/projects" className="px-3 py-2 text-sm font-semibold transition duration-300 hover:text-blue-300">Projets</Link>
              <Link to="/about" className="px-3 py-2 text-sm font-semibold transition duration-300 hover:text-blue-300">À propos</Link>
              <Link to="/contac" className="px-3 py-2 text-sm font-semibold transition duration-300 hover:text-blue-300">Contact</Link>
            </div>
          </div>

          {/* Liens sociaux et bouton Contact */}
          <div className="items-center hidden space-x-4 md:flex">
            <a href="https://github.com/Bassiriki/projets-Github-Actions" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-blue-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/bassiriki-mangane-362880184/" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-blue-300">
              <Linkedin size={24} />
            </a>
            <Link to="/contac" className="px-4 py-2 text-sm font-semibold transition duration-300 bg-blue-500 rounded-md shadow-md hover:bg-blue-400">Contact</Link>
          </div>

          {/* Bouton Mobile Menu */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-indigo-800`}> 
        <Link to="/" className="block px-4 py-2 text-sm transition duration-300 hover:bg-indigo-700">Accueil</Link>
        <Link to="/projects" className="block px-4 py-2 text-sm transition duration-300 hover:bg-indigo-700">Projets</Link>
        <Link to="/about" className="block px-4 py-2 text-sm transition duration-300 hover:bg-indigo-700">À propos</Link>
        <Link to="/contac" className="block px-4 py-2 text-sm transition duration-300 hover:bg-indigo-700">Contact</Link>
        <div className="flex justify-center py-4 space-x-4">
          <a href="https://github.com/Bassiriki/projets-Github-Actions" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-blue-300">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/bassiriki-mangane-362880184/" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-blue-300">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
