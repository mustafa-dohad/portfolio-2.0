import { useState, useContext } from 'react';
import { ToastContext } from '../App';
import { Send, Check } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const { showToast } = useContext(ToastContext);
  const [sending, setSending] = useState(false);
  const [focus, setFocus] = useState({});
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error'
  const [buttonRipple, setButtonRipple] = useState(false);
  const formRef = useRef(null);
  const inView = useInView(formRef, { once: true, margin: '-100px' });

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
      setSubmitStatus('error');
      showToast('Please fill in all fields.');
      setTimeout(() => setSubmitStatus(null), 900);
      return;
    }
    if (!validateEmail(email)) {
      setSubmitStatus('error');
      showToast('Please enter a valid email address.');
      setTimeout(() => setSubmitStatus(null), 900);
      return;
    }
    if (message.length > 1000) {
      setSubmitStatus('error');
      showToast('Message is too long.');
      setTimeout(() => setSubmitStatus(null), 900);
      return;
    }
    setSending(true);
    setSubmitStatus(null);
    const data = { name, email, message };
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    setSending(false);
    if (res.ok) {
      setSubmitStatus('success');
      showToast('Message sent!');
      setValues({ name: '', email: '', message: '' });
      form.reset();
      setTimeout(() => setSubmitStatus(null), 1200);
    } else {
      setSubmitStatus('error');
      showToast('Failed to send. Try again.');
      setTimeout(() => setSubmitStatus(null), 900);
    }
  }

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-full max-w-lg mx-auto bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl mt-16 mb-24 p-0 flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-md mx-auto px-6 py-10 flex flex-col gap-7">
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-white mb-2 text-center tracking-tight">Contact Me</h2>
        {/* Honeypot field (hidden from users) */}
        <input type="text" name="honey" className="hidden" tabIndex="-1" autoComplete="off" />
        {/* Name Field */}
        <div className="relative">
          <input
            name="name"
            required
            value={values.name}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            className={`peer w-full bg-transparent border-b-2 border-neutral-200 dark:border-neutral-700 focus:border-cyan-500 dark:focus:border-cyan-400 text-base md:text-lg text-neutral-800 dark:text-white py-3 px-1 outline-none transition placeholder-transparent ${submitStatus==='error' && !values.name ? 'border-red-400 dark:border-red-500 animate-shake' : ''}`}
            autoComplete="off"
            id="contact-name"
          />
          <label htmlFor="contact-name" className="absolute left-1 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 text-base md:text-lg pointer-events-none transition-all duration-200 peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-cyan-500 dark:peer-focus:text-cyan-400 peer-valid:-translate-y-7 peer-valid:text-xs peer-valid:text-cyan-500 dark:peer-valid:text-cyan-400 bg-white dark:bg-neutral-900 px-1">Name</label>
        </div>
        {/* Email Field */}
        <div className="relative">
          <input
            name="email"
            type="email"
            required
            value={values.email}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            className={`peer w-full bg-transparent border-b-2 border-neutral-200 dark:border-neutral-700 focus:border-cyan-500 dark:focus:border-cyan-400 text-base md:text-lg text-neutral-800 dark:text-white py-3 px-1 outline-none transition placeholder-transparent ${submitStatus==='error' && (!values.email || !validateEmail(values.email)) ? 'border-red-400 dark:border-red-500 animate-shake' : ''}`}
            autoComplete="off"
            id="contact-email"
          />
          <label htmlFor="contact-email" className="absolute left-1 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 text-base md:text-lg pointer-events-none transition-all duration-200 peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-cyan-500 dark:peer-focus:text-cyan-400 peer-valid:-translate-y-7 peer-valid:text-xs peer-valid:text-cyan-500 dark:peer-valid:text-cyan-400 bg-white dark:bg-neutral-900 px-1">Email</label>
        </div>
        {/* Message Field */}
        <div className="relative">
          <textarea
            name="message"
            required
            value={values.message}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            maxLength={1000}
            className={`peer w-full bg-transparent border-b-2 border-neutral-200 dark:border-neutral-700 focus:border-cyan-500 dark:focus:border-cyan-400 text-base md:text-lg text-neutral-800 dark:text-white py-3 px-1 outline-none transition placeholder-transparent resize-none min-h-[90px] ${submitStatus==='error' && !values.message ? 'border-red-400 dark:border-red-500 animate-shake' : ''}`}
            autoComplete="off"
            id="contact-message"
          />
          <label htmlFor="contact-message" className="absolute left-1 top-6 text-neutral-400 dark:text-neutral-500 text-base md:text-lg pointer-events-none transition-all duration-200 peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-cyan-500 dark:peer-focus:text-cyan-400 peer-valid:-translate-y-7 peer-valid:text-xs peer-valid:text-cyan-500 dark:peer-valid:text-cyan-400 bg-white dark:bg-neutral-900 px-1">Message</label>
        </div>
        {/* Submit Button */}
        <motion.button
          type="submit"
          className={`mt-2 w-full bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white font-semibold text-lg rounded-xl py-3 shadow-md transition-colors flex items-center justify-center gap-2 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-500 relative overflow-hidden ${submitStatus==='error' ? 'animate-shake' : ''}`}
          disabled={sending || submitStatus==='success'}
          whileTap={{ scale: 0.96, boxShadow: '0 2px 12px 0 rgba(0,188,212,0.18)' }}
          onMouseDown={() => setButtonRipple(true)}
          onAnimationEnd={() => setButtonRipple(false)}
        >
          {/* Ripple effect */}
          <span className={`absolute left-1/2 top-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 dark:bg-cyan-200/30 ${buttonRipple ? 'animate-ripple' : ''}`} style={{ width: 60, height: 60, opacity: buttonRipple ? 1 : 0 }} />
          <AnimatePresence initial={false} mode="wait">
            {submitStatus==='success' ? (
              <motion.span
                key="check"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="flex items-center justify-center"
              >
                <Check className="w-6 h-6 mr-1" />
                Sent!
              </motion.span>
            ) : (
              <motion.span
                key="send"
                initial={{ x: 0, opacity: 1 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 40, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-1" />
                {sending ? 'Sending...' : 'Send Message'}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.form>
  );
} 