'use client'

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Download, CheckCircle } from "lucide-react"
import React from "react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This would typically come from a database or API
const productCategories = {
  "perforated-cable-trays": {
    name: "Perforated Cable Trays",
    description:
      "Our perforated cable trays provide excellent ventilation and heat dissipation for your cables, ensuring optimal performance and longevity.",
    longDescription:
      "A Perforated cable tray is a prominent category of cable tray that comes with holes in the bottom sheet and side rails, used for laying power and signal cables. Perforated cable trays have a strong structure that allows them to carry multiple cables of different types. These come with smooth edges that protect the wires from getting scratched. The cable trays are strong enough to withstand short circuits.The perforated cable trays are used to distribute electricity in departmental stores, airports, hospitals, and gyms. Perforated cable trays are flexible and easy to install. Overall, the maintenance is also low.",
    features: [
      "Comes up with seamless designs.",
      "The trays are durable and reliable. ",
      "Comes in loaded specifications",
      "Ideal for handling high pressure",
      "Stackable design for space efficiency",
      "Easy to Maintain",
    ],
    benefits: [
      "Extends cable lifespan by preventing overheating",
      "Reduces installation time and labor costs",
      "Allows for easy visual inspection of cables",
      "Provides flexibility for future cable additions or changes",
      "Suitable for indoor and outdoor applications with appropriate finishes",
    ],
    applications: [
      "Data centers and server rooms",
      "Commercial buildings",
      "Industrial facilities",
      "Power generation plants",
      "Telecommunications infrastructure",
      "Manufacturing facilities",
    ],
    specifications: [
      { name: "Material", value: "Pre-galvanized steel, Hot-dip galvanized steel, Stainless steel" },
      { name: "Width Range", value: "50mm to 600mm" },
      { name: "Height Range", value: "50mm to 100mm" },
      { name: "Length", value: "2.5m standard (custom lengths available)" },
      { name: "Load Capacity", value: "Up to 75kg/m depending on configuration" },
      { name: "Finish Options", value: "Pre-galvanized, Hot-dip galvanized, Powder coated, Stainless steel" },
      { name: "Perforation Pattern", value: "Standard 10mm diameter holes at 20mm centers" },
      { name: "Compliance", value: "NEMA VE 1, IEC 61537, BS EN 61537" },
    ],
    images: [
      "/new_Images/90 DEGREE HORIZONTAL BEND ..JPG",
      "/new_Images/90 DEGREE HORIZONTAL BEND ._1.JPG",
      "/new_Images/90 DEGREE HORIZONTAL BEND ._2.JPG",
      "/new_Images/90 DEGREE HORIZONTAL BEND..JPG",
      "/new_Images/90 DEGREE HORIZONTAL BEND._1.JPG",
      "/new_Images/90 DEGREE INTERNAL BEND BOLTED RUNG LADDER.JPG",
      "/new_Images/90 DEGREE VERTICAL EXTERNAL BEND ..JPG",
      "/new_Images/90 DEGREE VERTICAL EXTERNAL BEND ._1.JPG",
      "/new_Images/EQUAL TEE..JPG",
      "/new_Images/CENTERAL REDUCER ..JPG",
      "/new_Images/CENTERAL REDUCER ._1.JPG",
      "/new_Images/CROSS..JPG",
    ],
  },
  "ladder-cable-trays": {
    name: "Ladder Cable Trays",
    description:"Our Ladder cable trays are made up of high-quality materials, hence it is bound to have a very long working life.  Our ladder cable trays are made with high-grade MS & GI coating that works very well with high resistance.",
    longDescription:"Ladder cable trays are a typical kind of cable tray that gets constructed by joining two longitude channels with supporting horizontal rungs. The usual materials used for making Ladder cable trays are aluminum, FRP, or stainless steel that comes along with hot-dipped galvanized, epoxy, pre-galvanized, polyester, or powder coated surfaces. Due to the strong structure, the ladder cable trays provide complete protection from the high pressures. The primary use of the Ladder cable trays is in power plants or paper mills for laying power cables or control cables. ",
    features: [
      "High loading capabilities",
      "Longer life of service",
      "Air ventilation properties as the ladder is very spacious",
      "Suitable for multiple locations except elevator shafts",
      "Strong and robust structure that allows laying cables of different sizes",
    ],
    benefits: [
      "Ideal for supporting large and heavy cables",
      "Facilitates easy cable installation and changes",
      "Excellent heat dissipation prevents cable damage",
      "Reduces cable stress at support points",
      "Durable construction ensures long service life",
    ],
    applications: [
      "Power generation facilities",
      "Heavy industrial environments",
      "Manufacturing plants",
      "Oil and gas facilities",
      "Mining operations",
      "Utility infrastructure",
    ],
    specifications: [
      { name: "Material", value: "Pre-galvanized steel, Hot-dip galvanized steel, Stainless steel" },
      { name: "Width Range", value: "150mm to 900mm" },
      { name: "Height Range", value: "75mm to 150mm" },
      { name: "Length", value: "3m standard (custom lengths available)" },
      { name: "Load Capacity", value: "Up to 150kg/m depending on configuration" },
      { name: "Rung Spacing", value: "Standard 300mm (customizable)" },
      { name: "Finish Options", value: "Pre-galvanized, Hot-dip galvanized, Powder coated, Stainless steel" },
      { name: "Compliance", value: "NEMA VE 1, IEC 61537, BS EN 61537" },
    ],
    images: [
        "/new_Images/90 DEGREE EXTERNAL BEND BOLTED RUNG LADDER.JPG",
      "/new_Images/90 DEGREE INTERNAL BEND BOLTED RUNG LADDER.JPG",
      "/new_Images/BOLTED LADDER TRAY ..JPG",
      "/new_Images/BOLTED RUNG LADDER EQUAL TEE ..JPG",
      "/new_Images/CENTER BOLTED RUNG LADDER..JPG",
      "/new_Images/CENTER REDUCER WELDED LADDER.JPG",
      "/new_Images/CROSS BOLTED RUNG LADDER ..JPG",
      "/new_Images/F25-V- COUPLING TRAY_1.JPG",
      "/new_Images/F75- WELD LADDER.JPG",
      "/new_Images/LEFT REDUCER BOLTED RUNG LADDER ..JPG",
      "/new_Images/RIGHT REDUCER BOLTED RUNG LADDER ..JPG",
      "/new_Images/WELDED RUNG LADDER TRAY LEFT REDUCER.JPG",
      "/new_Images/WELDED RUNG LADDER TRAY RIGHT REDUCER.JPG"
    ],
  },
  "junction-boxes": {
    name: "Junction Boxes",
    description: "Secure enclosures for cable connections and electrical junctions.",
    longDescription: "Junction Boxes provide safe and secure enclosures for cable connections and electrical junctions, protecting them from dust, moisture, and mechanical damage. They are essential for maintaining the integrity and safety of electrical systems in a wide range of environments.",
    features: [
      "Robust construction for enhanced protection",
      "Available in various sizes and configurations",
      "Easy installation and maintenance",
      "Corrosion-resistant materials",
      "Suitable for indoor and outdoor use",
      "Compliant with industry standards",
    ],
    benefits: [
      "Protects cable connections from environmental hazards",
      "Ensures safety and reliability of electrical systems",
      "Reduces risk of electrical faults",
      "Facilitates easy inspection and maintenance",
      "Versatile for multiple applications",
    ],
    applications: [
      "Commercial buildings",
      "Industrial facilities",
      "Residential complexes",
      "Infrastructure projects",
      "Power distribution systems",
    ],
    specifications: [
      { name: "Material", value: "Galvanized steel, Stainless steel, Plastic" },
      { name: "Sizes", value: "Standard and custom sizes available" },
      { name: "Ingress Protection", value: "Up to IP66" },
      { name: "Mounting Options", value: "Wall, floor, and ceiling mountable" },
      { name: "Finish Options", value: "Galvanized, Powder coated, Stainless steel" },
      { name: "Compliance", value: "IEC 60670, IS 5133" },
    ],
    images: [
      "/images/CEILING JUNCTION BOX.JPG",
      "/images/floor jnctn box.JPG",
      "/images/dome cover.JPG"
    ],
  },
  "cable-tray-accessories": {
    name: "Cable Tray Accessories",
    description: "Complementary components to enhance cable tray installations.",
    longDescription: "Cable Tray Accessories include a wide range of components such as bends, tees, elbows, couplers, and covers that are essential for creating a complete and flexible cable management system. These accessories ensure proper routing, support, and protection of cables in various installation scenarios.",
    features: [
      "Wide range of compatible accessories",
      "Easy integration with cable trays",
      "Durable and corrosion-resistant",
      "Customizable for specific requirements",
      "Ensures secure cable routing",
      "Available in multiple finishes",
    ],
    benefits: [
      "Enhances flexibility of cable tray systems",
      "Reduces installation time and complexity",
      "Improves cable protection and organization",
      "Supports complex routing needs",
      "Ensures system reliability",
    ],
    applications: [
      "Industrial plants",
      "Commercial buildings",
      "Data centers",
      "Infrastructure projects",
      "Power plants",
    ],
    specifications: [
      { name: "Material", value: "Steel, Stainless steel, Aluminum" },
      { name: "Finish Options", value: "Galvanized, Powder coated, Stainless steel" },
      { name: "Accessory Types", value: "Bends, Tees, Elbows, Couplers, Covers, etc." },
      { name: "Compatibility", value: "Fits standard cable tray sizes" },
      { name: "Compliance", value: "NEMA VE 1, IEC 61537" },
    ],
    images: [
      "/images/cable duct accessories-01--clr.JPG",
      "/images/COUPLING TRAYS.JPG",
      "/images/F25-V- COUPLING TRAY.JPG",
      "/images/F75-V- COUPLING TRAYS.JPG"
    ],
  },
  "support-systems": {
    name: "Support Systems",
    description: "Robust supports for secure installation of cable management systems.",
    longDescription: "Support Systems provide the necessary structural integrity for cable trays and raceways, ensuring safe and reliable installation in a variety of environments. These systems include brackets, hangers, and other mounting hardware designed for strength and durability.",
    features: [
      "High load-bearing capacity",
      "Versatile mounting options",
      "Corrosion-resistant materials",
      "Easy installation and adjustment",
      "Compatible with various cable management products",
      "Available in multiple sizes and finishes",
    ],
    benefits: [
      "Ensures secure and stable cable tray installations",
      "Reduces risk of system failure",
      "Adapts to different site requirements",
      "Minimizes maintenance needs",
      "Improves overall system safety",
    ],
    applications: [
      "Industrial facilities",
      "Commercial buildings",
      "Infrastructure projects",
      "Power plants",
      "Data centers",
    ],
    specifications: [
      { name: "Material", value: "Steel, Stainless steel, Aluminum" },
      { name: "Finish Options", value: "Galvanized, Powder coated, Stainless steel" },
      { name: "Mounting Types", value: "Wall, ceiling, floor, and suspended" },
      { name: "Load Capacity", value: "Up to 200kg depending on configuration" },
      { name: "Compliance", value: "NEMA VE 1, IEC 61537" },
    ],
    images: [
      "/images/90 vertical ELBOW INSIDE.JPG",
      "/images/VERTICAL ELBOW INSIDE.JPG",
      "/images/VERTICAL ELBOW OUTSIDE (2).JPG",
      "/images/vertical elbow OUTSIDE.JPG"
    ],
  },
  "raceways": {
    name: "Raceways",
    description: "Enclosed pathways for protecting and organizing cables in various environments, providing complete protection from external elements.",
    longDescription: "Raceways provide complete enclosure for cables, protecting them from dust, moisture, and mechanical damage. Available in various configurations including plain, flanged, and joggled designs.",
    features: [
      "Complete cable protection",
      "Dust and moisture resistant",
      "Multiple configuration options",
      "Easy installation and maintenance",
      "Smooth interior for easy cable pulling",
      "Stackable design for space efficiency",
    ],
    benefits: [
      "Maximum cable protection",
      "Improved system reliability",
      "Clean and organized appearance",
      "Reduced maintenance requirements",
      "Flexible installation options",
    ],
    applications: [
      "Clean room environments",
      "Food processing facilities",
      "Pharmaceutical plants",
      "Outdoor installations",
      "Corrosive environments",
    ],
    specifications: [
      { name: "Material", value: "Galvanized steel, Stainless steel, PVC" },
      { name: "Widths", value: "50mm to 300mm" },
      { name: "Heights", value: "25mm to 100mm" },
      { name: "Lengths", value: "2m, 3m (custom lengths available)" },
      { name: "Cover Options", value: "Hinged, removable, fixed" },
      { name: "Ingress Protection", value: "Up to IP65" },
      { name: "Finish Options", value: "Galvanized, Powder coated, Stainless steel" },
      { name: "Compliance", value: "IEC 61537, IS 2309" },
    ],
    images: [
      "/images/PLAIN RACEWAY WITH CVE-SLEEV.JPG",
      "/images/INWARD FLANGED WIRE DUCT WITH COVER.JPG",
      "/images/JOGGLED RACEWAY WITH CVR.JPG",
      "/images/INWARD FLANGE RACEWAY-SLEEVE.JPG",
      "/images/INWARD FLANGE RACEWAY-SLEEVE-CVR.JPG",
      "/images/joogled floor wire duct with cvr.JPG",
      "/images/FLANGE RACEWAY.JPG"
    ],
  },
  // Additional product categories would be defined here
}

