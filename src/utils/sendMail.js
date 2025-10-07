// import nodemailer from 'nodemailer';
import { env } from './env.js';
import axios from 'axios';

// const transporter = nodemailer.createTransport({
//   host: env('SMTP_HOST'),
//   port: env('SMTP_PORT'),
//   secure: true,
//   auth: {
//     user: env('SMTP_USER'),
//     pass: env('SMTP_PASSWORD'),
//   },
// });

// transporter.verify((error, success) => {
//   if (error) {
//     console.error('SMTP connection failed:', error);
//   } else {
//     console.log('Server is ready to send emails');
//   }
// });

// export const sendMail = async (options) => {
//   return await transporter.sendMail(options);
// };

const API_KEY = env('MAILERSEND_API_KEY');

export const sendMail = async ({ to, subject, html, text }) => {
  return await axios.post(
    env('MAILERSEND_API_URL'),
    {
      from: { email: env('SMTP_FROM') },
      to: [{ email: to }],
      subject: subject,
      text: text,
      html: html,
    },
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    },
  );
};
