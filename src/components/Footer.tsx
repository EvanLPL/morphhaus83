import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/morph-haus-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary px-6 md:px-12 lg:px-24 py-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <img src={logo} alt="Morph Haus" className="h-10 md:h-12" />
        <a
          href="https://www.instagram.com/morphhaus_au/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Morph Haus on Instagram"
          className="flex items-center gap-3 text-primary-foreground/70 transition-colors hover:text-primary-foreground"
        >
          <Instagram size={18} strokeWidth={1.5} />
          <span className="font-body text-xs uppercase tracking-[0.2em]">Follow @morphhaus_au</span>
        </a>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-8">
          <a
            href="#contact"
            className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            Contact
          </a>
          <Button asChild variant="link" className="h-auto p-0 font-body text-xs font-normal uppercase tracking-[0.2em] text-primary-foreground/70 hover:text-primary-foreground">
            <Link to="/faq">FAQs</Link>
          </Button>
          <Button asChild variant="link" className="h-auto p-0 font-body text-xs font-normal uppercase tracking-[0.2em] text-primary-foreground/70 hover:text-primary-foreground">
            <Link to="/morph-sculpt-facial">Morph Sculpt Facial</Link>
          </Button>
          <p className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
            © {new Date().getFullYear()} Morph Haus. All rights reserved.
          </p>
          <p className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/70">
            Privacy Policy | Cancellation Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
