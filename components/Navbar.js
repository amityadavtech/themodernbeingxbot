'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Home,
  User,
  Tags,
  Mail,
  HelpCircle,
  Send,
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);

      const header = document.querySelector('header');
      const desktopLinks = document.querySelectorAll('.desktop-nav-link');
      const Navlogo = document.getElementById('navbar-logo')

      if (scrollY > 10) {
        header?.classList.add('backdrop-blur-md', 'bg-white', 'shadow-md');
        Navlogo?.classList.add('text-[#633BFF]')
        Navlogo?.classList.remove('text-white')

        desktopLinks.forEach(link => {
          const isActive = link.getAttribute('aria-current') === 'page';
          link.classList.remove('text-white');
          if (!isActive) {
            link.classList.add('text-gray-800', 'hover:text-[#663BFF]');
          }
        });
      } else {
        header?.classList.remove('backdrop-blur-md', 'bg-white', 'shadow-md');
        Navlogo?.classList.add('text-white')
        Navlogo?.classList.remove('text-gray-800')
        desktopLinks.forEach(link => {
          const isActive = link.getAttribute('aria-current') === 'page';
          if (!isActive) {
            link.classList.remove('text-gray-800', 'hover:text-[#663BFF]');
            link.classList.add('text-white');
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'About', icon: User, href: '/about' },
    { name: 'Plans & Services', icon: Tags, href: '/plans&services' },
    { name: 'Contact', icon: Mail, href: '/contact' },
    { name: 'FAQs', icon: HelpCircle, href: '/faqs' },
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300 space-x-0">
      <div className=" container mx-auto px-6 md:py-4 py-5 flex justify-between items-center ">
        {/* Logo */}
        <Link href="/" aria-label="BeingxBot Homepage">
          <h2 id="navbar-logo" className="text-2xl font-extrabold ">
            Beiing<span className="text-[#633BFF]">x</span>Bot
          </h2>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          ref={menuButtonRef}
          className="md:hidden text-gray-700 focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <X
              size={28}
              strokeWidth={2.2}
              className={`${isScrolled ? 'stroke-black' : 'stroke-white'} transition-colors duration-300`}
            />
          ) : (
            <Menu
              size={28}
              strokeWidth={2.2}
              className={`${isScrolled ? 'stroke-black' : 'stroke-white'} transition-colors duration-300`}
            />
          )}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map(({ name, icon: Icon, href }, idx) => (
            <Link
              key={idx}
              href={href}
              aria-current={pathname === href ? 'page' : undefined}
              className={`desktop-nav-link font-semibold px-4 py-2 flex items-center gap-2 transition-all duration-200 text-base ${pathname === href
                  ? 'text-[#663BFF] hover:text-indigo-600'
                  : 'text-white hover:text-[#633BFF]'
                }`}
            >
              <Icon size={20} strokeWidth={2.2} />
              {name}
            </Link>
          ))}
          <Link
            href="/request-quote"
            className="bg-[#663BFF] text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-all duration-200 flex items-center gap-2 text-lg"
          >
            <Send size={20} strokeWidth={2.2} className="stroke-white" />
            Request a Quote
          </Link>
        </nav>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-[#1A1A2E] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out z-40 flex flex-col items-center`}
      >
        <nav className="flex flex-col w-full max-w-xs mt-10 space-y-6 px-6 text-white">
          {navItems.map(({ name, icon: Icon, href }, idx) => (
            <Link
              key={idx}
              href={href}
              aria-current={pathname === href ? 'page' : undefined}
              className={`w-full text-left text-lg font-semibold flex items-center gap-4 py-2 px-4 rounded-lg transition-all duration-300 ${pathname === href
                  ? 'text-[#663BFF]'
                  : 'hover:bg-[#2A2A40] hover:text-[#663BFF]'
                }`}
              onClick={toggleMenu}
            >
              <Icon size={22} strokeWidth={2.2} />
              {name}
            </Link>
          ))}
          <Link
            href="/request-quote"
            className="w-full bg-[#663BFF] text-white py-3 px-2 rounded-lg hover:bg-[#5a2fff] transition-all duration-300 flex justify-center items-center gap-3 text-lg text-center"
            onClick={toggleMenu}
          >
            <Send size={22} strokeWidth={2.2} className="stroke-white" />
            Request a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
``