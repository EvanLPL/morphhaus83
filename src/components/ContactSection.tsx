import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Get in Touch
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-light mb-8">
          Contact
        </h2>
        <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
          Ready to begin your skin transformation journey? Book a consultation or reach out with any questions.
          We'd love to welcome you to Morph Haus.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Location</p>
            <p className="font-display text-lg text-foreground">Suite 118, 40 Yeo Street, Neutral Bay NSW 2089</p>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Email</p>
            <p className="font-display text-lg text-foreground">connect@morphhaus.com.au</p>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Phone</p>
            <p className="font-display text-lg text-foreground">+61 422 497 217</p>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Hours</p>
            <p className="font-display text-lg text-foreground">Wednesday + Friday, 9am — 6pm</p>
          </div>
        </div>

        <Button variant="sage" size="lg">
          Book Appointment
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
