"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

// TODO: Substituir por logo real quando disponível
const LOGO_SRC = "/engeparc-logo-dark.png"
const HAS_REAL_LOGO = false

export function Footer() {
  const ctaRef = useRef<HTMLDivElement>(null)
  const ctaVisible = useAnimateOnScroll(ctaRef)

  const whatsappNumber = "5531999999999"
  const whatsappMessage = encodeURIComponent(
    "Ola! Gostaria de saber mais sobre os servicos da Engeparc."
  )

  return (
    <footer id="contato" className="bg-navy-light">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div ref={ctaRef} className={`animate-on-scroll ${ctaVisible ? "is-visible" : ""} text-center max-w-2xl mx-auto`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Pronto para comecar seu projeto?
            </h2>
            <p className="text-gray-light mb-10 text-lg">
              Entre em contato conosco e receba uma consultoria tecnica personalizada.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-amber hover:bg-amber-light text-navy font-bold px-10 py-7 text-lg shadow-lg shadow-amber/25"
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
                Engenharia eletrica de alta complexidade para industrias e grandes empreendimentos em Minas Gerais.
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
                  <p className="font-semibold text-white">(31) 99999-9999</p>
                </div>
              </a>

              <a
                href="tel:+553132222222"
                className="flex items-center gap-4 text-white/80 hover:text-amber transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                  <Phone className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <p className="text-sm text-gray-light">Telefone Fixo</p>
                  <p className="font-semibold text-white">(31) 3222-2222</p>
                </div>
              </a>

              <a
                href="mailto:contato@engeparc.com.br"
                className="flex items-center gap-4 text-white/80 hover:text-amber transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                  <Mail className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <p className="text-sm text-gray-light">E-mail</p>
                  <p className="font-semibold text-white">contato@engeparc.com.br</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <p className="text-sm text-gray-light">Endereco</p>
                  <p className="font-semibold text-white">Barro Preto, Belo Horizonte - MG</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map - Full Width Column */}
          <div className="rounded-2xl overflow-hidden border border-white/10 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.8!2d-43.94!3d-19.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU1JzEyLjAiUyA0M8KwNTYnMjQuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
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
              {new Date().getFullYear()} Engeparc Engenharia. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-amber font-semibold">CREA-MG: 12345</span>
              <span className="text-gray-light">CNPJ: 00.000.000/0001-00</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
