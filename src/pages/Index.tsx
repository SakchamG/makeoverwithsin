import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProcessSection from "@/components/ProcessSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PackagesSection from "@/components/PackagesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <StatsSection />
    <AboutSection />
    <ServicesSection />
    <WhyChooseSection />
    <ProcessSection />
    <ProductsSection />
    <TestimonialsSection />
    <PackagesSection />
    <ContactSection />
    <FAQSection />
    <Footer />
    <FloatingButtons />
  </div>
);

export default Index;
