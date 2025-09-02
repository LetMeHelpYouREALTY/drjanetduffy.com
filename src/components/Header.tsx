'use client';

import { DollarSign, Home, Mail, Menu, Phone, Search, User, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Buy', href: '/buy', icon: Search },
    { name: 'Sell', href: '/sell', icon: DollarSign },
    { name: 'About', href: '/about', icon: User },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-vegas-gold rounded-full flex items-center justify-center">
              <span className="text-vegas-deep-blue font-bold text-lg">JD</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-vegas-deep-blue">Dr. Jan Duffy</h1>
              <p className="text-sm text-vegas-accent-blue">Las Vegas Real Estate Expert 🎰</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 text-vegas-deep-blue hover:text-vegas-gold transition-colors duration-200 font-medium"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Phone Number - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:702-222-1964"
              className="btn-phone"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>702-222-1964</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-nav-toggle md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-vegas-gold/20">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}

              {/* Mobile Phone Number */}
              <div className="pt-4 border-t border-vegas-gold/20">
                <a
                  href="tel:702-222-1964"
                  className="btn-phone w-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span>702-222-1964</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
