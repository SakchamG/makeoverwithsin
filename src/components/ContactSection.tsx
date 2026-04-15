import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const contactCards = [
  { icon: "📞", title: "Call Us", detail: "+91 9113845518", href: "tel:+919113845518" },
  { icon: "💬", title: "WhatsApp", detail: "+91 9113845518", href: "https://wa.me/919113845518" },
  { icon: "📸", title: "Instagram", detail: "@premiumbeautymakeup", href: "https://instagram.com/premiumbeautymakeup" },
  { icon: "✉️", title: "Email", detail: "hello@glambeauty.com", href: "mailto:hello@glambeauty.com" },
  { icon: "📍", title: "Visit Us", detail: "Your City, India", href: "#" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", phone: "", occasion: "", date: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi! I'd like to book an appointment.\nName: ${formData.name}\nPhone: ${formData.phone}\nOccasion: ${formData.occasion}\nDate: ${formData.date}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/919113845518?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-gradient-section" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Book Your Appointment Today</h2>
          <p className="section-subtitle">Ready to look your absolute best? Get in touch with us</p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {contactCards.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="card-luxury rose-gold-border text-center p-4 hover:scale-105 transition-transform"
            >
              <span className="text-3xl">{c.icon}</span>
              <h3 className="font-heading text-sm font-semibold text-foreground mt-2">{c.title}</h3>
              <p className="font-body text-xs text-muted-foreground mt-1">{c.detail}</p>
            </motion.a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card-luxury rose-gold-border space-y-5"
          >
            {[
              { name: "name" as const, placeholder: "Your Name", type: "text" },
              { name: "phone" as const, placeholder: "Phone Number", type: "tel" },
              { name: "occasion" as const, placeholder: "Occasion (e.g., Wedding, Party)", type: "text" },
              { name: "date" as const, placeholder: "Preferred Date", type: "date" },
            ].map((field) => (
              <input
                key={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                required
              />
            ))}
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
            />
            <button type="submit" className="btn-primary-luxury w-full">
              Book Now ✨
            </button>
          </motion.form>

          {/* QR / CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="card-luxury rose-gold-border text-center flex flex-col items-center justify-center min-h-[300px]"
          >
            <div className="w-48 h-48 rounded-2xl bg-muted flex items-center justify-center mb-6">
              <div className="text-center">
                <span className="text-5xl">📱</span>
                <p className="font-body text-xs text-muted-foreground mt-2">QR Code</p>
              </div>
            </div>
            <p className="font-heading text-lg font-semibold text-foreground">Scan to Book Instantly</p>
            <p className="font-body text-sm text-muted-foreground mt-1">Point your camera to book via WhatsApp</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
