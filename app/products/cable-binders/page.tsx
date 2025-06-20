import Image from "next/image";

export default function CableBindersPage() {
  return (
    <main className="flex flex-col min-h-screen pt-40 md:pt-24">
      <section className="relative h-[300px] md:h-[400px]">
        <Image src="/images/joogled floor wire duct with cvr.JPG" alt="Cable Binders" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cable Binders</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">Used from small to large scale industries for better management of cables used.</p>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 text-black">Product Overview</h2>
          <p className="mb-6 text-gray-700">Cable binders are essential for organizing and securing cables in various industrial and commercial applications. They help in maintaining a neat and safe environment by preventing cable tangling and damage.</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Durable and reusable</li>
            <li>Easy to install and remove</li>
            <li>Available in various sizes and materials</li>
            <li>Ensures better cable management</li>
            <li>Reduces risk of cable damage</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-black">Applications</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Industrial cable management</li>
            <li>Commercial buildings</li>
            <li>Data centers</li>
            <li>Telecommunications</li>
            <li>Electrical installations</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
