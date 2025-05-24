"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const featuredProducts = [
  {
    id: "perforated-cable-trays",
    name: "Perforated Cable Trays",
    description: "Ventilated trays with perforations for heat dissipation and cable management",
    image: "/images/PERFORATED CABLE TRAY-01.JPG",
  },
  {
    id: "ladder-cable-trays",
    name: "Ladder Cable Trays",
    description: "Heavy-duty trays ideal for large cables and high load requirements",
    image: "/images/F100- LADDER.JPG",
  },
  {
    id: "raceways",
    name: "Raceways",
    description: "Enclosed pathways for protecting and organizing cables in various environments",
    image: "/images/INWARD FLANGED WIRE DUCT WITH COVER.JPG",
  },
  {
    id: "junction-boxes",
    name: "Junction Boxes",
    description: "Secure enclosures for cable connections and electrical junctions",
    image: "/images/CEILING JUNCTION BOX.JPG",
  },
]

export default function FeaturedProducts() {
  const [sectionRef, isVisible] = useScrollAnimation()
  const [headerRef, isHeaderVisible] = useScrollAnimation()
  const [productsRef, isProductsVisible] = useScrollAnimation()

  return (
    <section ref={sectionRef} className="py-12 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div ref={headerRef} className={`scroll-animate-left ${isHeaderVisible ? 'visible' : ''}`}>
            <h2 className={`text-3xl font-extrabold tracking-tight mb-2 text-black drop-shadow-sm scroll-animate-left ${isHeaderVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>Featured Products</h2>
            <p className={`text-black scroll-animate-left ${isHeaderVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>Explore our most popular cable management solutions</p>
          </div>
          <Button variant="outline" asChild className={`mt-4 md:mt-0 scroll-animate-right ${isHeaderVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
            <Link href="/products" className="flex items-center">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div ref={productsRef} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className={`bg-white border rounded-lg overflow-hidden shadow-md group transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer scroll-animate-scale ${isProductsVisible ? 'visible' : ''}`} style={{ transitionDelay: `${0.2 + index * 0.2}s` }}>
              <Link href={`/products/${product.id}`} className="block">
                <div className="relative aspect-square">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 group-hover:opacity-90 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-bold mb-2 text-black text-sm sm:text-lg group-hover:underline transition-colors duration-200">{product.name}</h3>
                  <p className="text-xs sm:text-sm text-black line-clamp-2">{product.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
