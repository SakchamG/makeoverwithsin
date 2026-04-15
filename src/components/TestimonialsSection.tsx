import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    occasion: "Bridal Makeup",
    rating: 5,
    text: "Absolutely stunning bridal makeup! I felt like a princess on my wedding day. The attention to detail was incredible and the makeup lasted all night.",
    initials: "PS",
  },
  {
    name: "Ananya Patel",
    occasion: "Engagement Makeup",
    rating: 5,
    text: "The most beautiful makeup I've ever had. She understood exactly what I wanted and delivered beyond my expectations. Every photo turned out perfect!",
    initials: "AP",
  },
  {
    name: "Meera Reddy",
    occasion: "Party Makeup",
    rating: 5,
    text: "Professional, friendly, and incredibly talented. My party look was glamorous yet felt so natural. I received so many compliments all evening!",
    initials: "MR",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(1);

  return (
    <section className="section-padding bg-gradient-section" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real stories from real clients who trusted us with their beauty</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              onClick={() => setActive(i)}
              className={`card-luxury cursor-pointer transition-all duration-500 ${
                active === i
                  ? "scale-105 rose-gold-border"
                  : "opacity-80 hover:opacity-100"
              }`}
              style={active === i ? { boxShadow: "var(--shadow-glow)" } : {}}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.occasion}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-yellow-500">★</span>
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground italic">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
