"use client"

import { useEffect, useState } from "react"

export function useParallax() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const isMobile = window.matchMedia("(max-width: 767px)")

    if (prefersReducedMotion.matches || isMobile.matches) return

    let ticking = false

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return scrollY
}
