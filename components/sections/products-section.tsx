import Image from "next/image"
import { ArrowRight } from "lucide-react"
import ImageErrorBoundary from "@/components/ui/image-error-boundary"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const productCategories = [
  {
    id: "perforated-cable-trays",
    name: "Perforated Cable Trays",
    description: "Ventilated trays with perforations for heat dissipation and cable management",
    image: "/images/PERFORATED CABLE TRAY-02.JPG",
  },
  {
    id: "ladder-cable-trays",
    name: "Ladder Cable Trays",
    description: "Heavy-duty trays ideal for large cables and high load requirements",
    image: "/images/F75-LADDER.JPG",
  },
  {
    id: "raceways",
    name: "Raceways",
    description: "Enclosed pathways for protecting and organizing cables in various environments",
    image: "/images/JOGGLED RACEWAY WITH CVR.JPG",
  },
  {
    id: "junction-boxes",
    name: "Junction Boxes",
    description: "Secure enclosures for cable connections and electrical junctions",
    image: "/images/CEILING JUNCTION BOX.JPG",
  },
  {
    id: "cable-tray-accessories",
    name: "Cable Tray Accessories",
    description: "Complementary components to enhance cable tray installations",
    image: "/images/cable duct accessories-01--clr.JPG",
  },
  {
    id: "cable-tray-support-systems",
    name: "Cable Tray Support Systems",
    description: "Robust supports for secure installation of cable management systems",
    image: "/images/COUPLING TRAYS.JPG",
  },
  {
    id: "strut-channel-support-systems",
    name: "Strut Channel Support Systems",
    description: "Versatile mounting solutions for electrical and mechanical applications",
    image: "/images/F75-V- COUPLING TRAYS.JPG",
  },
  {
    id: "cable-binders",
    name: "Cable Binders",
    description: "Secure fastening solutions for organizing and bundling cables",
    image: "/images/BOLTED RUNG LADDER TRAI ACCSERS- 01.JPG",
  },
]

export default function ProductsSection() {
  return (
    <section id="products" className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Product Range</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of cable management solutions designed for durability, efficiency, and ease
            of installation. All our products meet international quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((product) => (
            <Card key={product.id} className="overflow-hidden group">
              <div className="relative h-48">
                <ImageErrorBoundary
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                <a
                  href="#contact"
                  className="!bg-blue-200 !text-blue-800 font-bold inline-flex items-center text-sm px-4 py-2 rounded-full border border-blue-300 shadow-sm transition-colors duration-200 hover:!bg-white hover:!text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  View Details <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Looking for a specific product or have custom requirements? Contact our team for personalized assistance.
          </p>
          <Button size="lg" asChild>
            <a href="#contact">Request Product Catalog</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
