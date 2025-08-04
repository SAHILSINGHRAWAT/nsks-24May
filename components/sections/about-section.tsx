"use client"

import Image from "next/image"
import { CheckCircle, Factory, HardHat, Cog } from "lucide-react"
import ImageErrorBoundary from "@/components/ui/image-error-boundary"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import Counter from "@/components/ui/counter"

export default function AboutSection() {
  const [sectionRef, isVisible] = useScrollAnimation()
  const [statsRef, isStatsVisible] = useScrollAnimation()
  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-blue-200 font-modern animate-fade-in"
      style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-black drop-shadow-lg relative inline-block">
            About NSKS Cable Trays
            <span className="block h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full w-1/2 mx-auto mt-2 animate-underline-grow"></span>
          </h2>
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Leading the industry with innovative cable management solutions since 2000
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center gap-2">
              <span className="inline-block w-2 h-8 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              Our Story
            </h3>
            <p className="text-black mb-4 text-base md:text-base">
              The company was established in 2018 with the name - NSK Cable Trays. The company was Initiated as a manufacturing proprietor firm and was performing well in the market. However, the founders had bigger dreams and aimed to expand their business. Hence, in September 2020 the company went on to convert itself to NSKS Cable Trays Pvt Ltd.
            </p>
            <p className="text-black mb-4 text-base md:text-base">
              The professionals at NSKS Cable Trays have put in many efforts and time in conducting a plethora of research activities. Over the years, these researches have become a base for us to design and develop a huge and diverse product line suits the customers' needs and wants.
            </p>
            <p className="text-black mb-4 text-base md:text-base">In our two-year journey, we have always thrived hard to offer the best to our clients. We believe in hustling each day by providing innovative and the right business solutions throughout. For NSKS Cable Trays, client satisfaction is the utmost priority. You can rely on our quality, and we assure you that we will never disappoint you. </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black mt-10 flex items-center gap-2">
              <span className="inline-block w-2 h-8 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              Our Values
            </h3>
            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <Factory className="w-14 h-14 text-blue-500 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-700 drop-shadow-lg animate-fade-in" />
                <div>
                  <h4 className="text-xl font-bold text-black mb-1">Our Milestones</h4>
                  <p className="text-black text-base md:text-lg">
                    The company has hit a century, as there are more than 100 brands that have trusted us over a short period.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5 group">
                <HardHat className="w-14 h-14 text-blue-500 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-700 drop-shadow-lg animate-fade-in" style={{ animationDelay: "0.1s" }} />
                <div>
                  <h4 className="text-xl font-bold text-black mb-1">Vision</h4>
                  <p className="text-black text-base md:text-lg">
                    To continuously provide premium quality products to become the number one player in the cable tray manufacturing industry.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5 group">
                <Cog className="w-14 h-14 text-blue-500 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-700 drop-shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }} />
                <div>
                  <h4 className="text-xl font-bold text-black mb-1">Mission</h4>
                  <p className="text-black text-base md:text-lg">
                    To constantly grow as a company by manufacturing super quality and customized cable support management products
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-blue-100 hover:scale-105 transition-transform duration-500">
              <Image
                src="/images/steel-factories.jpg"
                alt="NSKS Cable Trays Manufacturing Facility"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-blue-400 text-white p-6 rounded-lg shadow-lg max-w-[200px] hidden md:block animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <p className="text-3xl font-bold mb-1">
                <Counter
                  end={20}
                  suffix="+"
                  duration={2500}
                  delay={500}
                  isVisible={isVisible}
                />
              </p>
              <p className="text-sm">Years of Excellence in Manufacturing</p>
            </div>
          </div>
        </div>
        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          {[
            { value: 500, suffix: "+", label: "Projects Completed", delay: 0 },
            { value: 300, suffix: "+", label: "Satisfied Clients", delay: 200 },
            { value: 50, suffix: "+", label: "Product Variants", delay: 400 },
            { value: 15, suffix: "+", label: "Industry Sectors Served", delay: 600 },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="bg-white p-6 rounded-2xl border border-blue-500 shadow-md hover:shadow-2xl transition-transform duration-300 hover:scale-105 cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${0.6 + i * 0.1}s` }}
            >
              <p className="text-4xl font-extrabold text-blue-600 mb-2 group-hover:text-black transition-colors duration-300 tracking-wider drop-shadow">
                <Counter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2000}
                  delay={stat.delay}
                  isVisible={isStatsVisible}
                />
              </p>
              <p className="text-gray-700 group-hover:text-black transition-colors duration-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
