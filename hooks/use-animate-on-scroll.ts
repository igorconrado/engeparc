"use client"

import { useEffect, useState, type RefObject } from "react"

export function useAnimateOnScroll(ref: RefObject<HTMLElement | null>) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [ref])

  return isVisible
}
