import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight">AKIRA</span>
              <span className="text-sm text-neutral-400 tracking-wider uppercase ml-2">Investments</span>
            </Link>
            <p className="text-neutral-400 text-sm max-w-md leading-relaxed">
              A holding company advancing systematic trading, intelligent automation, and financial media — managing investments that compound long-term value.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-neutral-400 hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link href="/portfolio" className="text-sm text-neutral-400 hover:text-blue-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/leadership" className="text-sm text-neutral-400 hover:text-blue-400 transition-colors">Leadership</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-sm text-neutral-400 hover:text-blue-400 transition-colors">Investor Relations</Link></li>
              <li><span className="text-sm text-neutral-400">Dubai, UAE</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500">
            © 2024 Akira Investments LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
