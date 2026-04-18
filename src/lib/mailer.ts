import nodemailer from "nodemailer";
import type { LeadPayload } from "@/models/Lead";

function hasMailerConfig() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.ALERT_EMAIL
  );
}

export async function sendLeadNotification(lead: LeadPayload) {
  if (!hasMailerConfig()) {
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.ALERT_EMAIL,
    subject: `New orthopaedic appointment lead from ${lead.name}`,
    text: [
      `Name: ${lead.name}`,
      `Phone: ${lead.phone}`,
      `Problem: ${lead.problem}`,
      `Message: ${lead.message || "Not provided"}`
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.7;">
        <h2 style="margin-bottom: 16px;">New website lead received</h2>
        <p><strong>Name:</strong> ${lead.name}</p>
        <p><strong>Phone:</strong> ${lead.phone}</p>
        <p><strong>Problem:</strong> ${lead.problem}</p>
        <p><strong>Message:</strong> ${lead.message || "Not provided"}</p>
      </div>
    `
  });
}
