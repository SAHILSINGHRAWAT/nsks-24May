"use client";

import FeaturedProducts from "@/components/featured-products"
import HeroSection from "@/components/sections/hero-section"
import IntroSection from "@/components/sections/intro-section"
import AboutSection from "@/components/sections/about-section"
import ServicesSection from "@/components/sections/services-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import ContactSection from "@/components/sections/contact-section"
import CtaSection from "@/components/sections/cta-section"
import { MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full max-w-full overflow-x-hidden">
      {/* Hero Section with Rotating Banner */}
      <HeroSection />

      {/* Company Introduction */}
      <IntroSection />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Why Choose Us */}
      <ServicesSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* About Us */}
      <AboutSection />

      {/* Contact Us */}
      <ContactSection />

      {/* Call to Action */}
      <CtaSection />

      {/* Floating WhatsApp Icon */}
    </main>
  )
}
