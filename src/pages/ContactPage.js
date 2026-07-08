import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaBehance, FaDribbble, FaGithub, FaLinkedin } from 'react-icons/fa';
import { ChevronDown } from 'lucide-react';

const fieldVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } }),
};

const faqData = [
  {
    id: '01',
    question: 'What is your current role?',
    answer:
      'I am currently working as a Frontend Developer / UI-UX Hybrid, focusing on building accessible, premium web experiences using React, Next.js, and modern animation libraries.',
  },
  {
    id: '02',
    question: 'How much does it cost for a high performing website?',
    answer:
      'Pricing depends on the project scope, complexity, required animations, and content management. Feel free to connect via the form above to get a personalized quote.',
  },
  {
    id: '03',
    question: 'How long will the work take from start to finish?',
    answer:
      'A standard production-ready portfolio or landing page typically takes 2–4 weeks. Complex digital platforms or enterprise apps may scale up based on feature requirements.',
  },
  {
    id: '04',
    question: 'Are you available to join as full time?',
    answer:
      'Yes, I am open to discussing full-time opportunities, high-impact contract positions, or select freelance collaborations that align with my skill set.',
  },
];

function IconButton({ children, href = '#', label = '' }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="text-gray-400 transition-colors hover:text-lime-500 dark:text-zinc-500 dark:hover:text-white"
    >
      {children}
    </a>
  );
}

