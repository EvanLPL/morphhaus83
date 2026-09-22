import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import BrandMap from "@/components/BrandMap";
import Footer from "@/components/Footer";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Morph Haus",
  url: "https://morphhaus.com.au/",
  image: "https://morphhaus.com.au/og-image.jpg",
  email: "connect@morphhaus.com.au",
  telephone: "+61422497217",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Suite 118, 40 Yeo Street",
    addressLocality: "Neutral Bay",
    addressRegion: "NSW",
    postalCode: "2089",
    addressCountry: "AU",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "13",
  },
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Morph Haus — Integrated Face Sculpting & Remedial Massage, Neutral Bay"
        description="Integrated face sculpting, remedial and pregnancy massage in Neutral Bay, Sydney. Rated 5.0 from 13 Google reviews. Book your treatment at Morph Haus."
        path="/"
        jsonLd={localBusiness}
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <section className="bg-accent px-6 py-20 text-accent-foreground md:px-12 md:py-[90px] lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] opacity-70">Visit Us</p>
            <h2 className="mb-4 font-display text-4xl font-light md:text-5xl">Find the studio</h2>
            <p className="font-body text-xs uppercase tracking-[0.2em] opacity-70">
              Suite 118, 40 Yeo Street, Neutral Bay NSW 2089
            </p>
          </div>
          <div className="overflow-hidden border border-accent-foreground/15">
            <BrandMap />
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://www.google.com/maps/place/Morph+Haus/@-33.8319526,151.2188587,17z"
              target="_blank"
              rel="noreferrer"
              className="inline-block border-b border-accent-foreground/40 pb-1 font-body text-xs uppercase tracking-[0.25em] transition-opacity hover:opacity-70"
            >
              Get directions
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
