import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import serviceBridal from "@/assets/service-bridal.jpg";
import aboutArtist from "@/assets/about-artist.jpg";
import heroMakeup from "@/assets/hero-makeup.jpg";

const transformations = [
  {
    title: "Bridal Transformation",
    desc: "A stunning bridal look that radiates elegance and grace on the most special day.",
    before: aboutArtist,
    after: serviceBridal,
  },
  {
    title: "Party Makeup Transformation",
    desc: "From everyday beauty to glamorous party-ready in one session.",
    before: heroMakeup,
    after: serviceBridal,
  },
  {
    title: "Natural Glam Transformation",
    desc: "Enhancing natural beauty with subtle, glowing makeup that looks effortless.",
    before: aboutArtist,
    after: heroMakeup,
  },
];

const BeforeAfterCard = ({ item }: { item: typeof transformations[0] }) => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(100, Math.max(0, pos)));
  };

  return (
    <div className="card-luxury rose-gold-border overflow-hidden">
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-xl cursor-ew-resize select-none"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
      >
        {/* After (full) */}
        <img src={item.after} alt={`${item.title} after`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        {/* Before (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
          <img src={item.before} alt={`${item.title} before`} className="absolute inset-0 w-full h-full object-cover" style={{ minWidth: "100%" }} loading="lazy" />
        </div>
        {/* Slider line */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-primary-foreground/80" style={{ left: `${sliderPos}%` }}>
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground text-xs">↔</span>
          </div>
        </div>
        {/* Labels */}
        <span className="absolute top-3 left-3 px-2 py-1 rounded-md bg-foreground/60 text-primary-foreground text-xs font-body">Before</span>
        <span className="absolute top-3 right-3 px-2 py-1 rounded-md bg-primary/80 text-primary-foreground text-xs font-body">After</span>
      </div>
      <h3 className="font-heading text-lg font-semibold text-foreground mt-4">{item.title}</h3>
      <p className="font-body text-sm text-muted-foreground mt-1">{item.desc}</p>
    </div>
  );
};

const BeforeAfterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="section-padding bg-gradient-section" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Beauty Transformations</h2>
          <p className="section-subtitle">Drag the slider to see the stunning before & after results</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
            >
              <BeforeAfterCard item={t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
