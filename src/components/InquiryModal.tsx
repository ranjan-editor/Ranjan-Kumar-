import React, { useState } from 'react';
import { X, MessageSquare, Send, CheckCircle2, Film, Clock, DollarSign } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

interface InquiryModalProps {
  initialSubject?: string;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ initialSubject, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [videoType, setVideoType] = useState('Instagram Reels / Short-Form');
  const [aspect, setAspect] = useState('Vertical 9:16 (Reels/Shorts/TikTok)');
  const [budget, setBudget] = useState('$500 – $1,500');
  const [deadline, setDeadline] = useState('Within 1–2 weeks');
  const [details, setDetails] = useState(initialSubject ? `Inquiry regarding: ${initialSubject}` : '');
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    let msg = `🎬 *NEW PROJECT INQUIRY FOR KEVIN PEREZ*\n`;
    msg += `----------------------------------------\n`;
    msg += `• *Client:* ${name}\n`;
    msg += `• *Email:* ${email}\n`;
    if (phone) msg += `• *Phone/WhatsApp:* ${phone}\n`;
    msg += `• *Video Type:* ${videoType}\n`;
    msg += `• *Format:* ${aspect}\n`;
    msg += `• *Budget:* ${budget}\n`;
    msg += `• *Timeline:* ${deadline}\n`;
    if (details) msg += `• *Notes:* ${details}\n`;
    msg += `----------------------------------------\n`;
    msg += `_Sent via Video Editor Portfolio_`;

    const cleanNumber = HERO_DATA.contact.phone.replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-black/10 my-auto">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
              Project Inquiry
            </span>
            <h3 className="text-lg font-bold text-neutral-900 font-display">
              Start a Creative Collaboration
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-neutral-900">Brief Dispatched!</h4>
            <p className="text-xs text-neutral-500 max-w-xs mx-auto">
              Your inquiry has been formulated and sent to WhatsApp. Kevin will review the specs and reach back promptly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-neutral-900 text-white rounded-full text-xs font-bold"
            >
              Back to Portfolio
            </button>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppSend} className="space-y-4 pt-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-neutral-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-neutral-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@brand.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-neutral-700 mb-1">
                  Video Type
                </label>
                <select
                  value={videoType}
                  onChange={(e) => setVideoType(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 focus:outline-none focus:border-blue-500"
                >
                  <option value="Instagram Reels / Short-Form">Instagram Reels / Short-Form</option>
                  <option value="YouTube Long-Form Video">YouTube Long-Form Video</option>
                  <option value="Brand Commercial & 3D">Brand Commercial & 3D</option>
                  <option value="Motion Graphics & VFX">Motion Graphics & VFX</option>
                  <option value="Ongoing Monthly Retainer">Ongoing Monthly Retainer</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-neutral-700 mb-1">
                  Estimated Budget
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 focus:outline-none focus:border-blue-500"
                >
                  <option value="$300 – $800">$300 – $800</option>
                  <option value="$800 – $1,500">$800 – $1,500</option>
                  <option value="$1,500 – $3,500">$1,500 – $3,500</option>
                  <option value="$3,500+">$3,500+</option>
                  <option value="Custom Enterprise / Retainer">Custom Enterprise / Retainer</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-neutral-700 mb-1">
                Project Notes & Footage Details
              </label>
              <textarea
                rows={3}
                placeholder="Share your goals, references, or footage drive link..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 focus:outline-none focus:border-blue-500 focus:bg-white"
              ></textarea>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-neutral-500 hover:text-neutral-800 text-xs font-semibold"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold flex items-center gap-2 shadow-md transition-transform"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                Dispatch via WhatsApp
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
