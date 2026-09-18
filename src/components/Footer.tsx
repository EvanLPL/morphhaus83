import logo from "@/assets/morph-haus-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary px-6 md:px-12 lg:px-24 py-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <img src={logo} alt="Morph Haus" className="h-10 md:h-12" />
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <a
            href="#contact"
            className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            Instagram
          </a>
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
