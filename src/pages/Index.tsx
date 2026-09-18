import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
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
      <Footer />
    </div>
  );
};

export default Index;
