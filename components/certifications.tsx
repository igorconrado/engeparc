"use client"

import { useRef } from "react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const norms = [
  { code: "NR-10", title: "Segurança em Instalações Elétricas" },
  { code: "NBR 5410", title: "Instalações Elétricas de Baixa Tensão" },
  { code: "NBR 14039", title: "Instalações Elétricas de Média Tensão" },
  { code: "NBR 5419", title: "Proteção contra Descargas Atmosféricas (SPDA)" },
  { code: "NBR 13534", title: "Instalações Elétricas em Estabelecimentos de Saúde" },
  { code: "NR-12", title: "Segurança em Máquinas e Equipamentos" },
  { code: "NBR 16690", title: "Sistemas Fotovoltaicos" },
  { code: "AVCB", title: "Auto de Vistoria do Corpo de Bombeiros" },
]

export function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isVisible = useAnimateOnScroll(sectionRef)

  return (
    <section className="py-14 bg-navy border-t border-white/[0.05]">
      <div ref={sectionRef} className={`animate-on-scroll ${isVisible ? "is-visible" : ""} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="text-center mb-10">
          <p className="text-amber text-sm font-semibold uppercase tracking-wider mb-3">
            Normas e Certificações
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Conformidade técnica em cada projeto
          </h2>
          <p className="text-gray-light text-sm max-w-xl mx-auto">
            Todos os projetos seguem rigorosamente as normas vigentes da ABNT e do Ministério do Trabalho.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {norms.map((norm) => (
            <div
              key={norm.code}
              className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3 hover:border-amber/30 transition-colors"
            >
              <span className="text-amber font-bold text-base">{norm.code}</span>
              <span className="text-white/70 text-sm">{norm.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
