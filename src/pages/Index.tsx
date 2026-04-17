import React, { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProcessSection from "@/components/ProcessSection";
import ProductsSection from "@/components/ProductsSection";
import PackagesSection from "@/components/PackagesSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import StatsSection from "@/components/StatsSection";

const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProcessSection />
      <ProductsSection />
      <PackagesSection />
      <Suspense fallback={<div className="py-20 text-center text-muted-foreground"></div>}>
        <TestimonialsSection />
        <ContactSection />
        <FAQSection />
      </Suspense>
    </main>
    <Footer />
    <FloatingButtons />
  </div>
);

export default Index;
