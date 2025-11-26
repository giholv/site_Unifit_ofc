// src/components/Header.tsx
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "./ui/Link";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menuItems = [
    { label: "Início", href: "#home" },
    { label: "Marmitas", href: "#meals" },
    { label: "Planos", href: "#plans" },
    { label: "Sobre nós", href: "#bout" },
    { label: "Nosso Time", href: "#founders" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md py-2 backdrop-blur-md" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/unifit-logo.png" alt="Logo Unifit" className="h-16 w-auto mr-2" />
          <span className={`font-bold text-xl tracking-tight ${scrolled ? "text-slate-800" : "text-white"}`}>
          
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`font-medium transition-colors ${
                scrolled ? "text-slate-800 hover:text-blue-700" : "text-white hover:text-blue-200"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#contact"
            className={`font-semibold py-2 px-4 rounded-md transition-all transform hover:scale-105 ${
              scrolled ? "bg-[#417078] hover:bg-[#2e4f54] text-white" : "bg-[#417078] text-white hover:bg-[#2e4f54]"
            }`}
          >
            Contato
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? (
            <X className={`h-6 w-6 ${scrolled ? "text-blue-900" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? "text-blue-900" : "text-white"}`} />
          )}
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-blue-900/95 z-[9998] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {[...menuItems, { label: "Contato", href: "#contact" }].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white text-2xl font-medium hover:text-blue-200"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;


