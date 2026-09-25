import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandMap from "@/components/BrandMap";
import heroImg from "@/assets/hero-spa.jpg";
import treatmentRoomImg from "@/assets/treatment-room-2.jpg";
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
    text: "Sculpts and contours the face to enhance the cheekbones, define the jawline and support natural facial balance — without injectables.",
  },
  {
    title: "Release Deep Tension",
    text: "Works through deeper layers of muscle and fascia to release tension held in the jaw, temples, brow and neck — helping ease discomfort and facial asymmetry.",
  },
  {
    title: "Support Lymphatic Drainage",
    text: "Encourages lymphatic flow to reduce puffiness, ease stagnation and support the body's natural elimination process.",
  },
  {
    title: "Re-educate Facial Patterns",
    text: "Addresses habitual patterns such as clenching, guarding and frowning, helping facial muscles return to a softer, more relaxed expression. This may also soften the appearance of expression lines and wrinkles.",
  },
  {
    title: "Improve Skin Texture & Glow",
    text: "Increases circulation, bringing oxygen and nutrients to the skin. This supports collagen production, elasticity and cell renewal — helping soften fine lines and wrinkles and improve the appearance of acne scarring and uneven skin texture.",
  },
  {
    title: "Somatic Release",
    text: "Supports the gentle release of emotional and physical tension held within the face. Clients often leave feeling not only lighter in appearance, but lighter within.",
  },
];

const suitedFor = [
  "Loss of facial definition — when the face feels heavy, tired or less sculpted",
  "Jaw tension, clenching or teeth grinding — releasing tightness through the jaw and surrounding facial muscles",
  "Tension through the temples, brow, neck and scalp — including patterns associated with everyday stress and muscular holding",
  "Puffiness and fluid retention — supporting lymphatic flow for a fresher, more defined appearance",
  "Fine lines and expression patterns — working with muscular and fascial tension that can contribute to their appearance",
  "Complementing your skincare routine — supporting circulation and the overall appearance of healthy, revitalised skin",
  "Stress held in the face — encouraging deep relaxation and gentle somatic release",
  "Anyone wanting a natural alternative to more invasive approaches to facial rejuvenation",
];

const notes = [
  {
    title: "Results Over Time",
    text: "For the best results, treatments are recommended every 10–14 days for the first few sessions. Visible changes are often noticed after 3–4 treatments, as each session builds on the last. Long-held tension gradually softens, helping results become more noticeable and longer-lasting over time.",
  },
  {
    title: "Post-Filler & Botox",
    text: "For optimal results and safety, please wait at least four weeks after Botox or dermal filler before receiving this treatment.",
  },
  {
    title: "New Clients",
    text: "Your first session includes an additional 15-minute consultation to discuss your concerns and treatment goals, allowing the experience to be tailored to you from the very beginning.",
  },
];

const testimonials = [
  {
    quote:
      "An incredible depth of knowledge, with such attention to detail and care from the moment you arrive. Every treatment feels considered and completely tailored to what you need that day. I always leave feeling amazing.",
    name: "Karina B.",
  },
  {
    quote:
      "I left feeling refreshed, lighter, and genuinely cared for. Every detail of the experience is so thoughtful, and the treatment itself was exactly what my body needed. I can't wait to come back.",
    name: "Eva T.",
  },
  {
    quote:
      "Very intuitive, highly skilled, and kind. After trying so many places over the years, I have finally found the one. I wouldn't trust anyone else with my body now.",
    name: "Josie",
  },
];

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
    {children}
  </p>
);

