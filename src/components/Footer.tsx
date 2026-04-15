const quickLinks = ["Home", "About", "Services", "Gallery", "Packages", "Contact"];
const serviceLinks = ["Bridal Makeup", "Party Makeup", "HD Makeup", "Airbrush Makeup", "Hairstyling"];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/80 py-16">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-3">GlamBeauty</h3>
          <p className="font-body text-sm leading-relaxed opacity-70">
            Thank you for choosing us to enhance your beauty. Every face deserves to shine.
          </p>
          <div className="flex gap-3 mt-4">
            {["📸", "💬", "📧"].map((icon, i) => (
              <span key={i} className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-lg hover:bg-primary/50 transition-colors cursor-pointer">
                {icon}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="font-body text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Services</h4>
          <ul className="space-y-2">
            {serviceLinks.map((l) => (
              <li key={l}>
                <a href="#services" className="font-body text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Contact</h4>
          <div className="space-y-2 font-body text-sm opacity-70">
            <p>📞 +91 9113845518</p>
            <p>💬 WhatsApp Available</p>
            <p>📸 @premiumbeautymakeup</p>
            <p>✉️ hello@glambeauty.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
        <p className="font-body text-sm opacity-50">
          © {new Date().getFullYear()} GlamBeauty. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
