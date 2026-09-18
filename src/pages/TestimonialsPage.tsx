import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Star } from "lucide-react";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Morph+Haus/@-33.8319526,151.2188587,17z/data=!4m8!3m7!1s0x6b12afe761745835:0x474ffcd1c0eb8b43!8m2!3d-33.8319571!4d151.221439!9m1!1b1!16s%2Fg%2F11z9blfhnn";

const reviews = [
  {
    name: "Karina B.",
    service: "Face Sculpting & Massage",
    quote:
      "An incredible depth of knowledge, with such attention to detail and care from the moment you arrive. Every treatment feels considered and completely tailored to what you need that day. I always leave feeling amazing.",
  },
  {
    name: "Sophie S.",
    service: "Massage",
    quote:
      "Truly exceptional. From the moment you walk in, you're welcomed into such a calm and inviting space. The level of skill and care is unlike anything I've experienced elsewhere — I couldn't recommend more highly.",
  },
  {
    name: "Daniella A.",
    service: "Pregnancy Massage",
    quote:
      "Honestly ruined other massages for me — nothing else compares. The treatments were an absolute lifesaver during my pregnancy, and I always felt completely comfortable, safe and cared for.",
  },
  {
    name: "Eva T.",
    service: "Massage",
    quote:
      "I left feeling refreshed, lighter, and genuinely cared for. Every detail of the experience is so thoughtful, and the treatment itself was exactly what my body needed. I can't wait to come back.",
  },
  {
    name: "Josie",
    service: "Remedial Massage",
    quote:
      "Very intuitive, highly skilled, and kind. After trying so many places over the years, I have finally found the one. I wouldn't trust anyone else with my body now.",
  },
];

const Stars = () => (
  <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={16} className="fill-primary text-primary" aria-hidden="true" />
    ))}
  </div>
);

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen light-surface bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="bg-secondary section-padding pt-32 md:pt-40 text-center">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Client Love
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-primary mb-8">Testimonials</h1>
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={22} className="fill-primary text-primary" aria-hidden="true" />
            ))}
          </div>
          <p className="font-body text-sm tracking-[0.15em] uppercase text-foreground/80">
            5.0 rating · 13 Google reviews
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-background section-padding">
        <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="border border-border p-8 md:p-10 flex flex-col gap-5"
            >
              <Stars />
              <blockquote className="font-display text-xl md:text-2xl leading-relaxed italic text-foreground/90">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-auto">
                <p className="font-body text-xs uppercase tracking-[0.25em] text-foreground">
                  {review.name}
                </p>
                <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  {review.service}
                </p>
              </figcaption>
            </figure>
          ))}

          {/* Google CTA card */}
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary bg-secondary p-8 md:p-10 flex flex-col items-center justify-center gap-4 text-center hover:bg-muted transition-colors"
          >
            <Stars />
            <p className="font-display text-2xl md:text-3xl text-primary">
              Read all reviews on Google
            </p>
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground">
              morphhaus.com.au · Neutral Bay
            </p>
          </a>
        </div>
      </section>

      {/* Booking band */}
      <section className="bg-primary text-primary-foreground section-padding text-center">
        <p className="font-body text-xs uppercase tracking-[0.3em] opacity-80 mb-6">
          Ready to Begin
        </p>
        <h2 className="font-display text-4xl md:text-6xl mb-10">
          Experience it for yourself
        </h2>
        <a
          href="https://app.acuityscheduling.com/schedule/43920a3f"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-background text-foreground hover:bg-secondary font-body uppercase tracking-[0.2em] text-xs px-10 py-4 transition-colors"
        >
          Book an Appointment
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default TestimonialsPage;
