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
    <main className="flex flex-col min-h-screen">
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
      <a
        href="https://wa.me/7536081635"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 bg-[#25D366] rounded-full border-4 border-white shadow-xl p-3 md:p-4 flex items-center justify-center hover:bg-[#1ebe57] transition-colors"
        style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.22)' }}
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 24 24"
          className="text-white animate-float w-8 h-8 md:w-[38px] md:h-[38px]"
        >
          <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.366.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 6.13h-.001a9.87 9.87 0 0 1-4.988-1.358l-.358-.213-3.711.974.993-3.617-.233-.372A9.86 9.86 0 0 1 1.67 11.99c0-5.45 4.436-9.877 9.89-9.877 2.64 0 5.122 1.03 6.988 2.899a9.825 9.825 0 0 1 2.893 6.978c-.003 5.45-4.44 9.877-9.879 9.877zm8.413-18.29A11.815 11.815 0 0 0 11.56 0C5.19 0 0 5.187 0 11.555c0 2.04.531 4.027 1.537 5.78L.057 23.25a1.13 1.13 0 0 0 1.393 1.393l5.92-1.555a11.52 11.52 0 0 0 4.19.8h.005c6.37 0 11.56-5.187 11.56-11.555 0-3.084-1.202-5.983-3.39-8.17z"/>
        </svg>
        <style jsx global>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-16px); }
          }
          .animate-float {
            animation: float 2.5s ease-in-out infinite;
          }
        `}</style>
      </a>
    </main>
  )
}
