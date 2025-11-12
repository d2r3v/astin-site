import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/Company_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img 
                src={logo} 
                alt="Astin Analytics Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-slate-900 hidden sm:block">
                Astin Analytics
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("solutions")}
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection("strengths")}
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
            >
              Key Strengths
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")}>
              Get in Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-2 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("solutions")}
              className="block w-full text-left px-3 py-2 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors font-medium"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection("strengths")}
              className="block w-full text-left px-3 py-2 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors font-medium"
            >
              Key Strengths
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors font-medium"
            >
              Contact
            </button>
            <div className="pt-2">
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
