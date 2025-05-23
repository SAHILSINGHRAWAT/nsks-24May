import Image from "next/image"
import { CheckCircle, Factory, HardHat, Cog } from "lucide-react"
import ImageErrorBoundary from "@/components/ui/image-error-boundary"

export default function AboutSection() {
  return (
    <section
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
            <p className="text-black mb-4 text-base md:text-lg">
              Founded in 2000, NSKS Cable Trays began as a small workshop with a vision to revolutionize cable
              management systems in India. Over the years, we have grown into a leading manufacturer with
              state-of-the-art production facilities spanning over 50,000 square feet.
            </p>
            <p className="text-black mb-6 text-base md:text-lg">
              Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep
              understanding of industry needs. Today, we serve clients across multiple sectors including construction,
              telecommunications, power generation, and manufacturing.
            </p>
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
              <p className="text-3xl font-bold mb-1">20+</p>
              <p className="text-sm">Years of Excellence in Manufacturing</p>
            </div>
          </div>
        </div>
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          {[
            { value: "500+", label: "Projects Completed" },
            { value: "300+", label: "Satisfied Clients" },
            { value: "50+", label: "Product Variants" },
            { value: "15+", label: "Industry Sectors Served" },
          ].map((stat, i) => (
            <div
              key={stat.value}
              className="bg-white p-6 rounded-2xl border border-blue-500 shadow-md hover:shadow-2xl transition-transform duration-300 hover:scale-105 cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${0.6 + i * 0.1}s` }}
            >
              <p className="text-4xl font-extrabold text-blue-600 mb-2 group-hover:text-black transition-colors duration-300 tracking-wider drop-shadow">
                {stat.value}
              </p>
              <p className="text-gray-700 group-hover:text-black transition-colors duration-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
