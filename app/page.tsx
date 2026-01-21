import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Clients } from "@/components/clients"
import { Solutions } from "@/components/solutions"
import { Differentials } from "@/components/differentials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Clients />
      <Solutions />
      <Differentials />
      <Footer />
    </main>
  )
}
