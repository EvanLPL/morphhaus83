import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/morph-haus-logo.png";
import treatmentImg from "@/assets/about-treatment.jpg";

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
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4">
          <Link to="/">
            <img src={logo} alt="Morph Haus" className="h-8 md:h-10" />
          </Link>
          <Link
            to="/#services"
            className="font-body text-xs uppercase tracking-[0.2em] text-foreground hover:text-accent transition-colors"
          >
            All Treatments
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="section-padding pt-40 md:pt-48 text-center">
        <Eyebrow>Face Up Method™</Eyebrow>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground font-light mb-6">
          Morph Sculpt
        </h1>
        <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
          Designed to lift, tone, and restore structural harmony within the face — working through the
          deeper layers of muscle, fascia, and lymphatic pathways.
        </p>
        <a href={BOOKING_URL} target="_blank" rel="noreferrer">
          <Button variant="sage" size="lg">
            Book Morph Sculpt
          </Button>
        </a>
      </section>

      {/* The Treatment */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>The Treatment</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl text-foreground font-light mb-8">
              Lift, tone &amp; restore harmony
            </h2>
            <div className="space-y-5 font-body text-sm text-muted-foreground leading-relaxed">
              <p>
                Morph Sculpt uses the Face Up Method™ to work through the deeper layers of muscle,
                fascia, and lymphatic pathways — releasing held tension, re-educating facial patterns,
                and enhancing natural contour and definition.
              </p>
              <p>
                Unlike traditional facials, this is deep tissue work. It activates the lymphatic
                drainage system, increases blood flow, and delivers oxygen and nutrients to the skin —
                resulting in a more sculpted appearance, reduced puffiness, and a face that looks more
                like itself.
              </p>
              <p>
                The treatment also supports gentle somatic and emotional release held within the face —
                because tension in the face is rarely just physical.
              </p>
            </div>
          </div>
          <img
            src={treatmentImg}
            alt="Morph Sculpt treatment"
            className="w-full h-[420px] md:h-[520px] object-cover"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Eyebrow>How It Works</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl text-foreground font-light">
              Your session
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {steps.map((step) => (
              <div key={step.num} className="border border-border p-8 md:p-10">
                <span className="font-display text-3xl text-muted-foreground font-light">
                  {step.num}
                </span>
                <h3 className="font-display text-2xl text-foreground font-light mt-3 mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Eyebrow>Benefits</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl text-foreground font-light">What it does</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="border border-border p-8">
                <h3 className="font-display text-xl md:text-2xl text-foreground font-light mb-4">
                  {b.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is This For You? */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <Eyebrow>Is This For You?</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-foreground font-light mb-6">
            Morph Sculpt is ideal for
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
            This treatment suits anyone seeking a natural, non-surgical approach to facial lifting,
            definition, and tension release.
          </p>
          <ul className="text-left max-w-2xl mx-auto space-y-4 mb-16">
            {suitedFor.map((item) => (
              <li
                key={item}
                className="font-body text-sm text-foreground border-b border-border pb-4 flex gap-4"
              >
                <span className="text-muted-foreground shrink-0">—</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {notes.map((n) => (
              <div key={n.title} className="border border-border p-8">
                <h3 className="font-display text-xl text-foreground font-light mb-3">{n.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{n.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Love */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Eyebrow>Client Love</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl text-foreground font-light">
              What our clients say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="border border-border p-8 text-center">
                <p className="text-foreground tracking-[0.3em] mb-6">★★★★★</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                  {t.quote}
                </p>
                <p className="font-body text-xs uppercase tracking-[0.2em] text-foreground">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Begin */}
      <section className="section-padding text-center">
        <div className="max-w-3xl mx-auto">
          <Eyebrow>Ready to Begin?</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-light mb-4">
            Book Morph Sculpt
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-10">
            Suite 118, 40 Yeo Street, Neutral Bay, NSW 2089
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer">
            <Button variant="sage" size="lg">
              Book Now
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 md:px-12 lg:px-24 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logo} alt="Morph Haus" className="h-8" />
          <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
            connect@morphhaus.com.au
          </p>
          <Link
            to="/"
            className="font-body text-xs uppercase tracking-[0.2em] text-foreground border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default MorphSculptPage;
