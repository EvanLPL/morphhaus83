const services = [
  {
    title: "Signature Facial",
    description: "A bespoke treatment tailored to your skin's unique needs, combining deep cleansing, exfoliation, and hydration.",
    duration: "60 min",
  },
  {
    title: "Anti-Ageing Ritual",
    description: "Advanced rejuvenation using premium formulations and LED therapy to restore youthful radiance.",
    duration: "75 min",
  },
  {
    title: "Hydra Glow Treatment",
    description: "Intensive hydration therapy that plumps and revitalises dehydrated, dull skin with immediate results.",
    duration: "45 min",
  },
  {
    title: "Skin Consultation",
    description: "A comprehensive skin analysis to craft your personalised treatment plan and homecare routine.",
    duration: "30 min",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary-foreground/70 mb-4">
            Our Treatments
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-light">
            Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-primary-foreground/20 p-8 md:p-10 group hover:bg-primary-foreground/5 transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-2xl md:text-3xl text-primary-foreground font-light">
                  {service.title}
                </h3>
                <span className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
                  {service.duration}
                </span>
              </div>
              <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
