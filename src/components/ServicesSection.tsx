import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import serviceBridal from "@/assets/service-bridal.jpg";

const services = [
  { title: "Bridal Makeup", desc: "Stunning bridal looks that make your special day unforgettable with flawless, long-lasting makeup.", icon: "👰" },
  { title: "Party Makeup", desc: "Glamorous party-ready looks that turn heads and make you the star of every celebration.", icon: "🎉" },
  { title: "Engagement Makeup", desc: "Radiant and romantic looks designed to make your engagement photos picture-perfect.", icon: "💍" },
  { title: "Reception Makeup", desc: "Elegant, camera-ready makeup for your grand reception that lasts all night long.", icon: "🥂" },
  { title: "HD Makeup", desc: "High-definition makeup for a flawless, airbrushed finish perfect for photos and videos.", icon: "📸" },
  { title: "Airbrush Makeup", desc: "Lightweight, waterproof airbrush makeup for a seamless, natural-looking finish.", icon: "💨" },
  { title: "Photoshoot Makeup", desc: "Professional makeup designed for editorial, fashion, and portfolio photoshoots.", icon: "📷" },
  { title: "Hairstyling & Saree Draping", desc: "Complete styling with elegant hairstyling and traditional saree draping services.", icon: "💇‍♀️" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Makeup Services</h2>
          <p className="section-subtitle">Every occasion deserves a look that's uniquely yours</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group card-luxury rose-gold-border text-center cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground mb-4">{s.desc}</p>
              <div className="mt-auto pt-4 border-t border-border/50">
                <span className="inline-block font-body text-xs md:text-sm text-primary font-medium transition-colors duration-300">
                  Contact Artist for Consultation
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
