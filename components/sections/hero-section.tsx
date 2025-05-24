"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ImageErrorBoundary from "@/components/ui/image-error-boundary"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    title: "Perforated Cable Trays",
    description: "Superior ventilation and heat dissipation for optimal cable performance",
    image: "/images/PERFORATED CABLE TRAY-01.JPG",
    link: "/products",
  },
  {
    id: 2,
    title: "Ladder Cable Trays",
    description: "Heavy-duty support for large cables in industrial environments",
    image: "/images/F100- LADDER.JPG",
    link: "/products",
  },
  {
    id: 3,
    title: "Raceways",
    description: "Enclosed pathways for protecting cables in various applications",
    image: "/images/INWARD FLANGED WIRE DUCT WITH COVER.JPG",
    link: "/products",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative h-screen min-h-[600px] max-h-[800px] pt-[120px] md:pt-[140px]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-gray-100 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <ImageErrorBoundary
            src={slide.image}
            alt={slide.title}
            fill
            className="object-contain"
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
          <div className="absolute inset-0 flex items-end justify-end pb-12 md:pb-20 pr-4 md:pr-8">
            <div className="text-right text-black max-w-sm md:max-w-2xl">
              <h1 className="text-xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 leading-tight">{slide.title}</h1>
              <p className="text-xs md:text-lg mb-3 md:mb-6 leading-relaxed opacity-90">{slide.description}</p>
              <div className="flex flex-col md:flex-row gap-2 md:gap-3 items-end md:items-center">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white border-0 px-4 md:px-6 py-1.5 md:py-2.5 text-xs md:text-base font-medium h-8 md:h-10">
                  <a href={slide.link}>Explore Products</a>
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent text-white border border-white md:border-2 hover:bg-white hover:text-gray-900 px-4 md:px-6 py-1.5 md:py-2.5 text-xs md:text-base font-medium transition-all duration-300 h-8 md:h-10"
                >
                  <a href="#contact">Request Quote</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-10 opacity-70 hover:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-10 opacity-70 hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
