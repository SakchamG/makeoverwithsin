import { Instagram, MapPin, Mail, MessageCircle, Phone } from "lucide-react";

const quickLinks = ["Home", "About", "Services", "Gallery", "Packages", "Contact"];
const serviceLinks = ["Bridal Makeup", "Party Makeup", "HD Makeup", "Airbrush Makeup", "Hairstyling"];

const Footer = () => {
  const comingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Stay Tuned: Coming Soon");
  };

  return (
  <footer className="bg-foreground text-primary-foreground/90 py-16">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="font-heading text-2xl font-bold text-primary-foreground mb-3">Makeover with Sin</h2>
          <p className="font-body text-sm leading-relaxed opacity-70">
            Thank you for choosing us to enhance your beauty. Every face deserves to shine.
          </p>
          <div className="flex gap-3 mt-4">
            <button onClick={comingSoon} className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-lg hover:bg-primary/50 transition-colors cursor-pointer" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </button>
            <a href="https://wa.me/919113845518" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-lg hover:bg-primary/50 transition-colors cursor-pointer" aria-label="WhatsApp">
              <MessageCircle className="w-5 h-5" />
            </a>
            <button onClick={comingSoon} className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-lg hover:bg-primary/50 transition-colors cursor-pointer" aria-label="Google Maps">
              <MapPin className="w-5 h-5" />
            </button>
            <a href="mailto:makeoverwithsim@gmail.com" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-lg hover:bg-primary/50 transition-colors cursor-pointer" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="font-body text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Services</h3>
          <ul className="space-y-2">
            {serviceLinks.map((l) => (
              <li key={l}>
                <a href="#services" className="font-body text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Contact</h3>
          <div className="space-y-4 font-body text-sm opacity-90">
            <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 9113845518</p>
            <p className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp Available</p>
            <p className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors" onClick={comingSoon}><Instagram className="w-4 h-4" /> @makeoverwithsin</p>
            <p className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors" onClick={comingSoon}><MapPin className="w-4 h-4" /> Bangalore Studio</p>
            <p className="flex items-center gap-2 break-all"><Mail className="w-4 h-4 shrink-0" /> makeoverwithsim@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        <p className="font-body text-sm opacity-90">
          © {new Date().getFullYear()} Makeover with Sin. All rights reserved.
        </p>
        <div className="flex gap-4 font-body text-xs opacity-90">
          <a href="#" onClick={comingSoon} className="hover:opacity-100 hover:text-primary transition-all">Privacy Policy</a>
          <a href="#" onClick={comingSoon} className="hover:opacity-100 hover:text-primary transition-all">Terms & Conditions</a>
          <a href="#" onClick={comingSoon} className="hover:opacity-100 hover:text-primary transition-all">Cancellation Policy</a>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
