import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Karina B.",
    quote:
      "An incredible depth of knowledge, with such attention to detail and care from the moment you arrive. Every treatment feels considered and completely tailored to what you need that day.",
  },
  {
    name: "Daniella A.",
    quote:
      "Honestly ruined other massages for me — nothing else compares. The treatments were an absolute lifesaver during my pregnancy, and I always felt completely comfortable, safe and cared for.",
  },
  {
    name: "Eva T.",
    quote:
      "I left feeling refreshed, lighter, and genuinely cared for. Every detail of the experience is so thoughtful, and the treatment itself was exactly what my body needed.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-accent text-accent-foreground">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-accent-foreground/60 mb-6">
          Client Love
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-accent-foreground mb-4">
          What our clients say
        </h2>
        <div className="flex items-center justify-center gap-2 mb-16">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} className="fill-accent-foreground text-accent-foreground" aria-hidden="true" />
          ))}
          <span className="font-body text-xs uppercase tracking-[0.2em] text-accent-foreground/60 ml-2">
            5.0 on Google
          </span>
        </div>

        <div className="grid gap-12 md:grid-cols-3 md:gap-16 text-left">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name}>
              <div className="flex items-center gap-1 mb-4" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="font-body text-sm italic leading-[1.9] text-foreground/90 mb-6">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>

        <Link
          to="/testimonials"
          className="inline-block mt-16 font-body text-xs uppercase tracking-[0.25em] text-foreground border-b border-accent pb-1 hover:text-accent transition-colors"
        >
          Read all testimonials
        </Link>
      </div>
    </section>
  );
};

export default TestimonialsSection;
