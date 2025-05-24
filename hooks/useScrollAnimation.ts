"use client"

import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(options = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when element comes into view
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          // Reset animation when element goes out of view
          // This allows re-triggering when scrolling back
          setIsVisible(false)
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '50px 0px -50px 0px', // Start animation slightly before element is fully visible
        ...options
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return [ref, isVisible] as const
}
