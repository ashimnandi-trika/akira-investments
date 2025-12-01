import { ZenHeader, ZenFooter, BrushStroke } from "@/app/components"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-black">
      <ZenHeader />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <BrushStroke className="w-24 h-6 mb-8 text-[#C8102E] opacity-60" />
          <h1 className="text-4xl sm:text-5xl font-light tracking-wide mb-4">Privacy Policy</h1>
          <p className="text-neutral-400 text-sm tracking-widest uppercase">Last updated: December 2024</p>
        </div>
      </section>

      <section className="pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-neutral">
          <div className="space-y-12 text-neutral-600 leading-relaxed">
            
            <div>
              <h2 className="text-xl font-light tracking-wide text-black mb-4">Introduction</h2>
              <p>
                Akira Investments LLC ("Akira," "we," "us," or "our") respects your privacy and is committed 
                to protecting your personal data. This privacy policy explains how we collect, use, and 
                safeguard your information when you visit our website at akira.investments.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-light tracking-wide text-black mb-4">Information We Collect</h2>
              <p className="mb-4">We may collect the following types of information:</p>
              <p className="mb-2"><strong className="text-black">Contact Information:</strong> When you use our contact form, we collect your name, email address, company name (optional), and message content.</p>
              <p className="mb-2"><strong className="text-black">Usage Data:</strong> We automatically collect certain information about your device and how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.</p>
              <p><strong className="text-black">Cookies:</strong> We use essential cookies to ensure our website functions properly. We do not use advertising or tracking cookies.</p>
            </div>

            <div>
              <h2 className="text-xl font-light tracking-wide text-black mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and communications</li>
                <li>Improve our website and user experience</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraudulent or unauthorized activity</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-light tracking-wide text-black mb-4">Data Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information with trusted service providers who assist us in operating our website 
                and conducting our business, subject to confidentiality agreements. We may also disclose 
                information when required by law or to protect our rights.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-light tracking-wide text-black mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                data against unauthorized access, alteration, disclosure, or destruction. However, no 
                method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-light tracking-wide text-black mb-4">Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes for 
                which it was collected, including to satisfy any legal, accounting, or reporting requirements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-light tracking-wide text-black mb-4">Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Data portability</li>
              </ul>
              <p className="mt-4">To exercise any of these rights, please contact us at ir@akira.investments.</p>
            </div>

            <div>
              <h2 className="text-xl font-light tracking-wide text-black mb-4">International Transfers</h2>
              <p>
                Our operations are based in Dubai, United Arab Emirates. If you are accessing our website 
                from outside the UAE, please be aware that your information may be transferred to, stored, 
                and processed in the UAE or other countries where our service providers operate.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-light tracking-wide text-black mb-4">Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-light tracking-wide text-black mb-4">Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our data practices, please contact us at:
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
