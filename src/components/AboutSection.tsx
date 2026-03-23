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
            A Sanctuary for<br />Transformation
          </h2>
          <div className="space-y-6 font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            <p>
              Welcome to Morph Haus — a sanctuary dedicated to holistic body and face transformation.
              Specialising in integrated face sculpting, remedial massage, and pregnancy massage,
              we combine expert technique with nurturing care.
            </p>
            <p>
              At the heart of our philosophy is a belief: your body deserves consistent, intentional care.
              Whether you're seeking facial rejuvenation, relief from muscular tension, or support through
              pregnancy, our skilled therapists tailor every session to your unique needs.
            </p>
            <p>
              Every treatment is a ritual in restoration, designed to leave you feeling balanced, renewed, and at ease.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={aboutImage}
            alt="Luxury treatment setup with towels and candles"
            className="w-full h-[500px] md:h-[600px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
