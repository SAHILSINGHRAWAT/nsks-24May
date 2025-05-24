"use client"

import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function CtaSection() {
  const [sectionRef, isVisible] = useScrollAnimation()

  return (
    <section ref={sectionRef} className="py-16 px-4 md:px-6 lg:px-8 bg-primary text-white">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className={`text-3xl font-bold mb-4 scroll-animate-down ${isVisible ? 'visible' : ''}`}>Ready to Start Your Project?</h2>
        <p className={`max-w-2xl mx-auto mb-8 scroll-animate-scale ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          Contact our team of experts today to discuss your cable management requirements and get customized solutions
          for your specific needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg" asChild className={`scroll-animate-left ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
            <a href="#contact">Request a Quote</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className={`bg-transparent text-white border-white hover:bg-white/20 scroll-animate-right ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.7s' }}
            asChild
          >
            <a href="/products">Explore Products</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
