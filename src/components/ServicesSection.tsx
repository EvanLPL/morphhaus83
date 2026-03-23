const services = [
  {
    title: "Integrated Face Sculpting",
    description: "A transformative facial technique combining sculpting, lifting, and contouring to enhance your natural bone structure and promote lymphatic drainage.",
    duration: "60 min",
  },
  {
    title: "Remedial Massage",
    description: "Targeted deep tissue therapy to relieve chronic pain, muscular tension, and restore mobility. Tailored to your body's specific needs.",
    duration: "60 — 90 min",
  },
  {
    title: "Pregnancy Massage",
    description: "Gentle, nurturing massage designed to support you through pregnancy — easing discomfort, reducing swelling, and promoting relaxation.",
    duration: "60 min",
  },
  {
    title: "Consultation",
    description: "A comprehensive assessment to understand your goals and craft a personalised treatment plan for lasting results.",
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
                <span className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/60 shrink-0 ml-4">
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
