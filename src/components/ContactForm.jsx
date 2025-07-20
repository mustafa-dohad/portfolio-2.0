import { useState, useContext } from 'react';
import { ToastContext } from '../App';
import { Phone, Mail, MessageCircle } from 'lucide-react';

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
    <form onSubmit={handleSubmit} className="space-y-5 w-[86%] max-w-md mx-auto bg-white/90 dark:bg-neutral-900/90 rounded-2xl shadow-xl px-4 py-4 sm:py-6 md:py-8 border-l-8 border-green-400 dark:border-cyan-500 relative overflow-hidden pb-20 mt-4 md:mt-8 mb-24">
      {/* Phone icon header */}
      <div className="flex flex-col items-center mb-2">
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 dark:bg-cyan-900 mb-2 shadow">
          <Phone className="w-7 h-7 text-green-500 dark:text-cyan-400" />
        </span>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent text-center tracking-tight">Let’s Connect</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 text-center">Call, text, or drop a message below!</p>
      </div>
      {/* Honeypot field (hidden from users) */}
      <input type="text" name="honey" className="hidden" tabIndex="-1" autoComplete="off" />
      {/* Name input */}
      <div className="relative">
        <input name="name" required placeholder="Your Name" className="w-full pl-10 pr-3 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-cyan-500 text-base transition" />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400 dark:text-cyan-400">
          <Phone className="w-5 h-5" />
        </span>
      </div>
      {/* Email input */}
      <div className="relative">
        <input name="email" type="email" required placeholder="Your Email" className="w-full pl-10 pr-3 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-cyan-500 text-base transition" />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400 dark:text-cyan-400">
          <Mail className="w-5 h-5" />
        </span>
      </div>
      {/* Message input */}
      <div className="relative">
        <textarea name="message" required placeholder="Your Message" maxLength={1000} className="w-full pl-10 pr-3 py-2 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-cyan-500 text-base min-h-[100px] transition resize-none" />
        <span className="absolute left-3 top-3 text-green-400 dark:text-cyan-400">
          <MessageCircle className="w-5 h-5" />
        </span>
      </div>
      <button type="submit" className="bg-green-500 hover:bg-green-600 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white px-6 py-2 sm:py-3 md:py-4 rounded-full font-semibold shadow transition-colors w-full flex items-center justify-center gap-2 disabled:opacity-60 text-base sm:text-lg" disabled={sending}>
        <Phone className="w-5 h-5" />
        {sending ? 'Calling...' : 'Send Message'}
      </button>
    </form>
  );
} 