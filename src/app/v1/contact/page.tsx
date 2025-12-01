"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { ZenHeader, ZenFooter, EnsoCircle, BrushStroke, InkWash } from "../components"

export default function ZenContact() {
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
    <main className="min-h-screen bg-white text-black">
      <ZenHeader />

      <section className="min-h-[60vh] flex items-center relative pt-20">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 opacity-[0.04] hidden lg:block">
          <EnsoCircle className="w-[50vh] h-[50vh] text-black" />
        </div>
        
        <div className="max-w-6xl mx-auto px-8 relative">
          <div className="max-w-2xl">
            <p className="text-[#C8102E] text-sm tracking-[0.4em] uppercase mb-6">
              Contact
            </p>
            <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-8 leading-tight">
              Begin the<br/>
              <span className="text-neutral-400">Conversation</span>
            </h1>
            <p className="text-lg text-neutral-500 leading-relaxed">
              We welcome inquiries from potential partners, investors, and those 
              interested in our approach to systematic innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <InkWash className="absolute top-0 left-0 right-0 h-48 text-black" />
        
        <div className="max-w-6xl mx-auto px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <BrushStroke className="w-24 h-6 mb-8 text-[#C8102E] opacity-60" />
              <h2 className="text-2xl font-light tracking-wide mb-8">Reach Us</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <EnsoCircle className="w-12 h-12 text-neutral-200" />
                    <Mail className="w-5 h-5 absolute inset-0 m-auto text-[#C8102E]" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest text-neutral-400 uppercase mb-1">Email</p>
                    <a href="mailto:ir@akira.investments" className="text-black hover:text-[#C8102E] transition-colors">
                      ir@akira.investments
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <EnsoCircle className="w-12 h-12 text-neutral-200" />
                    <MapPin className="w-5 h-5 absolute inset-0 m-auto text-[#C8102E]" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest text-neutral-400 uppercase mb-1">Location</p>
                    <p className="text-black">Dubai, United Arab Emirates</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="p-8 lg:p-12 border border-neutral-200 bg-neutral-50">
                <h2 className="text-2xl font-light tracking-wide mb-8">Send a Message</h2>

                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <EnsoCircle className="w-20 h-20 text-[#C8102E] opacity-40 mb-6" />
                    <h3 className="text-2xl font-light tracking-wide mb-2">Message Sent</h3>
                    <p className="text-neutral-500 mb-8">We will respond within 2 business days.</p>
                    <button 
                      onClick={() => setStatus("idle")} 
                      className="text-[#C8102E] hover:text-black transition-colors tracking-widest text-sm"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {status === "error" && (
                      <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <p className="text-red-600 text-sm">{errorMessage}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs tracking-widest text-neutral-400 uppercase mb-2">Name *</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-neutral-200 text-black placeholder:text-neutral-400 focus:outline-none focus:border-[#C8102E] transition-colors"
                          placeholder="Your name"
                          disabled={status === "loading"}
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest text-neutral-400 uppercase mb-2">Email *</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-neutral-200 text-black placeholder:text-neutral-400 focus:outline-none focus:border-[#C8102E] transition-colors"
                          placeholder="you@company.com"
                          disabled={status === "loading"}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest text-neutral-400 uppercase mb-2">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-neutral-200 text-black placeholder:text-neutral-400 focus:outline-none focus:border-[#C8102E] transition-colors"
                        placeholder="Your company (optional)"
                        disabled={status === "loading"}
                      />
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest text-neutral-400 uppercase mb-2">Message *</label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-neutral-200 text-black placeholder:text-neutral-400 focus:outline-none focus:border-[#C8102E] resize-none transition-colors"
                        placeholder="How can we help?"
                        disabled={status === "loading"}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-4 bg-black text-white hover:bg-[#C8102E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 tracking-widest text-sm"
                    >
                      {status === "loading" ? (
                        <><Loader2 className="w-5 h-5 animate-spin" />SENDING...</>
                      ) : (
                        <><Send className="w-5 h-5" />SEND MESSAGE</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ZenFooter />
    </main>
  )
}
