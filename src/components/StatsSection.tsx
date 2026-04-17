import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Star, Award, Heart } from "lucide-react";

const stats = [
  { icon: Users, label: "Happy Clients", value: "150+" },
  { icon: Award, label: "Years Experience", value: "3+" },
  { icon: Heart, label: "Bridal Looks", value: "50+" },
  { icon: Star, label: "Premium Products", value: "100%" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-16 bg-card" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center space-y-3 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                {stat.value}
              </h3>
              <p className="font-body text-sm md:text-base text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
