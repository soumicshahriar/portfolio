import React, { useState, useEffect } from "react";
import {
  FiHome,
  FiUser,
  FiCode,
  FiFolder,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const sections = [
  { name: "Home", icon: FiHome, id: "home" },
  { name: "Hero", icon: FiUser, id: "hero" },
  { name: "Tech", icon: FiCode, id: "tech" },
  { name: "Projects", icon: FiFolder, id: "projects" },
  { name: "Contact", icon: FiMail, id: "contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const headerRef = React.useRef(null);
  const navRef = React.useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate header on mount
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { top } = element.getBoundingClientRect();
          if (top >= 0 && top < window.innerHeight / 2) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id.toLowerCase());
      setMenuOpen(false);
    }
  };

  return (
    <header
      ref={headerRef}
      id="home"
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#0e0717] to-[#1a0f2e] backdrop-blur-sm border-b border-purple-500/20 shadow-2xl shadow-purple-900/30"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-5 md:px-10">
        {/* Logo */}
        <div
          className="text-white text-2xl md:text-3xl font-bold cursor-pointer hover:text-purple-400 transition-colors duration-300 group"
          onClick={() => scrollToSection("home")}
        >
          <svg
            fill="none"
            height="32"
            viewBox="0 0 24 24"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:rotate-180 transition-transform duration-500"
          >
            <path
              d="M4 8L12 16L20 8"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M4 16H20"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Desktop Nav */}
        <nav ref={navRef} className="hidden md:flex items-center space-x-1">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 group relative ${
                  isActive
                    ? "text-purple-400 bg-purple-500/10 border border-purple-500/30"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Icon className="text-lg" />
                <span className="hidden lg:inline">{section.name}</span>
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-purple-500 to-blue-500 rounded-full"></div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden cursor-pointer text-white hover:text-purple-400 transition-colors duration-300 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-linear-to-b from-[#0e0717] to-[#1a0f2e] border-t border-purple-500/20 w-full px-5 py-4 flex flex-col space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left font-medium transition-all duration-300 ${
                  isActive
                    ? "text-purple-400 bg-purple-500/10 border border-purple-500/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="text-lg" />
                <span>{section.name}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Bottom accent line */}
      <div className="h-0.5 bg-linear-to-r from-purple-500 via-blue-500 to-transparent mt-0"></div>
    </header>
  );
};

export default Header;
