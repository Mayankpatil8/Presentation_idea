// test-email.js
// Run this with: node test-email.js
// This will tell you EXACTLY what is wrong

const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('─────────────────────────────────');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS length:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 'NOT SET');
console.log('EMAIL_PASS value:', process.env.EMAIL_PASS ? `"${process.env.EMAIL_PASS}"` : 'NOT SET');
console.log('─────────────────────────────────');

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('❌ .env file is not loading correctly or values are missing.');
  process.exit(1);
}

if (process.env.EMAIL_PASS.includes(' ')) {
  console.error('❌ EMAIL_PASS contains spaces — remove all spaces from the app password.');
  process.exit(1);
}

if (process.env.EMAIL_PASS.length !== 16) {
  console.error(`❌ EMAIL_PASS is ${process.env.EMAIL_PASS.length} characters — it must be exactly 16 characters (no spaces).`);
  process.exit(1);
}

console.log('✅ Credentials look correct in .env — testing SMTP connection...\n');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('❌ SMTP connection failed:');
    console.error(error.message);
    console.log('\n── Possible causes ──');
    console.log('1. App Password was copied with spaces → remove all spaces');
    console.log('2. Wrong Gmail account in EMAIL_USER');
    console.log('3. App Password belongs to a different Gmail account');
    console.log('4. 2-Step Verification is not enabled on this Gmail account');
    console.log('5. The App Password was deleted or expired after creation');
  } else {
    console.log('✅ Gmail SMTP connection successful! Server is ready to send emails.');
  }
});
