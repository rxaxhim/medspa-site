import Header from "@/components/site/Header"
import Services from "@/components/site/Services"
import Providers from "@/components/site/Providers"
import Testimonials from "@/components/site/Testimonials"
import FAQ from "@/components/site/FAQ"
import CTA from "@/components/site/CTA"
import Footer from "@/components/site/Footer"
import Stats from "@/components/site/Stats"
import TrustBar from "./components/site/TrustBar"
import BeforeAfter from "@/components/site/BeforeAfter"
import ParallaxHero from "./components/ui/hero-parallax"

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <ParallaxHero />
        <Stats />
        <Services />
        <BeforeAfter />
        <TrustBar />
        <Providers />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
