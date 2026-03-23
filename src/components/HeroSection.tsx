import heroImage from "@/assets/hero-spa.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Morph Haus luxury treatment studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40" />
      </div>
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-primary-foreground font-light tracking-wide mb-6">
          Morph Haus
        </h1>
        <div className="w-16 h-px bg-primary-foreground/60 mx-auto mb-6" />
        <p className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-primary-foreground/80">
          Integrated Face Sculpting · Remedial Massage · Pregnancy Massage
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
