import React, { useState } from 'react';
import { HERO_DATA } from '../data/portfolioData';
import { Compass, ExternalLink, Video, Activity, Palette, Clock, Check } from 'lucide-react';

interface SidebarWidgetsProps {
  activePill: string;
  onSelectPill: (pill: string) => void;
  onOpenInquiry: (initialSubject?: string) => void;
  onOpenRetroMac: () => void;
}

export const SidebarWidgets: React.FC<SidebarWidgetsProps> = ({
  activePill,
  onSelectPill,
  onOpenInquiry,
  onOpenRetroMac
}) => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(text);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <aside className="flex flex-col gap-6 w-full">
      {/* 1. RETRO TYPEWRITER & CREATIVE DIRECTION PHOTO CARD */}
      <div className="apple-card p-3 overflow-hidden group">
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 shadow-inner">
          <img
            src="/src/assets/images/retro_typewriter_1792326423988.jpg"
            alt="Analog Storytelling & Creative Direction"
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          <div className="absolute bottom-2.5 left-3 text-[11px] font-bold text-white tracking-wider uppercase drop-shadow-sm">
            Story · Craft · Rhythm
          </div>
        </div>
      </div>

      {/* 2. CORE EXPERTISE CARD */}
      <div className="apple-card p-6 bg-white">
        <h3 className="text-base font-bold text-neutral-900 mb-1 font-display">
          Core Expertise
        </h3>
        <p className="text-xs text-neutral-500 mb-4 leading-relaxed">
          Design, strategy, and storytelling—built to make brands move.
        </p>

        <div className="flex flex-col gap-2">
          {HERO_DATA.coreExpertise.map((item, index) => {
            const isSelected = activePill === item.name;
            const isFirstDefault = index === 0 && !activePill;
            const isActive = isSelected || isFirstDefault;

            return (
              <button
                key={item.name}
                onClick={() => onSelectPill(item.name)}
                className={`w-full py-2 px-4 rounded-full text-xs font-medium text-center transition-all duration-200 ${
                  isActive
                    ? 'bg-red-50 text-red-600 font-semibold shadow-xs border border-red-100 hover:bg-red-100'
                    : 'bg-[#f2f2f7] hover:bg-[#e5e5ea] text-neutral-700'
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. GAUGES / PERFORMANCE METRIC CARD */}
      <div className="apple-card p-5 bg-white">
        <div className="grid grid-cols-4 gap-2 text-center">
          {[
            { label: '92%', icon: Video, color: 'text-emerald-500', stroke: 'stroke-emerald-500', dash: '92, 100' },
            { label: '75%', icon: Activity, color: 'text-cyan-500', stroke: 'stroke-cyan-500', dash: '75, 100' },
            { label: '80%', icon: Palette, color: 'text-emerald-500', stroke: 'stroke-emerald-500', dash: '80, 100' },
            { label: '80%', icon: Clock, color: 'text-emerald-500', stroke: 'stroke-emerald-500', dash: '80, 100' },
          ].map((gauge, idx) => {
            const Icon = gauge.icon;
            return (
              <div key={idx} className="flex flex-col items-center">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 36 36">
                    <path
                      className="text-neutral-100"
                      strokeWidth="3.2"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className={gauge.stroke}
                      strokeWidth="3.2"
                      strokeDasharray={gauge.dash}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <Icon className="w-4 h-4 text-neutral-700 absolute" />
                </div>
                <span className="text-xs font-bold text-neutral-900 mt-2 font-mono">
                  {gauge.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. "WHERE I'M BASED?" & RETRO MACINTOSH CARD */}
      <div className="apple-card p-5 bg-white relative overflow-hidden">
        <div className="flex items-start justify-between mb-2">
          {/* Location Pin */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-neutral-200 shrink-0">
              <img
                src={HERO_DATA.contact.avatar}
                alt="Batangas, Philippines"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">
                Batangas
              </span>
              <span className="text-xs font-bold text-neutral-800">Philippines</span>
            </div>
          </div>

          {/* iOS Speech Bubble */}
          <div className="bg-[#007aff] text-white text-[11px] font-semibold py-1.5 px-3 rounded-2xl shadow-sm relative animate-bounce-subtle">
            Where I'm Based?
            <div className="absolute top-full right-4 w-2 h-2 bg-[#007aff] rotate-45 -mt-1"></div>
          </div>
        </div>

        {/* 3D Retro Mac Computer Preview (Clickable to Launch OS Simulator) */}
        <div
          onClick={onOpenRetroMac}
          className="mt-3 cursor-pointer group relative flex flex-col items-center justify-center p-2 rounded-2xl bg-neutral-50 hover:bg-neutral-100 transition-colors border border-neutral-100"
          title="Click to boot vintage 1984 Macintosh Finder"
        >
          <img
            src="/src/assets/images/retro_macintosh_1792326439316.jpg"
            alt="Classic Macintosh 128k"
            className="w-48 h-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-2 bg-black/75 backdrop-blur-sm text-white text-[10px] py-0.5 px-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            Click to Boot Mac OS 1.0
          </div>
        </div>
      </div>

      {/* 5. SAFARI BOOKMARKS & SOCIAL LINKS CARD */}
      <div className="apple-card p-5 bg-white space-y-3">
        <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-1">
          <Compass className="w-5 h-5 text-[#007aff]" />
        </div>

        <div className="space-y-2 text-xs">
          <a
            href="https://linkedin.com/in/kevinperez"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-neutral-700 hover:text-blue-600 transition-colors py-1 border-b border-neutral-100"
          >
            <span>linkedin.com/kevinperez</span>
            <ExternalLink className="w-3 h-3 text-neutral-400" />
          </a>

          <a
            href="https://behance.net/kevinperez"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-neutral-700 hover:text-blue-600 transition-colors py-1 border-b border-neutral-100"
          >
            <span>behance.com/kevinperez</span>
            <ExternalLink className="w-3 h-3 text-neutral-400" />
          </a>

          <a
            href="https://brandfoxcreatives.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-neutral-700 hover:text-blue-600 transition-colors py-1 border-b border-neutral-100"
          >
            <span>brandfoxcreatives.com</span>
            <ExternalLink className="w-3 h-3 text-neutral-400" />
          </a>

          <div className="pt-1 flex flex-col gap-1 text-[11px]">
            <span className="text-neutral-500 font-medium">My work, online.</span>
            <a
              href="#journey"
              className="text-red-500 hover:text-red-600 font-semibold transition-colors"
            >
              See my track record →
            </a>
          </div>
        </div>
      </div>

      {/* 6. ENGAGEMENT BUTTONS STRIP */}
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => onOpenInquiry('Direct Hire / Contract')}
          className="py-2.5 px-2 bg-neutral-900 hover:bg-black text-white text-[11px] font-bold rounded-full transition-transform active:scale-95 shadow-sm text-center truncate"
        >
          Hire Me
        </button>
        <button
          onClick={() => onOpenInquiry('Full-time or Long-Term Role')}
          className="py-2.5 px-2 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-200 text-[11px] font-bold rounded-full transition-transform active:scale-95 shadow-sm text-center truncate"
        >
          Bring Me on Board
        </button>
        <button
          onClick={() => onOpenInquiry('New Creative Project')}
          className="py-2.5 px-2 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-200 text-[11px] font-bold rounded-full transition-transform active:scale-95 shadow-sm text-center truncate"
        >
          Start a Project
        </button>
      </div>

      {/* 7. BOTTOM SEATED CHARACTER CUTOUT */}
      <div className="relative mt-2 overflow-hidden rounded-3xl bg-neutral-100 border border-neutral-200 shadow-md">
        <img
          src="/src/assets/images/bottom_editor_1792326451487.jpg"
          alt="Kevin Perez at workstation"
          className="w-full h-auto object-cover"
        />
        <div className="absolute bottom-3 left-4 right-4 bg-white/80 backdrop-blur-md py-2 px-3 rounded-2xl border border-white/60 text-center">
          <span className="text-[11px] font-bold text-neutral-800 block">Focus & Precision</span>
          <span className="text-[10px] text-neutral-500">Every frame crafted deliberately</span>
        </div>
      </div>
    </aside>
  );
};
