"use server";
import nodemailer from "nodemailer";

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services, or configure SMTP provider directly
  host: SMTP_SERVER_HOST,
  port: 465, // Port for non-SSL/TLS transport
  secure: true, // TLS/SSL encryption
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function sendMail({
  email,
  name,
  message,
  phone,
}: {
  email: string;
  name: string;
  message: string;
  phone: string | null;
}) {
  try {
    const isVerified = await transporter.verify();
    if (!isVerified) {
      console.error("SMTP transport verification failed.");
      return;
    }
  } catch (error) {
    console.error("Something Went Wrong", error);
    return;
  }

  // The subject and content can be customized based on the form data.
  const mailOptions = {
    from: email, // Sender's email
    to: SITE_MAIL_RECIEVER, // Receiver's email, default fallback
    subject: "Mail from Portfolio", // Subject line
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mail from Portfolio</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 30px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          h1 {
            font-size: 24px;
            color: #333;
            margin-bottom: 20px;
          }
          p {
            font-size: 16px;
            color: #666;
            line-height: 1.5;
          }
          strong {
            font-weight: bold;
            color: #333;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Message from ${name} - Portfolio</h1>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone ? phone : "nill"}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      </body>
      </html>
    `, // HTML body content
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    return null;
  }
}
