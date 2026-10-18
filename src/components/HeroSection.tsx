import React from 'react';
import { HERO_DATA } from '../data/portfolioData';
import { IncomingCallWidget } from './IncomingCallWidget';
import { MacDock } from './MacDock';
import { RotateCw, Lock } from 'lucide-react';

interface HeroSectionProps {
  onOpenInquiry: () => void;
  onFilterSkill?: (skillName: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry, onFilterSkill }) => {
  return (
    <section className="relative pt-6 pb-12 flex flex-col items-center justify-center text-center overflow-visible">
      {/* Top Kicker */}
      <span className="font-display text-xs sm:text-sm md:text-base font-bold tracking-[0.25em] text-neutral-800 uppercase mb-1">
        {HERO_DATA.subtitle}
      </span>

      {/* Main Massive Headline */}
      <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-neutral-950 tracking-tight leading-none mb-4 select-none">
        {HERO_DATA.title}
      </h1>

      {/* Central Visual Stage with Floating macOS / iOS Widgets */}
      <div className="relative w-full max-w-4xl min-h-[500px] sm:min-h-[560px] md:min-h-[620px] flex items-center justify-center my-2">
        
        {/* Central Character Cutout / Photo */}
        <div className="relative z-10 w-72 sm:w-88 md:w-[420px] mx-auto select-none pointer-events-none">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-neutral-100">
            <img
              src="/src/assets/images/hero_editor_chair_1792326406838.jpg"
              alt="Kevin Perez — Motion Designer & Video Editor"
              className="w-full h-auto object-cover filter contrast-[1.03] brightness-[1.01]"
              loading="eager"
            />
            {/* Subtle soft gradient fade at base to blend naturally with studio floor */}
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/15 to-transparent"></div>
          </div>
        </div>

        {/* FLOATING WIDGET 1 (Top-Left): Incoming Call Dynamic Island Pill */}
        <div className="absolute -left-2 sm:left-2 md:left-6 top-6 sm:top-12 z-20">
          <IncomingCallWidget onOpenInquiry={onOpenInquiry} />
        </div>

        {/* FLOATING WIDGET 2 (Bottom-Left): Bio Card */}
        <div className="absolute -left-2 sm:left-4 md:left-8 bottom-6 sm:bottom-12 z-20 apple-card p-4 sm:p-5 max-w-[260px] sm:max-w-[290px] text-left border border-black/5 shadow-xl bg-white/95 backdrop-blur-md">
          <h3 className="text-xs font-bold text-neutral-900 mb-1.5 font-display tracking-tight">
            {HERO_DATA.bio.title}
          </h3>
          <p className="text-[11px] text-neutral-600 leading-relaxed mb-3">
            {HERO_DATA.bio.description}
          </p>
          <div className="text-center">
            <button
              onClick={onOpenInquiry}
              className="inline-block w-full py-1.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-semibold tracking-wide transition-all shadow-sm shadow-blue-500/20"
            >
              Hire Me
            </button>
          </div>
        </div>

        {/* FLOATING WIDGET 3 (Top-Right): Dark Translucent Skills List Card with Stars */}
        <div className="absolute -right-2 sm:right-4 md:right-8 top-4 sm:top-8 z-20 apple-card-dark p-4 sm:p-5 w-52 sm:w-60 text-left border border-white/10 shadow-2xl rounded-2xl sm:rounded-3xl">
          <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/15 text-white text-[10px] font-bold uppercase tracking-wider mb-3">
            Skills
          </div>
          <ul className="space-y-2 text-xs font-medium text-neutral-200">
            {HERO_DATA.skillsStars.map((item, idx) => (
              <li
                key={idx}
                onClick={() => onFilterSkill?.(item.name)}
                className={`flex items-center justify-between p-1.5 rounded-lg transition-colors cursor-pointer ${
                  item.highlight
                    ? 'text-red-400 bg-red-500/15 font-semibold'
                    : 'hover:bg-white/10 text-neutral-200'
                }`}
              >
                <span className="text-[11px]">{item.name}</span>
                <span className={`text-xs ${item.highlight ? 'text-red-400' : 'text-neutral-400'}`}>
                  {item.star}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* FLOATING WIDGET 4 (Bottom-Center): Safari URL Bar */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-1 sm:bottom-3 z-20">
          <a
            href="https://brandfoxcreatives.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 hover:bg-white backdrop-blur-md border border-neutral-300/80 shadow-md text-neutral-700 text-xs transition-all hover:scale-105 active:scale-95 group"
          >
            <span className="text-[11px] font-serif font-semibold text-neutral-400 group-hover:text-neutral-700 select-none">
              AA
            </span>
            <div className="flex items-center gap-1.5 text-neutral-800 font-medium">
              <Lock className="w-3 h-3 text-neutral-500" />
              <span className="tracking-tight">{HERO_DATA.contact.website}</span>
            </div>
            <RotateCw className="w-3 h-3 text-neutral-400 group-hover:rotate-180 transition-transform duration-500" />
          </a>
        </div>

      </div>

      {/* macOS Dock Floating Application Launcher */}
      <div className="mt-4 sm:mt-6 z-20">
        <MacDock />
      </div>
    </section>
  );
};
