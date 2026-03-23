"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#solucoes", label: "Solucoes" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
]

// TODO: Substituir por logo real quando disponível
const LOGO_SRC = "/engeparc-logo-dark.png"
const HAS_REAL_LOGO = false

function LogoPlaceholder({ height }: { height: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative" style={{ width: height, height }}>
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
        <span className="text-xl font-serif font-bold text-white tracking-tight">ENGEPARC</span>
        <span className="text-[10px] text-gray-light tracking-[0.2em] uppercase">Engenharia</span>
      </div>
    </div>
  )
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            {HAS_REAL_LOGO ? (
              <Image
                src={LOGO_SRC}
                alt="Engeparc Engenharia"
                height={40}
                width={160}
                className="h-10 w-auto"
                priority
              />
            ) : (
              <LogoPlaceholder height={48} />
            )}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-white/80 hover:text-amber transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-amber hover:bg-amber-light text-navy font-semibold px-6"
            >
              <a href="#contato">Fale Conosco</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-amber transition-colors text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="bg-amber hover:bg-amber-light text-navy font-semibold w-full"
              >
                <a href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
                  Fale Conosco
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
