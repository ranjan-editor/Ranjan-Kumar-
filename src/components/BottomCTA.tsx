import React, { useState } from 'react';
import { HERO_DATA } from '../data/portfolioData';
import { Mail, Phone, Copy, Check, MessageSquare } from 'lucide-react';

interface BottomCTAProps {
  onOpenInquiry: () => void;
}

export const BottomCTA: React.FC<BottomCTAProps> = ({ onOpenInquiry }) => {
  const [copied, setCopied] = useState(false);
  const [ringing, setRinging] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(HERO_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePhoneClick = () => {
    setRinging(true);
    setTimeout(() => {
      setRinging(false);
      onOpenInquiry();
    }, 900);
  };

  return (
    <section className="relative mt-16 sm:mt-24 pb-16 flex flex-col items-center text-center">
      {/* 1. BLUE SPEECH BUBBLE */}
      <div className="relative mb-3 inline-block">
        <button
          onClick={onOpenInquiry}
          className="bg-[#007aff] hover:bg-[#006ee0] active:scale-95 text-white text-xs sm:text-sm font-bold py-2.5 px-6 rounded-2xl shadow-lg transition-transform"
        >
          Let's solve your design needs
        </button>
        {/* Chat pointer triangle */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-[#007aff] rotate-45 -mt-1.5"></div>
      </div>

      {/* 2. CONTACT DETAILS CAPSULE CARD */}
      <div className="relative z-10 w-full max-w-md bg-[#1d3d63] text-white p-5 rounded-3xl shadow-xl border border-white/10 backdrop-blur-md text-center">
        <span className="text-[11px] font-bold text-blue-200 tracking-wider uppercase block mb-1">
          Say hello
        </span>

        {/* Email with 1-click Copy */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <a
            href={`mailto:${HERO_DATA.contact.email}`}
            className="text-xs sm:text-sm font-semibold text-white hover:text-blue-200 transition-colors underline decoration-blue-400/40"
          >
            {HERO_DATA.contact.email}
          </a>
          <button
            onClick={handleCopyEmail}
            title="Copy email address"
            className="p-1 rounded-md bg-white/10 hover:bg-white/20 text-blue-100 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Phone & Website */}
        <div className="text-xs text-blue-100/90 flex flex-wrap items-center justify-center gap-2 font-mono">
          <a href={`tel:${HERO_DATA.contact.phone}`} className="hover:underline">
            {HERO_DATA.contact.phone}
          </a>
          <span>•</span>
          <a
            href="https://brandfoxcreatives.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline font-sans"
          >
            {HERO_DATA.contact.website}
          </a>
        </div>

        {/* Quick WhatsApp / Direct Inquiry Button */}
        <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-center gap-3">
          <button
            onClick={onOpenInquiry}
            className="px-4 py-1.5 rounded-full bg-white text-[#1d3d63] text-xs font-bold hover:bg-neutral-100 transition-transform active:scale-95 shadow-sm flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" /> Book a Consultation
          </button>
        </div>
      </div>

      {/* 3. VINTAGE BLACK TELEPHONE WITH CURLY SPIRAL CORD */}
      <div className="relative -mt-6 sm:-mt-8 w-full max-w-sm flex justify-center cursor-pointer group" onClick={handlePhoneClick}>
        <div className={`relative transition-transform duration-300 ${ringing ? 'animate-bounce' : 'group-hover:scale-103'}`}>
          <img
            src="/src/assets/images/vintage_telephone_1792326466878.jpg"
            alt="Vintage Black Telephone Handset"
            className="w-72 sm:w-80 h-auto object-contain drop-shadow-2xl"
          />
          {ringing && (
            <div className="absolute -top-3 right-8 bg-red-600 text-white text-[10px] font-bold py-1 px-2.5 rounded-full shadow-md animate-pulse">
              Connecting...
            </div>
          )}
        </div>
      </div>

      {/* Subtle Copyright Line */}
      <div className="mt-6 text-[11px] text-neutral-400">
        © {new Date().getFullYear()} Kevin Perez · Motion Designer & Video Editor
      </div>
    </section>
  );
};
