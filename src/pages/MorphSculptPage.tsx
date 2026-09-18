import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/morph-sculpt-hero.jpg";
import wordmarkImg from "@/assets/morph-coffee-logo.webp";

const BOOKING_URL = "https://app.acuityscheduling.com/schedule/43920a3f";

const steps = [
  {
    num: "01",
    title: "Consultation",
    text: "We begin by understanding what you're experiencing — tension, concerns, and goals — so the work is tailored to you from the start.",
  },
  {
    num: "02",
    title: "Neck, Jaw & Décolletage Release",
    text: "Tension in the face rarely starts there. We begin by releasing the neck, shoulders, and jaw — the areas that most directly affect facial contour and lymph drainage.",
  },
  {
    num: "03",
    title: "Face Up Method™ Sculpting",
    text: "Systematic work through the face — lymphatic drainage, sculpting strokes across the jaw, cheekbones, eye orbital area, forehead, and scalp.",
  },
  {
    num: "04",
    title: "Aftercare",
    text: "We close with a grounding finish and advise on home care to support and extend your results between sessions.",
  },
];

const benefits = [
  {
    title: "Lift & Define",
    text: "Sculpts and contours the face — enhancing cheekbones, defining the jawline, and restoring structural harmony without injectables.",
  },
  {
    title: "Release Deep Tension",
    text: "Works through the deeper layers of muscle and fascia to release the jaw, temples, brow, and neck — tension that causes asymmetry and discomfort.",
  },
  {
    title: "Lymphatic Drainage",
    text: "Activates the lymphatic drainage system to reduce puffiness, ease stagnation, and support the body's natural detox process.",
  },
  {
    title: "Re-educate Facial Patterns",
    text: "Addresses habitual holding patterns — clenching, guarding, frowning — and helps retrain muscles toward a more relaxed, open expression.",
  },
  {
    title: "Boost Collagen & Glow",
    text: "Increases blood flow to deliver oxygen and nutrients to skin cells, stimulating natural collagen production for improved elasticity and a genuine glow.",
  },
  {
    title: "Somatic Release",
    text: "Supports gentle emotional and somatic release held within the face. Clients often leave feeling not just lighter in appearance, but lighter within.",
  },
];

const suitedFor = [
  "Those seeking natural facial lifting without injectables or surgery",
  "Jaw tension, TMJ discomfort, or teeth grinding",
  "Chronic headaches through the temples, neck, and scalp",
  "Puffiness, fluid retention, or lack of facial definition",
  "Supporting and extending your skincare routine results",
  "Stress and tension that lives in the face",
  "A deeply restorative, hands-on treatment experience",
];

const notes = [
  {
    title: "Post-Filler & Botox",
    text: "For optimal results and safety, this treatment is recommended at least 6 weeks after Botox or dermal filler.",
  },
  {
    title: "Results Over Time",
    text: "Each session builds on the last. Tension held for years softens progressively — results become more visible and longer lasting over time.",
  },
  {
    title: "New Clients",
    text: "First sessions include time to discuss what you're experiencing so the work is tailored to you from the very beginning.",
  },
];

const testimonials = [
  {
    quote:
      "The Face Up massage helped me release so much pain in my jaw and neck. So relaxing, with the added benefit of face sculpting. Better than therapy.",
    name: "Melissa R.",
  },
  {
    quote:
      "I left feeling relaxed, lighter, and my face felt lifted and glowing. So much tension released that I didn't even realise I was holding. Truly incredible.",
    name: "Teearn F.",
  },
  {
    quote:
      "I came in with severe jaw tightness, sinus issues, and regular headaches. The improvement has been remarkable — and my face looks visibly more defined.",
    name: "Lucy M.",
  },
];

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
    {children}
  </p>
);

const MorphSculptPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="light-surface bg-background text-foreground">
        <section className="bg-secondary px-6 pb-20 pt-36 text-center md:pt-36">
          <p className="mb-8 font-body text-xs uppercase tracking-[0.2em] text-primary">Morph Sculpt</p>
          <p className="mb-7 font-body text-sm text-primary">Face Up Method™</p>
          <h1 className="sr-only">Morph Haus — Morph Sculpt</h1>
          <img src={wordmarkImg} alt="Morph Haus" className="mx-auto mb-8 h-auto w-[260px] md:w-[420px]" />
          <p className="mx-auto mb-9 max-w-4xl font-body text-xs leading-relaxed text-muted-foreground md:text-sm">
            Designed to lift, tone, and restore structural harmony within the face — working through the deeper layers of muscle, fascia, and lymphatic pathways.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer">
            <Button className="bg-primary px-8 font-body text-[10px] uppercase tracking-[0.2em] text-primary-foreground hover:bg-primary/90">
              Book Morph Sculpt
            </Button>
          </a>
        </section>

        <div className="relative h-[260px] overflow-hidden md:h-[402px]">
          <img src={heroImg} alt="Relaxing Morph Sculpt treatment" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-primary/45" aria-hidden="true" />
        </div>

        <section className="bg-background px-6 py-20 md:px-12 md:py-[90px] lg:px-20">
          <div className="mx-auto grid max-w-6xl items-start gap-14 md:grid-cols-2 md:gap-6">
            <div>
              <Eyebrow>The Treatment</Eyebrow>
              <h2 className="mb-8 font-display text-4xl font-light text-foreground md:text-5xl">
                Lift, tone &amp; <em>restore harmony</em>
              </h2>
            </div>
            <div className="space-y-5 font-body text-xs leading-[1.8] text-muted-foreground md:text-sm">
              <p>Morph Sculpt uses the Face Up Method™ to work through the deeper layers of muscle, fascia, and lymphatic pathways — releasing held tension, re-educating facial patterns, and enhancing natural contour and definition.</p>
              <p>Unlike traditional facials, this is deep tissue work. It activates the lymphatic drainage system, increases blood flow, and delivers oxygen and nutrients to the skin — resulting in a more sculpted appearance, reduced puffiness, and a face that looks more like itself.</p>
              <p>The treatment also supports gentle somatic and emotional release held within the face — because tension in the face is rarely just physical.</p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-12 md:py-[90px] lg:px-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14">
              <Eyebrow>How It Works</Eyebrow>
              <h2 className="font-display text-4xl font-light text-foreground md:text-5xl">Your session</h2>
            </div>
            <div className="border-y border-primary">
              {steps.map((step) => (
                <div key={step.num} className="grid grid-cols-[38px_1fr] gap-2 border-b border-border py-6 last:border-b-0 md:grid-cols-[50px_1fr] md:gap-0">
                  <span className="font-display text-sm font-light text-primary">{step.num}</span>
                  <div>
                    <h3 className="mb-5 font-body text-[10px] font-normal uppercase tracking-[0.2em] text-foreground">{step.title}</h3>
                    <p className="font-body text-xs leading-[1.8] text-muted-foreground md:text-sm">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background px-6 py-20 md:px-12 md:py-[90px] lg:px-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14">
              <Eyebrow>Benefits</Eyebrow>
              <h2 className="font-display text-4xl font-light text-foreground md:text-5xl">What it does</h2>
            </div>
            <div className="grid gap-x-10 gap-y-8 border border-border p-4 md:grid-cols-2 md:p-5 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title}>
                  <h3 className="mb-4 font-body text-[10px] font-normal uppercase tracking-[0.2em] text-foreground">{benefit.title}</h3>
                  <p className="font-body text-xs leading-[1.8] text-muted-foreground">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="relative h-[260px] overflow-hidden md:h-[455px]">
          <img src={heroImg} alt="Morph Sculpt facial treatment in progress" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-primary/45" aria-hidden="true" />
        </div>

        <section className="px-6 py-20 md:px-12 md:py-[90px] lg:px-20">
          <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:gap-6">
            <div>
              <Eyebrow>Is This For You?</Eyebrow>
              <h2 className="mb-6 font-display text-4xl font-light text-foreground md:text-5xl">Morph Sculpt <em>is ideal for</em></h2>
              <p className="max-w-lg font-body text-xs leading-[1.8] text-muted-foreground md:text-sm">This treatment suits anyone seeking a natural, non-surgical approach to facial lifting, definition, and tension release.</p>
            </div>
            <ul className="border-y border-primary text-left">
              {suitedFor.map((item) => (
                <li key={item} className="border-b border-border py-4 font-body text-xs text-foreground last:border-b-0">{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-secondary px-6 py-14 md:px-12 md:py-20 lg:px-20">
          <div className="mx-auto grid max-w-6xl gap-10 text-left md:grid-cols-3 md:gap-16">
            {notes.map((note) => (
              <div key={note.title}>
                <h3 className="mb-5 font-body text-[10px] font-normal uppercase tracking-[0.2em] text-primary">{note.title}</h3>
                <p className="font-body text-xs leading-[1.8] text-foreground">{note.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-background px-6 py-20 md:px-12 md:py-[90px] lg:px-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16">
              <Eyebrow>Client Love</Eyebrow>
              <h2 className="font-display text-4xl font-light text-foreground md:text-5xl">What our clients say</h2>
            </div>
            <div className="grid gap-12 md:grid-cols-3 md:gap-16 md:px-20">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name}>
                  <p className="mb-4 text-xs tracking-[0.3em] text-primary">★★★★★</p>
                  <p className="mb-6 font-body text-xs italic leading-[1.8] text-foreground">{testimonial.quote}</p>
                  <p className="font-body text-[9px] uppercase tracking-[0.2em] text-muted-foreground">{testimonial.name}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <Link
                to="/testimonials"
                className="inline-block font-body text-xs uppercase tracking-[0.25em] text-foreground border-b border-primary pb-1 hover:text-primary transition-colors"
              >
                Read all testimonials
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-primary px-6 py-20 text-center text-primary-foreground md:px-12 md:py-24 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] opacity-80">Ready to Begin?</p>
            <h2 className="mb-4 font-display text-4xl font-light md:text-5xl lg:text-6xl">Book Morph Sculpt</h2>
            <p className="mb-10 font-body text-sm opacity-80">Suite 118, 40 Yeo Street, Neutral Bay, NSW 2089</p>
            <a href={BOOKING_URL} target="_blank" rel="noreferrer">
              <Button size="lg" className="bg-background font-body text-xs uppercase tracking-[0.2em] text-foreground hover:bg-secondary">Book Now</Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MorphSculptPage;
