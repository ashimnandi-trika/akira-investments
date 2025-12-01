"use client"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, ArrowRight } from "lucide-react"
import { ZenHeader, ZenFooter, EnsoCircle, BrushStroke, InkWash } from "@/app/components"

function SumiSun({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="20" fill="#C8102E" />
      <g stroke="#C8102E" strokeWidth="3" strokeLinecap="round">
        <line x1="50" y1="10" x2="50" y2="22" />
        <line x1="50" y1="78" x2="50" y2="90" />
        <line x1="10" y1="50" x2="22" y2="50" />
        <line x1="78" y1="50" x2="90" y2="50" />
        <line x1="22" y1="22" x2="30" y2="30" />
        <line x1="70" y1="70" x2="78" y2="78" />
        <line x1="78" y1="22" x2="70" y2="30" />
        <line x1="30" y1="70" x2="22" y2="78" />
      </g>
    </svg>
  )
}

export default function ZenLeadership() {
  return (
    <main className="min-h-screen bg-white text-black">
      <ZenHeader />

      <section className="min-h-[60vh] sm:min-h-[70vh] flex items-center relative pt-16 sm:pt-20">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-[0.04] hidden lg:block">
          <EnsoCircle className="w-[50vh] h-[50vh] text-black" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <p className="text-[#C8102E] text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-4 sm:mb-6">
              Leadership
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide mb-6 sm:mb-8 leading-tight">
              The Guide<br/>
              <span className="text-neutral-400">Behind Akira</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-500 leading-relaxed">
              Building disciplined financial technologies requires both conviction 
              and the humility to learn from every market cycle.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-32 relative">
        <InkWash className="absolute top-0 left-0 right-0 h-32 sm:h-48 text-black" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-6 sm:-top-8 -left-6 sm:-left-8 opacity-[0.06] hidden sm:block">
                <EnsoCircle className="w-32 sm:w-48 h-32 sm:h-48 text-black" />
              </div>
              <div className="aspect-[4/5] bg-neutral-100 relative overflow-hidden max-w-md mx-auto lg:max-w-none">
                <Image
                  src="/ashim-nandi.jpg"
                  alt="Ashim Nandi, founder and CEO of Akira Investments"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <p className="text-[#C8102E] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2">Founder & CEO</p>
              <h2 className="text-3xl sm:text-4xl font-light tracking-wide mb-6 sm:mb-8">Ashim Nandi</h2>
              
              <div className="space-y-4 sm:space-y-6 text-neutral-500 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
                <p>
                  Ashim is a systematic trader and technologist. His path has been shaped entirely 
                  through building and experience, a continuous journey of ignorance, realization, 
                  and acceptance that fuels his passion for creating with clarity and purpose.
                </p>
                <p>
                  Before founding Akira Investments, he designed and built software and technology 
                  solutions for businesses in the United States, gaining hands-on experience across 
                  product creation and execution, and worked in theater production in Kolkata. This 
                  diverse background informs his approach to building companies that balance artistic 
                  vision with systematic execution.
                </p>
                <p>
                  Based in Dubai, he leads the strategic direction of all Akira portfolio 
                  companies, with a focus on creating tools and education that democratize 
                  institutional-grade trading discipline.
                </p>
              </div>
              
              <BrushStroke className="w-20 sm:w-24 h-5 sm:h-6 mb-4 sm:mb-6 text-[#C8102E] opacity-40" />
              
              <div className="flex items-center gap-3 sm:gap-4">
                <Link
                  href="https://ashimnandi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 border border-neutral-200 text-neutral-400 hover:text-[#C8102E] hover:border-[#C8102E] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <SumiSun className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/trikarealization/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 border border-neutral-200 text-neutral-400 hover:text-black hover:border-black transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-32 bg-neutral-50 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-[0.03] hidden sm:block">
          <EnsoCircle className="w-[30vh] sm:w-[40vh] h-[30vh] sm:h-[40vh] text-black" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <p className="text-[#C8102E] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">The Journey</p>
            <h2 className="text-2xl sm:text-3xl font-light tracking-wide">From Chaos to Clarity</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 md:gap-16 text-center mb-10 sm:mb-12 md:mb-16">
            <div className="group">
              <div className="relative mb-4 sm:mb-6">
                <EnsoCircle className="w-16 sm:w-20 h-16 sm:h-20 mx-auto text-neutral-200 group-hover:text-[#C8102E] transition-colors duration-500" />
                <span className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl font-light text-[#C8102E]">इ</span>
              </div>
              <p className="text-xl sm:text-2xl font-light tracking-wide mb-2">Icchā</p>
              <p className="text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-[#C8102E] uppercase mb-3 sm:mb-4">Intention</p>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                The seed of all creation. Pure will aligned with purpose, before thought takes form.
              </p>
            </div>
            
            <div className="group">
              <div className="relative mb-4 sm:mb-6">
                <EnsoCircle className="w-16 sm:w-20 h-16 sm:h-20 mx-auto text-neutral-200 group-hover:text-[#C8102E] transition-colors duration-500" />
                <span className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl font-light text-[#C8102E]">ज्ञ</span>
              </div>
              <p className="text-xl sm:text-2xl font-light tracking-wide mb-2">Jñāna</p>
              <p className="text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-[#C8102E] uppercase mb-3 sm:mb-4">Knowledge</p>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                Understanding that illuminates. Wisdom refined through experience, probability, and truth.
              </p>
            </div>
            
            <div className="group">
              <div className="relative mb-4 sm:mb-6">
                <EnsoCircle className="w-16 sm:w-20 h-16 sm:h-20 mx-auto text-neutral-200 group-hover:text-[#C8102E] transition-colors duration-500" />
                <span className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl font-light text-[#C8102E]">क्रि</span>
              </div>
              <p className="text-xl sm:text-2xl font-light tracking-wide mb-2">Kriyā</p>
              <p className="text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-[#C8102E] uppercase mb-3 sm:mb-4">Action</p>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                Disciplined execution. Where intention meets knowledge and manifests in the world.
              </p>
            </div>
          </div>
          
          <div className="text-center max-w-2xl mx-auto">
            <BrushStroke className="w-24 sm:w-32 h-5 sm:h-6 mx-auto mb-6 sm:mb-8 text-black opacity-10" />
            <p className="text-neutral-500 leading-relaxed text-sm sm:text-base">
              Value is created not through force, but through elevation — raising consciousness 
              to see clearly, raising intelligence to act wisely. When intention, knowledge, 
              and action align, compounding becomes inevitable.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <div>
              <BrushStroke className="w-20 sm:w-24 h-5 sm:h-6 mb-6 sm:mb-8 text-black opacity-20" />
              <h2 className="text-2xl sm:text-3xl font-light tracking-wide mb-4 sm:mb-6">Advisory Network</h2>
              <p className="text-neutral-500 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                We are building a network of advisors with expertise in quantitative finance, 
                technology scaling, and media growth. If you share our values of discipline, 
                transparency, and long-term thinking, we would welcome a conversation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white hover:bg-[#C8102E] transition-colors duration-300 tracking-widest text-xs sm:text-sm"
              >
                JOIN OUR NETWORK
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex justify-center">
              <EnsoCircle className="w-48 sm:w-64 h-48 sm:h-64 text-neutral-100" />
            </div>
          </div>
        </div>
      </section>

      <ZenFooter />
    </main>
  )
}
