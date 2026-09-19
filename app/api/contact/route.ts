import { NextResponse } from "next/server";

const requiredFields = ["name", "email", "service", "budget", "message"] as const;
const destinationEmail = process.env.CONTACT_EMAIL || "koduradigital@gmail.com";

function escapeHtml(value: string) {
  return value.replace(/[&<>\"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '\"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const values = Object.fromEntries(
    requiredFields.map((field) => [field, String(formData.get(field) || "").trim()]),
  ) as Record<(typeof requiredFields)[number], string>;

  if (requiredFields.some((field) => !values[field])) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
    return NextResponse.json(
      { error: "Email delivery is not configured. Add RESEND_API_KEY and RESEND_FROM_EMAIL." },
      { status: 503 },
    );
  }

  const messageText = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Service: ${values.service}`,
    `Budget: ${values.budget}`,
    "",
    values.message,
  ].join("\\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL,
      to: [destinationEmail],
      reply_to: values.email,
      subject: `New Kodura inquiry from ${values.name}`,
      text: messageText,
      html: `
        <h2>New Kodura Digital inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(values.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(values.email)}</p>
        <p><strong>Service:</strong> ${escapeHtml(values.service)}</p>
        <p><strong>Budget:</strong> ${escapeHtml(values.budget)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(values.message).replace(/\\n/g, "<br />")}</p>
      `,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("Resend email failed", details);
    return NextResponse.json({ error: "We could not send your message. Please try again." }, { status: 502 });
  }

  return NextResponse.redirect(new URL("/contact?submitted=1", request.url), 303);
}
