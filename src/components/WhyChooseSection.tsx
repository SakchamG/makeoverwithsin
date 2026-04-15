import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import whyImg from "@/assets/why-choose.jpg";

const reasons = [
  { icon: "⏱️", text: "Long-lasting Makeup" },
  { icon: "💎", text: "Premium Branded Products" },
  { icon: "🎨", text: "Customized by Skin Tone" },
  { icon: "🧹", text: "Hygienic Tools & Brushes" },
  { icon: "💰", text: "Affordable Luxury Packages" },
  { icon: "🏠", text: "Home Service Available" },
  { icon: "🤝", text: "Professional & Friendly" },
  { icon: "⏰", text: "On-Time Guarantee" },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-gradient-section" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Why Clients Choose Us</h2>
          <p className="section-subtitle">Excellence in every detail, from the first brush stroke to the final look</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-3xl bg-primary/10 blur-xl" />
            <img
              src={whyImg}
              alt="Happy client after professional makeup"
              loading="lazy"
              width={800}
              height={1024}
              className="relative rounded-3xl w-full max-w-md mx-auto object-cover shadow-xl"
            />
          </motion.div>

          {/* Checklist */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <motion.div
                key={r.text}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card rose-gold-border transition-all duration-300 hover:shadow-lg"
              >
                <span className="text-2xl">{r.icon}</span>
                <span className="font-body text-sm font-medium text-foreground">{r.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center p-8 rounded-2xl rose-gold-border bg-card"
          style={{ boxShadow: "var(--shadow-glow)" }}
        >
          <p className="font-heading text-xl md:text-2xl italic text-foreground">
            "Your beauty is unique — our job is to make it <span className="text-gradient-rose font-bold">unforgettable</span>."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
