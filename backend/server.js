const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/send-email', async (req, res) => {
  const { name, company, email, country, quantity, material, description } = req.body;

  if (!name || !email || !description) {
    return res.status(400).json({ success: false, message: 'Name, email, and project description are required.' });
  }

  // Company notification email
  const companyMail = {
    from: `"Microcraft Website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `New RFQ from ${name} – ${company || 'Unknown Company'}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #d4dfe8;border-radius:6px;overflow:hidden;">
        <div style="background:#0a1628;padding:28px 32px;border-bottom:4px solid #e8a020;">
          <h1 style="color:#f8fbff;font-size:22px;margin:0;">New Request for Quotation</h1>
          <p style="color:#8fa4b8;font-size:13px;margin:6px 0 0;">Received via Microcraft Engineering website</p>
        </div>
        <div style="padding:32px;">
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:10px 0;color:#4a6278;font-weight:600;width:160px;border-bottom:1px solid #edf2f7;">Name</td><td style="padding:10px 0;color:#1e2d3d;border-bottom:1px solid #edf2f7;">${name}</td></tr>
            <tr><td style="padding:10px 0;color:#4a6278;font-weight:600;border-bottom:1px solid #edf2f7;">Company</td><td style="padding:10px 0;color:#1e2d3d;border-bottom:1px solid #edf2f7;">${company || '—'}</td></tr>
            <tr><td style="padding:10px 0;color:#4a6278;font-weight:600;border-bottom:1px solid #edf2f7;">Email</td><td style="padding:10px 0;border-bottom:1px solid #edf2f7;"><a href="mailto:${email}" style="color:#1e6abf;">${email}</a></td></tr>
            <tr><td style="padding:10px 0;color:#4a6278;font-weight:600;border-bottom:1px solid #edf2f7;">Country</td><td style="padding:10px 0;color:#1e2d3d;border-bottom:1px solid #edf2f7;">${country || '—'}</td></tr>
            <tr><td style="padding:10px 0;color:#4a6278;font-weight:600;border-bottom:1px solid #edf2f7;">Quantity</td><td style="padding:10px 0;color:#1e2d3d;border-bottom:1px solid #edf2f7;">${quantity || '—'}</td></tr>
            <tr><td style="padding:10px 0;color:#4a6278;font-weight:600;border-bottom:1px solid #edf2f7;">Material</td><td style="padding:10px 0;color:#1e2d3d;border-bottom:1px solid #edf2f7;">${material || '—'}</td></tr>
          </table>
          <div style="margin-top:24px;">
            <div style="font-size:13px;font-weight:600;color:#4a6278;margin-bottom:8px;text-transform:uppercase;letter-spacing:.08em;">Project Description</div>
            <div style="background:#edf2f7;border-left:4px solid #e8a020;padding:16px 20px;border-radius:3px;font-size:14px;color:#1e2d3d;line-height:1.8;">${description}</div>
          </div>
        </div>
        <div style="background:#edf2f7;padding:16px 32px;font-size:12px;color:#8fa4b8;text-align:center;">
          Microcraft Engineering · info@microcraft.in · Reply directly to this email to respond to the client.
        </div>
      </div>
    `,
    replyTo: email,
  };

  // Auto-reply to client
  const clientMail = {
    from: `"Microcraft Engineering" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'We received your RFQ – Microcraft Engineering',
    html: `
      <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #d4dfe8;border-radius:6px;overflow:hidden;">
        <div style="background:#0a1628;padding:28px 32px;border-bottom:4px solid #e8a020;">
          <h1 style="color:#f8fbff;font-size:22px;margin:0;">Thank You, ${name}!</h1>
          <p style="color:#8fa4b8;font-size:13px;margin:6px 0 0;">Your request for quotation has been received.</p>
        </div>
        <div style="padding:32px;">
          <p style="font-size:15px;color:#1e2d3d;line-height:1.8;margin:0 0 20px;">
            We have received your enquiry and our technical team will review your project requirements and respond with a detailed quotation within <strong>24 hours</strong>.
          </p>
          <div style="background:#edf2f7;border-left:4px solid #e8a020;padding:16px 20px;border-radius:3px;margin-bottom:28px;">
            <div style="font-size:12px;font-weight:600;color:#4a6278;text-transform:uppercase;letter-spacing:.08em;margin-bottom:6px;">Your Submission Summary</div>
            <div style="font-size:13px;color:#1e2d3d;line-height:1.8;">
              <strong>Company:</strong> ${company || '—'}<br/>
              <strong>Country:</strong> ${country || '—'}<br/>
              <strong>Material:</strong> ${material || '—'}<br/>
              <strong>Quantity:</strong> ${quantity || '—'}
            </div>
          </div>
          <p style="font-size:14px;color:#4a6278;line-height:1.8;">If you have any urgent questions, you can reach us directly at <a href="mailto:info@microcraft.in" style="color:#1e6abf;">info@microcraft.in</a></p>
        </div>
        <div style="background:#edf2f7;padding:16px 32px;font-size:12px;color:#8fa4b8;text-align:center;">
          Microcraft Engineering · Precision CNC Machining for European Industry<br/>
          <a href="mailto:info@microcraft.in" style="color:#8fa4b8;">info@microcraft.in</a>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(companyMail);
    await transporter.sendMail(clientMail);
    res.status(200).json({ success: true, message: 'Enquiry sent successfully.' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ success: false, message: 'Failed to send email. Please try again.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Microcraft email server running on port ${PORT}`));
