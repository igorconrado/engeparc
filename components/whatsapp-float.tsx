"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  const whatsappNumber = "5531999717110"
  const whatsappMessage = encodeURIComponent(
    "Ola! Gostaria de saber mais sobre os servicos da Engeparc."
  )

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-lg shadow-black/20 transition-colors"
      style={{ animation: "float-bounce 3s ease-in-out infinite" }}
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  )
}
