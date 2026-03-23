"use client"

import { useRef } from "react"
import { Eye, FileText, ShieldCheck, AlertTriangle } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const comparisons = [
  { problem: "Estagiário tocando obra", solution: "Engenheiro sênior em cada projeto" },
  { problem: "Relatórios vagos e atrasos", solution: "Documentação detalhada e prazos cumpridos" },
  { problem: "Surpresas no orçamento", solution: "Transparência total nos custos" },
]

const differentials = [
  {
    icon: Eye,
    title: "Visão do Dono",
    description:
      "Seu projeto é acompanhado diretamente pelo Eng. Sérgio Conrado, com mais de 35 anos de experiência. Não delegamos a complexidade — a lideramos.",
  },
  {
    icon: FileText,
    title: "Transparência Documentada",
    description:
      "Relatórios técnicos detalhados em cada etapa. Você entende exatamente o estado do seu projeto, os riscos mapeados e onde cada recurso foi aplicado.",
  },
  {
    icon: ShieldCheck,
    title: "Histórico Comprovado",
    description:
      "Em mais de três décadas de atuação, nenhum acidente grave registrado. Segurança não é slogan — é resultado de método e experiência.",
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
            Por que empresas trocam de fornecedor{" "}
            <span className="text-amber">e escolhem a Engeparc?</span>
          </h2>
        </div>

        {/* Problem vs Solution Comparison */}
        <div
          ref={comparisonRef}
          className={`animate-on-scroll ${comparisonVisible ? "is-visible" : ""} grid sm:grid-cols-3 gap-3 sm:gap-4 mb-16`}
        >
          {comparisons.map((pair, index) => (
            <div key={index} className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-red-400/70" />
                <span className="text-red-400/70 text-xs font-semibold uppercase tracking-wider">O problema</span>
              </div>
              <p className="text-white/50 text-sm mb-4 line-through decoration-red-400/30">
                {pair.problem}
              </p>
              <div className="h-px bg-gradient-to-r from-red-500/10 via-white/5 to-amber/20 mb-4" />
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-amber" />
                <span className="text-amber text-xs font-semibold uppercase tracking-wider">Engeparc</span>
              </div>
              <p className="text-white font-semibold text-sm">
                {pair.solution}
              </p>
            </div>
          ))}
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
