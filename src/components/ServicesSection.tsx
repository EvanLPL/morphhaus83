const services = [
  {
    title: "Morph Sculpt",
    description: "Designed to lift, tone, and restore structural harmony within the face. Using the Face Up Method™, this technique works through the deeper layers of muscle, fascia, and lymphatic pathways to release held tension, re-educate facial patterns, and enhance natural contour and definition — while supporting gentle somatic and emotional release held within the face. For optimal results and safety, this treatment is recommended at least 6 weeks after Botox or dermal filler.",
    duration: "60 min",
    bookLabel: "Book Morph Sculpt",
  },
  {
    title: "The Remedial",
    description: "A targeted treatment to relieve pain, correct imbalances, and restore mobility using remedial and myofascial techniques. Eligible for private health fund rebates.",
    duration: "60 — 90 min",
    bookLabel: "Book Remedial Massage",
  },
  {
    title: "Deep Rest",
    description: "Relaxation massage using slow, deep myofascial release techniques, this session works through the connective tissue to unwind restriction and restore fluid movement within the body, allowing a gradual shift into a parasympathetic state. A 75-minute treatment is intentionally designed to support deeper release and a more complete restoration.",
    duration: "75 min",
    bookLabel: "Book Deep Rest",
  },
  {
    title: "The Nurture",
    description: "A targeted prenatal treatment designed to relieve muscular discomfort and support structural changes throughout pregnancy. Focusing on areas of tension such as the lower back, hips, and shoulders, this session uses safe, effective techniques to improve mobility, reduce swelling, and enhance overall comfort. Available from second trimester onwards.",
    duration: "60 — 90 min",
    bookLabel: "Book The Nurture",
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
              className="border border-primary-foreground/20 p-8 md:p-10 group hover:bg-primary-foreground/5 transition-colors duration-300 flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-2xl md:text-3xl text-primary-foreground font-light">
                  {service.title}
                </h3>
                <span className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/60 shrink-0 ml-4">
                  {service.duration}
                </span>
              </div>
              <p className="font-body text-sm text-primary-foreground/70 leading-relaxed mb-6">
                {service.description}
              </p>
              {service.readMorePath && (
                <Link
                  to={service.readMorePath}
                  className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/80 border-b border-primary-foreground/40 self-start pb-1 mb-4 hover:text-primary-foreground hover:border-primary-foreground transition-colors"
                >
                  Read More
                </Link>
              )}
              <a
                href="#contact"
                className="mt-auto font-body text-xs uppercase tracking-[0.2em] text-primary-foreground border-b border-primary-foreground/40 self-start pb-1 hover:border-primary-foreground transition-colors"
              >
                {service.bookLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