function LabelInput({ children }) {
  return <div className="flex flex-col">{children}</div>;
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [activeId, setActiveId] = useState(null);
  const nameRef = useRef(null);

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = 'Full name is required.';
    if (!form.email.trim()) nextErrors.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Please enter a valid email.';
    if (!form.message.trim()) nextErrors.message = 'Message is required.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');

    if (!validate()) return;

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1100));
      setSuccess('Thanks! I will get back to you shortly.');
      setForm({ name: '', email: '', message: '' });
      nameRef.current?.focus();
    } finally {
      setLoading(false);
    }
  };

  const toggleFaq = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-white text-black transition-colors duration-500 dark:bg-[#141414] dark:text-white">
      <section className="relative min-h-screen w-full bg-white px-12 pb-16 pt-36 transition-colors duration-500 dark:bg-[#141414] sm:px-16 lg:px-24 xl:px-36">
        <div className="mb-16 space-y-4">
          <div className="flex items-center gap-2 font-clash text-sm uppercase tracking-widest text-lime-400 dark:text-lime-400">
            ✦ Connect With Me
          </div>
          <h2 className="font-clash text-4xl font-semibold leading-[1.1] tracking-tight text-gray-900 dark:text-white md:text-6xl">
            Let&apos;s start a project
            <br />
            together
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-12 lg:grid-cols-[1.2fr_0.8fr]">
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
              <motion.div custom={0} variants={fieldVariant}>
                <LabelInput>
                  <label htmlFor="name" className="font-sans text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full Name
                  </label>
                  <input
                    ref={nameRef}
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-3 py-2 font-sans text-sm text-gray-900 transition placeholder-gray-400 focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500 dark:border-zinc-800/80 dark:bg-[#0d0d0d] dark:text-white"
                    placeholder="Your full name"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <div className="mt-1 text-xs text-red-500">{errors.name}</div>}
                </LabelInput>
              </motion.div>

              <motion.div custom={1} variants={fieldVariant}>
                <LabelInput>
                  <label htmlFor="email" className="font-sans text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-3 py-2 font-sans text-sm text-gray-900 transition placeholder-gray-400 focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500 dark:border-zinc-800/80 dark:bg-[#0d0d0d] dark:text-white"
                    placeholder="you@domain.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <div className="mt-1 text-xs text-red-500">{errors.email}</div>}
                </LabelInput>
              </motion.div>

              <motion.div custom={2} variants={fieldVariant}>
                <LabelInput>
                  <label htmlFor="message" className="font-sans text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="mt-2 block w-full resize-y rounded-xl border border-gray-200 bg-gray-50/50 px-3 py-2 font-sans text-sm text-gray-900 transition placeholder-gray-400 focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500 dark:border-zinc-800/80 dark:bg-[#0d0d0d] dark:text-white"
                    placeholder="Tell me about your project..."
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <div className="mt-1 text-xs text-red-500">{errors.message}</div>}
                </LabelInput>
              </motion.div>

              <motion.div custom={3} variants={fieldVariant} className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 px-8 py-3 text-sm font-medium font-sans transition-all duration-300 hover:bg-black hover:text-white focus:outline-none disabled:opacity-60 dark:border-zinc-700 dark:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  {loading ? 'Sending...' : 'Submit'}
                </button>
                {success && <div className="mt-3 text-sm text-green-600">{success}</div>}
              </motion.div>
            </motion.div>
          </form>

          <aside className="w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-6 rounded-3xl border border-gray-100 bg-gray-50/50 p-8 dark:border-zinc-800/80 dark:bg-[#0d0d0d]"
            >
              <div className="flex">
                <span className="inline-flex items-center gap-2 rounded-full bg-lime-500/10 px-3 py-1.5 text-xs font-medium font-sans text-lime-600 dark:text-lime-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-lime-500" />
                  Available for work
                </span>
              </div>

              <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-zinc-800 bg-zinc-900">
                <img src="/grad-pic-icon.jpg" alt="Owen Trinidad" className="h-full w-full object-cover" />
              </div>

              <p className="font-sans text-sm leading-relaxed text-gray-600 dark:text-zinc-400">
                My inbox is always open. Whether you have a project or just want to say Hi, I would love to hear from you. Feel free to contact me and I&apos;ll get back to you.
              </p>

              <div className="flex items-center gap-5 pt-2 text-gray-500 dark:text-zinc-500">
                <a className="transition-colors hover:text-lime-500" href="https://www.linkedin.com/in/hoyitsowen/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin className="text-xl" />
                </a>
                <a className="transition-colors hover:text-lime-500" href="https://github.com/hoyitsowen" aria-label="GitHub">
                  <FiGithub className="text-xl" />
                </a>
                <a className="transition-colors hover:text-lime-500" href="https://www.instagram.com/hoyitsowen/" aria-label="Instagram">
                  <FiInstagram className="text-xl" />
                </a>
                <a className="transition-colors hover:text-lime-500" href="mailto:owen.trinidad23@gmail.com" aria-label="Email">
                  <FiMail className="text-xl" />
                </a>
              </div>
            </motion.div>
          </aside>
        </div>

        <section className="mt-24 border-t border-gray-100 pt-16 pb-8 dark:border-zinc-900/80">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-x-12 gap-y-12 md:grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_2fr]">
            <div className="space-y-4 md:sticky md:top-12">
              <div className="flex items-center gap-2 text-sm font-clash uppercase tracking-widest text-lime-400">
                ✦ FAQS
              </div>
              <h2 className="font-clash text-5xl font-semibold leading-none tracking-tight text-gray-900 dark:text-white md:text-6xl">
                Have
                <br />
                Questions?
              </h2>
            </div>

            <div className="w-full space-y-4">
              {faqData.map((item) => {
                const isOpen = activeId === item.id;

                return (
                  <motion.div
                    {...fadeInUp}
                    key={item.id}
                    className="overflow-hidden rounded-2xl border border-gray-200 bg-white/90 transition-colors duration-300 hover:border-gray-300 dark:border-[#1a1a1a] dark:bg-[#0d0d0d] dark:hover:border-zinc-800"
                  >
                    <button
                      onClick={() => toggleFaq(item.id)}
                      className="group flex w-full items-center justify-between p-6 text-left focus:outline-none md:p-7"
                    >
                      <h3 className="flex items-center gap-3 text-[15px] font-medium font-sans text-gray-800 transition-colors group-hover:text-gray-900 dark:text-zinc-100 dark:group-hover:text-white md:text-[17px]">
                        <span className="font-mono font-normal text-gray-400 dark:text-zinc-500">{item.id}.</span>
                        {item.question}
                      </h3>

                      <div className="pl-4 text-gray-400 transition-colors group-hover:text-gray-700 dark:text-zinc-400 dark:group-hover:text-white">
                        <ChevronDown
                          size={18}
                          className={`transform transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6 text-md font-sans leading-relaxed text-gray-600 dark:border-zinc-900/40 dark:text-zinc-400 md:px-7 md:text-[15px]">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 text-sm font-sans text-black dark:border-zinc-800 dark:text-zinc-500 sm:flex-row">
          <p className="text-black dark:text-gray-400">© {new Date().getFullYear()} Owen Trinidad. All rights reserved.</p>
          <div className="flex items-center opacity-cintainer text-text-secondary gap-6">
                <a className="hover:text-gray-300" href="https://www.linkedin.com/in/hoyitsowen/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin className="text-xl"/>
                </a>
                <a className="hover:text-gray-300" href="https://github.com/hoyitsowen" aria-label="GitHub">
                    <FiGithub className="text-xl"/>
                </a>
                <a className="hover:text-gray-300" href="https://www.instagram.com/hoyitsowen/" aria-label="Instagram">
                    <FiInstagram className="text-xl"/>
                </a>
                <a className="hover:text-gray-300" href="mailto:owen.trinidad23@gmail.com" aria-label="Email">
                    <FiMail className="text-xl"/>
                </a>
            </div>
        </div>
      </section>
    </div>
  );
}
