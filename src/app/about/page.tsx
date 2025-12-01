"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ZenHeader, ZenFooter, EnsoCircle, BrushStroke, InkWash, VerticalBrush } from "@/app/components"

const principles = [
  {
    number: "01",
    title: "Systems Over Discretion",
    description: "Human judgment is valuable but unreliable under pressure. We build systems that execute when emotions cannot."
  },
  {
    number: "02", 
    title: "Transparency Creates Trust",
    description: "We share our methodology, our metrics, and our mistakes. Trust compounds faster than secrets."
  },
  {
    number: "03",
    title: "Long-term Alignment",
    description: "We do not optimize for quick exits. Every investment is structured for decade-long compounding."
  },
]

export default function ZenAbout() {
  return (
    <main className="min-h-screen bg-white text-black">
      <ZenHeader />

      <section className="min-h-[70vh] flex items-center relative pt-20">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.04] hidden lg:block">
          <EnsoCircle className="w-[60vh] h-[60vh] text-black" />
        </div>
        
        <div className="max-w-6xl mx-auto px-8 relative">
          <div className="max-w-2xl">
            <p className="text-[#C8102E] text-sm tracking-[0.4em] uppercase mb-6">
              Philosophy
            </p>
            <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-8 leading-tight">
              The Path of<br/>
              <span className="text-neutral-400">Clarity</span>
            </h1>
            <p className="text-lg text-neutral-500 leading-relaxed">
              Akira — meaning "bright" and "clear" — represents our commitment to 
              illuminating the path through market noise. We build systems that 
              compound trust and capital through disciplined execution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <InkWash className="absolute top-0 left-0 right-0 h-48 text-black" />
        
        <div className="max-w-6xl mx-auto px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <BrushStroke className="w-24 h-6 mb-8 text-[#C8102E] opacity-60" />
              <h2 className="text-3xl font-light tracking-wide mb-6">Origin</h2>
              <p className="text-neutral-500 leading-relaxed mb-6">
                Akira was born from a simple observation: most traders fail not because 
                they lack information, but because they lack systems. The market rewards 
                discipline, yet the industry sells dreams.
              </p>
              <p className="text-neutral-500 leading-relaxed">
                We set out to build the opposite — companies that prioritize process over 
                prediction, that teach probability over certainty, and that create tools 
                enabling systematic execution at every level.
              </p>
            </div>
            <div>
              <BrushStroke className="w-24 h-6 mb-8 text-black opacity-20" />
              <h2 className="text-3xl font-light tracking-wide mb-6">The Ensō</h2>
              <p className="text-neutral-500 leading-relaxed mb-6">
                The ensō circle — painted in a single breath, a single stroke — represents 
                enlightenment, strength, and the universe itself. Its intentional incompleteness 
                symbolizes that growth never ends.
              </p>
              <p className="text-neutral-500 leading-relaxed">
                This is our philosophy made visible: simple principles, executed with 
                presence, compounding across infinite time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-neutral-50 relative overflow-hidden">
        <div className="absolute left-8 top-0 bottom-0 opacity-[0.03] hidden lg:block">
          <VerticalBrush className="h-full w-16 text-black" />
        </div>
        
        <div className="max-w-6xl mx-auto px-8 relative">
          <div className="text-center mb-16">
            <p className="text-[#C8102E] text-sm tracking-[0.3em] uppercase mb-4">Guiding Principles</p>
            <h2 className="text-3xl font-light tracking-wide">Three Truths</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {principles.map((principle) => (
              <div key={principle.number} className="text-center">
                <div className="relative mb-8">
                  <EnsoCircle className="w-20 h-20 mx-auto text-neutral-200" />
                  <span className="absolute inset-0 flex items-center justify-center text-xl font-light text-[#C8102E]">
                    {principle.number}
                  </span>
                </div>
                <h3 className="text-xl font-light tracking-wide mb-4">{principle.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 opacity-[0.03]">
          <EnsoCircle className="w-[50vh] h-[50vh] text-black" />
        </div>
        
        <div className="max-w-4xl mx-auto px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C8102E] text-sm tracking-[0.3em] uppercase mb-4">The Mathematics</p>
              <h2 className="text-3xl font-light tracking-wide mb-6">
                One Formula
              </h2>
              <p className="text-neutral-500 leading-relaxed mb-6">
                Our investment thesis centers on a single equation that governs geometric growth: 
                expected return minus variance drag. Every decision filters through this formula.
              </p>
              <p className="text-neutral-500 leading-relaxed">
                Position sizing matters more than win rate. Discipline compounds faster than 
                intelligence. These are not slogans — they are engineering specifications.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="p-12 border border-neutral-200 bg-white text-center">
                <p className="text-xs text-neutral-400 tracking-[0.2em] uppercase mb-6">The Core Formula</p>
                <p className="text-4xl font-light tracking-wide mb-4">
                  G = E[R] - <span className="text-[#C8102E]">σ²/2</span>
                </p>
                <p className="text-sm text-neutral-400">Expected growth minus variance drag</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <EnsoCircle className="w-16 h-16 mx-auto mb-8 text-white/20" />
          <h2 className="text-3xl font-light tracking-wide mb-6">Walk With Us</h2>
          <p className="text-neutral-400 mb-12 max-w-lg mx-auto">
            We welcome conversations with those who understand that mastery 
            is a path, not a destination.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black hover:bg-[#C8102E] hover:text-white transition-colors duration-300 tracking-widest text-sm"
          >
            BEGIN THE CONVERSATION
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <ZenFooter />
    </main>
  )
}
