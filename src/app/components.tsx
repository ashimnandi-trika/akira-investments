"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function EnsoCircle({ className, animate = false }: { className?: string; animate?: boolean }) {
  return (
    <svg viewBox="0 0 200 200" className={className}>
      <defs>
        <filter id="brush" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </defs>
      <circle
        cx="100"
        cy="100"
        r="75"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray="440"
        className={animate ? "enso-animate" : ""}
        style={{
          strokeDashoffset: animate ? undefined : 40,
          filter: "url(#brush)"
        }}
        transform="rotate(-90 100 100)"
      />
      <style>{`
        .enso-animate {
          stroke-dashoffset: 440;
          animation: enso-draw 2s ease-out forwards;
        }
        @keyframes enso-draw {
          from {
            stroke-dashoffset: 440;
          }
          to {
            stroke-dashoffset: 40;
          }
        }
      `}</style>
    </svg>
  )
}

export function BrushStroke({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 60" className={className} preserveAspectRatio="none">
      <path
        d="M0,30 Q50,10 100,30 T200,30 T300,30 T400,30"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        style={{ filter: "url(#brushStroke)" }}
      />
      <defs>
        <filter id="brushStroke" x="-10%" y="-50%" width="120%" height="200%">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </defs>
    </svg>
  )
}

export function InkWash({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 800 200" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="inkFade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.08"/>
            <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
          </linearGradient>
          <filter id="inkTexture">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="4"/>
            <feColorMatrix type="saturate" values="0"/>
            <feBlend in="SourceGraphic" mode="multiply"/>
          </filter>
        </defs>
        <rect width="800" height="200" fill="url(#inkFade)" style={{ filter: "url(#inkTexture)" }}/>
      </svg>
    </div>
  )
}

export function VerticalBrush({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 400" className={className}>
      <path
        d="M30,0 Q10,50 30,100 T30,200 T30,300 T30,400"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        style={{ filter: "url(#vbrush)" }}
      />
      <defs>
        <filter id="vbrush" x="-50%" y="-10%" width="200%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </defs>
    </svg>
  )
}

const navigation = [
  { name: "Philosophy", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Leadership", href: "/leadership" },
  { name: "Contact", href: "/contact" },
]

export function ZenHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between">
        <Link href="/" className="text-xl sm:text-2xl tracking-[0.3em] font-light">
          AKIRA
        </Link>
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navigation.map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              className="text-sm tracking-widest text-neutral-500 hover:text-black transition-colors uppercase"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden p-2 -mr-2 text-neutral-500 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      
      {mobileMenuOpen && (
        <div className="md:hidden px-4 sm:px-6 py-4 border-t border-neutral-100 bg-white">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-4 text-base tracking-widest text-neutral-500 hover:text-black transition-colors uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

export function ZenFooter() {
  return (
    <footer className="py-12 sm:py-16 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <EnsoCircle className="w-8 h-8 sm:w-10 sm:h-10 text-neutral-300" />
              <span className="text-base sm:text-lg tracking-[0.3em] font-light">AKIRA</span>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-sm">
              A holding company advancing systematic trading, intelligent automation, 
              and financial media — compounding value through discipline.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-neutral-400 uppercase mb-3 sm:mb-4">Company</p>
            <div className="space-y-2 sm:space-y-3">
              <Link href="/about" className="block text-sm text-neutral-500 hover:text-black transition-colors py-1">Philosophy</Link>
              <Link href="/portfolio" className="block text-sm text-neutral-500 hover:text-black transition-colors py-1">Portfolio</Link>
              <Link href="/leadership" className="block text-sm text-neutral-500 hover:text-black transition-colors py-1">Leadership</Link>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-neutral-400 uppercase mb-3 sm:mb-4">Contact</p>
            <div className="space-y-2 sm:space-y-3">
              <Link href="/contact" className="block text-sm text-neutral-500 hover:text-black transition-colors py-1">Investor Relations</Link>
              <p className="text-sm text-neutral-500">Dubai, UAE</p>
            </div>
          </div>
        </div>
        <div className="pt-6 sm:pt-8 border-t border-neutral-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-400 text-center sm:text-left">© 2024 Akira Investments LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-neutral-400 hover:text-neutral-600 transition-colors py-1">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-neutral-400 hover:text-neutral-600 transition-colors py-1">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
