import Link from "next/link"
import Image from "next/image"
import { ArrowRight, TrendingUp, Radio, Briefcase, ChevronRight } from "lucide-react"

const pillars = [
  {
    icon: TrendingUp,
    title: "Systematic Trading",
    company: "R1R3",
    description: "Tech-enabled discipline and automated execution for traders who think in probabilities.",
    href: "https://r1r3.com",
  },
  {
    icon: Radio,
    title: "Financial Media",
    company: "Risk1Reward3",
    description: "Expanding access to systematic knowledge through education and community.",
    href: "https://risk1reward3.com",
  },
  {
    icon: Briefcase,
    title: "Strategic Capital",
    company: "Akira Ventures",
    description: "Partnerships and investments aligned to our thesis of disciplined wealth creation.",
    href: "/portfolio",
  },
]

const stats = [
  { value: "2024", label: "Founded" },
  { value: "Dubai", label: "Headquarters" },
  { value: "2", label: "Portfolio Companies" },
  { value: "∞", label: "Time Horizon" },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-blue-900">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Akira Investments LLC · Dubai
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Strategic Capital for{" "}
              <span className="text-blue-400">Disciplined Innovation</span>
            </h1>
            <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed mb-10 max-w-2xl">
              A holding company advancing systematic trading, intelligent automation, and financial media — managing investments that compound long-term value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                Investor Relations
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl lg:text-3xl font-bold text-neutral-900">{stat.value}</p>
                <p className="text-sm text-neutral-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <p className="text-blue-700 text-sm font-bold tracking-widest uppercase mb-3">
                Our Focus
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
                Three Pillars of Innovation
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all"
            >
              View all investments <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="group p-8 bg-neutral-50 border border-neutral-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all"
              >
                <div className="w-14 h-14 bg-blue-700 flex items-center justify-center mb-6">
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-xs text-blue-700 font-bold tracking-widest uppercase mb-2">
                  {pillar.company}
                </p>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-blue-700 font-semibold group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-3">
                Our Philosophy
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Discipline Compounds
              </h2>
              <p className="text-neutral-300 leading-relaxed mb-6">
                We believe the future of wealth creation lies at the intersection of systematic thinking, 
                technological innovation, and disciplined execution. Markets reward those who can separate 
                signal from noise.
              </p>
              <p className="text-neutral-300 leading-relaxed mb-8">
                Every company in our portfolio shares a common thesis: that automation, when guided by 
                sound principles, creates sustainable advantages that compound over time.
              </p>
              <div className="p-6 bg-white/5 border border-white/10">
                <p className="text-sm text-neutral-400 mb-2">The Core Formula</p>
                <p className="text-2xl font-mono font-bold text-white">
                  G = E[R] - <span className="text-blue-400">σ²/2</span>
                </p>
                <p className="text-sm text-neutral-400 mt-2">Expected growth minus variance drag</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 border border-white/10">
                <p className="text-3xl font-bold text-white mb-1">Systems</p>
                <p className="text-sm text-neutral-400">Over discretion</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10">
                <p className="text-3xl font-bold text-white mb-1">Process</p>
                <p className="text-sm text-neutral-400">Over prediction</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10">
                <p className="text-3xl font-bold text-white mb-1">Position</p>
                <p className="text-sm text-neutral-400">Over win rate</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10">
                <p className="text-3xl font-bold text-white mb-1">Long-term</p>
                <p className="text-sm text-neutral-400">Over quick exits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Ready to Connect?
          </h2>
          <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
            We welcome inquiries from aligned partners, investors, and those interested in our approach.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors"
          >
            Contact Investor Relations
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
