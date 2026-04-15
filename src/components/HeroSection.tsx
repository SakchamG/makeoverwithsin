import { motion } from "framer-motion";
import heroImg from "@/assets/hero-makeup.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero sparkle-bg overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center pt-20 pb-16">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent text-sm font-body text-primary font-medium"
          >
            ✨ Premium Beauty Services
          </motion.span>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Enhance Your Beauty With{" "}
            <span className="text-gradient-rose">Professional Makeup</span>{" "}
            Services
          </h1>

          <p className="font-body text-sm md:text-base text-primary font-medium tracking-wider">
            Luxury Makeup • Bridal Makeup • Party Makeup • Glam Looks • Personalized Beauty Services
          </p>

          <p className="font-heading italic text-lg md:text-xl text-muted-foreground">
            "Because Every Face Deserves to Shine"
          </p>

          <p className="font-body text-muted-foreground leading-relaxed max-w-lg">
            We bring artistry, elegance, and luxury together to create stunning makeup looks that celebrate your unique beauty. From intimate events to grand celebrations, every look is crafted with passion and precision.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#contact" className="btn-primary-luxury">
              Book Appointment
            </a>
            <a href="#gallery" className="btn-outline-luxury">
              View Portfolio
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
            <img
              src={heroImg}
              alt="Luxury makeup products and brushes"
              width={1024}
              height={1280}
              className="relative rounded-3xl w-full max-w-md lg:max-w-lg object-cover shadow-2xl"
            />
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-accent/80 backdrop-blur flex items-center justify-center text-3xl shadow-lg"
            >
              💄
            </motion.div>
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-secondary/80 backdrop-blur flex items-center justify-center text-2xl shadow-lg"
            >
              ✨
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs text-muted-foreground">Scroll Down</span>
        <div className="w-5 h-8 rounded-full border-2 border-primary/40 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
