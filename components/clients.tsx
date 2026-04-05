"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const clients = [
  { name: "CEMIG", logo: "/logos/cemig.png" },
  { name: "Anglo Gold Ashanti", logo: "/logos/anglogold.png" },
  { name: "BDMG", logo: "/logos/bdmg.png" },
  { name: "BH Shopping", logo: "/logos/bhshopping.png" },
  { name: "Caixa Econômica Federal", logo: "/logos/caixa.png" },
  { name: "Itambé", logo: "/logos/itambe.png" },
  { name: "Cenibra", logo: "/logos/cenibra.png" },
  { name: "Magnesita", logo: "/logos/magnesita.png" },
  { name: "Cedro Têxtil", logo: "/logos/cedro.png" },
  { name: "Efficientia", logo: "/logos/efficientia.png" },
  { name: "SLU Belo Horizonte", logo: "/logos/slu.png" },
  { name: "JUCEMG", logo: "/logos/jucemg.png" },
  { name: "Rede Sagrado Coração de Maria", logo: "/logos/sagrado.png" },
  { name: "MS Consultoria", logo: "/logos/ms-consultoria.png" },
]

function ClientItem({ name, logo }: { name: string; logo: string }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="min-w-[180px] h-14 flex items-center justify-center pr-8 shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
      {imgError ? (
        <span className="text-white/50 font-semibold text-sm tracking-wide whitespace-nowrap">
          {name}
        </span>
      ) : (
        <Image
          src={logo}
          alt={name}
          width={140}
          height={40}
          className="object-contain max-h-10"
          onError={() => setImgError(true)}
        />
      )}
    </div>
  )
}

export function Clients() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isVisible = useAnimateOnScroll(sectionRef)

  const tripled = [...clients, ...clients, ...clients]

  return (
    <section className="py-20 bg-navy-light overflow-hidden">
      <div ref={sectionRef} className={`animate-on-scroll ${isVisible ? "is-visible" : ""}`}>
        <div className="text-center mb-14 px-4 sm:px-6 lg:px-8">
          <p className="text-amber text-sm font-semibold uppercase tracking-wider mb-3">
            Confiança Comprovada
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Quem confia na Engeparc
          </h2>
        </div>

        {/* Marquee */}
        <div
          className="group overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div
            className="flex group-hover:[animation-play-state:paused]"
            style={{
              width: "fit-content",
              animation: "marquee 40s linear infinite",
              willChange: "transform",
            }}
          >
            {tripled.map((client, index) => (
              <ClientItem key={index} name={client.name} logo={client.logo} />
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center px-4 sm:px-6 lg:px-8">
          <p className="text-gray-light text-sm">
            + de <span className="text-amber font-semibold">150 clientes</span> atendidos em Minas Gerais e em todo o Brasil
          </p>
        </div>
      </div>
    </section>
  )
}
