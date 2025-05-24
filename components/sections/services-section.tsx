"use client"

import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const services = [
  {
    id: "planning",
    name: "Planning & Consultation",
    description: "Expert guidance on cable management system design and planning",
    image: "/services/Planning & Consultation.jpeg",
  },
  {
    id: "custom-design",
    name: "Custom Design Solutions",
    description: "Tailored cable management systems for unique project requirements",
    image: "/services/Custom Design Solutions.jpeg",
  },
  {
    id: "technical-support",
    name: "Technical Support",
    description: "Comprehensive assistance throughout your project lifecycle",
    image: "/services/Technical Support.jpeg",
  },
  {
    id: "site-inspection",
    name: "Site Inspection & Assessment",
    description: "On-site evaluation to determine optimal cable management solutions",
    image: "/services/Site Inspection & Assessment.jpeg",
  },
]

export default function ServicesSection() {
  const [sectionRef, isVisible] = useScrollAnimation()
  const [headerRef, isHeaderVisible] = useScrollAnimation()
  const [servicesRef, isServicesVisible] = useScrollAnimation()
  const [ctaRef, isCtaVisible] = useScrollAnimation()

  return (
    <section ref={sectionRef} id="services" className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div ref={headerRef} className="text-center mb-12">
          <h2 className={`text-3xl font-bold tracking-tight mb-4 text-blue-900 scroll-animate-down ${isHeaderVisible ? 'visible' : ''}`}>Our Services</h2>
          <p className={`text-gray-700 max-w-3xl mx-auto scroll-animate-scale ${isHeaderVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            We offer comprehensive support for all your cable management needs, from initial planning through
            installation and beyond.
          </p>
        </div>

        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group border border-blue-100 scroll-animate-scale ${isServicesVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">{service.name}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:animate-pulse" />
                    <span className="text-gray-700 text-sm">Expert consultation with industry specialists</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:animate-pulse" />
                    <span className="text-gray-700 text-sm">Comprehensive documentation and support</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:animate-pulse" />
                    <span className="text-gray-700 text-sm">Tailored solutions for your specific requirements</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="#contact"
                    className="text-blue-600 font-medium inline-flex items-center transition-colors duration-200 hover:text-blue-800 hover:underline"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div ref={ctaRef} className={`mt-12 bg-white p-8 rounded-lg shadow-sm border border-blue-100 scroll-animate-up ${isCtaVisible ? 'visible' : ''}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`col-span-1 md:col-span-2 scroll-animate-left ${isCtaVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <h3 className={`text-2xl font-bold mb-4 text-blue-900 scroll-animate-left ${isCtaVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>Need Custom Services?</h3>
              <p className="text-gray-700 mb-6">
                Our team of experts is ready to provide personalized solutions for your specific project requirements.
                From initial consultation to final implementation, we ensure that your cable management system meets the
                highest standards of quality and efficiency.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 transition-transform duration-300 group-hover:animate-pulse" />
                  <span className="text-gray-700">Detailed project assessment and requirements analysis</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 transition-transform duration-300 group-hover:animate-pulse" />
                  <span className="text-gray-700">Custom design and engineering solutions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 transition-transform duration-300 group-hover:animate-pulse" />
                  <span className="text-gray-700">Comprehensive implementation support</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 transition-transform duration-300 group-hover:animate-pulse" />
                  <span className="text-gray-700">Post-installation maintenance and technical assistance</span>
                </div>
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="#contact">Request Custom Service</a>
              </Button>
            </div>
            <div className={`relative h-[200px] md:h-auto rounded-lg overflow-hidden border border-blue-100 scroll-animate-right ${isCtaVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
              <Image
                src="/services/Need Custom Services.png"
                alt="Custom Services"
                fill
                className="object-cover animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
