import { Menu, Search, ShoppingBag, User, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Collections', href: '#collections' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-nagrik-bg/90 backdrop-blur-md border-b border-nagrik-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-nagrik-dark hover:text-nagrik-maroon focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-nagrik-dark/80 hover:text-nagrik-maroon transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <a href="#" className="font-serif text-3xl font-semibold tracking-tight text-nagrik-dark">
              Nagrik <span className="text-nagrik-maroon italic">Stores</span>
            </a>
          </div>

          {/* Desktop Navigation (Right) */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.slice(2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-nagrik-dark/80 hover:text-nagrik-maroon transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 ml-4 border-l border-nagrik-dark/10 pl-4">
              <button className="text-nagrik-dark hover:text-nagrik-maroon transition-colors">
                <Search size={20} />
              </button>
              <button className="text-nagrik-dark hover:text-nagrik-maroon transition-colors">
                <ShoppingBag size={20} />
              </button>
              <button className="text-nagrik-dark hover:text-nagrik-maroon transition-colors">
                <User size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center space-x-4 md:hidden">
            <button className="text-nagrik-dark hover:text-nagrik-maroon transition-colors">
              <Search size={20} />
            </button>
            <button className="text-nagrik-dark hover:text-nagrik-maroon transition-colors">
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-nagrik-bg border-b border-nagrik-dark/5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-nagrik-dark hover:text-nagrik-maroon hover:bg-nagrik-light rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
