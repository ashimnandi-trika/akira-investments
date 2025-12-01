import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About | Akira Investments",
  description: "Our vision, philosophy, and the thesis behind disciplined wealth creation.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-neutral-900 via-neutral-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-4">
              About Akira
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Building Systems That Compound Trust and Capital
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed">
              Akira Investments exists to create and grow businesses that transform how people 
              interact with financial markets — through discipline, technology, and education.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Origin</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Akira was born from a simple observation: most traders fail not because they lack 
                information, but because they lack systems. The market rewards discipline, yet 
                the industry sells dreams.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                We set out to build the opposite — companies that prioritize process over prediction, 
                that teach probability over certainty, and that create tools enabling systematic 
                execution at every level.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Philosophy</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Our investment thesis centers on one formula: G = E[R] - σ²/2. Expected growth 
                minus variance drag. It is the mathematical foundation for everything we build.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Position sizing matters more than win rate. Discipline compounds faster than 
                intelligence. These are not just slogans — they are engineering specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-blue-700 text-sm font-bold tracking-widest uppercase mb-3">
              Our Principles
            </p>
            <h2 className="text-3xl font-bold text-neutral-900">
              What Guides Every Decision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white border border-neutral-200">
              <div className="w-12 h-12 bg-blue-700 text-white flex items-center justify-center text-xl font-bold mb-6">
                01
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                Systems Over Discretion
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Human judgment is valuable but unreliable under pressure. We build systems 
                that execute when emotions cannot.
              </p>
            </div>
            <div className="p-8 bg-white border border-neutral-200">
              <div className="w-12 h-12 bg-blue-700 text-white flex items-center justify-center text-xl font-bold mb-6">
                02
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                Transparency Creates Trust
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We share our methodology, our metrics, and our mistakes. Trust compounds 
                faster than secrets.
              </p>
            </div>
            <div className="p-8 bg-white border border-neutral-200">
              <div className="w-12 h-12 bg-blue-700 text-white flex items-center justify-center text-xl font-bold mb-6">
                03
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                Long-term Alignment
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We do not optimize for quick exits. Every investment is structured for 
                decade-long compounding.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Interested in Our Approach?
          </h2>
          <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
            We are always open to conversations with aligned partners, investors, and builders.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
