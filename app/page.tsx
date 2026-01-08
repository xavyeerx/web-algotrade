import { HeroSection } from "@/components/hero-section"
import { WhatIsSection } from "@/components/what-is-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { SignalTypesSection } from "@/components/signal-types-section"
import { TrackRecordSection } from "@/components/track-record-section"
import { BenefitsSection } from "@/components/benefits-section"
import { RiskManagementSection } from "@/components/risk-management-section"
import { PricingSection } from "@/components/pricing-section"
import { DisclaimerSection } from "@/components/disclaimer-section"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhatIsSection />
      <HowItWorksSection />
      <SignalTypesSection />
      <TrackRecordSection />
      <BenefitsSection />
      <RiskManagementSection />
      <PricingSection />
      <DisclaimerSection />
    </main>
  )
}
