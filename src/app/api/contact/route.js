import { NextResponse } from 'next/server';
import connectDB from '../../lib/mongodb';
import Booking from '../../models/Booking';
import nodemailer from 'nodemailer';

async function sendNotificationEmail(booking) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"PixelVow Website" <${process.env.EMAIL_USER}>`,
    to: process.env.NOTIFY_EMAIL || process.env.EMAIL_USER,
    subject: `New Booking Enquiry — ${booking.shootType}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background:#0A0A08; color:#F0EBE1; padding: 2rem; border: 1px solid #C9A96E;">
        <h1 style="color:#C9A96E; font-size:1.5rem; letter-spacing:.1em; margin-bottom:1.5rem;">NEW BOOKING ENQUIRY</h1>
        <table style="width:100%; border-collapse:collapse;">
          <tr><td style="padding:.5rem 0; color:#8A8478; font-size:.85rem; letter-spacing:.1em;">NAME</td><td style="padding:.5rem 0;">${booking.name}</td></tr>
          <tr><td style="padding:.5rem 0; color:#8A8478; font-size:.85rem; letter-spacing:.1em;">EMAIL</td><td style="padding:.5rem 0;">${booking.email}</td></tr>
          <tr><td style="padding:.5rem 0; color:#8A8478; font-size:.85rem; letter-spacing:.1em;">PHONE</td><td style="padding:.5rem 0;">${booking.phone}</td></tr>
          <tr><td style="padding:.5rem 0; color:#8A8478; font-size:.85rem; letter-spacing:.1em;">SHOOT TYPE</td><td style="padding:.5rem 0; color:#C9A96E;">${booking.shootType}</td></tr>
          <tr><td style="padding:.5rem 0; color:#8A8478; font-size:.85rem; letter-spacing:.1em;">PREFERRED DATE</td><td style="padding:.5rem 0;">${booking.preferredDate ? new Date(booking.preferredDate).toDateString() : 'Not specified'}</td></tr>
          <tr><td style="padding:.5rem 0; color:#8A8478; font-size:.85rem; letter-spacing:.1em; vertical-align:top;">MESSAGE</td><td style="padding:.5rem 0;">${booking.message || '—'}</td></tr>
        </table>
        <p style="margin-top:2rem; color:#8A8478; font-size:.8rem;">Received via pixelvow.in booking form</p>
      </div>
    `,
  });

  // Auto-reply to client
  await transporter.sendMail({
    from: `"PixelVow Photography" <${process.env.EMAIL_USER}>`,
    to: booking.email,
    subject: 'Your PixelVow Booking Request — We\'ll be in touch soon!',
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background:#0A0A08; color:#F0EBE1; padding: 2rem; border: 1px solid #C9A96E;">
        <h1 style="color:#C9A96E; font-size:1.5rem; letter-spacing:.1em;">PIXELVOW</h1>
        <p style="color:#8A8478; font-size:.75rem; letter-spacing:.3em; margin-bottom:1.5rem;">FINE ART PHOTOGRAPHY</p>
        <p>Dear ${booking.name},</p>
        <p style="line-height:1.8; color:#C8C0B0;">Thank you for reaching out to PixelVow! We've received your enquiry for <strong style="color:#C9A96E;">${booking.shootType}</strong> and we're thrilled at the prospect of working together.</p>
        <p style="line-height:1.8; color:#C8C0B0;">We'll review your request and get back to you within <strong style="color:#C9A96E;">4 hours</strong> to discuss your vision, confirm availability, and walk you through the next steps.</p>
        <p style="line-height:1.8; color:#C8C0B0;">In the meantime, feel free to WhatsApp us directly at <strong>+91 9171776810</strong> for faster assistance.</p>
        <p style="margin-top:2rem;">Warmly,<br/><strong style="color:#C9A96E;">Manish Khatri</strong><br/>PixelVow Fine Art Photography<br/>Ahmedabad, India</p>
        <hr style="border-color:#1A1A16; margin:2rem 0;"/>
        <p style="color:#8A8478; font-size:.75rem;">📞 +91 9171776810 · 📧 hello@pixelvow.in · 📸 @pixelvow</p>
      </div>
    `,
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, shootType, preferredDate, message } = body;

    if (!name || !email || !phone || !shootType) {
      return NextResponse.json(
        { success: false, error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    await connectDB();

    const booking = await Booking.create({
      name,
      email,
      phone,
      shootType,
      preferredDate: preferredDate || null,
      message,
    });

    // Send emails (non-blocking — don't fail the request if email fails)
    sendNotificationEmail(booking).catch(console.error);

    return NextResponse.json(
      { success: true, id: booking._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const bookings = await Booking.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, bookings });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
