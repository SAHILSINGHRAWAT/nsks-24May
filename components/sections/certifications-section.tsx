"use client";
import { useState } from 'react'
import Image from "next/image"
import CertificateModal from '@/components/ui/certificate-modal'

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
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certifications[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCertificateClick = (cert: typeof certifications[0]) => {
    setSelectedCertificate(cert)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedCertificate(null)
  }
  return (
    <section className="pt-40 md:pt-44 py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h1
            className="text-4xl md:text-4xl font-bold mb-4 tracking-wide drop-shadow-sm"
            style={{ color: '#001f3f', letterSpacing: '0.04em' }}
          >
            Certifications
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to quality and compliance is demonstrated through these industry certifications.
            {/* <span className="text-blue-600 font-medium"> Click on any certificate to view the full document.</span> */}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={cert.name}
              onClick={() => handleCertificateClick(cert)}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center group border border-blue-100 animate-cert-fade transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-xl cursor-pointer relative"
              style={{ animationDelay: `${idx * 0.3}s`, animationDuration: "4.5s" }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" style={{
                border: '2px solid',
                borderImage: 'linear-gradient(90deg, #3b82f6, #1e40af) 1',
              }} />
              <div className="w-40 h-56 mb-4 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center relative">
                <Image src={cert.image} alt={cert.name} width={180} height={250} className="object-contain group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-lg flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-black mb-2 text-center group-hover:text-blue-600 transition-colors duration-300">{cert.name}</h2>
              <p className="text-sm text-gray-500 group-hover:text-blue-500 transition-colors duration-300">Click to view full certificate</p>
            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        <CertificateModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          certificate={selectedCertificate}
        />
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