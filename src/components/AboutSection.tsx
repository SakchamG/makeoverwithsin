import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@/assets/about-artist.jpg";

const features = [
  { icon: "💎", title: "Premium Products", desc: "I use only trusted, high-quality makeup brands for safe and flawless results." },
  { icon: "🎨", title: "Personalized Looks", desc: "Every makeup look is customized according to the client's face shape, skin tone, and occasion." },
  { icon: "🧴", title: "Hygienic & Safe", desc: "All tools, brushes, and products are cleaned and sanitized before every appointment." },
  { icon: "👩‍🎨", title: "Professional Expertise", desc: "Experienced, skilled, and dedicated to creating beautiful, long-lasting looks." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-gradient-section" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Who I Am</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-3xl bg-primary/10 blur-xl" />
            <img
              src={aboutImg}
              alt="Professional makeup artist"
              loading="lazy"
              width={800}
              height={1024}
              className="relative rounded-3xl w-full max-w-md mx-auto object-cover shadow-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
              I am a professional makeup artist dedicated to helping every client look confident, elegant, and beautiful. I specialize in creating customized makeup looks based on each person's style, skin tone, and occasion. With a passion for beauty and attention to detail, I work closely with every client to create a look that enhances their natural features and makes them feel their best.
            </p>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="card-luxury rose-gold-border text-center"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
