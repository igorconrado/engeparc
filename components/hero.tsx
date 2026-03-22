"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Award } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

export function Hero() {
  const statsRef = useRef<HTMLDivElement>(null)
  const statsVisible = useAnimateOnScroll(statsRef)

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden"
    >
      {/* Industrial Blueprint Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(245,158,11,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,158,11,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        {/* Circuit Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h80v80H10z' fill='none' stroke='%23F59E0B' strokeWidth='0.5'/%3E%3Ccircle cx='10' cy='10' r='3' fill='%23F59E0B'/%3E%3Ccircle cx='90' cy='10' r='3' fill='%23F59E0B'/%3E%3Ccircle cx='10' cy='90' r='3' fill='%23F59E0B'/%3E%3Ccircle cx='90' cy='90' r='3' fill='%23F59E0B'/%3E%3Cpath d='M50 10v30M10 50h30M90 50h-30M50 90v-30' stroke='%23F59E0B' strokeWidth='0.5'/%3E%3Ccircle cx='50' cy='50' r='5' fill='none' stroke='%23F59E0B' strokeWidth='0.5'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/90 to-navy" />

      {/* Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-amber/30 rounded-full px-5 py-2.5 mb-8">
            <span className="w-2 h-2 bg-amber rounded-full animate-pulse" />
            <span className="text-amber text-sm font-semibold tracking-wide">
              Excelencia desde 1991
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
            Engenharia Eletrica de{" "}
            <span className="text-amber">Alta Complexidade</span>{" "}
            para Industrias e Grandes Empreendimentos.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Desde 1991 garantindo seguranca energetica e eficiencia para os maiores nomes de Minas Gerais.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-amber hover:bg-amber-light text-navy font-bold px-10 py-7 text-lg shadow-lg shadow-amber/25 group"
            >
              <a href="#contato">
                Solicitar Consultoria Tecnica
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-10 py-7 text-lg bg-transparent"
            >
              <a href="#solucoes">Conhecer Solucoes</a>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Award, value: "30+", label: "Anos de Experiencia" },
            { icon: Zap, value: "500+", label: "Projetos Entregues" },
            { icon: Shield, value: "0", label: "Acidentes Graves" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`animate-on-scroll ${statsVisible ? "is-visible" : ""} animate-delay-${(index + 1) * 100} text-center p-8 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-amber/30 transition-colors`}
            >
              <stat.icon className="w-10 h-10 text-amber mx-auto mb-4" />
              <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-light text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
