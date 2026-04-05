"use client"

import { useRef } from "react"
import Image from "next/image"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const credentials = [
  "Engenheiro Eletricista",
  "CEFET-MG — Turma de 1987",
  "CREA-MG 50415/D",
  "Diretor Técnico",
]

export function About() {
  const photoRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const bioRef = useRef<HTMLDivElement>(null)
  const tagsRef = useRef<HTMLDivElement>(null)

  const photoVisible = useAnimateOnScroll(photoRef)
  const headingVisible = useAnimateOnScroll(headingRef)
  const bioVisible = useAnimateOnScroll(bioRef)
  const tagsVisible = useAnimateOnScroll(tagsRef)

  return (
    <section id="sobre" className="py-24 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Photo Column — 2/5 */}
          <div
            ref={photoRef}
            className={`animate-on-scroll ${photoVisible ? "is-visible" : ""} lg:col-span-2 flex justify-center lg:justify-end`}
          >
            <div className="photo-wrapper relative w-full max-w-xs sm:max-w-sm">
              <Image
                src="/sergio-conrado.png"
                alt="Eng. Sérgio Conrado Almeida"
                width={400}
                height={533}
                className="relative w-full aspect-[3/4] rounded-2xl object-cover object-top mix-blend-luminosity opacity-85"
                priority
              />
              {/* Gradient overlay — fuses bottom into navy bg */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-navy via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Text Column — 3/5 */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
            {/* Heading */}
            <div
              ref={headingRef}
              className={`animate-on-scroll ${headingVisible ? "is-visible" : ""} text-center lg:text-left mb-8`}
            >
              <p className="text-amber text-sm font-semibold uppercase tracking-wider mb-3">
                O Engenheiro Responsável
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
                <span className="text-amber">Eng.</span> Sérgio Conrado Almeida
              </h2>
            </div>

            {/* Bio with amber left accent */}
            <div
              ref={bioRef}
              className={`animate-on-scroll animate-delay-200 ${bioVisible ? "is-visible" : ""} border-l-[3px] border-amber pl-6 space-y-6 text-center lg:text-left`}
            >
              <p className="text-gray-light text-lg leading-relaxed">
                Engenheiro eletricista formado pelo CEFET-MG em 1987 — uma das maiores referências em engenharia do estado. Fundou a Engeparc em dezembro de 1990 e desde então atua como diretor técnico, acompanhando pessoalmente cada projeto.
              </p>
              <p className="text-gray-light text-lg leading-relaxed">
                Em mais de 35 anos de atuação, projetou e fiscalizou instalações elétricas para grandes indústrias, concessionárias de energia, instituições financeiras e redes de varejo. Sua experiência abrange desde subestações industriais de alta tensão até consultoria energética para grandes empreendimentos.
              </p>
              <p className="text-gray-light text-lg leading-relaxed">
                Na Engeparc, o cliente fala diretamente com o engenheiro responsável. Sem intermediários, sem estagiários tocando obra. É a segurança de ter 35 anos de experiência dedicados ao seu projeto.
              </p>
            </div>

            {/* Credential Tags */}
            <div
              ref={tagsRef}
              className={`animate-on-scroll animate-delay-400 ${tagsVisible ? "is-visible" : ""} flex flex-wrap gap-2 justify-center lg:justify-start mt-8`}
            >
              {credentials.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-amber/10 border border-amber/20 text-amber text-xs font-medium px-3 py-1.5 rounded-full tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
