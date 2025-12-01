"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ZenHeader, ZenFooter, EnsoCircle, BrushStroke, InkWash } from "./components"

const pillars = [
  { title: "Mind", subtitle: "Clarity of thought", description: "Systems that quiet the noise and reveal truth" },
  { title: "Math", subtitle: "Precision of method", description: "G = E[R] - σ²/2 — the formula that guides all" },
  { title: "Market", subtitle: "Flow of opportunity", description: "Where discipline meets probability" },
]

export default function ZenHome() {
  return (
    <main className="min-h-screen bg-white text-black">
      <ZenHeader />

      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
          <EnsoCircle className="w-[80vh] h-[80vh] text-black" animate />
        </div>
        
        <div className="relative z-10 text-center px-8 max-w-4xl">
          <p className="text-[#C8102E] text-sm tracking-[0.4em] uppercase mb-8">
            The Clarity of Discipline
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-wide mb-8 leading-tight">
            Strategic Capital.<br/>
            <span className="text-neutral-400">Infinite Patience.</span>
          </h1>
          <p className="text-lg text-neutral-500 max-w-xl mx-auto mb-12 leading-relaxed">
            A holding company advancing systematic trading, intelligent automation, 
            and financial media — compounding value through discipline.
          </p>
          <Link
            href="/v1/contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 tracking-widest text-sm"
          >
            INVESTOR RELATIONS
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="relative py-32">
        <InkWash className="absolute top-0 left-0 right-0 h-48 text-black" />
        
        <div className="max-w-6xl mx-auto px-8 relative">
          <div className="text-center mb-20">
            <BrushStroke className="w-32 h-8 mx-auto mb-8 text-[#C8102E] opacity-60" />
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">
              Three Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {pillars.map((pillar, i) => (
              <div key={pillar.title} className="text-center group">
                <div className="relative mb-8">
                  <EnsoCircle className="w-24 h-24 mx-auto text-neutral-200 group-hover:text-[#C8102E] transition-colors duration-500" />
                  <span className="absolute inset-0 flex items-center justify-center text-2xl font-light tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-2xl font-light tracking-[0.2em] mb-2">{pillar.title}</h3>
                <p className="text-sm text-[#C8102E] tracking-widest uppercase mb-4">{pillar.subtitle}</p>
                <p className="text-neutral-500 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-neutral-50 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 opacity-[0.03]">
          <EnsoCircle className="w-[60vh] h-[60vh] text-black" />
        </div>
        
        <div className="max-w-4xl mx-auto px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C8102E] text-sm tracking-[0.3em] uppercase mb-4">Philosophy</p>
              <h2 className="text-3xl font-light tracking-wide mb-6 leading-tight">
                Discipline<br/>Compounds
              </h2>
              <p className="text-neutral-500 leading-relaxed mb-6">
                The ensō circle represents enlightenment through imperfection — 
                a single brush stroke that captures the infinite. Our approach mirrors this: 
                simple principles, executed with consistency, compounding over decades.
              </p>
              <p className="text-neutral-500 leading-relaxed">
                Position sizing over win rate. Process over prediction. 
                Patience over performance.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="p-12 border border-neutral-200">
                <p className="text-sm text-neutral-400 tracking-widest uppercase mb-4 text-center">The Core Formula</p>
                <p className="text-3xl font-light text-center tracking-wide">
                  G = E[R] - <span className="text-[#C8102E]">σ²/2</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <BrushStroke className="w-48 h-8 mx-auto mb-8 text-black opacity-20" />
          <h2 className="text-3xl font-light tracking-wide mb-6">Begin the Journey</h2>
          <p className="text-neutral-500 mb-12 max-w-lg mx-auto">
            We welcome conversations with aligned partners who value discipline over speed, 
            and compounding over quick returns.
          </p>
          <Link
            href="/v1/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white hover:bg-[#C8102E] transition-colors duration-300 tracking-widest text-sm"
          >
            CONTACT US
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <ZenFooter />
    </main>
  )
}
