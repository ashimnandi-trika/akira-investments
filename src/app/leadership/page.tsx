import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Leadership | Akira Investments",
  description: "Meet the team behind Akira Investments.",
}

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-neutral-900 via-neutral-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-4">
              Leadership
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              The Team Behind Akira
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed">
              Building disciplined financial technologies requires both conviction and experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="aspect-[4/5] bg-neutral-100 relative overflow-hidden border border-neutral-200">
                <Image
                  src="/ashim-nandi.jpg"
                  alt="Ashim Nandi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-3 flex flex-col justify-center">
              <p className="text-blue-700 text-sm font-bold tracking-widest uppercase mb-2">
                Founder & CEO
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                Ashim Nandi
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed mb-8">
                <p>
                  Ashim is a systematic trader and technologist with a background spanning 
                  software engineering, financial markets, and media production. His trading 
                  journey — from initial capital to significant drawdowns and rebuilding — 
                  shaped the core philosophy behind Akira: that position sizing and risk 
                  management matter more than prediction.
                </p>
                <p>
                  Before founding Akira Investments, he built and sold an IT consulting 
                  company serving US businesses, and worked in theater production in Kolkata. 
                  This diverse background informs his approach to building companies that 
                  balance artistic vision with systematic execution.
                </p>
                <p>
                  He is based in Dubai and leads the strategic direction of all Akira 
                  portfolio companies, with a focus on creating tools and education that 
                  democratize institutional-grade trading discipline.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="https://x.com/AshimNandi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-neutral-100 text-neutral-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="https://linkedin.com/in/ashimnandi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-neutral-100 text-neutral-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Advisory Network
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              We are building a network of advisors with expertise in quantitative finance, 
              technology scaling, and media growth.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors"
            >
              Join Our Network <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
