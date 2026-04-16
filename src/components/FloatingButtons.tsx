import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";

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
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
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
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingButtons;
