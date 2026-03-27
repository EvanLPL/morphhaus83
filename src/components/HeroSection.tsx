import heroImage from "@/assets/hero-spa.jpg";
import logo from "@/assets/morph-haus-logo.png";

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
        <img src={logo} alt="Morph Haus" className="h-20 md:h-32 lg:h-40 mx-auto mb-6" />
        <div className="w-16 h-px bg-foreground/60 mx-auto mb-6" />
        <p className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-foreground/80">
          Integrated Face Sculpting · Remedial Massage · Pregnancy Massage
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
