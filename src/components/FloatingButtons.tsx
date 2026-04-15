import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/919113845518"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/premiumbeautymakeup"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-xl shadow-lg hover:scale-110 transition-transform"
        aria-label="Follow on Instagram"
      >
        📸
      </a>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            aria-label="Back to top"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingButtons;
