import Image from "next/image";

export default function StrutChannelSupportSystemPage() {
  return (
    <main className="flex flex-col min-h-screen pt-40 md:pt-24">
      <section className="relative h-[300px] md:h-[400px]">
        <Image src="/images/steel-factories.jpg" alt="Strut Channel Support System" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Strut Channel Support System</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">A strut channel is used to brace, mount, connect, and support structural loads that are light in weight.</p>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 text-black">Product Overview</h2>
          <p className="mb-6 text-gray-700">Strut channel support systems are versatile mounting solutions for electrical and mechanical applications. They provide a robust framework for supporting cable trays, pipes, and other equipment in industrial and commercial settings.</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Versatile and modular design</li>
            <li>Easy to install and adjust</li>
            <li>Corrosion-resistant finishes available</li>
            <li>Compatible with a wide range of fittings and accessories</li>
            <li>Suitable for light to medium structural loads</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-black">Applications</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Supporting cable trays and raceways</li>
            <li>Mounting electrical panels and equipment</li>
            <li>Pipe and conduit support</li>
            <li>HVAC installations</li>
            <li>General construction and framing</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-black">Specifications</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Material: Pre-galvanized steel, hot-dip galvanized steel, stainless steel</li>
            <li>Standard lengths: 3m, 6m (custom lengths available)</li>
            <li>Finish options: Pre-galvanized, hot-dip galvanized, powder coated, stainless steel</li>
            <li>Compatible with standard strut fittings and accessories</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
