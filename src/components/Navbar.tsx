import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/morph-haus-logo.png";

const navItems = ["Home", "Services", "About", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4">
        <button onClick={() => scrollTo("home")}>
          <img src={logo} alt="Morph Haus" className="h-8 md:h-10" />
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="font-body text-xs uppercase tracking-[0.2em] text-foreground hover:text-accent transition-colors"
            >
              {item}
            </button>
          ))}
          <Button variant="sage" size="lg" onClick={() => scrollTo("contact")}>
            Book Appointment
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="font-body text-sm uppercase tracking-[0.2em] text-foreground text-left py-2"
            >
              {item}
            </button>
          ))}
          <Button variant="sage" onClick={() => scrollTo("contact")}>
            Book Appointment
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
