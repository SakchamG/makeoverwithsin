import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const packages = [
  {
    name: "Basic Glam",
    price: "₹2,999",
    features: ["Simple Makeup", "Hairstyling", "Perfect for Small Events", "1 Hour Session"],
    popular: false,
  },
  {
    name: "Premium Glam",
    price: "₹5,999",
    features: ["Full Face Makeup", "Hairstyling", "Lashes Application", "Touch-up Kit", "2 Hour Session", "HD Finish"],
    popular: true,
  },
  {
    name: "Bridal Luxury",
    price: "₹12,999",
    features: ["Bridal Makeup", "Hairstyling", "Saree Draping", "Touch-up Kit", "Home Service", "Trial Session", "All-Day Support"],
    popular: false,
  },
];

const PackagesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="packages" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Beauty Packages</h2>
          <p className="section-subtitle">Choose the perfect package for your special occasion</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className={`relative card-luxury text-center ${
                pkg.popular ? "rose-gold-border scale-105" : ""
              }`}
              style={pkg.popular ? { boxShadow: "var(--shadow-glow)" } : {}}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-body font-semibold">
                  Most Popular
                </span>
              )}

              <h3 className="font-heading text-xl font-bold text-foreground mt-2">{pkg.name}</h3>
              <div className="my-4">
                <span className="font-heading text-3xl font-bold text-gradient-rose">{pkg.price}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((f) => (
                  <li key={f} className="font-body text-sm text-muted-foreground flex items-center gap-2 justify-center">
                    <span className="text-primary">✓</span> {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={pkg.popular ? "btn-primary-luxury w-full" : "btn-outline-luxury w-full"}
              >
                Choose Package
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
