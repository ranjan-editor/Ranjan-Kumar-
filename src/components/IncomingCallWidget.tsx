import React, { useState } from 'react';
import { Phone, PhoneOff, Mic, Volume2, X } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

interface IncomingCallWidgetProps {
  onOpenInquiry: () => void;
}

export const IncomingCallWidget: React.FC<IncomingCallWidgetProps> = ({ onOpenInquiry }) => {
  const [callState, setCallState] = useState<'idle' | 'calling' | 'connected' | 'declined'>('idle');
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  React.useEffect(() => {
    let timer: any;
    if (callState === 'connected') {
      timer = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    } else {
      setCallDuration(0);
    }
    return () => clearInterval(timer);
  }, [callState]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  const handleAccept = () => {
    setCallState('connected');
  };

  const handleDecline = () => {
    setCallState('declined');
    setTimeout(() => setCallState('idle'), 3000);
  };

  return (
    <>
      {/* Floating Apple/iOS Incoming Call Pill */}
      <div className="relative group">
        <div className="bg-[#1c1c1e] text-white px-4 py-2.5 rounded-full shadow-2xl border border-white/10 flex items-center gap-3 w-72 sm:w-80 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-black/25">
          {/* Avatar */}
          <div className="relative shrink-0">
            <img
              src={HERO_DATA.contact.avatar}
              alt={HERO_DATA.contact.name}
              className="w-10 h-10 rounded-full object-cover border border-white/20"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#1c1c1e]"></span>
          </div>

          {/* Contact Details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-white truncate tracking-tight">
                {HERO_DATA.contact.name}
              </span>
            </div>
            <p className="text-[10px] text-neutral-400 truncate font-mono">
              {HERO_DATA.contact.phone}
            </p>
          </div>

          {/* iOS Call Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Decline Button */}
            <button
              onClick={handleDecline}
              title="Decline"
              className="w-8 h-8 rounded-full bg-[#ff3b30] hover:bg-[#ff453a] active:scale-95 flex items-center justify-center text-white transition-transform shadow-md"
            >
              <PhoneOff className="w-3.5 h-3.5" />
            </button>

            {/* Accept Button */}
            <button
              onClick={handleAccept}
              title="Answer Call"
              className="w-8 h-8 rounded-full bg-[#34c759] hover:bg-[#30d158] active:scale-95 flex items-center justify-center text-white transition-transform shadow-md animate-pulse"
            >
              <Phone className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {callState === 'declined' && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-neutral-900/90 backdrop-blur-md text-white text-[11px] py-1.5 px-3 rounded-xl border border-white/10 text-center animate-fade-in">
            Call declined. Send a direct message or inquiry below!
          </div>
        )}
      </div>

      {/* Connected Audio Call Modal */}
      {callState === 'connected' && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#1c1c1e] text-white rounded-3xl p-6 max-w-sm w-full border border-white/15 shadow-2xl flex flex-col items-center text-center">
            <button
              onClick={() => setCallState('idle')}
              className="self-end text-neutral-400 hover:text-white mb-2"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-emerald-500 shadow-lg mb-3">
              <img
                src={HERO_DATA.contact.avatar}
                alt={HERO_DATA.contact.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-base font-bold text-white mb-0.5">{HERO_DATA.contact.name}</h3>
            <span className="text-xs text-emerald-400 font-mono mb-4">
              Connected · {formatTime(callDuration)}
            </span>

            {/* Simulated Live Audio Waveform */}
            <div className="flex items-center gap-1 h-8 mb-6">
              {[40, 75, 50, 90, 60, 100, 45, 80, 65, 95, 30, 85].map((h, i) => (
                <div
                  key={i}
                  className="w-1 bg-emerald-400 rounded-full animate-pulse"
                  style={{
                    height: `${h}%`,
                    animationDelay: `${i * 0.08}s`,
                    animationDuration: '0.8s'
                  }}
                ></div>
              ))}
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed mb-6">
              "Hey there! Thanks for connecting. I’m currently at my editing bay working on commercial reels. Ready to discuss your next video?"
            </p>

            <div className="grid grid-cols-2 gap-2 w-full mb-6">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`py-2 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-colors ${
                  isMuted ? 'bg-red-500/20 border-red-500/40 text-red-300' : 'bg-white/10 border-white/10 hover:bg-white/15 text-white'
                }`}
              >
                <Mic className="w-3.5 h-3.5" /> {isMuted ? 'Unmute' : 'Mute'}
              </button>
              <button
                onClick={onOpenInquiry}
                className="py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                Project Scope
              </button>
            </div>

            <button
              onClick={() => setCallState('idle')}
              className="w-12 h-12 rounded-full bg-[#ff3b30] hover:bg-[#ff453a] flex items-center justify-center text-white shadow-lg active:scale-95 transition-transform"
            >
              <PhoneOff className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
