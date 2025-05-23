"use client";

import Image from "next/image";

const clients = [
  { name: "Amazon", image: "/clients/amazon.png" },
  { name: "Apple India", image: "/clients/apple-india.png" },
  { name: "AIIMS", image: "/clients/aiims.png" },
  { name: "Biocon", image: "/clients/biocn.png" },
  { name: "Flipkart", image: "/clients/flipkart.png" },
  { name: "GMR", image: "/clients/gmr.png" },
  { name: "GVK", image: "/clients/gvk.png" },
  { name: "Mahendra", image: "/clients/mahendra.png" },
  { name: "Microsoft", image: "/clients/microsoft.png" },
  { name: "MyHome", image: "/clients/myhome.png" },
  { name: "Salesforce", image: "/clients/salesforce.png" },
  { name: "Symbiosis", image: "/clients/symbiosis.png" },
  { name: "Tata", image: "/clients/tata.png" },
];

export default function ClientsSection() {
  return (
    <section id="clients" className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-3xl font-bold mb-2 text-center tracking-wide drop-shadow-sm"
            style={{ color: '#001f3f', letterSpacing: '0.04em' }}
          >
            Our Clients
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We are proud to have worked with some of the most prestigious companies and organizations in the country.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {clients.map((client, idx) => (
            <div
              key={client.name}
              className="bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-6 h-40 group border border-blue-100 animate-client-fade"
              style={{ animationDelay: `${idx * 0.3}s`, animationDuration: "2.5s" }}
            >
              <Image
                src={client.image}
                alt={client.name}
                width={100}
                height={60}
                className="object-contain mb-2 transition-transform duration-1000 group-hover:scale-110"
              />
              <span className="text-sm font-medium text-gray-700 mt-2 text-center">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes client-fade {
          0% { opacity: 0; transform: translateY(40px) scale(0.95); }
          60% { opacity: 1; transform: translateY(-8px) scale(1.03); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-client-fade {
          animation-name: client-fade;
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
} 