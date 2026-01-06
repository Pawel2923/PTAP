/* eslint-env node */
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { email, message } = JSON.parse(event.body || "{}");

  if (!email || !message) {
    return { statusCode: 400, body: "Invalid payload" };
  }

  await transporter.sendMail({
    from: `"Formularz strony" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO,
    replyTo: email,
    subject: "Nowa wiadomość z formularza kontaktowego",
    text: `Od: ${email}\n\n${message}`,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true }),
  };
}
