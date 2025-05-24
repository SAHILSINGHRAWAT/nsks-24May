"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, Download, ZoomIn, ZoomOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CertificateModalProps {
  isOpen: boolean
  onClose: () => void
  certificate: {
    name: string
    image: string
  } | null
}

export default function CertificateModal({ isOpen, onClose, certificate }: CertificateModalProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  const handleDownload = () => {
    if (!certificate) return
    const link = document.createElement('a')
    link.href = certificate.image
    link.download = `${certificate.name}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'z':
        case 'Z':
          setIsZoomed(!isZoomed)
          break
        case 'd':
        case 'D':
          handleDownload()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, isZoomed, onClose, handleDownload])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !certificate) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-lg max-w-4xl max-h-[90vh] w-full overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <h2 className="text-xl font-semibold truncate pr-4">{certificate.name}</h2>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsZoomed(!isZoomed)}
              className="text-white hover:bg-white/20"
            >
              {isZoomed ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDownload}
              className="text-white hover:bg-white/20"
            >
              <Download className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative overflow-auto max-h-[calc(90vh-80px)] bg-gray-100">
          <div className={`flex items-center justify-center p-4 transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'}`}>
            <Image
              src={certificate.image}
              alt={certificate.name}
              width={800}
              height={1000}
              className="object-contain max-w-full h-auto shadow-lg rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t bg-gray-50 text-center">
          <p className="text-sm text-gray-600">
            Click outside to close • Press <kbd className="px-1 py-0.5 bg-gray-200 rounded text-xs">ESC</kbd> to close •
            <kbd className="px-1 py-0.5 bg-gray-200 rounded text-xs">Z</kbd> to zoom •
            <kbd className="px-1 py-0.5 bg-gray-200 rounded text-xs">D</kbd> to download
          </p>
        </div>
      </div>
    </div>
  )
}
