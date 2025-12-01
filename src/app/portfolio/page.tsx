import Link from "next/link"
import { ArrowUpRight, TrendingUp, Radio, Briefcase } from "lucide-react"

export const metadata = {
  title: "Portfolio | Akira Investments",
  description: "Our portfolio companies advancing systematic trading and financial innovation.",
}

const companies = [
  {
    name: "R1R3",
    sector: "Systematic Trading Software",
    description: "Position sizing and risk management infrastructure that works with any trading strategy. Institutional-grade execution discipline for independent traders.",
    status: "Active",
    website: "https://r1r3.com",
    icon: TrendingUp,
    metrics: [
      { label: "Focus", value: "Execution" },
      { label: "Stage", value: "Pre-launch" },
      { label: "Model", value: "SaaS" },
    ],
  },
  {
    name: "Risk1Reward3",
    sector: "Financial Media & Education",
    description: "Educational content and community for traders who want to think systematically. Bridging the gap between retail confusion and institutional clarity.",
    status: "Active",
    website: "https://risk1reward3.com",
    icon: Radio,
    metrics: [
      { label: "Focus", value: "Education" },
      { label: "Channels", value: "YouTube" },
      { label: "Languages", value: "EN / HI" },
    ],
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-neutral-900 via-neutral-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-4">
              Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Companies We Build and Grow
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed">
              Every company in our portfolio shares a common thesis: discipline, automation, 
              and transparency create sustainable advantages.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm text-blue-700 font-bold tracking-widest uppercase mb-8">
            Active Companies
          </p>
          <div className="space-y-6">
            {companies.map((company) => (
              <div
                key={company.name}
                className="p-8 lg:p-10 bg-neutral-50 border border-neutral-200 hover:border-blue-300 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 bg-blue-700 flex items-center justify-center flex-shrink-0">
                        <company.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h2 className="text-2xl font-bold text-neutral-900">
                            {company.name}
                          </h2>
                          <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 border border-blue-200">
                            {company.status}
                          </span>
                        </div>
                        <p className="text-sm text-neutral-500 font-medium">{company.sector}</p>
                      </div>
                    </div>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {company.description}
                    </p>
                    <Link
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-700 font-semibold hover:text-blue-800 transition-colors"
                    >
                      Visit Website <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
                    {company.metrics.map((metric) => (
                      <div key={metric.label} className="p-4 bg-white border border-neutral-200">
                        <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider mb-1">{metric.label}</p>
                        <p className="text-sm font-bold text-neutral-900">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm text-neutral-400 font-bold tracking-widest uppercase mb-8">
            Future Investments
          </p>
          <div className="p-8 border-2 border-dashed border-neutral-300 bg-white">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-neutral-200 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-neutral-400" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-neutral-500">
                    Akira Ventures
                  </h3>
                  <span className="px-2 py-0.5 text-xs font-medium text-neutral-500 border border-neutral-300">
                    Coming Soon
                  </span>
                </div>
                <p className="text-sm text-neutral-400">Strategic Capital</p>
              </div>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Future investments in companies aligned with our thesis of systematic innovation, 
              disciplined execution, and long-term value creation.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
