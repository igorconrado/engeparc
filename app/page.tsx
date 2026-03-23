import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Clients } from "@/components/clients"
import { About } from "@/components/about"
import { Solutions } from "@/components/solutions"
import { Differentials } from "@/components/differentials"
import { Certifications } from "@/components/certifications"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Clients />
      <About />
      <Solutions />
      <Differentials />
      <Certifications />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
