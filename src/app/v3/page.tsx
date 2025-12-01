"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

function HybridEnso({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className}>
      <defs>
        <filter id="brushTexture" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B99654"/>
          <stop offset="100%" stopColor="#D4AF37"/>
        </linearGradient>
      </defs>
      <path
        d="M100,25 A75,75 0 1,1 25,100"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        style={{ filter: "url(#brushTexture)" }}
      />
      <path
        d="M25,100 A75,75 0 0,1 100,25"
        fill="none"
        stroke="url(#goldGradient)"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
    </svg>
  )
}

function FlowGrid({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 200" preserveAspectRatio="none">
      <defs>
        <filter id="flowTexture">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3"/>
          <feDisplacementMap in="SourceGraphic" scale="3"/>
        </filter>
      </defs>
      <g opacity="0.1">
        {[...Array(10)].map((_, i) => (
          <line 
            key={i} 
            x1="0" 
            y1={i * 20} 
            x2="400" 
            y2={i * 20} 
            stroke="currentColor" 
            strokeWidth="0.5"
          />
        ))}
      </g>
      <path
        d="M0,100 Q100,50 200,100 T400,100"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        style={{ filter: "url(#flowTexture)" }}
        opacity="0.3"
      />
      <path
        d="M0,110 Q100,60 200,110 T400,110"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        style={{ filter: "url(#flowTexture)" }}
        opacity="0.2"
      />
    </svg>
  )
}

function DiagonalStrokes({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <filter id="strokeTexture">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2"/>
          <feDisplacementMap in="SourceGraphic" scale="2"/>
        </filter>
      </defs>
      {[...Array(5)].map((_, i) => (
        <line
          key={i}
          x1={i * 30}
          y1="0"
          x2={i * 30 + 50}
          y2="100"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          opacity={0.05 + i * 0.02}
          style={{ filter: "url(#strokeTexture)" }}
        />
      ))}
    </svg>
  )
}

const pillars = [
  { 
    icon: "brush",
    title: "Mind", 
    subtitle: "Intuition guided by clarity",
    description: "The brush stroke of decision — where wisdom meets action" 
  },
  { 
    icon: "grid",
    title: "Math", 
    subtitle: "Structure that compounds",
    description: "G = E[R] - σ²/2 — the golden ratio of growth" 
  },
  { 
    icon: "wave",
    title: "Market", 
    subtitle: "Flow within structure",
    description: "Where probability meets patience" 
  },
]

export default function HybridTheme() {
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-white text-black">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
        <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link href="/v3" className="flex items-center gap-3">
            <HybridEnso className="w-10 h-10 text-black" />
            <span className="text-xl font-semibold tracking-wide">AKIRA</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm text-neutral-500 hover:text-black transition-colors">Philosophy</Link>
            <Link href="#" className="text-sm text-neutral-500 hover:text-black transition-colors">Portfolio</Link>
            <Link href="#" className="text-sm text-neutral-500 hover:text-black transition-colors">Leadership</Link>
            <Link href="#" className="px-6 py-2.5 bg-[#D01529] text-white text-sm font-medium hover:bg-[#B01020] transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <section className="min-h-screen flex items-center relative pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <DiagonalStrokes className="absolute top-0 right-0 w-1/2 h-full text-[#B99654]" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent" />
        </div>
        
        <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden lg:block">
          <HybridEnso 
            className={`w-[50vh] h-[50vh] text-black transition-all duration-1000 ${loaded ? 'opacity-10' : 'opacity-0'}`} 
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-8 py-20 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-[#D01529]" />
              <span className="text-[#B99654] text-sm font-medium tracking-[0.2em]">HARMONY OF FLOW & STRUCTURE</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              Where Discipline<br/>
              <span className="text-[#D01529]">Meets</span> Intuition
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed mb-10 max-w-lg">
              A holding company advancing systematic trading, intelligent automation, 
              and financial media — balancing the art of decision with the science of execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D01529] text-white font-semibold hover:bg-[#B01020] transition-colors"
              >
                Investor Relations
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-neutral-50 overflow-hidden">
        <FlowGrid className="absolute top-0 left-0 right-0 h-full text-[#B99654]" />
        
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-[#B99654]" />
              <span className="text-[#B99654] text-sm font-medium tracking-[0.2em]">THREE PILLARS</span>
              <div className="w-8 h-[1px] bg-[#B99654]" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              The Dual Nature of Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group p-8 bg-white border border-neutral-200 hover:border-[#D01529]/30 hover:shadow-lg transition-all relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  {pillar.icon === "brush" && (
                    <svg className="w-16 h-16" viewBox="0 0 50 50">
                      <path d="M10,40 Q25,10 40,40" stroke="#D01529" strokeWidth="4" fill="none" strokeLinecap="round"/>
                    </svg>
                  )}
                  {pillar.icon === "grid" && (
                    <svg className="w-16 h-16" viewBox="0 0 50 50">
                      <rect x="5" y="5" width="40" height="40" stroke="#B99654" strokeWidth="1" fill="none"/>
                      <line x1="5" y1="25" x2="45" y2="25" stroke="#B99654" strokeWidth="1"/>
                      <line x1="25" y1="5" x2="25" y2="45" stroke="#B99654" strokeWidth="1"/>
                    </svg>
                  )}
                  {pillar.icon === "wave" && (
                    <svg className="w-16 h-16" viewBox="0 0 50 50">
                      <path d="M5,25 Q15,15 25,25 T45,25" stroke="black" strokeWidth="2" fill="none"/>
                    </svg>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-2">{pillar.title}</h3>
                <p className="text-[#D01529] text-sm font-medium mb-4">{pillar.subtitle}</p>
                <p className="text-neutral-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <DiagonalStrokes className="w-full h-full text-[#B99654]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[2px] bg-[#D01529]" />
                <span className="text-[#B99654] text-sm font-medium tracking-[0.2em]">PHILOSOPHY</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                The Balance Point
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Like the ensō circle — part brush stroke, part geometric precision — 
                our approach honors both intuition and mathematics. The incomplete circle 
                represents endless growth; the structured arc represents disciplined execution.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-8">
                This is the tension that creates alpha: knowing when to flow and when to hold the line.
              </p>
              <div className="p-6 bg-white/5 border border-white/10">
                <p className="text-xs text-neutral-500 tracking-[0.2em] mb-2">THE CORE FORMULA</p>
                <p className="text-3xl font-mono font-bold">
                  G = E[R] - <span className="text-[#B99654]">σ²/2</span>
                </p>
                <p className="text-sm text-neutral-500 mt-2">Growth = Expectation − Volatility drag</p>
              </div>
            </div>
            <div className="flex justify-center">
              <HybridEnso className="w-80 h-80 text-white opacity-20" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <HybridEnso className="w-20 h-20 mx-auto mb-8 text-neutral-200" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Begin the Journey</h2>
          <p className="text-neutral-600 mb-10 max-w-lg mx-auto">
            We welcome conversations with those who understand that mastery requires 
            both the discipline of structure and the wisdom to flow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#D01529] text-white font-semibold hover:bg-[#B01020] transition-colors"
          >
            Contact Investor Relations
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <footer className="py-12 border-t border-neutral-100 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <HybridEnso className="w-8 h-8 text-neutral-300" />
            <span className="text-sm tracking-wide text-neutral-400">AKIRA INVESTMENTS</span>
          </div>
          <p className="text-xs text-neutral-400">© 2024 Akira Investments LLC. Dubai, UAE.</p>
        </div>
      </footer>
    </main>
  )
}
