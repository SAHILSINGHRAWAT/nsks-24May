"use client"

import { useEffect, useState } from 'react'

interface UseCounterOptions {
  start?: number
  end: number
  duration?: number
  delay?: number
  suffix?: string
}

export function useCounter({ 
  start = 0, 
  end, 
  duration = 2000, 
  delay = 0,
  suffix = ""
}: UseCounterOptions) {
  const [count, setCount] = useState(start)
  const [isAnimating, setIsAnimating] = useState(false)

  const startAnimation = () => {
    if (isAnimating) return
    
    setIsAnimating(true)
    
    setTimeout(() => {
      const startTime = Date.now()
      const startValue = start
      const endValue = end
      const totalDuration = duration

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / totalDuration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        
        const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
        setCount(currentValue)

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setIsAnimating(false)
        }
      }

      requestAnimationFrame(animate)
    }, delay)
  }

  const reset = () => {
    setCount(start)
    setIsAnimating(false)
  }

  return {
    count: count + suffix,
    startAnimation,
    reset,
    isAnimating
  }
}
