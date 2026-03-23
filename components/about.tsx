"use client"

import { useRef } from "react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const credentials = [
  "Engenheiro Eletricista",
  "CEFET-MG — Turma de 1987",
  "CREA-MG Ativo",
  "Diretor Técnico",
]

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)
  const bioRef = useRef<HTMLDivElement>(null)
  const creaRef = useRef<HTMLDivElement>(null)

  const sectionVisible = useAnimateOnScroll(sectionRef)
  const photoVisible = useAnimateOnScroll(photoRef)
  const bioVisible = useAnimateOnScroll(bioRef)
  const creaVisible = useAnimateOnScroll(creaRef)

  return (
    <section id="sobre" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className={`animate-on-scroll ${sectionVisible ? "is-visible" : ""} text-center mb-16`}>
          <p className="text-amber text-sm font-semibold uppercase tracking-wider mb-3">
            Quem Somos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Engenharia com nome e sobrenome
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Photo Column */}
          <div ref={photoRef} className={`animate-on-scroll ${photoVisible ? "is-visible" : ""} flex flex-col items-center lg:items-start gap-6`}>
            <div className="photo-wrapper relative">
              <div className="w-64 h-80 sm:w-72 sm:h-96 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                <span className="text-5xl font-bold text-white/20 tracking-widest">
                  SCA
                </span>
              </div>
            </div>

            {/* Credential Tags */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {credentials.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-amber/10 border border-amber/20 text-amber text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bio Column */}
          <div ref={bioRef} className={`animate-on-scroll animate-delay-200 ${bioVisible ? "is-visible" : ""} space-y-6`}>
            <p className="text-gray-light text-lg leading-relaxed">
              Engenheiro eletricista formado pelo CEFET-MG em 1987 — uma das maiores referências em engenharia do estado. Fundou a Engeparc em dezembro de 1990 e desde então atua como diretor técnico, acompanhando pessoalmente cada projeto.
            </p>
            <p className="text-gray-light text-lg leading-relaxed">
              Em mais de 35 anos de atuação, projetou e fiscalizou instalações elétricas para nomes como CEMIG, Anglo Gold Ashanti, BDMG, Caixa Econômica Federal e BH Shopping. Sua experiência abrange desde subestações industriais de alta tensão até consultoria energética para grandes empreendimentos.
            </p>
            <p className="text-gray-light text-lg leading-relaxed">
              Na Engeparc, o cliente fala diretamente com o engenheiro responsável. Sem intermediários, sem estagiários tocando obra. É a segurança de ter 35 anos de experiência dedicados ao seu projeto.
            </p>

            {/* CREA Floating Card */}
            <div
              ref={creaRef}
              className={`animate-on-scroll animate-delay-500 ${creaVisible ? "is-visible" : ""} mt-8 p-6 rounded-2xl bg-white/5 border border-amber/20`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center shrink-0">
                  <span className="text-amber font-bold text-sm">CREA</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Registro CREA-MG Ativo</p>
                  <p className="text-gray-light text-xs">Habilitado para projetos e fiscalização em todo o território nacional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
