'use client';

import { useState, useRef, useEffect } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import {
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Phone,
  Clock,
  Check,
  X,
  Headphones,
  Zap,
  ShieldCheck,
  Users,
  LifeBuoy,
} from 'lucide-react';
import Link from 'next/link';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const FOCUS_KEYWORD = CONSTANTS.FOCUS_KEYWORD;
const PAGE_URL = `${SITE_URL}/support`;

// ---------------------------------------------------------------------------
// TOAST
// ---------------------------------------------------------------------------
const Toast = ({
  message,
  type,
  onClose,
}: {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-24 right-4 z-50 max-w-md w-full animate-slide-in">
      <div
        className={`rounded-2xl p-6 shadow-xl border-2 ${
          type === 'success' ? 'bg-white border-emerald-600' : 'bg-white border-[#6934B8]'
        }`}
      >
        <div className="flex items-start gap-4">
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
              type === 'success' ? 'bg-emerald-600/15' : 'bg-[#6934B8]/15'
            }`}
          >
            {type === 'success' ? (
              <Check className="w-5 h-5 text-emerald-600" />
            ) : (
              <AlertCircle className="w-5 h-5 text-[#6934B8]" />
            )}
          </div>
          <div className="flex-1">
            <p className="text-[#341766] font-black uppercase text-sm">{message}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close notification"
            className="cursor-pointer flex-shrink-0 text-[#341766]/40 hover:text-[#6934B8] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// SUCCESS POPUP
// ---------------------------------------------------------------------------
const SuccessPopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in p-4">
      <div className="bg-white border-2 border-[#FFC300] rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl text-center animate-scale-up">
        <div className="w-24 h-24 rounded-full bg-emerald-600/15 flex items-center justify-center mx-auto mb-6">
          <div className="w-16 h-16 rounded-full bg-emerald-600/25 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-[#341766] mb-3 uppercase tracking-tight">
          Message Sent!
        </h3>

        <p className="text-[#6934B8] font-bold text-sm leading-relaxed mb-6">
          Thank you for contacting {BRAND}. Our support team will reply as soon as possible.
        </p>

        <div className="bg-[#341766] rounded-2xl border border-white/5 p-5 mb-6 text-left">
          <p className="text-white/50 text-xs uppercase tracking-widest font-black mb-3">
            What happens next?
          </p>
          <ul className="space-y-2 text-sm text-white/85 font-bold uppercase tracking-wide">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FFC300] shrink-0" />
              Reviewed by an IPTV specialist
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FFC300] shrink-0" />
              Request or trial verification
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FFC300] shrink-0" />
              Reply within minutes via WhatsApp
            </li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="cursor-pointer w-full py-4 rounded-full bg-[#FFC300] text-[#341766] font-black text-sm uppercase tracking-widest hover:bg-[#e6b000] transition-transform hover:scale-105 shadow-md"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const whatsappBaseUrl = CONSTANTS.CONTACT.whatsappUrl;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const encodedMsg = encodeURIComponent(
        `Hi ${BRAND},\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
      );
      window.open(`${whatsappBaseUrl}?text=${encodedMsg}`, '_blank');

      setShowSuccessPopup(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setToast({ message: 'Your message was sent successfully!', type: 'success' });
    } catch {
      setToast({ message: 'Sending failed. Please try again via WhatsApp.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const startWhatsAppChat = () => {
    const defaultText = encodeURIComponent(
      `Hi ${BRAND}, I have a question about your ${FOCUS_KEYWORD} subscription.`
    );
    window.open(`${whatsappBaseUrl}?text=${defaultText}`, '_blank');
  };

  // ----------------- JSON-LD -----------------
  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${PAGE_URL}/#contact`,
        url: PAGE_URL,
        name: `${BRAND} Support`,
        description: `Contact ${BRAND} for 24/7 customer support. WhatsApp and email help for IPTV subscriptions, setup, and billing.`,
        inLanguage: 'en-US',
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Support', item: PAGE_URL },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do I contact support the fastest way?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `For the fastest support, send a message on WhatsApp. Our team typically replies within a few minutes.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Do you offer help with installation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes. Our team guides you step by step through setting up ${BRAND} on Smart TV, Firestick, Android, and Apple TV, either manually or with remote activation on WhatsApp.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Can I request a free trial first?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely. Request a free 24 hour IPTV trial via WhatsApp to try our 4K channels risk free before subscribing.',
            },
          },
          {
            '@type': 'Question',
            name: 'How fast will I get set up?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Once you confirm your plan and complete payment, our team sets you up live on WhatsApp. Most customers are streaming within 10 minutes.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-16 text-[#341766]">
      <script
        type="application/ld+json"
        id="support-page-schema"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {showSuccessPopup && <SuccessPopup onClose={() => setShowSuccessPopup(false)} />}

      {/* HERO */}
      <section className="relative px-6 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(105,52,184,0.15),_transparent_50%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm border border-[#6934B8]/20">
              <Mail className="w-4 h-4 text-[#FFC300]" />
              <span className="text-[#6934B8] font-black text-xs uppercase tracking-widest">
                24/7 Support
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#341766] tracking-tighter uppercase mb-6 leading-none">
              Contact <span className="text-[#6934B8]">{BRAND}</span>
            </h1>

            <p className="text-lg md:text-xl text-[#341766]/80 font-bold max-w-2xl mx-auto leading-relaxed">
              Questions about our IPTV channels, Smart TV setup, or payments? Our support team is available 24/7 via WhatsApp and email.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="bg-white border border-[#6934B8]/15 rounded-3xl p-6 md:p-8 shadow-md">
                <h2 className="text-2xl md:text-3xl font-black text-[#341766] uppercase tracking-tight mb-2">
                  Send Us a Message
                </h2>
                <p className="text-[#6934B8] font-bold text-sm mb-6">
                  Fill in the form below and we will reply via WhatsApp or email, usually within minutes.
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-black text-[#341766] uppercase tracking-wide mb-2"
                    >
                      Full Name <span className="text-[#6934B8]">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#341766]/40" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-[#F5F3F9] border-2 border-[#6934B8]/10 rounded-xl text-[#341766] font-bold placeholder-[#341766]/40 focus:border-[#6934B8] transition-colors outline-none"
                        placeholder="e.g. John Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-black text-[#341766] uppercase tracking-wide mb-2"
                    >
                      Email Address <span className="text-[#6934B8]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#341766]/40" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-[#F5F3F9] border-2 border-[#6934B8]/10 rounded-xl text-[#341766] font-bold placeholder-[#341766]/40 focus:border-[#6934B8] transition-colors outline-none"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-black text-[#341766] uppercase tracking-wide mb-2"
                    >
                      Subject <span className="text-[#6934B8]">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#341766]/40" />
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-10 py-3.5 bg-[#F5F3F9] border-2 border-[#6934B8]/10 rounded-xl text-[#341766] font-bold focus:border-[#6934B8] transition-colors outline-none appearance-none"
                      >
                        <option value="" className="bg-white">
                          Select a topic...
                        </option>
                        <option value="test" className="bg-white">
                          Free 24 Hour IPTV Trial Request
                        </option>
                        <option value="setup" className="bg-white">
                          Setup Help & App Installation
                        </option>
                        <option value="pricing" className="bg-white">
                          Plans & Pricing Questions
                        </option>
                        <option value="technical" className="bg-white">
                          Technical Support
                        </option>
                        <option value="billing" className="bg-white">
                          Payments (Credit Card / PayPal / Crypto / Apple Pay)
                        </option>
                        <option value="general" className="bg-white">
                          General Question
                        </option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#341766]/40">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M7 10l5 5 5-5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-black text-[#341766] uppercase tracking-wide mb-2"
                    >
                      Message <span className="text-[#6934B8]">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3.5 bg-[#F5F3F9] border-2 border-[#6934B8]/10 rounded-xl text-[#341766] font-bold placeholder-[#341766]/40 focus:border-[#6934B8] transition-colors outline-none resize-none"
                        placeholder="Describe your question or device type..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 rounded-xl bg-gradient-to-b from-[#FFD733] to-[#FFC300] text-[#341766] font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-md shadow-[#FFC300]/30 ${
                      loading
                        ? 'opacity-70 cursor-not-allowed'
                        : 'hover:scale-[1.01] hover:shadow-lg hover:from-[#FFC300] hover:to-[#e6b000] cursor-pointer'
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-[#341766]"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FadeIn>
              <div className="bg-white border border-[#6934B8]/15 rounded-3xl p-6 md:p-8 shadow-md space-y-6">
                <h3 className="text-xl font-black text-[#341766] uppercase tracking-tight mb-6">
                  Contact Details
                </h3>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F5F3F9] border border-[#6934B8]/15 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#6934B8]" />
                  </div>
                  <div>
                    <p className="text-[#341766]/50 text-xs uppercase tracking-widest font-black">Email</p>
                    <a
                      href={`mailto:${CONSTANTS.CONTACT.email}`}
                      className="cursor-pointer text-[#341766] hover:text-[#6934B8] transition-colors text-sm font-bold break-all"
                    >
                      {CONSTANTS.CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F5F3F9] border border-[#6934B8]/15 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#6934B8]" />
                  </div>
                  <div>
                    <p className="text-[#341766]/50 text-xs uppercase tracking-widest font-black">WhatsApp</p>
                    <a
                      href={whatsappBaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer text-[#341766] hover:text-[#6934B8] transition-colors text-sm font-bold"
                    >
                      {CONSTANTS.CONTACT.phone || 'Chat on WhatsApp'}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F5F3F9] border border-[#6934B8]/15 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-[#6934B8]" />
                  </div>
                  <div>
                    <p className="text-[#341766]/50 text-xs uppercase tracking-widest font-black">
                      Direct Contact
                    </p>
                    <p className="text-[#341766] text-sm font-bold">Available 24/7</p>
                    <button
                      onClick={startWhatsAppChat}
                      className="cursor-pointer text-[#6934B8] text-xs font-black uppercase tracking-widest hover:text-[#341766] transition-colors mt-1 block"
                    >
                      Start WhatsApp Chat →
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F5F3F9] border border-[#6934B8]/15 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#6934B8]" />
                  </div>
                  <div>
                    <p className="text-[#341766]/50 text-xs uppercase tracking-widest font-black">
                      Response Time
                    </p>
                    <p className="text-[#341766] text-sm font-bold">Within 5 to 15 minutes</p>
                  </div>
                </div>

                {/* Badges */}
                <div className="pt-6 border-t-2 border-[#6934B8]/10">
                  <p className="text-[#341766]/50 text-xs uppercase tracking-widest font-black mb-4">
                    Guaranteed Service
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#F5F3F9] rounded-xl p-3 text-center border border-[#6934B8]/10">
                      <Headphones className="w-5 h-5 text-[#6934B8] mx-auto mb-1" />
                      <p className="text-[#341766] text-[9px] uppercase font-black tracking-wider">
                        24/7 Help
                      </p>
                    </div>
                    <div className="bg-[#F5F3F9] rounded-xl p-3 text-center border border-[#6934B8]/10">
                      <ShieldCheck className="w-5 h-5 text-[#6934B8] mx-auto mb-1" />
                      <p className="text-[#341766] text-[9px] uppercase font-black tracking-wider">
                        Secure
                      </p>
                    </div>
                    <div className="bg-[#F5F3F9] rounded-xl p-3 text-center border border-[#6934B8]/10">
                      <Zap className="w-5 h-5 text-[#6934B8] mx-auto mb-1" />
                      <p className="text-[#341766] text-[9px] uppercase font-black tracking-wider">
                        Fast Setup
                      </p>
                    </div>
                    <div className="bg-[#F5F3F9] rounded-xl p-3 text-center border border-[#6934B8]/10">
                      <Users className="w-5 h-5 text-[#6934B8] mx-auto mb-1" />
                      <p className="text-[#341766] text-[9px] uppercase font-black tracking-wider">
                        50K+ Customers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TRUST BANNER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 w-full">
        <FadeIn>
          <div className="bg-[#F5F3F9] border border-[#6934B8]/15 rounded-3xl p-8 md:p-10 shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#6934B8]/15 flex items-center justify-center mx-auto mb-3">
                  <LifeBuoy className="w-6 h-6 text-[#6934B8]" />
                </div>
                <h4 className="text-[#341766] font-black text-sm uppercase tracking-wide">
                  24/7 Support
                </h4>
                <p className="text-[#341766]/60 text-xs font-bold mt-0.5">Always available</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#6934B8]/15 flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-[#6934B8]" />
                </div>
                <h4 className="text-[#341766] font-black text-sm uppercase tracking-wide">
                  Fast Response
                </h4>
                <p className="text-[#341766]/60 text-xs font-bold mt-0.5">Direct on WhatsApp</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#6934B8]/15 flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-6 h-6 text-[#6934B8]" />
                </div>
                <h4 className="text-[#341766] font-black text-sm uppercase tracking-wide">
                  Privacy Guarantee
                </h4>
                <p className="text-[#341766]/60 text-xs font-bold mt-0.5">Secure connection</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#6934B8]/15 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-[#6934B8]" />
                </div>
                <h4 className="text-[#341766] font-black text-sm uppercase tracking-wide">
                  Best Service
                </h4>
                <p className="text-[#341766]/60 text-xs font-bold mt-0.5">#1 {FOCUS_KEYWORD}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 w-full">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#341766] mb-3 uppercase tracking-tight">
            Frequently Asked <span className="text-[#6934B8]">Questions</span>
          </h2>
          <p className="text-[#341766]/70 font-bold text-base">
            Quick answers to the most common support questions
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              q: 'How do I contact support the fastest way?',
              a: `For the fastest support, message us directly on WhatsApp. Our team typically replies within a few minutes.`,
            },
            {
              q: 'Do you offer help with installation?',
              a: `Yes. Our team guides you step by step through setting up ${BRAND} on Smart TV, Firestick, Android, and Apple TV, either manually or with remote activation on WhatsApp.`,
            },
            {
              q: 'Can I request a free trial first?',
              a: 'Absolutely. Request a free 24 hour IPTV trial via WhatsApp to try our 4K channels risk free before subscribing.',
            },
            {
              q: 'How fast will I get set up?',
              a: 'Once you confirm your plan and complete payment, our team sets you up live on WhatsApp. Most customers are streaming within 10 minutes.',
            },
          ].map((faq, idx) => (
            <FadeInItem
              key={idx}
              className="bg-white border border-[#6934B8]/15 rounded-2xl p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#6934B8] hover:shadow-xl"
            >
              <h3 className="text-[#341766] font-black text-base uppercase tracking-tight mb-2">
                {faq.q}
              </h3>
              <p className="text-[#341766]/75 text-sm font-bold leading-relaxed">{faq.a}</p>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {/* CTA */}
        <FadeIn className="text-center mt-12">
          <Link
            href="/faq"
            className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FFC300] text-[#341766] font-black text-sm uppercase tracking-widest hover:scale-105 hover:bg-[#e6b000] transition-all shadow-lg shadow-[#FFC300]/30"
          >
            View Full FAQ
          </Link>
        </FadeIn>
      </section>

      <style jsx global>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scale-up {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.4s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-up {
          animation: scale-up 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}