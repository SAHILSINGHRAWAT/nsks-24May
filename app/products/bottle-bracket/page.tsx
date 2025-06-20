import Image from "next/image";

export default function BottleBracketPage() {
  return (
    <main className="flex flex-col min-h-screen pt-40 md:pt-24">
      <section className="relative h-[300px] md:h-[400px]">
        <Image src="/images/dome cover.JPG" alt="Bottle Bracket" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bottle Bracket</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">Bottle brackets are used to hold substances having pipe structures.</p>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 text-black">Product Overview</h2>
          <p className="mb-6 text-gray-700">Bottle brackets are specialized mounting solutions designed to securely hold cylindrical or pipe-structured substances in place. They are widely used in industrial and commercial applications for safe and stable support.</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Robust and durable construction</li>
            <li>Easy to install</li>
            <li>Corrosion-resistant materials</li>
            <li>Available in various sizes</li>
            <li>Ensures stable support for pipe structures</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-black">Applications</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Industrial piping systems</li>
            <li>Commercial plumbing</li>
            <li>Support for cylindrical tanks</li>
            <li>General construction</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
