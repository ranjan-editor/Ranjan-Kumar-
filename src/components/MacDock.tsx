import React, { useState } from 'react';
import { DOCK_APPS } from '../data/portfolioData';
import { X, CheckCircle2, Sparkles } from 'lucide-react';

interface MacDockProps {
  onSelectApp?: (appId: string) => void;
}

export const MacDock: React.FC<MacDockProps> = ({ onSelectApp }) => {
  const [hoveredApp, setHoveredApp] = useState<string | null>(null);
  const [selectedApp, setSelectedApp] = useState<any | null>(null);

  const renderIconGraphic = (app: typeof DOCK_APPS[0]) => {
    switch (app.iconType) {
      case 'blender':
        return (
          <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-[#ea7600] to-[#f9a03f] flex items-center justify-center p-2 shadow-md relative overflow-hidden">
            <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-white">
              <path d="M12.5 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-4.2 4.4a5 5 0 1 0 7.4 0l4.3-4.3a1 1 0 0 0-1.4-1.4l-4.3 4.3a4.98 4.98 0 0 0-4.6-.2l-2.6-3a1 1 0 0 0-1.5 1.3l2.7 3.3Z" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        );
      case 'figma':
        return (
          <div className="w-full h-full rounded-2xl bg-[#1e1e1e] flex items-center justify-center p-2 shadow-md relative">
            <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
              <div className="w-2.5 h-2.5 rounded-l-full bg-[#f24e1e]"></div>
              <div className="w-2.5 h-2.5 rounded-r-full bg-[#ff7262]"></div>
              <div className="w-2.5 h-2.5 rounded-l-full bg-[#a259ff]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#1abcfe]"></div>
              <div className="w-2.5 h-2.5 rounded-l-full rounded-br-full bg-[#0acf83]"></div>
            </div>
          </div>
        );
      case 'office':
        return (
          <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-[#d83b01] to-[#ea5b0c] flex items-center justify-center p-2 shadow-md relative">
            <div className="w-6 h-6 border-2 border-white/80 rounded-md flex flex-col justify-center items-center gap-0.5">
              <div className="w-3.5 h-0.5 bg-white rounded-full"></div>
              <div className="w-3.5 h-0.5 bg-white rounded-full"></div>
              <div className="w-2 h-0.5 bg-white rounded-full"></div>
            </div>
            {app.badge && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 border border-white text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm">
                {app.badge}
              </span>
            )}
          </div>
        );
      case 'davinci':
        return (
          <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-slate-900 to-indigo-950 flex items-center justify-center p-2 shadow-md border border-white/10 relative">
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-amber-400 opacity-80"></div>
              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              <div className="absolute top-0 w-1.5 h-1.5 rounded-full bg-red-500"></div>
              <div className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            </div>
          </div>
        );
      default:
        return (
          <div className={`w-full h-full rounded-2xl ${app.color} flex items-center justify-center shadow-md border ${app.border} relative overflow-hidden font-display font-black text-lg select-none`}>
            <span>{app.label}</span>
            <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent"></div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Dock Bar */}
      <div className="mac-dock-container px-3 py-2 rounded-2xl sm:rounded-3xl flex items-center gap-2 sm:gap-3.5 shadow-2xl transition-all">
        {DOCK_APPS.map((app) => {
          const isHovered = hoveredApp === app.id;
          return (
            <div
              key={app.id}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHoveredApp(app.id)}
              onMouseLeave={() => setHoveredApp(null)}
            >
              {/* Tooltip */}
              {isHovered && (
                <div className="absolute -top-10 bg-neutral-900/90 text-white text-[11px] font-medium py-1 px-2.5 rounded-lg whitespace-nowrap shadow-xl border border-white/10 animate-fade-in pointer-events-none z-30">
                  {app.name}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900 rotate-45"></div>
                </div>
              )}

              {/* Icon Squircle Button */}
              <button
                onClick={() => {
                  setSelectedApp(app);
                  onSelectApp?.(app.id);
                }}
                className={`w-11 h-11 sm:w-13 sm:h-13 transition-all duration-200 ease-out transform ${
                  isHovered ? '-translate-y-2.5 scale-115' : 'hover:-translate-y-1'
                } active:scale-95 focus:outline-none`}
              >
                {renderIconGraphic(app)}
              </button>

              {/* Active Indicator Dot */}
              <div className="w-1 h-1 rounded-full bg-neutral-500/80 mt-1"></div>
            </div>
          );
        })}
      </div>

      {/* Dock Pagination dots below */}
      <div className="flex items-center gap-1.5 mt-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
      </div>

      {/* Software Detail Modal */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl border border-black/10 animate-scale-up">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 shrink-0">
                  {renderIconGraphic(selectedApp)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-neutral-900">{selectedApp.name}</h3>
                  <span className="text-xs text-neutral-500">Core Production Software</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedApp(null)}
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-4 space-y-3">
              <p className="text-xs text-neutral-600 leading-relaxed">
                {selectedApp.desc}
              </p>

              <div className="bg-neutral-50 rounded-xl p-3 border border-neutral-100 space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                  Role in Kevin's Pipeline
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Integrated with dynamic project workflows</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Optimized for fast client turnaround & GPU acceleration</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedApp(null)}
              className="w-full py-2.5 bg-neutral-900 hover:bg-black text-white text-xs font-semibold rounded-xl transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
