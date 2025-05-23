"use client"

import { useState } from "react"
import Image from "next/image"

interface ImageErrorBoundaryProps {
  src: string
  alt: string
  className?: string
  fill?: boolean
  sizes?: string
  priority?: boolean
}

export default function ImageErrorBoundary({
  src,
  alt,
  className,
  fill,
  sizes,
  priority,
}: ImageErrorBoundaryProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className={`bg-gray-100 flex items-center justify-center ${className}`}>
        <span className="text-gray-400 text-sm">Image not available</span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      fill={fill}
      sizes={sizes}
      priority={priority}
      onError={() => setError(true)}
    />
  )
} 