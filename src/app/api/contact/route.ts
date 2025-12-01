import { NextRequest, NextResponse } from "next/server"

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
const BREVO_API_KEY = process.env.BREVO_API_KEY

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    if (SUPABASE_URL && SUPABASE_SERVICE_KEY) {
      await fetch(`${SUPABASE_URL}/rest/v1/akira_contact_messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_SERVICE_KEY,
          "Authorization": `Bearer ${SUPABASE_SERVICE_KEY}`,
          "Prefer": "return=minimal"
        },
        body: JSON.stringify({
          name,
          email,
          company: company || null,
          message,
          created_at: new Date().toISOString()
        })
      })
    }

    if (BREVO_API_KEY) {
      await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY
        },
        body: JSON.stringify({
          sender: { name: "Akira Investments", email: "noreply@akira.investments" },
          to: [{ email: "ir@akira.investments" }],
          subject: `New Inquiry from ${name}`,
          htmlContent: `
            <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #ffffff;">
              <div style="text-align: center; margin-bottom: 40px;">
                <div style="width: 60px; height: 60px; margin: 0 auto 20px; border: 2px solid #000; border-radius: 50%; opacity: 0.3;"></div>
                <h1 style="font-size: 14px; letter-spacing: 4px; font-weight: 300; color: #000; margin: 0;">AKIRA INVESTMENTS</h1>
              </div>
              <div style="border-top: 1px solid #e5e5e5; padding-top: 30px;">
                <p style="font-size: 12px; letter-spacing: 2px; color: #C8102E; text-transform: uppercase; margin-bottom: 20px;">New Inquiry Received</p>
                <table style="width: 100%; font-size: 14px; color: #333;">
                  <tr><td style="padding: 8px 0; color: #999; width: 100px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
                  <tr><td style="padding: 8px 0; color: #999;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #000;">${email}</a></td></tr>
                  ${company ? `<tr><td style="padding: 8px 0; color: #999;">Company</td><td style="padding: 8px 0;">${company}</td></tr>` : ''}
                </table>
                <div style="margin-top: 30px; padding: 20px; background: #f9f9f9; border-left: 2px solid #C8102E;">
                  <p style="font-size: 12px; letter-spacing: 1px; color: #999; text-transform: uppercase; margin: 0 0 10px;">Message</p>
                  <p style="font-size: 14px; color: #333; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
              <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e5e5; text-align: center;">
                <p style="font-size: 11px; color: #999; margin: 0;">Akira Investments LLC · Dubai, UAE</p>
              </div>
            </div>
          `
        })
      })

      await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY
        },
        body: JSON.stringify({
          sender: { name: "Akira Investments", email: "noreply@akira.investments" },
          to: [{ email }],
          subject: "We've received your message — Akira Investments",
          htmlContent: `
            <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #ffffff;">
              <div style="text-align: center; margin-bottom: 40px;">
                <div style="width: 80px; height: 80px; margin: 0 auto 24px; border: 2px solid #000; border-radius: 50%; opacity: 0.15;"></div>
                <h1 style="font-size: 14px; letter-spacing: 4px; font-weight: 300; color: #000; margin: 0;">AKIRA INVESTMENTS</h1>
              </div>
              
              <div style="text-align: center; padding: 40px 20px;">
                <p style="font-size: 12px; letter-spacing: 3px; color: #C8102E; text-transform: uppercase; margin-bottom: 24px;">Message Received</p>
                <h2 style="font-size: 28px; font-weight: 300; color: #000; margin: 0 0 24px; line-height: 1.3;">Thank you, ${name}.</h2>
                <p style="font-size: 15px; color: #666; line-height: 1.7; margin: 0 0 32px;">
                  Your message has found its way to us. We appreciate you taking the time to reach out.
                </p>
                <p style="font-size: 15px; color: #666; line-height: 1.7; margin: 0;">
                  Our team will review your inquiry and respond within <strong style="color: #000;">2 business days</strong>.
                </p>
              </div>

              <div style="margin: 40px 0; padding: 30px; background: #fafafa; text-align: center;">
                <p style="font-size: 11px; letter-spacing: 2px; color: #999; text-transform: uppercase; margin: 0 0 16px;">Our Philosophy</p>
                <p style="font-size: 18px; font-weight: 300; color: #000; margin: 0; font-style: italic;">
                  "Strategic Capital. Infinite Patience."
                </p>
              </div>

              <div style="text-align: center; padding-top: 30px; border-top: 1px solid #e5e5e5;">
                <p style="font-size: 12px; color: #999; margin: 0 0 8px;">
                  <a href="https://akira.investments" style="color: #000; text-decoration: none;">akira.investments</a>
                </p>
                <p style="font-size: 11px; color: #bbb; margin: 0;">
                  Akira Investments LLC · Dubai, UAE
                </p>
              </div>
            </div>
          `
        })
      })
    }

    return NextResponse.json({ success: true }, { status: 201 })

  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 })
  }
}
