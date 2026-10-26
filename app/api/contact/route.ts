import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "hello@dramawale.com";
const FROM_EMAIL = "contact@dramawale.com"; // must be a verified Resend sender domain

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Basic server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Guard: if no API key is configured, log and return success gracefully
    if (!process.env.RESEND_API_KEY) {
      console.warn("[Contact] RESEND_API_KEY not set — skipping email send.");
      console.log("[Contact] Submission:", { name, email, phone, subject, message });
      return NextResponse.json({ success: true });
    }

    const { error } = await resend.emails.send({
      from: `Dramawale Contact Form <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: subject?.trim()
        ? `[Dramawale Contact] ${subject.trim()}`
        : `[Dramawale Contact] New enquiry from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden;">
          <div style="background: #7A1F2B; padding: 24px 32px;">
            <h1 style="color: #E8A33D; margin: 0; font-size: 22px;">New Contact Form Submission</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 14px;">dramawale.com</p>
          </div>
          <div style="padding: 32px; background: #FAF6F0;">
            <table style="width:100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 8px 0; color: #4A4A4A; font-weight: 600; width: 120px;">Name</td><td style="padding: 8px 0; color: #1C1C1C;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #4A4A4A; font-weight: 600;">Email</td><td style="padding: 8px 0; color: #1C1C1C;"><a href="mailto:${email}" style="color:#7A1F2B;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding: 8px 0; color: #4A4A4A; font-weight: 600;">Phone</td><td style="padding: 8px 0; color: #1C1C1C;">${phone}</td></tr>` : ""}
              ${subject ? `<tr><td style="padding: 8px 0; color: #4A4A4A; font-weight: 600;">Subject</td><td style="padding: 8px 0; color: #1C1C1C;">${subject}</td></tr>` : ""}
            </table>
            <hr style="border: none; border-top: 1px solid #E2D4B8; margin: 20px 0;" />
            <h3 style="color: #7A1F2B; margin: 0 0 12px;">Message</h3>
            <p style="color: #4A4A4A; line-height: 1.7; white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
          <div style="background: #1A1A1A; padding: 16px 32px; text-align: center;">
            <p style="color: rgba(255,255,255,0.4); font-size: 12px; margin: 0;">&copy; ${new Date().getFullYear()} Dramawale &mdash; Nashik, Maharashtra, India</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("[Contact] Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

