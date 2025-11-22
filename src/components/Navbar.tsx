import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

type Section = 'home' | 'about' | 'opportunity' | 'services' | 'contact';

interface NavbarProps {
  activeSection: Section;
}

export const Navbar = ({ activeSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside or scrolling
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll, true);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);
  
  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About Us', path: '/about' },
    { id: 'opportunity', label: 'Opportunity', path: '/opportunity' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ] as const;

  return (
    <nav ref={menuRef} className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:pr-6 lg:pr-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center space-x-3">
            <Link to="/" className="flex items-center">
              <img 
                src={`${import.meta.env.BASE_URL}images/km-logo-white.png`}
                alt="KM Medical Consulting Logo"
                className="h-10 w-auto"
              />
              <span className="ml-3 text-2xl font-bold text-primary hover:text-primary-dark transition-colors hidden sm:inline">
                KM Medical Device Consulting
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeSection === item.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-600 hover:border-primary hover:text-primary transition-colors'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-b border-gray-100`}>
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={`mobile-${item.id}`}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`w-full text-left block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                activeSection === item.id
                  ? 'border-primary text-primary bg-primary-50'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
