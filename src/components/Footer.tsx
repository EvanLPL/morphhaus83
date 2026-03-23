const Footer = () => {
  return (
    <footer className="bg-primary px-6 md:px-12 lg:px-24 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-display text-2xl text-primary-foreground tracking-wide">
          Morph Haus
        </p>
        <p className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
          © {new Date().getFullYear()} Morph Haus. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
