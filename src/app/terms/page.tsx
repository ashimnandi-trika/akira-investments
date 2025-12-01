import { ZenHeader, ZenFooter, BrushStroke } from "@/app/components"

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-white text-black">
      <ZenHeader />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <BrushStroke className="w-24 h-6 mb-8 text-[#C8102E] opacity-60" />
          <h1 className="text-4xl sm:text-5xl font-light tracking-wide mb-4">Terms of Use</h1>
          <p className="text-neutral-400 text-sm tracking-widest uppercase">Last updated: December 2024</p>
        </div>
      </section>

      <section className="pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-neutral">
          <div className="space-y-12 text-neutral-600 leading-relaxed">
            
            <div>
              <h2 className="text-xl font-light tracking-wide text-black mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using the Akira Investments LLC website ("Site"), you accept and agree 
                to be bound by these Terms of Use. If you do not agree to these terms, please do not 
                use this Site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-light tracking-wide text-black mb-4">Company Information</h2>
              <p>
                Akira Investments LLC is a holding company registered in Dubai, United Arab Emirates. 
                We operate as a strategic investor in companies focused on systematic trading, 
                intelligent automation, and financial media.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-light tracking-wide text-black mb-4">No Investment Advice</h2>
              <p>
                The content on this Site is provided for informational purposes only and does not 
                constitute investment advice, financial advice, trading advice, or any other sort 
                of advice. You should not treat any of the Site's content as such.
              </p>
              <p className="mt-4">
                Before making any investment decisions, you should consult with a qualified financial 
                advisor who can take into account your individual circumstances and goals.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-light tracking-wide text-black mb-4">No Solicitation</h2>
              <p>
                Nothing on this Site constitutes a solicitation, offer, or recommendation to buy or 
                sell any investment or to engage in any investment strategy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-light tracking-wide text-black mb-4">Intellectual Property</h2>
              <p>
                All content on this Site, including but not limited to text, graphics, logos, images, 
                and software, is the property of Akira Investments LLC or its content suppliers and 
                is protected by international copyright and trademark laws.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-light tracking-wide text-black mb-4">Disclaimer of Warranties</h2>
              <p>
                This Site and its content are provided "as is" and "as available" without any warranties 
                of any kind, either express or implied. We do not warrant that the Site will be 
                uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-light tracking-wide text-black mb-4">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Akira Investments LLC shall not be liable for 
                any direct, indirect, incidental, special, consequential, or punitive damages arising 
                out of or related to your use of this Site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-light tracking-wide text-black mb-4">Governing Law</h2>
              <p>
                These Terms of Use shall be governed by and construed in accordance with the laws of 
                the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction 
                of the courts of Dubai.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-light tracking-wide text-black mb-4">Contact</h2>
              <p>
                If you have any questions about these Terms of Use, please contact us at:
              </p>
              <p className="mt-4">
                <strong className="text-black">Akira Investments LLC</strong><br />
                Dubai, United Arab Emirates<br />
                Email: ir@akira.investments
              </p>
            </div>

          </div>
        </div>
      </section>

      <ZenFooter />
    </main>
  )
}
