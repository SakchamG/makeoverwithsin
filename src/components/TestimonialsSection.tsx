import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    occasion: "Bridal Makeup",
    location: "Bangalore",
    date: "Dec 2025",
    rating: 5,
    text: "Absolutely stunning bridal makeup! I felt like a princess on my wedding day. The attention to detail was incredible and the makeup lasted all night.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
  },
  {
    name: "Ananya Patel",
     occasion: "Engagement Makeup",
    location: "Mysore",
    date: "Nov 2025",
    rating: 5,
    text: "The most beautiful makeup I've ever had. She understood exactly what I wanted and delivered beyond my expectations. Every photo turned out perfect!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150",
  },
  {
    name: "Meera Reddy",
    occasion: "Party Makeup",
    location: "Bangalore",
    date: "Oct 2025",
    rating: 5,
    text: "Professional, friendly, and incredibly talented. My party look was glamorous yet felt so natural. I received so many compliments all evening!",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150",
  },
  {
    name: "Kavya Menon",
    occasion: "HD Bridal Makeup",
    location: "Bangalore",
    date: "Sep 2025",
    rating: 5,
    text: "I booked her for my South Indian wedding and the traditional look was flawless. The saree draping was perfect and didn't move all day. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150",
  },
  {
    name: "Sneha Nair",
    occasion: "Reception Makeup",
    location: "Bangalore",
    date: "Aug 2025",
    rating: 5,
    text: "Sindhu did my reception makeup and it was absolutely magical. The eye look was stunning and the base survived hours of dancing!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150",
  },
  {
    name: "Divya Singh",
    occasion: "Pre-Wedding Shoot",
    location: "Nandi Hills",
    date: "Jul 2025",
    rating: 5,
    text: "She gave me three different flawless looks for my pre-wedding shoot. Super quick, highly professional, and extremely sweet to work with.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150",
  },
];

const TestimonialsSection = () => {
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
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real stories from real clients who trusted us with their beauty</p>
        </motion.div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 mt-8 pb-12 pt-4 px-2 w-full" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="w-[85vw] md:w-[calc(33.333%-1rem)] flex-none snap-center card-luxury group cursor-grab hover:cursor-grabbing hover:-translate-y-2 opacity-90 hover:opacity-100 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1">
                  <p className="font-heading font-semibold text-foreground text-lg">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.occasion} • {t.location}</p>
                  <p className="font-body text-[10px] text-muted-foreground/70">{t.date}</p>
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
