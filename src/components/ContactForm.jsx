import { useState, useContext } from 'react';
import { ToastContext } from '../App';
import { Handshake } from 'lucide-react';

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const { showToast } = useContext(ToastContext);
  const [sending, setSending] = useState(false);
  const [focus, setFocus] = useState({});
  const [values, setValues] = useState({ name: '', email: '', message: '' });

  function handleFocus(e) {
    setFocus(f => ({ ...f, [e.target.name]: true }));
  }
  function handleBlur(e) {
    setFocus(f => ({ ...f, [e.target.name]: false }));
  }
  function handleChange(e) {
    setValues(v => ({ ...v, [e.target.name]: e.target.value }));
  }

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
      setValues({ name: '', email: '', message: '' });
      form.reset();
    } else {
      showToast('Failed to send. Try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-[92%] max-w-lg mx-auto bg-white/80 dark:bg-neutral-900/80 rounded-2xl border-l-4 border-cyan-400 dark:border-cyan-500 shadow p-4 md:p-8 mt-6 mb-20 relative overflow-hidden min-h-[320px]">
      <div className="flex flex-col items-center mb-2">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 mb-2 shadow text-base">
          <Handshake className="w-8 h-8 text-cyan-500 dark:text-cyan-400" />
        </span>
        <h2 className="text-lg font-bold text-cyan-700 dark:text-cyan-400 mb-1 tracking-tight text-center select-none">Let’s Connect</h2>
      </div>
      {/* Honeypot field (hidden from users) */}
      <input type="text" name="honey" className="hidden" tabIndex="-1" autoComplete="off" />
      {/* Floating label input: Name */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-lg">
          <input
            name="name"
            required
            value={values.name}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder=" "
            className="w-full h-10 px-3 py-2 rounded-lg border border-cyan-200 dark:border-cyan-700 bg-white/80 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-500 text-sm transition peer"
          />
          <label
            htmlFor="name"
            className={`absolute left-2 top-1 text-cyan-500 dark:text-cyan-400 text-xs font-medium pointer-events-none transition-all duration-200
              ${focus.name || values.name ? 'scale-90 -translate-y-2' : 'scale-100 translate-y-0'}
            `}
          >
            Name
          </label>
        </div>
      </div>
      {/* Floating label input: Email */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-lg">
          <input
            name="email"
            type="email"
            required
            value={values.email}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder=" "
            className="w-full h-10 px-3 py-2 rounded-lg border border-cyan-200 dark:border-cyan-700 bg-white/80 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-500 text-sm transition peer"
          />
          <label
            htmlFor="email"
            className={`absolute left-2 top-1 text-cyan-500 dark:text-cyan-400 text-xs font-medium pointer-events-none transition-all duration-200
              ${focus.email || values.email ? 'scale-90 -translate-y-2' : 'scale-100 translate-y-0'}
            `}
          >
            Email
          </label>
        </div>
      </div>
      {/* Floating label input: Message */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-lg">
          <textarea
            name="message"
            required
            value={values.message}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder=" "
            maxLength={1000}
            className="w-full h-24 px-3 py-2 rounded-lg border border-cyan-200 dark:border-cyan-700 bg-white/80 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-500 text-sm transition peer resize-none"
          />
          <label
            htmlFor="message"
            className={`absolute left-2 top-1 text-cyan-500 dark:text-cyan-400 text-xs font-medium pointer-events-none transition-all duration-200
              ${focus.message || values.message ? 'scale-90 -translate-y-2' : 'scale-100 translate-y-0'}
            `}
          >
            Message
          </label>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow transition-colors w-full max-w-lg flex items-center justify-center gap-2 disabled:opacity-60 h-10 active:scale-95 mt-2"
          disabled={sending}
        >
          {sending ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
} 