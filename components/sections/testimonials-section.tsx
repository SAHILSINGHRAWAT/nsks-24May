"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const testimonials = [
  {
    id: 1,
    content:
      "NSKS Cable Trays provided exceptional quality products for our data center project. Their perforated cable trays offered excellent ventilation and were easy to install. The technical support team was responsive and helpful throughout the project.",
    author: "Rajesh Kumar",
    position: "Project Manager",
    company: "Tech Solutions Ltd",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    content:
      "We've been using NSKS Cable Trays for multiple industrial projects over the past 5 years. Their ladder cable trays are robust and durable, perfect for our heavy-duty applications. The custom solutions they provided for our unique requirements were impressive.",
    author: "Priya Sharma",
    position: "Electrical Engineer",
    company: "Industrial Systems Inc",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    content:
      "The quality and durability of NSKS Cable Trays are unmatched in the industry. Their products have consistently exceeded our expectations, and their team's expertise in cable management solutions has been invaluable for our complex projects.",
    author: "Amit Patel",
    position: "Construction Director",
    company: "BuildRight Constructions",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [sectionRef, isVisible] = useScrollAnimation()
  const [headerRef, isHeaderVisible] = useScrollAnimation()
  const [testimonialRef, isTestimonialVisible] = useScrollAnimation()

  const next = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 font-sans">
      <div className="container mx-auto max-w-5xl">
        <div ref={headerRef} className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 drop-shadow-sm scroll-animate-down ${isHeaderVisible ? 'visible' : ''}`}>
            What Our Clients Say
          </h2>
          <p className={`text-lg md:text-xl text-gray-700 max-w-2xl mx-auto scroll-animate-scale ${isHeaderVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            Hear from our satisfied customers about their experience with NSKS Cable Trays
          </p>
        </div>
        <div className="flex justify-center">
          <div ref={testimonialRef} className={`relative w-full max-w-4xl bg-white/80 rounded-2xl shadow-2xl p-10 md:p-14 flex flex-col gap-8 scroll-animate-scale ${isTestimonialVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
            <Quote className="absolute left-8 top-8 text-blue-200 w-16 h-16 md:w-24 md:h-24 -z-0" />
            <p className="text-xl md:text-2xl italic font-medium text-gray-800 z-10">
              "{testimonials[current].content}"
            </p>
            <div className="flex items-center gap-4 mt-4 z-10">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 border-2 border-blue-100 flex items-center justify-center">
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].author}
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{testimonials[current].author}</div>
                <div className="text-gray-600 text-sm">
                  {testimonials[current].position}, {testimonials[current].company}
                </div>
              </div>
            </div>
            {/* Navigation and indicators */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 rounded-full transition-colors border-none outline-none ${idx === current ? "bg-blue-500" : "bg-blue-200"}`}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-blue-200 flex items-center justify-center text-blue-500 hover:bg-blue-100 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-blue-200 flex items-center justify-center text-blue-500 hover:bg-blue-100 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
