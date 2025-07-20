import { useState, useContext } from 'react';
import { ToastContext } from '../App';

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const { showToast } = useContext(ToastContext);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const honey = form.honey.value; // honeypot

    if (honey) return; // bot detected
    if (!name || !email || !message) {
      showToast('Please fill in all fields.');
      return;
    }
    if (!validateEmail(email)) {
      showToast('Please enter a valid email address.');
      return;
    }
    if (message.length > 1000) {
      showToast('Message is too long.');
      return;
    }
    setSending(true);
    const data = { name, email, message };
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    setSending(false);
    if (res.ok) {
      showToast('Message sent!');
      form.reset();
    } else {
      showToast('Failed to send. Try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto bg-white/80 dark:bg-neutral-900/80 rounded-2xl shadow p-6 border-l-4 border-cyan-400 dark:border-cyan-500 mt-8">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent text-center">Contact Me</h2>
      {/* Honeypot field (hidden from users) */}
      <input type="text" name="honey" className="hidden" tabIndex="-1" autoComplete="off" />
      <input name="name" required placeholder="Your Name" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-400" />
      <input name="email" type="email" required placeholder="Your Email" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-400" />
      <textarea name="message" required placeholder="Your Message" maxLength={1000} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 min-h-[100px]" />
      <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded transition-colors w-full disabled:opacity-60" disabled={sending}>{sending ? 'Sending...' : 'Send'}</button>
    </form>
  );
} 