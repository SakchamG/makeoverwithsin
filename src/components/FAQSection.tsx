import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "Do you provide home service?",
    answer: "Yes, I offer on-location and home services for bridal and party makeup across Bangalore. Travel charges may apply depending on the distance.",
  },
  {
    question: "How early should I book?",
    answer: "For bridal makeup, it is highly recommended to book 3-6 months in advance. For party and engagement makeup, 3-4 weeks prior notice is ideal.",
  },
  {
    question: "Which products do you use?",
    answer: "I exclusively use high-end, premium internationally recognized brands to ensure long-lasting, flawless, and photo-ready finishes suitable for all skin types.",
  },
  {
    question: "Is a trial session available?",
    answer: "Yes, bridal trial sessions are available at an additional cost. A trial allows us to discuss and finalize the perfect look for your big day.",
  },
  {
    question: "How long does bridal makeup take?",
    answer: "Bridal makeup, including hair styling and saree draping, typically requires about 3 to 4 hours. Time management is customized based on your specific requirements.",
  },
  {
    question: "Do you provide hairstyling and saree draping?",
    answer: "Absolutely! My bridal and party packages are comprehensive. Both hairstyling and professional saree draping are included to ensure you look perfect from head to toe.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground"
          >
            Frequently Asked <span className="text-gradient-rose">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-body text-lg"
          >
            Find quick answers to common questions about my booking process and services.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border-b border-border py-2">
                <AccordionTrigger className="text-left font-heading text-lg md:text-xl font-medium text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground text-base leading-relaxed pt-2 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