export default function ProductCategoryPage({ params }: { params: { category: string } }) {
  const usableParams = React.use(params) as { category: string };
  const category = productCategories[usableParams.category as keyof typeof productCategories]

  if (!category) {
    notFound()
  }

  // Select main image based on category name
  let mainImage = category.images[0] || "/placeholder.svg";
  if (category.name === "Perforated Cable Trays") mainImage = "/real-world-images/Perforated.jpg";
  if (category.name === "Ladder Cable Trays") mainImage = "/images/F75-LADDER.JPG";
  if (category.name === "Raceways") mainImage = "/images/PLAIN RACEWAY WITH CVE-SLEEV.JPG";
  if (category.name === "Junction Boxes") mainImage = "/images/CEILING JUNCTION BOX.JPG";
  if (category.name === "Cable Tray Accessories") mainImage = "/images/cable duct accessories-01--clr.JPG";
  if (category.name === "Support Systems") mainImage = "/images/90 vertical ELBOW INSIDE.JPG";
  if (category.name === "Strut Channel Support Systems") mainImage = "/images/steel-factories.jpg";
  if (category.name === "Cable Binders") mainImage = "/images/joogled floor wire duct with cvr.JPG";
  if (category.name === "Earthing Strips") mainImage = "/images/iso-cert.JPG";
  if (category.name === "Bottle Brackets") mainImage = "/images/dome cover.JPG";
  if (category.name === "Solar Support Structures") mainImage = "/images/vertical elbow OUTSIDE.JPG";

  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalImage, setModalImage] = React.useState<string | null>(null);

  return (
    <main className="flex flex-col min-h-screen pt-40 md:pt-24">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image src={mainImage} alt={category.name} fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/70 rounded-xl px-6 py-8 md:px-12 md:py-10 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4 drop-shadow-lg">{category.name}</h1>
            <p className="text-xl font-normal text-white max-w-2xl text-center drop-shadow-lg">{category.description}</p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-600 hover:text-primary">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/products" className="text-gray-600 hover:text-primary">
              Products
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-primary font-medium">{category.name}</span>
          </div>
        </div>
      </div>

      {/* Product Overview */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Product Images */}
            {/* Modal for enlarged image */}
            {modalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={() => setModalOpen(false)}>
                <div className="relative bg-white rounded-lg shadow-lg p-6 flex flex-col items-center max-w-lg w-full" onClick={e => e.stopPropagation()}>
                  <Image
                    src={modalImage || "/placeholder.svg"}
                    alt="Accessory Image"
                    width={500}
                    height={400}
                    className="object-contain rounded-lg mb-4"
                  />
                  <div className="text-center text-lg font-semibold text-blue-900">
                    {modalImage?.split("/").pop()?.replace(/\.[^/.]+$/, "")}
                  </div>
                  <button
                    className="absolute top-2 right-2 text-blue-900 hover:text-red-600 text-2xl font-bold"
                    onClick={() => setModalOpen(false)}
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}
            <div className="space-y-4">
              <div className="relative h-[400px] rounded-lg overflow-hidden border">
                <Image
                  src={mainImage}
                  alt={`${category.name} - Main Image`}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Accessories Heading */}
              <h2 className="text-blue-900 text-2xl font-bold mb-4 ">Accessories</h2>
              <div className="grid grid-cols-4 gap-4">
                {category.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-24 rounded-md overflow-hidden border cursor-pointer"
                    onClick={() => {
                      setModalImage(image);
                      setModalOpen(true);
                    }}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${category.name} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              {/* Ladder Cable Tray Types Section - Only for ladder-cable-trays */}
              
            </div>
            

            {/* Product Details */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-blue-900">{category.name}</h2>
              <p className="mb-6 text-black">{category.longDescription}</p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-blue-900">
                    {category.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1">Request Quote</Button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        {usableParams.category === "ladder-cable-trays" && (
                <section className="mt-10 w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 px-0 md:px-0 py-12 rounded-xl shadow-lg">
                  <div className="max-w-6xl mx-auto w-full">
                    <h2 className="text-4xl font-extrabold text-blue-900 mb-12 w-full text-center tracking-tight drop-shadow">Types: of Ladder Type Trays</h2>
                    <div className="flex flex-col md:flex-row gap-10 w-full justify-center items-stretch">
                      <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-8 w-full md:w-1/2 border border-blue-200 hover:shadow-xl transition-shadow duration-300">
                        <Image src="/new_Images/BOLTED LADDER TRAY ..jpg" alt="Bolted Rung Ladder Type Tray" width={320} height={180} className="rounded-lg object-contain mb-6 bg-gray-50 p-2 border border-gray-200" />
                        <h3 className="text-2xl font-bold text-blue-900 mb-3 text-center">1. Bolted Rung Ladder Type Tray</h3>
                        <p className="text-gray-700 text-center text-base leading-relaxed">These ladder types are commonly used and are available in multiple specifications. The bolted rung ladder type tray is primarily designed to hold all the power cables and electric cables. These are durable, have high strength, and also corrosion-resistant.</p>
                      </div>
                      <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-8 w-full md:w-1/2 border border-blue-200 hover:shadow-xl transition-shadow duration-300">
                        <Image src="/new_Images/F75- WELD LADDER.JPG" alt="Welded Rung Ladder Type Tray" width={320} height={180} className="rounded-lg object-contain mb-6 bg-gray-50 p-2 border border-gray-200" />
                        <h3 className="text-2xl font-bold text-blue-900 mb-3 text-center">2. Welded Rung Ladder Type Tray</h3>
                        <p className="text-gray-700 text-center text-base leading-relaxed">As its name suggests these are a type of ladder tray made up with the use of welding methodology. These are reliable and can perform well in harsh environments. Designed to support the cable system, these are highly reliable to keep it stable.</p>
                      </div>
                    </div>
                  </div>
                </section>
              )}
      {/* Detailed Information Tabs */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-gray-50">
        
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="specifications">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specifications" className="text-black bg-blue-300 border border-blue-900">Specifications</TabsTrigger>
              <TabsTrigger value="benefits" className="text-black bg-blue-300 border border-blue-900">Benefits</TabsTrigger>
              <TabsTrigger value="applications" className="text-black bg-blue-300 border border-blue-900">Applications</TabsTrigger>
            </TabsList>
            <TabsContent value="specifications" className="p-6 bg-white rounded-b-lg border border-t-0">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-900">
                {category.specifications.map((spec, index) => (
                  <div key={index} className="border-b pb-2">
                    <span className="font-medium">{spec.name}:</span> {spec.value}
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="benefits" className="p-6 bg-white rounded-b-lg border border-t-0">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Benefits</h3>
              <ul className="space-y-3">
                {category.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="applications" className="p-6 bg-white rounded-b-lg border border-t-0">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Applications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {category.applications.map((application, index) => (
                  <div key={index} className="p-4 border border-blue-200 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                    <span className="text-gray-800 font-medium">{application}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Technical Specifications Table */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight mb-6 text-blue-900">Technical Specifications</h2>

          {/* Material Finish Table */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Material Finish Options</h3>
            <div className="overflow-x-auto bg-white rounded-lg shadow">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">S.No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Material Finished</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Specifications</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Recommended</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-blue-900">1</td>
                    <td className="border border-gray-300 px-4 py-3 text-blue-900">Pre-Galvanized</td>
                    <td className="border border-gray-300 px-4 py-3 text-blue-900">As Per Specifications</td>
                    <td className="border border-gray-300 px-4 py-3 text-blue-900">Indoor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-blue-900">2</td>
                    <td className="border border-gray-300 px-4 py-3 text-blue-900">Hot - Dip Galvanized</td>
                    <td className="border border-gray-300 px-4 py-3 text-blue-900">As Per IS 4759,2629, 2633</td>
                    <td className="border border-gray-300 px-4 py-3 text-blue-900">Indoor & Outdoor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-blue-900">3</td>
                    <td className="border border-gray-300 px-4 py-3 text-blue-900">Powder Coated</td>
                    <td className="border border-gray-300 px-4 py-3 text-blue-900">As Per Specifications</td>
                    <td className="border border-gray-300 px-4 py-3 text-blue-900">Indoor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-blue-900">4</td>
                    <td className="border border-gray-300 px-4 py-3 text-blue-900">Stainless Steel</td>
                    <td className="border border-gray-300 px-4 py-3 text-blue-900">As Per Specifications 304, 316.</td>
                    <td className="border border-gray-300 px-4 py-3 text-blue-900">Indoor & Outdoor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-blue-900">5</td>
                    <td className="border border-gray-300 px-4 py-3 text-blue-900">Aluminum</td>
                    <td className="border border-gray-300 px-4 py-3 text-blue-900">As Per Specifications</td>
                    <td className="border border-gray-300 px-4 py-3 text-blue-900">Indoor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Notes */}
          <div className="mb-8 bg-blue-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-blue-900">Note:</h4>
            <ul className="space-y-2 text-blue-900">
              <li>• <strong>R</strong> means regular sizes which used in the market</li>
              <li>• <strong>NR</strong> means not regular size production is done as per customer requirement</li>
              <li>• <strong>NA</strong> it means Not Available or likely to be used in the market but as per customer requirement, we supply.</li>
            </ul>
          </div>

          {/* Product-specific technical table will be rendered here */}
          {category.name === "Perforated Cable Trays" && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Width of Cable Trays</h3>
              <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-blue-900 text-white">
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">S.NO</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">Thickness</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">Depth</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">50</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">100</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">150</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">200</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">300</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">450</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">500</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">600</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">750</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">900</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">1000</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">1200</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold" rowSpan={4}>1</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">1.6 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold">25 MM</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">2 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">2.5 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">3 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900" colSpan={12}>Based on Customer Requirement</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold" rowSpan={4}>2</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">1.6 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold">40 MM</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NA</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NA</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">2 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">2.5 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">3 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900" colSpan={12}>Based on Customer Requirement</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold" rowSpan={4}>3</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">1.6 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold">50 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NA</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">2 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">2.5 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">3 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900" colSpan={12}>Based on Customer Requirement</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold" rowSpan={4}>4</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">1.6 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold">75 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NA</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">2 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NA</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">2.5 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">3 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900" colSpan={12}>Based on Customer Requirement</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold" rowSpan={4}>4</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">1.6 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold">75 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NA</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">2 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NA</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">2.5 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">3 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900" colSpan={12}>Based on Customer Requirement</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold" rowSpan={4}>5</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">1.6 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold">100 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NA</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">2 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NA</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">2.5 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">3 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900" colSpan={12}>Based on Customer Requirement</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold" rowSpan={4}>5</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">1.6 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold">100 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NA</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">2 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NA</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">2.5 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">3 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900" colSpan={12}>Based on Customer Requirement</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold" rowSpan={4}>4</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">1.6 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold">75 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NA</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">2 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NA</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">2.5 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">3 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900" colSpan={12}>Based on Customer Requirement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {category.name === "Ladder Cable Trays" && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Width of Ladder Type Trays</h3>
              <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-blue-900 text-white">
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">S.NO</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">Thickness</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">Depth</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">100</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">150</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">200</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">300</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">450</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">600</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">750</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">900</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">1000</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">1200</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold">1500</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold" rowSpan={4}>1</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">1.6 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold">50 MM</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NA</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NA</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NA</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NA</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NA</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NA</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">2 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">R</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NA</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NA</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NA</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NA</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">2.5 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">NR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900">3 mm</td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900 font-semibold"></td>
                      <td className="border border-gray-300 px-2 py-3 text-center text-blue-900" colSpan={12}>Based on Customer Requirement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {category.name === "Raceways" && (
            <div className="mb-8 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Additional Specifications</h3>
              <p className="text-blue-900 font-medium">
                <strong>Note:</strong> Available Thickness 1.6 mm, 2 mm, 2.5 mm, 3 mm<br/>
                <strong>Length Available:</strong> 2500 mm to 3000 mm
              </p>
            </div>
          )}
        </div>
      </section>



      {/* Back to Products */}
      <div className="py-6 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <Button variant="ghost" asChild>
            <Link href="/products" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Products
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
