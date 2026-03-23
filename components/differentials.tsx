"use client"

import { useRef } from "react"
import { Eye, FileText, ShieldCheck, AlertTriangle } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const problems = [
  "Estagiário tocando obra",
  "Relatórios vagos e atrasos",
  "Surpresas no orçamento",
]

const engeparcSolutions = [
  "Engenheiro sênior em cada projeto",
  "Documentação detalhada e prazos cumpridos",
  "Transparência total nos custos",
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
