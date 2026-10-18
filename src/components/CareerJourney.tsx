import React, { useState } from 'react';
import { CAREER_JOURNEY, CareerRole, ProjectMediaItem } from '../data/portfolioData';
import { X, Play, Maximize2, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

interface CareerJourneyProps {
  activeFilter?: string;
  onOpenProject: (item: ProjectMediaItem, role: CareerRole) => void;
}

export const CareerJourney: React.FC<CareerJourneyProps> = ({ activeFilter, onOpenProject }) => {
  const [collapsedCards, setCollapsedCards] = useState<Record<string, boolean>>({});

  const toggleCollapse = (id: string) => {
    setCollapsedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderLogo = (type: CareerRole['logoType']) => {
    switch (type) {
      case 'ro':
        return (
          <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-sm tracking-tighter">
            ro
          </div>
        );
      case 'shipa':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#f97316] text-white flex items-center justify-center font-black text-sm">
            <span className="transform -skew-x-12">/</span>
          </div>
        );
      case 'raseed':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#7c3aed] text-white flex items-center justify-center font-black text-xs">
            RS
          </div>
        );
      case 'bfc':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#0284c7] text-white flex items-center justify-center font-bold text-sm">
            6
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full" id="journey">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-1 border-b border-black/5">
        <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-wider text-neutral-900">
          CAREER JOURNEY
        </h2>
        {activeFilter && (
          <div className="flex items-center gap-1.5 text-xs text-neutral-500">
            <span>Filter:</span>
            <span className="font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded-full">
              {activeFilter}
            </span>
          </div>
        )}
      </div>

      {/* 4 macOS Window Cards */}
      {CAREER_JOURNEY.map((role) => {
        const isCollapsed = collapsedCards[role.id];

        return (
          <div
            key={role.id}
            className="mac-window-card p-6 sm:p-7 bg-white relative transition-all duration-300 overflow-hidden"
          >
            {/* Window Top Controls & Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-3.5">
                {renderLogo(role.logoType)}
                <div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
                      {role.company} - {role.location}
                    </h3>
                  </div>
                  <div className="text-xs font-semibold text-neutral-700 mt-0.5">
                    {role.role}
                  </div>
                </div>
              </div>

              {/* Window Controls (Dates & macOS Collapse/Close Button) */}
              <div className="flex items-center gap-3 shrink-0">
                <span className="hidden sm:inline-block text-xs text-neutral-400 font-mono">
                  {role.dates}
                </span>
                <button
                  onClick={() => toggleCollapse(role.id)}
                  title={isCollapsed ? 'Expand Card' : 'Collapse Window'}
                  className="w-6 h-6 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 flex items-center justify-center transition-colors"
                >
                  {isCollapsed ? <ChevronDown className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Collapsed State Minimal Strip */}
            {isCollapsed ? (
              <div className="text-xs text-neutral-400 italic py-2 flex items-center justify-between">
                <span>Window collapsed · Click expand icon to view {role.items.length} project items</span>
                <span className="sm:hidden text-[11px] font-mono">{role.dates}</span>
              </div>
            ) : (
              <>
                {/* Description Text */}
                <p className="text-xs text-neutral-600 leading-relaxed mb-6 max-w-3xl">
                  {role.description}
                </p>

                {/* PROJECT SHOWCASE GRID */}
                {role.id === 'ro' && (
                  /* 10 Vertical Phone Reel Cards (5 per row) */
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-6">
                    {role.items.map((item, idx) => (
                      <div
                        key={item.id}
                        onClick={() => onOpenProject(item, role)}
                        className="group relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer shadow-sm border border-black/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        style={{ backgroundColor: item.bgColor }}
                      >
                        {/* Artwork Preview Content */}
                        <div className="absolute inset-0 p-2.5 flex flex-col justify-between text-white">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-bold tracking-wider uppercase opacity-75">
                              ro
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          </div>

                          <div className="my-auto text-center px-1">
                            <div className="text-[10px] font-extrabold uppercase leading-tight tracking-tight drop-shadow-md">
                              {item.headline || item.title}
                            </div>
                            <div className="mt-1 text-[8px] opacity-75 leading-tight">
                              {item.subtitle}
                            </div>
                          </div>

                          <div className="text-[8px] opacity-60 text-right font-mono">
                            0{idx + 1}
                          </div>
                        </div>

                        {/* Play Overlay on Hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-white/90 text-neutral-900 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {role.id === 'shipa' && (
                  /* 8 3D & Motion Cards (4 per row) */
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {role.items.map((item, idx) => (
                      <div
                        key={item.id}
                        onClick={() => onOpenProject(item, role)}
                        className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-sm border border-black/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        style={{ backgroundColor: item.bgColor }}
                      >
                        {/* Artwork Preview Content */}
                        <div className="absolute inset-0 p-3 flex flex-col justify-between text-neutral-900">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-black uppercase text-orange-600">
                              Shipa
                            </span>
                            <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-white/70 shadow-xs">
                              3D
                            </span>
                          </div>

                          <div className="my-auto text-center">
                            <div className="text-xs font-black uppercase leading-tight tracking-tight">
                              {item.headline}
                            </div>
                            <div className="text-[9px] text-neutral-600 mt-1">
                              {item.subtitle}
                            </div>
                          </div>

                          <div className="text-[8px] text-neutral-400 font-mono text-right">
                            Campaign #{idx + 1}
                          </div>
                        </div>

                        {/* Hover Play Button */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-white text-neutral-900 flex items-center justify-center shadow-md">
                            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {role.id === 'raseed' && (
                  /* Raseed 4 Cards: 2 Wide Horizontal on Top, 2 on Bottom */
                  <div className="space-y-3 mb-6">
                    {/* Top Row: 2 Wide Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {role.items.slice(0, 2).map((item) => (
                        <div
                          key={item.id}
                          onClick={() => onOpenProject(item, role)}
                          className="group relative aspect-[16/9] rounded-xl overflow-hidden cursor-pointer shadow-sm border border-black/10 hover:shadow-lg transition-all duration-300"
                          style={{ backgroundColor: item.bgColor }}
                        >
                          <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold tracking-wider uppercase text-purple-200">
                                RASEED INVEST
                              </span>
                              <span className="text-[9px] bg-white/20 px-2 py-0.5 rounded-full font-mono">
                                4K Cut
                              </span>
                            </div>

                            <div>
                              <h4 className="text-sm sm:text-base font-black uppercase tracking-tight">
                                {item.headline}
                              </h4>
                              <p className="text-[10px] text-neutral-300 mt-0.5">
                                {item.subtitle}
                              </p>
                            </div>
                          </div>

                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center shadow-lg">
                              <Play className="w-4 h-4 fill-current ml-0.5" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Row: 2 Cards (Desktop & Mobile Mockup) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {role.items.slice(2, 4).map((item) => (
                        <div
                          key={item.id}
                          onClick={() => onOpenProject(item, role)}
                          className="group relative aspect-[16/9] rounded-xl overflow-hidden cursor-pointer shadow-sm border border-black/10 hover:shadow-lg transition-all duration-300"
                          style={{ backgroundColor: item.bgColor }}
                        >
                          <div className="absolute inset-0 p-4 flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-400">
                                Product Showcase
                              </span>
                              <span className="text-[9px] bg-neutral-200/50 text-neutral-700 px-2 py-0.5 rounded-full font-mono">
                                UI Motion
                              </span>
                            </div>

                            <div>
                              <h4 className="text-xs sm:text-sm font-bold text-neutral-900 uppercase">
                                {item.headline}
                              </h4>
                              <p className="text-[10px] text-neutral-500 mt-0.5">
                                {item.subtitle}
                              </p>
                            </div>
                          </div>

                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="w-9 h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-lg">
                              <Maximize2 className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {role.id === 'bfc' && (
                  /* BFC 10 Cards: 2 rows of 5 cards */
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-6">
                    {role.items.map((item, idx) => (
                      <div
                        key={item.id}
                        onClick={() => onOpenProject(item, role)}
                        className="group relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer shadow-sm border border-black/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        style={{ backgroundColor: item.bgColor }}
                      >
                        <div className="absolute inset-0 p-2.5 flex flex-col justify-between text-white">
                          <div className="flex items-center justify-between">
                            <span className="text-[8px] font-black uppercase text-white/80">
                              BFC
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                          </div>

                          <div className="my-auto text-center px-1">
                            <div className="text-[10px] font-extrabold uppercase leading-tight tracking-tight drop-shadow-md">
                              {item.headline}
                            </div>
                            <div className="mt-1 text-[8px] opacity-75 leading-tight">
                              {item.subtitle}
                            </div>
                          </div>

                          <div className="text-[8px] opacity-60 text-right font-mono">
                            0{idx + 1}
                          </div>
                        </div>

                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-white/90 text-neutral-900 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* BOTTOM TAG PILLS */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-neutral-100">
                  {role.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-full bg-[#f2f2f7] text-[10px] font-medium text-neutral-600 hover:bg-[#e5e5ea] transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
