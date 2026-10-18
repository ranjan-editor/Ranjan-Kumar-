import React, { useState } from 'react';
import { ProjectMediaItem, CareerRole } from '../data/portfolioData';
import { X, Play, Pause, Volume2, VolumeX, Maximize, CheckCircle, Tag, Calendar, ExternalLink } from 'lucide-react';

interface ProjectLightboxModalProps {
  project: ProjectMediaItem | null;
  role: CareerRole | null;
  onClose: () => void;
  onOpenInquiry: (subject: string) => void;
}

export const ProjectLightboxModal: React.FC<ProjectLightboxModalProps> = ({
  project,
  role,
  onClose,
  onOpenInquiry
}) => {
  if (!project || !role) return null;

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="relative bg-[#1c1c1e] text-white rounded-3xl max-w-4xl w-full border border-white/10 shadow-2xl overflow-hidden my-auto">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-neutral-900/60">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <div>
              <h3 className="text-sm font-bold text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-[11px] text-neutral-400">
                {role.company} · {role.location}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Media Player Box */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
          {project.videoUrl ? (
            <video
              src={project.videoUrl}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-contain"
            />
          ) : (
            <div
              className="w-full h-full flex flex-col items-center justify-center p-8 text-center"
              style={{ backgroundColor: project.bgColor }}
            >
              <div className="text-xs uppercase tracking-widest text-white/60 mb-2 font-mono">
                {role.company} Showcase
              </div>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-white max-w-lg tracking-tight mb-2">
                {project.headline || project.title}
              </h2>
              <p className="text-sm text-white/80 max-w-md">
                {project.subtitle}
              </p>
            </div>
          )}

          {/* Quick Player Bar */}
          {project.videoUrl && (
            <div className="absolute bottom-4 inset-x-6 flex items-center justify-between bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <div className="flex items-center gap-3 text-white text-xs">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-blue-400 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="text-[11px] font-mono text-neutral-300">
                  {project.headline || project.title}
                </span>
              </div>

              <span className="text-[10px] text-emerald-400 uppercase font-mono font-bold">
                HD Preview Active
              </span>
            </div>
          )}
        </div>

        {/* Project Technical Details */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#161618]">
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Project Brief & Production Breakdown
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {role.description}
            </p>
            {project.colorGradingInfo && (
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-xs text-neutral-300">
                <span className="font-semibold text-white block mb-0.5">Finishing & Color Grading:</span>
                {project.colorGradingInfo}
              </div>
            )}
          </div>

          <div className="space-y-4 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
            <div>
              <span className="text-[11px] font-semibold text-neutral-400 uppercase block mb-1">
                Tools Used
              </span>
              <div className="flex flex-wrap gap-1.5">
                {role.tags.slice(0, 4).map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenInquiry(`Inquiry about ${project.title}`);
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-transform active:scale-95 shadow-md"
            >
              Request Similar Project
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
