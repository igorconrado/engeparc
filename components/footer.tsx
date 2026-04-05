"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, MessageCircle, Linkedin, Instagram } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const LOGO_SRC = "/engeparc-logo-white.png"
const HAS_REAL_LOGO = true

export function Footer() {
  const ctaRef = useRef<HTMLDivElement>(null)
  const ctaVisible = useAnimateOnScroll(ctaRef)

  const whatsappNumber = "5531999717110"
  const whatsappMessage = encodeURIComponent(
    "Olá, Eng. Sérgio! Gostaria de solicitar um diagnóstico técnico para o meu projeto."
  )

  return (
    <footer id="contato" className="bg-navy">
      {/* CTA Section */}
      <div className="cta-grid-bg relative overflow-hidden border-b border-white/10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div ref={ctaRef} className={`animate-on-scroll ${ctaVisible ? "is-visible" : ""} text-center max-w-2xl mx-auto`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Converse diretamente com o{" "}
              <span className="whitespace-nowrap"><span className="text-amber">Eng. Sérgio</span></span>
            </h2>
            <p className="text-gray-light mb-10 text-lg">
              Solicite um diagnóstico técnico ou tire suas dúvidas. Sem intermediários, sem formulários — direto com o engenheiro responsável.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-amber hover:bg-amber-light text-navy font-bold px-10 py-7 text-lg shadow-lg shadow-amber/25"
              style={{ animation: "pulse-glow 2.5s ease-in-out infinite" }}
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Falar no WhatsApp
              </a>
            </Button>

            {/* Contact Form */}
            <div className="border-t border-white/10 pt-8 mt-8">
              <p className="text-gray-light text-sm mb-6">
                Prefere e-mail? Envie sua mensagem diretamente.
              </p>
              {/* TODO: Integrar com Formspree ou backend */}
              <form action="mailto:engeparc@engeparc.com.br" method="POST" encType="text/plain" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    required
                    className="bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-3 w-full focus:border-amber/50 focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    required
                    className="bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-3 w-full focus:border-amber/50 focus:outline-none transition-colors"
                  />
                </div>
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Telefone"
                  className="bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-3 w-full focus:border-amber/50 focus:outline-none transition-colors"
                />
                <textarea
                  name="mensagem"
                  placeholder="Mensagem"
                  rows={4}
                  required
                  className="bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-3 w-full focus:border-amber/50 focus:outline-none transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-xl px-8 py-3 font-semibold transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="mb-10">
              {/* Logo */}
              <div className="mb-6">
                {HAS_REAL_LOGO ? (
                  <Image
                    src={LOGO_SRC}
                    alt="Engeparc Engenharia"
                    height={56}
                    width={224}
                    className="h-14 w-auto"
                  />
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14">
                      <svg viewBox="0 0 48 48" className="w-full h-full">
                        <polygon
                          points="24,2 44,14 44,34 24,46 4,34 4,14"
                          fill="#0B1E33"
                          stroke="#F59E0B"
                          strokeWidth="2"
                        />
                        <text x="24" y="28" textAnchor="middle" fill="#F59E0B" fontSize="16" fontWeight="bold">⚡</text>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-serif font-bold text-white tracking-tight">ENGEPARC</span>
                      <span className="text-xs text-gray-light tracking-[0.2em] uppercase">Engenharia</span>
                    </div>
                  </div>
                )}
              </div>
              <p className="text-gray-light max-w-md leading-relaxed">
                Engenharia elétrica de alta complexidade para indústrias, edificações e grandes empreendimentos. Atuando em Minas Gerais e em todo o Brasil desde 1991.
              </p>
            </div>

            <div className="space-y-5">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/80 hover:text-amber transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <p className="text-sm text-gray-light">WhatsApp</p>
                  <p className="font-semibold text-white">(31) 99971-7110</p>
                </div>
              </a>

              <a
                href="tel:+553132955211"
                className="flex items-center gap-4 text-white/80 hover:text-amber transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                  <Phone className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <p className="text-sm text-gray-light">Telefone</p>
                  <p className="font-semibold text-white">(31) 3295-5211</p>
                </div>
              </a>

              <a
                href="mailto:engeparc@engeparc.com.br"
                className="flex items-center gap-4 text-white/80 hover:text-amber transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                  <Mail className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <p className="text-sm text-gray-light">E-mail</p>
                  <p className="font-semibold text-white">engeparc@engeparc.com.br</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <p className="text-sm text-gray-light">Endereço</p>
                  <p className="font-semibold text-white">Rua Ouro Preto, 581 — Salas 1005/1007</p>
                  <p className="font-semibold text-white">Barro Preto, Belo Horizonte — MG</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/company/engeparcengenharia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center hover:bg-amber/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-amber" />
                </a>
                <a
                  href="https://www.instagram.com/engeparc.engenharia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center hover:bg-amber/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-amber" />
                </a>
              </div>
            </div>
          </div>

          {/* Google Map - Full Width Column */}
          <div className="rounded-2xl overflow-hidden border border-white/10 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.0292147877863!2d-43.95307072278114!3d-19.923183681463812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6975c54b401a3%3A0xa88a753940dc992e!2sR.%20Ouro%20Preto%2C%20581%20-%20Barro%20Preto%2C%20Belo%20Horizonte%20-%20MG%2C%2030170-044!5e0!3m2!1spt-BR!2sbr!4v1775412132116!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localizacao Engeparc"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-light text-sm">
              &copy; {new Date().getFullYear()} Engeparc Engenharia LTDA. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-amber font-semibold">CREA-MG: 50415/D</span>
              <span className="text-gray-light">CNPJ: 38.732.574/0001-27</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
