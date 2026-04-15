import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { icon: "💬", title: "Consultation", desc: "We discuss your vision, occasion, and preferences to plan the perfect look." },
  { icon: "🧴", title: "Skin Preparation", desc: "Cleansing, moisturizing, and priming for a flawless makeup base." },
  { icon: "🎨", title: "Makeup Application", desc: "Expert application of foundation, eyes, lips, and contouring." },
  { icon: "💇‍♀️", title: "Hairstyling & Final Touch", desc: "Elegant hairstyling and finishing touches for a complete look." },
  { icon: "✨", title: "Final Reveal", desc: "The moment you see your stunning transformation in the mirror!" },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Step-by-Step Beauty Process</h2>
          <p className="section-subtitle">A seamless journey from consultation to your final reveal</p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden md:flex items-start justify-between relative mt-12">
          {/* Connecting line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-primary/20" />
          
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="flex flex-col items-center text-center relative z-10 w-1/5 px-2"
            >
              <div className="w-20 h-20 rounded-full bg-card rose-gold-border flex items-center justify-center text-3xl mb-4 shadow-lg">
                {s.icon}
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-1">{s.title}</h3>
              <p className="font-body text-xs text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden flex flex-col gap-6 mt-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-card rose-gold-border flex items-center justify-center text-2xl shadow-md shrink-0">
                {s.icon}
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
