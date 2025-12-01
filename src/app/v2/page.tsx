"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

function AsanohaPattern({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <pattern id="asanoha" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M10,0 L10,10 M0,10 L10,10 L20,10 M10,10 L5,20 M10,10 L15,20 M10,10 L0,5 M10,10 L20,5" 
            stroke="currentColor" strokeWidth="0.5" fill="none"/>
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#asanoha)"/>
    </svg>
  )
}

function SeigaihaWave({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 50" preserveAspectRatio="none">
      <defs>
        <pattern id="seigaiha" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <circle cx="0" cy="20" r="18" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <circle cx="0" cy="20" r="14" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <circle cx="40" cy="20" r="18" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <circle cx="40" cy="20" r="14" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        </pattern>
      </defs>
      <rect width="200" height="50" fill="url(#seigaiha)"/>
    </svg>
  )
}

function KumikoGrid({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100">
      <defs>
        <pattern id="kumiko" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
          <rect width="25" height="25" fill="none" stroke="currentColor" strokeWidth="0.3"/>
          <line x1="0" y1="0" x2="25" y2="25" stroke="currentColor" strokeWidth="0.3"/>
          <line x1="25" y1="0" x2="0" y2="25" stroke="currentColor" strokeWidth="0.3"/>
          <line x1="12.5" y1="0" x2="12.5" y2="25" stroke="currentColor" strokeWidth="0.3"/>
          <line x1="0" y1="12.5" x2="25" y2="12.5" stroke="currentColor" strokeWidth="0.3"/>
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#kumiko)"/>
    </svg>
  )
}

const pillars = [
  { 
    icon: "◇",
    title: "Systematic Trading", 
    company: "R1R3",
    description: "Tech-enabled discipline and automated execution" 
  },
  { 
    icon: "△",
    title: "Financial Media", 
    company: "Risk1Reward3",
    description: "Expanding access to systematic knowledge" 
  },
  { 
    icon: "○",
    title: "Strategic Capital", 
    company: "Akira Ventures",
    description: "Partnerships aligned to our thesis" 
  },
]

const stats = [
  { value: "2024", label: "EST." },
  { value: "DUBAI", label: "HQ" },
  { value: "2", label: "PORTFOLIO" },
  { value: "∞", label: "HORIZON" },
]

export default function GeometricTheme() {
  return (
    <main className="min-h-screen bg-[#0E0E10] text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0E0E10]/95 backdrop-blur-sm border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link href="/v2" className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[#D4AF37] flex items-center justify-center">
              <div className="w-4 h-4 bg-[#D4AF37]" />
            </div>
            <span className="text-lg font-semibold tracking-[0.15em]">AKIRA</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors">About</Link>
            <Link href="#" className="text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors">Portfolio</Link>
            <Link href="#" className="text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors">Leadership</Link>
            <Link href="#" className="px-5 py-2.5 bg-[#D4AF37] text-[#0E0E10] text-sm font-semibold hover:bg-[#E5C04B] transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <section className="min-h-screen flex items-center relative pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <KumikoGrid className="w-full h-full text-white" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0E0E10] to-transparent z-10" />
        
        <div className="max-w-7xl mx-auto px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-sm font-medium tracking-[0.2em]">STRUCTURED INTELLIGENCE</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
                Precision.<br/>
                <span className="text-[#D4AF37]">Discipline.</span><br/>
                Growth.
              </h1>
              <p className="text-lg text-neutral-400 leading-relaxed mb-10 max-w-lg">
                A holding company advancing systematic trading, intelligent automation, 
                and financial media through mathematical rigor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0E0E10] font-semibold hover:bg-[#E5C04B] transition-colors"
                >
                  Investor Relations
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 border border-[#D4AF37]/20 rotate-45" />
                <div className="absolute w-64 h-64 border border-[#D4AF37]/30 rotate-45" />
                <div className="absolute w-48 h-48 border border-[#D4AF37]/40 rotate-45" />
                <div className="absolute w-32 h-32 bg-[#D4AF37]/10 rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-4 divide-x divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="py-6 text-center">
                <p className="text-2xl lg:text-3xl font-bold text-[#D4AF37]">{stat.value}</p>
                <p className="text-xs text-neutral-500 tracking-[0.2em] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.02]">
          <AsanohaPattern className="w-full h-full text-white" />
        </div>
        
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[1px] bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-sm font-medium tracking-[0.2em]">PORTFOLIO</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Three Pillars of Innovation
              </h2>
            </div>
            <Link href="/portfolio" className="hidden md:flex items-center gap-2 text-[#D4AF37] hover:gap-3 transition-all">
              View all <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="group p-8 bg-white/[0.02] border border-white/10 hover:border-[#D4AF37]/50 transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <KumikoGrid className="w-full h-full text-[#D4AF37]" />
                </div>
                <div className="text-4xl text-[#D4AF37] mb-6">{pillar.icon}</div>
                <p className="text-xs text-[#D4AF37] tracking-[0.2em] mb-2">{pillar.company}</p>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1D1D1F] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-[0.1]">
          <SeigaihaWave className="w-full h-full text-[#D4AF37]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[1px] bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-sm font-medium tracking-[0.2em]">PHILOSOPHY</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Mathematical Discipline
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Our investment thesis is built on a single equation that governs geometric growth: 
                expected return minus variance drag. Every decision filters through this formula.
              </p>
              <div className="p-6 bg-black/50 border border-[#D4AF37]/20">
                <p className="text-xs text-neutral-500 tracking-[0.2em] mb-2">THE CORE FORMULA</p>
                <p className="text-3xl font-mono font-bold">
                  G = E[R] - <span className="text-[#D4AF37]">σ²/2</span>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-white/10">
                <p className="text-3xl font-bold text-[#D4AF37] mb-1">Systems</p>
                <p className="text-sm text-neutral-500">Over discretion</p>
              </div>
              <div className="p-6 border border-white/10">
                <p className="text-3xl font-bold text-[#D4AF37] mb-1">Process</p>
                <p className="text-sm text-neutral-500">Over prediction</p>
              </div>
              <div className="p-6 border border-white/10">
                <p className="text-3xl font-bold text-[#D4AF37] mb-1">Position</p>
                <p className="text-sm text-neutral-500">Over win rate</p>
              </div>
              <div className="p-6 border border-white/10">
                <p className="text-3xl font-bold text-[#D4AF37] mb-1">Long-term</p>
                <p className="text-sm text-neutral-500">Over quick exits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Connect?</h2>
          <p className="text-neutral-400 mb-10 max-w-lg mx-auto">
            We welcome inquiries from aligned partners who understand that discipline creates alpha.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#D4AF37] text-[#0E0E10] font-semibold hover:bg-[#E5C04B] transition-colors"
          >
            Contact Investor Relations
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border border-[#D4AF37] flex items-center justify-center">
              <div className="w-3 h-3 bg-[#D4AF37]" />
            </div>
            <span className="text-sm tracking-[0.1em] text-neutral-400">AKIRA INVESTMENTS</span>
          </div>
          <p className="text-xs text-neutral-600">© 2024 Akira Investments LLC. Dubai, UAE.</p>
        </div>
      </footer>
    </main>
  )
}
