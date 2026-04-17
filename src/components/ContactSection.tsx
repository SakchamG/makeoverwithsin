import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MessageCircle, CalendarIcon, Clock, User, MapPin, ChevronDown } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import HoverButton from "./ui/HoverButton";

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
  const [showQuickContact, setShowQuickContact] = useState(false);

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
          <motion.div
            onClick={() => setShowQuickContact(true)}
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
            <HoverButton as="span" className="text-sm px-6 py-2.5">Call Now</HoverButton>
          </motion.div>

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
            <HoverButton as="span" className="text-sm px-6 py-2.5">Book via WhatsApp</HoverButton>
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
            <p className="font-body text-xs text-green-600/80 mt-1 font-medium">⚡ Usually replies within 10 minutes</p>
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

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <HoverButton
                as="button"
                onClick={handleBook}
                disabled={!isFormValid}
                className={cn(
                  "w-full text-base gap-2 flex flex-1",
                  !isFormValid && "opacity-50 cursor-not-allowed"
                )}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </HoverButton>

              <HoverButton
                as="a"
                href="tel:+919113845518"
                className="w-full text-base gap-2 flex flex-1 items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Instant Call
              </HoverButton>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Quick Contact Dialog */}
      <Dialog open={showQuickContact} onOpenChange={setShowQuickContact}>
        <DialogContent className="max-w-xs sm:max-w-sm rounded-2xl p-8">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-center text-foreground">
              Contact Us
            </DialogTitle>
            <DialogDescription className="font-body text-center text-muted-foreground mt-2">
              How would you like to connect right now?
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4 mt-6">
            <HoverButton
              as="a"
              href="https://wa.me/919113845518?text=Hello%20Sindhu!%20I%20am%20interested%20in%20your%20makeup%20services%20and%20would%20like%20to%20know%20more%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-base gap-2 flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </HoverButton>

            <HoverButton
              as="a"
              href="tel:+919113845518"
              className="w-full text-base gap-2 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </HoverButton>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
