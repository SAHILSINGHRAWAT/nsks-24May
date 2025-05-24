"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function IntroSection() {
  const [sectionRef, isVisible] = useScrollAnimation()
  const [contentRef, isContentVisible] = useScrollAnimation()
  const [imageRef, isImageVisible] = useScrollAnimation()

  return (
    <section ref={sectionRef} className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className={`scroll-animate-left ${isContentVisible ? 'visible' : ''}`}>
            <h2 className={`text-3xl font-extrabold tracking-tight mb-6 text-black drop-shadow-sm scroll-animate-left ${isContentVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>Leading Cable Tray Manufacturer in India</h2>
            <p className={`text-black mb-6 scroll-animate-left ${isContentVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
              NSKS Cable Trays Pvt Ltd is a premier manufacturer of high-quality cable management systems with over 20
              years of experience. Our products are designed to meet international standards and provide reliable
              solutions for electrical infrastructure across industrial, commercial, and residential applications.
            </p>
            <p className={`text-black mb-8 scroll-animate-left ${isContentVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
              We pride ourselves on innovation, quality control, and customer satisfaction, making us the preferred
              choice for engineers, contractors, and project managers nationwide. Our state-of-the-art manufacturing
              facility ensures precision engineering and consistent quality in every product we deliver.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className={`flex items-start group bg-gray-50 rounded-lg p-4 shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg scroll-animate-scale ${isContentVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.8s' }}>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 animate-pulse-slow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-black">Quality Assured</h3>
                  <p className="text-black text-sm">ISO 9001:2015 certified manufacturing</p>
                </div>
              </div>
              <div className={`flex items-start group bg-gray-50 rounded-lg p-4 shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg scroll-animate-scale ${isContentVisible ? 'visible' : ''}`} style={{ transitionDelay: '1s' }}>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 animate-pulse-slow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-black">Fast Delivery</h3>
                  <p className="text-black text-sm">Nationwide shipping network</p>
                </div>
              </div>
              <div className={`flex items-start group bg-gray-50 rounded-lg p-4 shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg scroll-animate-scale ${isContentVisible ? 'visible' : ''}`} style={{ transitionDelay: '1.2s' }}>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 animate-pulse-slow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-black">Custom Solutions</h3>
                  <p className="text-black text-sm">Tailored to your specific needs</p>
                </div>
              </div>
              <div className={`flex items-start group bg-gray-50 rounded-lg p-4 shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg scroll-animate-scale ${isContentVisible ? 'visible' : ''}`} style={{ transitionDelay: '1.4s' }}>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 animate-pulse-slow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-black">Expert Support</h3>
                  <p className="text-black text-sm">Technical assistance available</p>
                </div>
              </div>
            </div>
            <Button asChild className={`scroll-animate-left ${isContentVisible ? 'visible' : ''}`} style={{ transitionDelay: '1.6s' }}>
              <a href="#about">
                Learn More About Us <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div ref={imageRef} className={`relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-blue-100 scroll-animate-right ${isImageVisible ? 'visible' : ''}`}>
            <Image
              src="/images/steel-factories.jpg"
              alt="Manufacturing facility"
              fill
              className="object-cover animate-float"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <Image
              src="/images/steel-factories.jpg"
              alt="Manufacturing facility"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