const MorphSculptFacialPage = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="The Morph Sculpt Facial at Morph Haus"
        description="Our signature facial, designed to sculpt, release and restore — using the Face Up Method™ in Neutral Bay, Sydney. Book your session."
        path="/morph-sculpt-facial"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Morph Sculpt — Integrated Face Sculpting",
          serviceType: "Face sculpting massage",
          description:
            "Deep tissue face sculpting using the Face Up Method™ to lift, tone and restore structural harmony in the face.",
          url: "https://morphhaus.com.au/morph-sculpt-facial",
          areaServed: "Neutral Bay, Sydney NSW",
          provider: {
            "@type": "HealthAndBeautyBusiness",
            name: "Morph Haus",
            url: "https://morphhaus.com.au/",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Suite 118, 40 Yeo Street",
              addressLocality: "Neutral Bay",
              addressRegion: "NSW",
              postalCode: "2089",
              addressCountry: "AU",
            },
          },
        }}
      />
      <Navbar />

      <main className="light-surface bg-background text-foreground">
        <section className="bg-secondary px-6 pb-20 pt-36 text-center md:pt-36">
          <p className="mb-8 font-body text-xs uppercase tracking-[0.2em] text-primary">Morph Sculpt</p>
          <p className="mb-7 font-body text-sm text-primary">Face Up Method™</p>
          <img src={wordmarkImg} alt="Morph Haus" className="mx-auto mb-8 h-auto w-[260px] md:w-[420px]" />
          <h1 className="mb-8 font-display text-4xl font-light text-primary md:text-5xl">
            The Morph Sculpt Facial
          </h1>
          <p className="mx-auto mb-9 max-w-4xl font-body text-xs leading-relaxed text-muted-foreground md:text-sm">
            Our signature facial, designed to sculpt, release and restore.
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
                Sculpt, release &amp; <em>restore</em>
              </h2>
            </div>
            <div className="space-y-5 font-body text-xs leading-[1.8] text-muted-foreground md:text-sm">
              <p>Morph Sculpt is a deeply restorative facial sculpting treatment that works through the deeper layers of facial muscle, fascia and lymphatic pathways — not just the surface of the skin.</p>
              <p>Using the Face Up Method™, precise hands-on techniques release held tension, soften habitual facial patterns and encourage lymphatic flow and circulation, helping to reduce puffiness and reveal greater contour and definition.</p>
              <p>Focused work through the jaw, temples, brow, neck and facial muscles helps release the tension that can influence how the face looks and feels — creating a naturally lifted, rested and more sculpted appearance.</p>
              <p>Beyond the visible results, Morph Sculpt encourages deep nervous-system relaxation and gentle somatic release, allowing tension held within the face to soften.</p>
              <p className="font-medium text-foreground">Not about changing your face — but revealing its natural form.</p>
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
          <img src={treatmentRoomImg} alt="Morph Sculpt facial treatment in progress" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-primary/45" aria-hidden="true" />
        </div>

        <section className="px-6 py-20 md:px-12 md:py-[90px] lg:px-20">
          <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:gap-6">
            <div>
              <Eyebrow>Is This For You?</Eyebrow>
              <h2 className="mb-6 font-display text-4xl font-light text-foreground md:text-5xl">Morph Sculpt <em>is ideal for</em></h2>
              <p className="max-w-lg font-body text-xs leading-[1.8] text-muted-foreground md:text-sm">Designed for those seeking a natural, hands-on approach to facial sculpting, tension release and deeper restoration.</p>
            </div>
            <ul className="border-y border-primary text-left">
              {suitedFor.map((item) => (
                <li key={item} className="border-b border-border py-4 font-body text-xs text-foreground last:border-b-0">{item}</li>
              ))}
            </ul>
            <p className="mt-10 font-display text-xl font-light italic text-foreground md:col-span-2 md:text-2xl">For those who want to look refreshed, defined and rested — while still looking entirely like themselves.</p>
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

        <section className="bg-background px-6 py-20 md:px-12 md:py-[90px] lg:px-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <Eyebrow>Visit Us</Eyebrow>
              <h2 className="mb-4 font-display text-4xl font-light text-foreground md:text-5xl">Find the studio</h2>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Suite 118, 40 Yeo Street, Neutral Bay NSW 2089
              </p>
            </div>
            <div className="overflow-hidden border border-border">
              <BrandMap />
            </div>
            <div className="mt-8 text-center">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Morph+Haus,+Suite+118,+40+Yeo+Street,+Neutral+Bay+NSW+2089"
                target="_blank"
                rel="noreferrer"
                className="inline-block border-b border-primary pb-1 font-body text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:text-primary"
              >
                Get directions
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MorphSculptFacialPage;
