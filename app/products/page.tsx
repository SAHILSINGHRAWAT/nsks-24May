import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const productCategories = [
  {
    id: "perforated-cable-trays",
    name: "Perforated Cable Trays",
    description: "Ventilated trays with perforations for heat dissipation and cable management",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "ladder-cable-trays",
    name: "Ladder Cable Trays",
    description: "Heavy-duty trays ideal for large cables and high load requirements for extra strength",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "raceways",
    name: "Raceways",
    description: "Enclosed pathways for protecting and organizing cables in various environments",
    image: "/placeholder.svg?height=300&width=400",
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
    id: "support-systems",
    name: "Support Systems",
    description: "Robust supports for secure installation of cable management systems",
    image: "/images/90 vertical ELBOW INSIDE.JPG",
  },
  {
    id: "strut-channel-support-systems",
    name: "Strut Channel Support Systems",
    description: "Versatile mounting solutions for electrical and mechanical applications",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "cable-binders",
    name: "Cable Binders",
    description: "Secure fastening solutions for organizing and bundling cables",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "earthing-strips",
    name: "Earthing Strips",
    description: "Essential components for electrical safety and grounding",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "bottle-brackets",
    name: "Bottle Brackets",
    description: "Specialized mounting solutions for specific applications",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "solar-support-structures",
    name: "Solar Support Structures",
    description: "Durable frameworks for mounting solar panels and related equipment",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function ProductsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image src="/services/our_products.jpeg" alt="Products" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center" style={{ color: 'white' }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Comprehensive range of high-quality cable management solutions
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-black">Product Categories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of cable management solutions designed for durability, efficiency, and
              ease of installation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category) => {
              let imagePath = category.image;
              if (category.name === "Perforated Cable Trays") imagePath = "/images/PERFORATED CABLE TRAY-01.JPG";
              if (category.name === "Ladder Cable Trays") imagePath = "/images/F75-LADDER.JPG";
              if (category.name === "Raceways") imagePath = "/images/PLAIN RACEWAY WITH CVE-SLEEV.JPG";
              if (category.name === "Junction Boxes") imagePath = "/images/CEILING JUNCTION BOX.JPG";
              if (category.name === "Cable Tray Accessories") imagePath = "/images/cable duct accessories-01--clr.JPG";
              if (category.name === "Support Systems") imagePath = "/images/90 vertical ELBOW INSIDE.JPG";
              if (category.name === "Strut Channel Support Systems") imagePath = "/images/steel-factories.jpg";
              if (category.name === "Cable Binders") imagePath = "/images/joogled floor wire duct with cvr.JPG";
              if (category.name === "Earthing Strips") imagePath = "/images/iso-cert.JPG";
              if (category.name === "Bottle Brackets") imagePath = "/images/dome cover.JPG";
              if (category.name === "Solar Support Structures") imagePath = "/images/vertical elbow OUTSIDE.JPG";
              return (
                <Card key={category.id} className="overflow-hidden group">
                  <div className="relative h-48">
                    <Image
                      src={imagePath || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/products/${category.id}`} className="text-white hover:text-blue-500 transition-colors">
                        View Details <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl text-blue-900 font-bold tracking-tight mb-4">Custom Solutions</h2>
              <p className="text-black mb-5">
                Can't find exactly what you need? We specialize in creating custom cable management solutions tailored
                to your specific requirements. Our engineering team works closely with you to design and manufacture
                products that address your unique challenges.
              </p>
              <ul className="space-y-3 mb-6 text-blue-900">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Custom dimensions and configurations</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Special materials for harsh environments</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Unique mounting solutions</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Project-specific design requirements</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contact">Request Custom Solution</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image src="services/Need Custom Services.png" alt="Custom solutions" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
