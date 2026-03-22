"use client"

import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Factory, Building2, FileCheck, ArrowRight } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const solutions = [
  {
    icon: Factory,
    title: "Industria & Alta Tensao",
    description:
      "Projetos de subestacoes, manutencao preventiva e adequacao de fabricas. Evite paradas na producao.",
    features: ["Subestacoes", "Manutencao Preventiva", "Adequacao Industrial"],
  },
  {
    icon: Building2,
    title: "Condominios & Edificacoes",
    description:
      "Reformas de prumadas, modernizacao de PC de luz e adequacao para AVCB (Bombeiros). Seguranca para o sindico e moradores.",
    features: ["Reforma de Prumadas", "Modernizacao", "AVCB"],
  },
  {
    icon: FileCheck,
    title: "Consultoria & Laudos",
    description:
      "Laudos de SPDA, Credito de ICMS e Eficiencia Energetica. Documentacao tecnica precisa para evitar multas e economizar dinheiro.",
    features: ["Laudos SPDA", "Credito ICMS", "Eficiencia Energetica"],
  },
]

const delayClasses = ["", "animate-delay-200", "animate-delay-400"] as const

export function Solutions() {
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const headingVisible = useAnimateOnScroll(headingRef)
  const cardsVisible = useAnimateOnScroll(cardsRef)

  return (
    <section id="solucoes" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className={`animate-on-scroll ${headingVisible ? "is-visible" : ""} text-center mb-16`}>
          <p className="text-amber text-sm font-semibold uppercase tracking-wider mb-3">
            Nossas Solucoes
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            O que oferecemos
          </h2>
          <p className="text-gray-light max-w-2xl mx-auto text-lg">
            Solucoes completas em engenharia eletrica para atender as demandas mais complexas do mercado.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className={`animate-on-scroll ${cardsVisible ? "is-visible" : ""} ${delayClasses[index]} group bg-white/[0.03] border-white/10 hover:border-amber/50 transition-all duration-300 hover:bg-white/[0.06]`}
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center mb-5">
                  <solution.icon className="w-8 h-8 text-amber" fill="currentColor" fillOpacity={0.2} />
                </div>
                <CardTitle className="text-xl font-bold text-white">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-light mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-white/70">
                      <span className="w-2 h-2 rounded-full bg-amber flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className="inline-flex items-center text-amber font-semibold text-sm hover:text-amber-light transition-colors"
                >
                  Saiba mais
                  <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
