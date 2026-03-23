"use client"

import { useRef } from "react"
import { Eye, FileText, ShieldCheck, AlertTriangle } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const problems = [
  "Estagiários tocando obra sem supervisão",
  "Orçamentos obscuros e custos surpresa",
  "Engenheiro que você nunca vê na obra",
]

const engeparcSolutions = [
  "Engenheiro Sênior em cada projeto",
  "Relatórios detalhados e transparentes",
  "Acompanhamento direto do início ao fim",
]

const differentials = [
  {
    icon: Eye,
    title: "Visao do Dono",
    description:
      "Seu projeto acompanhado diretamente pelo Engenheiro Senior, nao por estagiarios.",
  },
  {
    icon: FileText,
    title: "Transparencia Total",
    description:
      "Relatorios detalhados. Voce entende exatamente onde cada centavo foi investido.",
  },
  {
    icon: ShieldCheck,
    title: "Historico Comprovado",
    description: "Zero acidentes graves em 30 anos de atuacao.",
  },
]

const delayClasses = ["", "animate-delay-200", "animate-delay-400"] as const

export function Differentials() {
  const headingRef = useRef<HTMLDivElement>(null)
  const comparisonRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const headingVisible = useAnimateOnScroll(headingRef)
  const comparisonVisible = useAnimateOnScroll(comparisonRef)
  const cardsVisible = useAnimateOnScroll(cardsRef)

  return (
    <section id="diferenciais" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className={`animate-on-scroll ${headingVisible ? "is-visible" : ""} text-center mb-16`}>
          <p className="text-amber text-sm font-semibold uppercase tracking-wider mb-3">
            Nossos Diferenciais
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Por que a engenharia tradicional ainda e a melhor escolha?
          </h2>
          <p className="text-gray-light max-w-2xl mx-auto text-lg">
            Mais de tres decadas de experiencia e compromisso com a excelencia.
          </p>
        </div>

        {/* Problem vs Solution Comparison */}
        <div
          ref={comparisonRef}
          className={`animate-on-scroll ${comparisonVisible ? "is-visible" : ""} grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden mb-16`}
        >
          {/* O Problema */}
          <div className="bg-red-500/[0.04] border border-red-500/[0.15] md:rounded-l-2xl md:border-r-0 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-400/80" />
              </div>
              <span className="text-red-400/80 text-sm font-semibold uppercase tracking-wider">
                O Problema
              </span>
            </div>
            <ul className="space-y-4">
              {problems.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400/40 flex-shrink-0" />
                  <span className="text-gray-light line-through decoration-red-400/40 decoration-2">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider - mobile horizontal, desktop vertical */}
          <div className="h-px md:h-auto md:w-px bg-gradient-to-r md:bg-gradient-to-b from-red-500/10 via-white/5 to-amber/20" />

          {/* Engeparc */}
          <div className="bg-amber/[0.04] border border-amber/20 md:rounded-r-2xl md:border-l-0 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-amber" />
              </div>
              <span className="text-amber text-sm font-semibold uppercase tracking-wider">
                Engeparc
              </span>
            </div>
            <ul className="space-y-4">
              {engeparcSolutions.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className={`animate-on-scroll ${cardsVisible ? "is-visible" : ""} ${delayClasses[index]} relative group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber/50 transition-all duration-300`}
            >
              {/* Number indicator */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-white/5">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-amber" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
