"use client"

import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { BenefitsSection } from "@/components/benefits-section"
import { CatalogSection } from "@/components/catalog-section"
import { ProcessSection } from "@/components/process-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <BenefitsSection />
        <CatalogSection />
        <ProcessSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
