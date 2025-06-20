import Image from "next/image";

export default function SolarSupportStructurePage() {
  return (
    <main className="flex flex-col min-h-screen pt-40 md:pt-24">
      <section className="relative h-[300px] md:h-[400px]">
        <Image src="/images/vertical elbow OUTSIDE.JPG" alt="Solar Support Structure" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Solar Support Structure</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">The solar support structure, as its name suggests, is the structure built to hold up your solar plates.</p>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 text-black">Product Overview</h2>
          <p className="mb-6 text-gray-700">Solar support structures are durable frameworks designed for mounting solar panels and related equipment. They ensure optimal orientation, stability, and safety for solar installations in various environments.</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>High strength and stability</li>
            <li>Weather and corrosion resistant</li>
            <li>Customizable for different panel sizes</li>
            <li>Easy installation and maintenance</li>
            <li>Suitable for rooftop and ground-mounted systems</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-black">Applications</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Solar power plants</li>
            <li>Commercial and industrial rooftops</li>
            <li>Residential solar installations</li>
            <li>Off-grid solar systems</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
