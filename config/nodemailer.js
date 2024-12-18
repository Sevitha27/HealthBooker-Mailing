const nodemailer = require('nodemailer')

exports.transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    pool: true,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
});

exports.mailOptionsReceiving = {
    to: process.env.GMAIL_USER,
    subject: 'Feedback from HealthBooker'
}

exports.mailOptionsSending = {
  from: process.env.GMAIL_USER,
  subject: 'Appreciating Your Valuable Insights'
}