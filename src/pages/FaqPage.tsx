import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import studioPhoto from "@/assets/hero-spa.jpg";

const faqGroups = [
  {
    title: "Morph Sculpt",
    questions: [
      {
        question: "What is Morph Sculpt?",
        answer: "Morph Sculpt is our hands-on facial sculpting treatment using the Face Up Method™. It works through facial muscles, fascia and lymphatic pathways, with techniques intended to release held tension, encourage lymphatic flow and support natural contour and definition.",
      },
      {
        question: "What happens during a Morph Sculpt session?",
        answer: "Your session begins with a consultation about your concerns and goals. Treatment includes focused work through the neck, shoulders and jaw, followed by facial sculpting techniques across the jawline, cheekbones, eye area, forehead and scalp. We finish with aftercare advice tailored to you.",
      },
      {
        question: "What should I expect at my first Morph Sculpt appointment?",
        answer: "Your first session includes an additional 15-minute consultation to discuss your concerns and treatment goals, so the experience can be tailored to you from the start.",
      },
      {
        question: "How many Morph Sculpt sessions will I need?",
        answer: "Your treatment plan depends on your concerns and goals. We recommend sessions every 10–14 days for the first few appointments, then reviewing your needs together. Results vary from person to person; no particular outcome is guaranteed.",
      },
    ],
  },
  {
    title: "Massage & pregnancy",
    questions: [
      {
        question: "What is The Remedial massage?",
        answer: "The Remedial is a targeted massage using remedial and myofascial techniques, tailored to areas of tension and your individual needs. Sessions are available for 60–90 minutes.",
      },
      {
        question: "How is Deep Rest different?",
        answer: "Deep Rest is a relaxation massage using slow, deep myofascial release techniques. This 75-minute session focuses on unwinding tension and creating time for deeper rest.",
      },
      {
        question: "Do you offer pregnancy massage?",
        answer: "Yes. The Nurture is our prenatal massage, available from the second trimester onwards. It focuses on areas such as the lower back, hips and shoulders, with treatment tailored to your needs. Contact us before booking if you have questions about whether the treatment is suitable for you.",
      },
      {
        question: "How long are the treatments?",
        answer: "Morph Sculpt is listed as 60 minutes, with an additional 15-minute consultation for new clients. The Remedial and The Nurture are available for 60–90 minutes. Deep Rest is a 75-minute treatment.",
      },
    ],
  },
  {
    title: "Booking & visiting",
    questions: [
      {
        question: "How do I book an appointment?",
        answer: "Use the Book Now button to open our online booking system, where you can choose your treatment and an available appointment time.",
      },
      {
        question: "Where is Morph Haus located?",
        answer: "Our studio is at Suite 118, 40 Yeo Street, Neutral Bay NSW 2089, Sydney.",
      },
      {
        question: "When are you open?",
        answer: "We are open Wednesday and Friday from 9am to 6pm, and Saturday from 10am to 6pm.",
      },
      {
        question: "Can I ask a question before booking?",
        answer: "Of course. Email connect@morphhaus.com.au or call +61 422 497 217 to discuss your questions before choosing a treatment.",
      },
    ],
  },
];

const FaqPage = () => (
  <div className="min-h-screen">
    <Seo
      title="Frequently Asked Questions — Morph Haus, Neutral Bay"
      description="Answers to common questions about Morph Sculpt facials, remedial massage, pregnancy massage and visiting Morph Haus in Neutral Bay, Sydney."
      path="/faq"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqGroups.flatMap((group) => group.questions.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        }))),
      }}
    />
    <Navbar />
    <main className="light-surface bg-background text-foreground">
      <header className="bg-secondary px-6 pb-16 pt-40 text-center md:pb-20 md:pt-44">
        <h1 className="font-display text-4xl font-light text-primary md:text-6xl">Frequently asked questions</h1>
        <p className="mx-auto mt-6 max-w-xl font-body text-sm leading-relaxed text-muted-foreground">Your treatment, your appointment, your time with us.</p>
      </header>
      <div className="mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-20">
        {faqGroups.map((group, index) => (
          <section key={group.title} aria-labelledby={`faq-group-${index}`} className="mb-14 last:mb-0 md:mb-20">
            <h2 id={`faq-group-${index}`} className="mb-6 font-display text-3xl font-light text-primary md:text-4xl">{group.title}</h2>
            <Accordion type="multiple" className="border-t border-border">
              {group.questions.map((faq, questionIndex) => (
                <AccordionItem key={faq.question} value={`question-${questionIndex}`}>
                  <AccordionTrigger className="gap-6 py-6 text-left font-body text-sm leading-relaxed tracking-normal hover:text-primary">{faq.question}</AccordionTrigger>
                  <AccordionContent className="max-w-3xl pb-6 font-body text-sm leading-7 text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        ))}
      </div>
      <section className="relative isolate overflow-hidden px-6 py-20 text-center md:py-24">
        <img src={studioPhoto} alt="Facial massage at Morph Haus" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-background/90" aria-hidden="true" />
        <h2 className="mb-5 font-display text-4xl font-light text-primary md:text-5xl">A little time for you</h2>
        <p className="mx-auto mb-8 max-w-lg font-body text-sm leading-relaxed text-foreground">Find your next treatment at our Neutral Bay studio.</p>
        <Button asChild size="lg" variant="sage" className="tracking-normal">
          <a href="https://app.acuityscheduling.com/schedule/43920a3f" target="_blank" rel="noopener noreferrer">Book Now</a>
        </Button>
      </section>
    </main>
    <Footer />
  </div>
);

export default FaqPage;