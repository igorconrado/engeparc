"use client"

import { Eye, FileText, ShieldCheck } from "lucide-react"

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

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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

        <div className="grid md:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber/50 transition-all duration-300"
            >
              {/* Number indicator */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-white/5">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-amber" fill="currentColor" fillOpacity={0.2} />
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
