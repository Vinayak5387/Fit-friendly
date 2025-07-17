import { NextResponse } from 'next/server';

// For email sending
import nodemailer from 'nodemailer';

// For WhatsApp (Twilio)
// import twilio from 'twilio';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, lastName, phoneNumber, age, city, height, weight } = body;

    // --- EMAIL SENDING (Nodemailer) ---
    // Configure your SMTP credentials here
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.NOTIFY_EMAIL, // Your email
      subject: 'New Client Form Submission',
      text: `New client details:\n\nName: ${name} ${lastName}\nPhone: ${phoneNumber}\nAge: ${age}\nCity: ${city}\nHeight: ${height}\nWeight: ${weight}`,
    };

    await transporter.sendMail(mailOptions);

    // --- WHATSAPP SENDING (Twilio) ---
    // Uncomment and configure if you want WhatsApp notification
    /*
    const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
    await client.messages.create({
      from: 'whatsapp:+14155238886', // Twilio sandbox or your number
      to: 'whatsapp:' + process.env.NOTIFY_WHATSAPP, // Your WhatsApp number
      body: `New client: ${name} ${lastName}, Phone: ${phoneNumber}, Age: ${age}, City: ${city}, Height: ${height}, Weight: ${weight}`,
    });
    */

    return NextResponse.json({ success: true, message: 'Notification sent!' });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
