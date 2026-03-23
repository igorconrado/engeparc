"use client"

import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Factory, Building2, FileCheck, ArrowRight } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const solutions = [
  {
    icon: Factory,
    title: "Industria & Alta Tensao",
    subtitle: "Subestações e manutenção industrial",
    description:
      "Projetos de subestacoes, manutencao preventiva e adequacao de fabricas. Evite paradas na producao.",
    features: ["Subestacoes", "Manutencao Preventiva", "Adequacao Industrial"],
    iconBg: "bg-amber/10",
  },
  {
    icon: Building2,
    title: "Condominios & Edificacoes",
    subtitle: "Reformas e adequação predial",
    description:
      "Reformas de prumadas, modernizacao de PC de luz e adequacao para AVCB (Bombeiros). Seguranca para o sindico e moradores.",
    features: ["Reforma de Prumadas", "Modernizacao", "AVCB"],
    iconBg: "bg-amber/[0.12]",
  },
  {
    icon: FileCheck,
    title: "Consultoria & Laudos",
    subtitle: "Documentação técnica e economia",
    description:
      "Laudos de SPDA, Credito de ICMS e Eficiencia Energetica. Documentacao tecnica precisa para evitar multas e economizar dinheiro.",
    features: ["Laudos SPDA", "Credito ICMS", "Eficiencia Energetica"],
    iconBg: "bg-amber/15",
  },
]

const delayClasses = ["", "animate-delay-200", "animate-delay-400"] as const
const numbers = ["01", "02", "03"] as const

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

        {/* Desktop Cards */}
        <div ref={cardsRef} className="hidden md:grid md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <a key={index} href="#contato" className="block cursor-pointer">
              <Card
                className={`animate-on-scroll ${cardsVisible ? "is-visible" : ""} ${delayClasses[index]} group relative overflow-hidden bg-white/[0.03] border-white/10 hover:border-amber/50 transition-all duration-300 hover:bg-white/[0.06] h-full`}
              >
                {/* Decorative number */}
                <span className="absolute top-[-0.5rem] right-6 text-[8rem] lg:text-[10rem] font-extrabold text-white/[0.03] select-none pointer-events-none z-0">
                  {numbers[index]}
                </span>

                <CardHeader className="relative z-10 pb-4">
                  <div className={`w-16 h-16 rounded-xl ${solution.iconBg} border border-amber/20 flex items-center justify-center mb-5`}>
                    <solution.icon className="w-8 h-8 text-amber" fill="currentColor" fillOpacity={0.2} />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
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
                  <span className="inline-flex items-center text-amber font-semibold text-sm group-hover:text-amber-light transition-colors">
                    Saiba mais
                    <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Mobile Accordion */}
        <Accordion type="single" collapsible defaultValue="item-0" className="md:hidden space-y-3">
          {solutions.map((solution, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white/[0.03] border border-white/10 rounded-2xl px-5 overflow-hidden"
            >
              <AccordionTrigger className="text-white hover:text-amber hover:no-underline py-5 gap-3">
                <div className="flex items-center gap-3">
                  <solution.icon className="w-6 h-6 text-amber shrink-0" />
                  <div className="text-left">
                    <span className="block font-bold">{solution.title}</span>
                    <span className="block text-xs text-gray-light font-normal">{solution.subtitle}</span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-5">
                <p className="text-gray-light mb-4 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-2.5 mb-5">
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
                  Solicitar orçamento
                  <ArrowRight className="ml-1.5 w-4 h-4" />
                </a>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
