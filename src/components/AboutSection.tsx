import aboutImage from "@/assets/about-treatment.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="order-2 md:order-1">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            About Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-light mb-8 leading-tight">
            A Sanctuary for<br />Skin Rejuvenation
          </h2>
          <div className="space-y-6 font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            <p>
              Welcome to Morph Haus — a sanctuary dedicated to skin transformation. With years of expertise,
              we've curated a collection of non-invasive, high-performance facial treatments that respect
              the skin's natural integrity.
            </p>
            <p>
              At the heart of our philosophy is a belief: your skin deserves consistent, intentional care —
              it is an essential part of your well-being. We combine premium formulations with advanced
              technology to deliver visible, lasting results.
            </p>
            <p>
              Every treatment is a ritual in rejuvenation, tailored to reveal your skin at its most radiant.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={aboutImage}
            alt="Luxury spa treatment setup with towels and candles"
            className="w-full h-[500px] md:h-[600px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
