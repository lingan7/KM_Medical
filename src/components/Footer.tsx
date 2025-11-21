import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About Us', path: '/about' },
    { id: 'opportunity', label: 'Opportunity', path: '/opportunity' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ] as const;

  const linkedinUrl = 'https://linkedin.com/in/kapil-mehra-usa/';

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              KM Medical Device Consulting
            </h3>
            <div className="max-w-[300px]">
              <p className="text-gray-200 text-sm leading-relaxed text-justify">
                Expert consulting services to help bring innovative medical technologies to market in an efficient and compliant way.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-white/20">Quick Links</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={`footer-${item.id}`}>
                  <Link
                    to={item.path}
                    className="group text-white hover:text-white transition-colors duration-200 text-base font-medium flex items-center py-1"
                  >
                    <svg className="w-4 h-4 mr-3 text-white/75 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaEnvelope className="flex-shrink-0 h-5 w-5 text-white/80 mt-0.5" />
                <a href="mailto:info@kmmedicalconsulting.com" className="ml-3 text-white/80 hover:text-white text-sm">
                  info@kmmedicaldeviceconsulting.com
                </a>
              </li>
              <li className="flex items-start">
                <FaPhone className="flex-shrink-0 h-5 w-5 text-white/80 mt-0.5" />
                <a href="tel:+1234567890" className="ml-3 text-white/80 hover:text-white text-sm">
                  +1 (616) 821-1996
                </a>
              </li>
              <li className="flex items-start">
                <FaLinkedin className="flex-shrink-0 h-5 w-5 text-white/80 mt-0.5" />
                <a 
                  href={linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="ml-3 text-white/80 hover:text-white text-sm flex items-center"
                >
                  linkedin.com/in/kapil-mehra-usa
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-xs">
              &copy; {new Date().getFullYear()} KM Medical Device Consulting. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://www.bluehost.com/support/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white text-xs">
                Privacy Policy
              </a>
              <a href="https://www.bluehost.com/support/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white text-xs">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

