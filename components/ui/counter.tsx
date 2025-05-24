"use client"

import { useEffect, useRef } from 'react'
import { useCounter } from '@/hooks/useCounter'

interface CounterProps {
  end: number
  suffix?: string
  duration?: number
  delay?: number
  className?: string
  isVisible?: boolean
}

export default function Counter({ 
  end, 
  suffix = "", 
  duration = 2000, 
  delay = 0, 
  className = "",
  isVisible = false
}: CounterProps) {
  const { count, startAnimation, reset } = useCounter({
    end,
    suffix,
    duration,
    delay
  })
  
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      startAnimation()
      hasAnimated.current = true
    } else if (!isVisible && hasAnimated.current) {
      // Reset when element goes out of view to allow re-animation
      reset()
      hasAnimated.current = false
    }
  }, [isVisible, startAnimation, reset])

  return (
    <span className={className}>
      {count}
    </span>
  )
}
