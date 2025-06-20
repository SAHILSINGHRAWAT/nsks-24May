import Image from "next/image";

export default function EarthingStripsPage() {
  return (
    <main className="flex flex-col min-h-screen pt-40 md:pt-24">
      <section className="relative h-[300px] md:h-[400px]">
        <Image src="/images/iso-cert.JPG" alt="Earthing Strips" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Earthing Strips</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">The primary usage of the earthing strips is to ensure that there is enough safety in areas where there is high use of electronics.</p>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 text-black">Product Overview</h2>
          <p className="mb-6 text-gray-700">Earthing strips are essential components for electrical safety and grounding. They provide a low-resistance path to the ground, ensuring protection against electrical faults and surges.</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>High conductivity</li>
            <li>Corrosion-resistant materials</li>
            <li>Available in various sizes and thicknesses</li>
            <li>Ensures electrical safety</li>
            <li>Easy installation</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-black">Applications</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Electrical panels</li>
            <li>Industrial plants</li>
            <li>Commercial buildings</li>
            <li>Telecommunications</li>
            <li>Power distribution systems</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
