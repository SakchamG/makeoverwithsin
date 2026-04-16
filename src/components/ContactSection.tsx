import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MessageCircle, CalendarIcon, Clock, User, MapPin, ChevronDown } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const packages = [
  { id: "basic", name: "Basic Glam", price: "₹2,999" },
  { id: "premium", name: "Premium Glam", price: "₹5,999" },
  { id: "bridal", name: "Bridal Luxury", price: "₹12,999" },
  { id: "custom", name: "Custom Package (Discuss with Artist)", price: "Custom" },
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM",
];

const occasions = [
  "Wedding / Bridal", "Engagement", "Reception", "Party / Event",
  "Photoshoot", "Festival", "Birthday", "Other",
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [showBooking, setShowBooking] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [occasion, setOccasion] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const handleBook = () => {
    const pkg = packages.find((p) => p.id === selectedPackage);
    const lines = [
      `✨ *New Appointment Booking* ✨`,
      ``,
      `👤 *Name:* ${name}`,
      `📞 *Phone:* ${phone}`,
      `📍 *Address:* ${address}`,
      `🎉 *Occasion:* ${occasion}`,
      `💎 *Package:* ${pkg ? `${pkg.name} (${pkg.price})` : "Not selected"}`,
      `📅 *Date:* ${date ? format(date, "PPP") : "Not selected"}`,
      `🕐 *Time:* ${time || "Not selected"}`,
      notes ? `📝 *Notes:* ${notes}` : "",
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/919113845518?text=${encodeURIComponent(lines)}`, "_blank");
    setShowBooking(false);
  };

  const isFormValid = name.trim() && phone.trim() && address.trim() && occasion && selectedPackage && date && time;

  return (
    <section id="contact" className="section-padding bg-gradient-section" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Book Your Appointment</h2>
          <p className="section-subtitle">
            Choose how you'd like to book — we're just a tap away
          </p>
        </motion.div>

        {/* Two booking options */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <motion.a
            href="tel:+919113845518"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-luxury rose-gold-border text-center flex flex-col items-center gap-4 cursor-pointer group"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground">Call Us</h3>
            <p className="font-body text-sm text-muted-foreground">+91 9113845518</p>
            <span className="btn-primary-luxury text-sm px-6 py-2.5">Call Now</span>
          </motion.a>

          <motion.button
            onClick={() => setShowBooking(true)}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-luxury rose-gold-border text-center flex flex-col items-center gap-4 cursor-pointer group w-full"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
              <MessageCircle className="w-7 h-7 text-green-500" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground">WhatsApp</h3>
            <p className="font-body text-sm text-muted-foreground">Book with all details</p>
            <span className="btn-primary-luxury text-sm px-6 py-2.5">Book via WhatsApp</span>
          </motion.button>
        </div>
      </div>

      {/* WhatsApp Booking Dialog */}
      <Dialog open={showBooking} onOpenChange={setShowBooking}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-foreground">
              Book Your Appointment
            </DialogTitle>
            <DialogDescription className="font-body text-muted-foreground">
              Fill in your details and we'll connect you on WhatsApp
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-2">
            {/* Name */}
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Phone Number *</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Address *</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Your full address"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            {/* Occasion */}
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Occasion *</label>
              <div className="relative">
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border font-body text-sm text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <option value="">Select occasion</option>
                  {occasions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Package */}
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Package *</label>
              <div className="grid grid-cols-2 gap-2">
                {packages.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={cn(
                      "p-3 rounded-xl border text-left transition-all font-body text-sm",
                      selectedPackage === pkg.id
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-background text-muted-foreground hover:border-primary/50"
                    )}
                  >
                    <span className="font-medium block text-foreground">{pkg.name}</span>
                    <span className="text-xs text-primary">{pkg.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Preferred Date *</label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      "w-full flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-background font-body text-sm text-left",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < new Date()}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Time */}
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Preferred Time *</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border font-body text-sm text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <option value="">Select time</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Additional Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any special requests or requirements..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
            </div>

            <button
              type="button"
              onClick={handleBook}
              disabled={!isFormValid}
              className={cn(
                "btn-primary-luxury w-full text-base gap-2",
                !isFormValid && "opacity-50 cursor-not-allowed"
              )}
            >
              <MessageCircle className="w-5 h-5" />
              Book via WhatsApp
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
