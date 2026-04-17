import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=600", 
  "https://images.unsplash.com/photo-1512496015851-a1dc8a477d48?q=80&w=600", 
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600",
  "https://images.unsplash.com/photo-1519415510236-718bdfcd89c5?q=80&w=600",
  "https://images.unsplash.com/photo-1508210332822-b918667c4fa4?q=80&w=600",
  "https://images.unsplash.com/photo-1525286102434-754d5d9fb729?q=80&w=600",
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close lightbox
  const closeLightbox = () => setSelectedImage(null);

  return (
    <section id="gallery" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground"
          >
            My <span className="text-gradient-rose">Portfolio</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-body text-lg"
          >
            A glimpse into the magical transformations and beautiful moments I've helped create.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative group cursor-pointer aspect-square rounded-2xl overflow-hidden"
              onClick={() => setSelectedImage(src)}
            >
              <img 
                loading="lazy"
                src={src} 
                alt={`Makeup Transformation ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Enlarged gallery view"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
