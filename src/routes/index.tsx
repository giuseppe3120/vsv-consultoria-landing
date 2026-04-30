import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import NR01Urgency from "@/components/NR01Urgency";
import Trainings from "@/components/Trainings";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VSV Consultoria | Segurança do Trabalho na Grande Vitória" },
      { name: "description", content: "Consultoria, assessoria e treinamentos NR. Programas legais (PGR, PCMSO, LTCAT) e adequação NR-01. Atendimento direto." },
      { property: "og:title", content: "VSV Consultoria | Segurança do Trabalho na Grande Vitória" },
      { property: "og:description", content: "Consultoria, assessoria e treinamentos NR. Programas legais (PGR, PCMSO, LTCAT) e adequação NR-01. Atendimento direto." },
    ],
  }),
  component: Index,
});

const MARQUEE_A = ["PGR", "PCMSO", "LTCAT", "AET", "LIP", "NRs", "CONSULTORIA", "ASSESSORIA", "TREINAMENTOS"];
const MARQUEE_B = ["NR-01", "NR-05", "NR-06", "NR-10", "NR-12", "NR-18", "NR-33", "NR-35", "SST"];

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* Marquee A — negative margin overlapping hero/services transition */}
        <div className="relative z-10 -mt-6">
          <Marquee items={MARQUEE_A} direction="left" accentIndices={[5, 6]} />
        </div>

        <Services />
        <HowItWorks />
        <NR01Urgency />

        {/* Marquee B */}
        <div className="relative z-10 -mt-4">
          <Marquee items={MARQUEE_B} direction="right" accentIndices={[0, 8]} />
        </div>

        <Trainings />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
