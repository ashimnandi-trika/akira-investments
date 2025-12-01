"use client"

import { useState } from "react"
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus("error")
      setErrorMessage("Please enter your name")
      return
    }
    if (!validateEmail(formData.email)) {
      setStatus("error")
      setErrorMessage("Please enter a valid email address")
      return
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus("error")
      setErrorMessage("Message must be at least 10 characters")
      return
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Something went wrong")
      setStatus("success")
      setFormData({ name: "", email: "", company: "", message: "" })
    } catch (err) {
      setStatus("error")
      setErrorMessage(err instanceof Error ? err.message : "Failed to send message")
    }
  }

  return (
    <main className="min-h-screen bg-white pt-20">
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-neutral-900 via-neutral-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-4">
              Contact
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Investor Relations
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed">
              We welcome inquiries from potential partners, investors, and those interested 
              in our approach to systematic innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-xl font-bold text-neutral-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 font-medium mb-1">Email</p>
                    <a href="mailto:ir@akira.investments" className="text-neutral-900 font-semibold hover:text-blue-700 transition-colors">
                      ir@akira.investments
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 font-medium mb-1">Location</p>
                    <p className="text-neutral-900 font-semibold">Dubai, United Arab Emirates</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-neutral-50 border border-neutral-200 p-8 lg:p-10">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">Send a Message</h2>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-blue-100 border border-blue-200 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Message Sent</h3>
                  <p className="text-neutral-600 mb-6">We will respond within 2 business days.</p>
                  <button onClick={() => setStatus("idle")} className="text-blue-700 font-semibold hover:text-blue-800 transition-colors">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === "error" && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-red-600 text-sm font-medium">{errorMessage}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-neutral-600 font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        placeholder="Your name"
                        disabled={status === "loading"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-neutral-600 font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        placeholder="you@company.com"
                        disabled={status === "loading"}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-neutral-600 font-medium mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="Your company (optional)"
                      disabled={status === "loading"}
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-neutral-600 font-medium mb-2">Message *</label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none transition-colors"
                      placeholder="How can we help?"
                      disabled={status === "loading"}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <><Loader2 className="w-5 h-5 animate-spin" />Sending...</>
                    ) : (
                      <><Send className="w-5 h-5" />Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
