"use client";
import Image from "next/image"

const certifications = [
  { name: "Employment Management System", image: "/certificates/employment management system.jpg" },
  { name: "Quality Management System", image: "/certificates/quality management system.jpg" },
  { name: "Udhayam Registration Certificate", image: "/certificates/Udhayam-Certificate.jpg" },
  { name: "Labour Department Registration", image: "/certificates/labour department registration.jpg" },
  { name: "Ministry of Commerce & Industry- IEC Certificate", image: "/certificates/Ministry of Commerce & Industry- IEC Certificate.jpg" },
  { name: "CE Certificate", image: "/certificates/CE Certificate.jpg" },
  { name: "RoHS Certificate", image: "/certificates/RoHS Certificate.jpg" },
  { name: "Startup Certificate", image: "/certificates/Startup Certificate.jpg" },
]

export default function CertificationsSection() {
  return (
    <section className="pt-32 py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <h1 
          className="text-4xl md:text-4xl font-bold mb-10 text-center tracking-wide drop-shadow-sm"
          style={{ color: '#001f3f', letterSpacing: '0.04em' }}
        >
          Certifications
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={cert.name}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center group border border-blue-100 animate-cert-fade transition-transform duration-300 hover:scale-150 hover:border-transparent relative"
              style={{ animationDelay: `${idx * 0.3}s`, animationDuration: "4.5s" }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" style={{
                border: '2px solid',
                borderImage: 'linear-gradient(90deg, #3b82f6, #1e40af) 1',
              }} />
              <div className="w-40 h-56 mb-4 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <Image src={cert.image} alt={cert.name} width={180} height={250} className="object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h2 className="text-xl font-semibold text-black mb-2 text-center">{cert.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes cert-fade {
          0% { opacity: 0; transform: translateY(40px) scale(0.95); }
          60% { opacity: 1; transform: translateY(-8px) scale(1.03); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-cert-fade {
          animation-name: cert-fade;
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  )
} 