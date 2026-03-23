import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Clients } from "@/components/clients"
import { Solutions } from "@/components/solutions"
import { About } from "@/components/about"
import { Differentials } from "@/components/differentials"
import { Certifications } from "@/components/certifications"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { SectionDivider } from "@/components/section-divider"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Clients />
      <SectionDivider />
      <Solutions />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Differentials />
      <SectionDivider />
      <Certifications />
      <SectionDivider />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
