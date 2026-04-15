import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import productsImg from "@/assets/products-showcase.jpg";

const products = [
  { icon: "🧴", title: "Foundation", desc: "Flawless coverage for every skin type and tone" },
  { icon: "✨", title: "Concealer", desc: "Brightens under-eyes and covers imperfections seamlessly" },
  { icon: "🎨", title: "Eyeshadow", desc: "Rich, blendable palettes from nude to bold shimmers" },
  { icon: "💄", title: "Lipstick", desc: "Long-lasting, vibrant lip colors for every occasion" },
  { icon: "🖌️", title: "Brushes", desc: "Professional-grade brushes for precise application" },
  { icon: "💧", title: "Setting Spray", desc: "Locks in your look for all-day, all-night wear" },
];

const skinTypes = ["Oily Skin", "Dry Skin", "Sensitive Skin", "Combination Skin"];

const ProductsSection = () => {
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
          <h2 className="section-title">Only Premium Products For Your Skin</h2>
          <p className="section-subtitle">We use only the finest brands trusted by professionals worldwide</p>
        </motion.div>

        {/* Featured image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-12"
        >
          <img
            src={productsImg}
            alt="Premium makeup products collection"
            loading="lazy"
            width={1200}
            height={800}
            className="w-full max-w-3xl mx-auto rounded-3xl object-cover shadow-xl"
          />
        </motion.div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="card-luxury rose-gold-border text-center"
            >
              <span className="text-3xl">{p.icon}</span>
              <h3 className="font-heading text-lg font-semibold text-foreground mt-3 mb-1">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Skin types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Suitable For:</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skinTypes.map((t) => (
              <span key={t} className="px-6 py-3 rounded-full bg-accent text-foreground font-body text-sm font-medium rose-gold-border">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
