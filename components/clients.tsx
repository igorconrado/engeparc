"use client"

import { useRef } from "react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const clients = [
  { name: "Anglo Gold", initials: "AG" },
  { name: "BH Shopping", initials: "BH" },
  { name: "CEMIG", initials: "CM" },
  { name: "Caixa Economica", initials: "CX" },
  { name: "Vale", initials: "VL" },
  { name: "Usiminas", initials: "US" },
  { name: "Fiat", initials: "FT" },
  { name: "ArcelorMittal", initials: "AM" },
]

export function Clients() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isVisible = useAnimateOnScroll(sectionRef)

  return (
    <section className="py-20 bg-navy-light">
      <div ref={sectionRef} className={`animate-on-scroll ${isVisible ? "is-visible" : ""} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="text-center mb-14">
          <p className="text-amber text-sm font-semibold uppercase tracking-wider mb-3">
            Prova Social
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Empresas que confiam na Engeparc
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.03] border border-white/10 rounded-xl p-8 flex items-center justify-center hover:border-amber/50 hover:bg-white/[0.06] transition-all duration-300 cursor-default"
            >
              {/* Placeholder Logo */}
              <div className="flex flex-col items-center gap-3 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-12 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-white/80 font-bold text-lg tracking-wider">
                    {client.initials}
                  </span>
                </div>
                <span className="text-white/60 text-xs font-medium text-center">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <p className="text-gray-light text-sm">
            + de <span className="text-amber font-semibold">150 clientes</span> atendidos em mais de 30 anos de mercado
          </p>
        </div>
      </div>
    </section>
  )
}
