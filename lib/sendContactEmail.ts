// Utility to send email using EmailJS
// You must install @emailjs/browser: npm install @emailjs/browser
import emailjs from '@emailjs/browser';

export function sendContactEmail(data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}) {
  // Replace these with your EmailJS credentials
  const SERVICE_ID = 'YOUR_SERVICE_ID';
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const USER_ID = 'YOUR_USER_ID';

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID);
}
