"use client"

import Link from "next/link"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { ZenHeader, ZenFooter, EnsoCircle, BrushStroke, InkWash } from "@/app/components"

const companies = [
  {
    number: "01",
    name: "R1R3",
    sector: "Systematic Trading Software",
    description: "Position sizing and risk management infrastructure that works with any trading strategy. Institutional-grade execution discipline for independent traders.",
    website: "https://r1r3.com",
    focus: "Execution",
    stage: "Pre-launch",
    model: "SaaS"
  },
  {
    number: "02",
    name: "Risk1Reward3",
    sector: "Financial Media & Education",
    description: "Educational content and community for traders who want to think systematically. Bridging the gap between retail confusion and institutional clarity.",
    website: "https://risk1reward3.com",
    focus: "Education",
    channels: "YouTube",
    languages: "EN / HI"
  },
]

export default function ZenPortfolio() {
  return (
    <main className="min-h-screen bg-white text-black">
      <ZenHeader />

      <section className="min-h-[60vh] sm:min-h-[70vh] flex items-center relative pt-16 sm:pt-20">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 opacity-[0.04] hidden lg:block">
          <EnsoCircle className="w-[60vh] h-[60vh] text-black" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <p className="text-[#C8102E] text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-4 sm:mb-6">
              Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide mb-6 sm:mb-8 leading-tight">
              Companies We<br/>
              <span className="text-neutral-400">Nurture</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-500 leading-relaxed">
              Every company in our portfolio shares a common thesis: discipline, automation, 
              and transparency create sustainable advantages that compound over time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-32 relative">
        <InkWash className="absolute top-0 left-0 right-0 h-32 sm:h-48 text-black" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <BrushStroke className="w-24 sm:w-32 h-6 sm:h-8 mx-auto mb-6 sm:mb-8 text-[#C8102E] opacity-60" />
            <p className="text-xs tracking-[0.2em] sm:tracking-[0.3em] text-neutral-400 uppercase">Active Companies</p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {companies.map((company) => (
              <div key={company.name} className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start pb-12 sm:pb-16 border-b border-neutral-100 last:border-0">
                <div className="lg:col-span-1 flex lg:block items-center gap-4">
                  <div className="relative flex-shrink-0">
                    <EnsoCircle className="w-12 sm:w-16 h-12 sm:h-16 text-neutral-200" />
                    <span className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-light text-[#C8102E]">
                      {company.number}
                    </span>
                  </div>
                  <div className="lg:hidden">
                    <p className="text-xs tracking-[0.15em] sm:tracking-[0.2em] text-[#C8102E] uppercase">{company.sector}</p>
                    <h2 className="text-2xl font-light tracking-wide">{company.name}</h2>
                  </div>
                </div>
                
                <div className="lg:col-span-7">
                  <p className="hidden lg:block text-xs tracking-[0.2em] text-[#C8102E] uppercase mb-2">{company.sector}</p>
                  <h2 className="hidden lg:block text-2xl sm:text-3xl font-light tracking-wide mb-3 sm:mb-4">{company.name}</h2>
                  <p className="text-neutral-500 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{company.description}</p>
                  <Link
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-widest text-black hover:text-[#C8102E] transition-colors py-2"
                  >
                    VISIT WEBSITE <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="lg:col-span-4">
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    <div className="text-center p-3 sm:p-4 border border-neutral-100">
                      <p className="text-[10px] sm:text-xs text-neutral-400 uppercase tracking-wider mb-1">Focus</p>
                      <p className="text-xs sm:text-sm font-light">{company.focus}</p>
                    </div>
                    <div className="text-center p-3 sm:p-4 border border-neutral-100">
                      <p className="text-[10px] sm:text-xs text-neutral-400 uppercase tracking-wider mb-1">Stage</p>
                      <p className="text-xs sm:text-sm font-light">{company.stage || company.channels}</p>
                    </div>
                    <div className="text-center p-3 sm:p-4 border border-neutral-100">
                      <p className="text-[10px] sm:text-xs text-neutral-400 uppercase tracking-wider mb-1">Model</p>
                      <p className="text-xs sm:text-sm font-light">{company.model || company.languages}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-32 bg-neutral-50 relative overflow-hidden">
        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.03]">
          <EnsoCircle className="w-[40vh] h-[40vh] text-black" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.2em] sm:tracking-[0.3em] text-neutral-400 uppercase mb-6 sm:mb-8">Future Investments</p>
            <div className="p-6 sm:p-8 md:p-12 border-2 border-dashed border-neutral-300 bg-white">
              <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                <EnsoCircle className="w-10 sm:w-12 h-10 sm:h-12 text-neutral-200 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-light tracking-wide text-neutral-400">Akira Ventures</h3>
                  <p className="text-[10px] sm:text-xs tracking-widest text-neutral-300 uppercase">Coming Soon</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Future investments in companies aligned with our thesis of systematic innovation, 
                disciplined execution, and long-term value creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BrushStroke className="w-32 sm:w-48 h-6 sm:h-8 mx-auto mb-6 sm:mb-8 text-black opacity-20" />
          <h2 className="text-2xl sm:text-3xl font-light tracking-wide mb-4 sm:mb-6">Partner With Us</h2>
          <p className="text-neutral-500 mb-8 sm:mb-12 max-w-lg mx-auto text-sm sm:text-base">
            We seek founders who understand that sustainable growth requires 
            patience, discipline, and systematic thinking.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-black text-white hover:bg-[#C8102E] transition-colors duration-300 tracking-widest text-xs sm:text-sm"
          >
            GET IN TOUCH
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <ZenFooter />
    </main>
  )
}
