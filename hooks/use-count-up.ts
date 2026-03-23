"use client"

import { useEffect, useRef, useState } from "react"

export function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasCounted = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted.current) {
          hasCounted.current = true
          observer.disconnect()

          const start = performance.now()

          function animate(now: number) {
            const elapsed = now - start
            const t = Math.min(elapsed / duration, 1)
            const progress = 1 - Math.pow(1 - t, 3)
            setCount(Math.floor(progress * target))

            if (t < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}
