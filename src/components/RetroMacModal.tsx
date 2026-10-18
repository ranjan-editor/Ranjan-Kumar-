import React, { useState } from 'react';
import { X, Folder, FileText, HardDrive, Terminal } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

interface RetroMacModalProps {
  onClose: () => void;
}

export const RetroMacModal: React.FC<RetroMacModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'welcome' | 'bio' | 'gear'>('welcome');

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-[#c3c7cb] text-black border-4 border-[#333] shadow-[8px_8px_0px_#000] rounded-lg max-w-lg w-full overflow-hidden font-mono text-xs">
        
        {/* Retro Macintosh Titlebar */}
        <div className="bg-[#000080] text-white px-2 py-1 flex items-center justify-between select-none border-b-2 border-black">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-white border border-black inline-block"></span>
            <span className="font-bold tracking-wider">Macintosh Finder — System 1.0</span>
          </div>
          <button
            onClick={onClose}
            className="w-4 h-4 bg-white text-black font-bold flex items-center justify-center border border-black hover:bg-neutral-200"
          >
            ×
          </button>
        </div>

        {/* Vintage Menu Bar */}
        <div className="bg-[#e0e0e0] border-b border-black px-2 py-0.5 flex gap-4 text-[11px] select-none">
          <span className="font-bold"> Apple</span>
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Special</span>
        </div>

        {/* Window Content */}
        <div className="p-4 bg-[#f8f8f8] min-h-[300px]">
          {/* Desktop Icons Strip */}
          <div className="flex items-center gap-6 pb-3 border-b-2 border-dashed border-neutral-400 mb-4">
            <button
              onClick={() => setActiveTab('welcome')}
              className={`flex flex-col items-center gap-1 p-2 rounded ${activeTab === 'welcome' ? 'bg-[#000080] text-white' : 'text-black'}`}
            >
              <HardDrive className="w-6 h-6" />
              <span className="text-[10px]">Hard Disk</span>
            </button>
            <button
              onClick={() => setActiveTab('bio')}
              className={`flex flex-col items-center gap-1 p-2 rounded ${activeTab === 'bio' ? 'bg-[#000080] text-white' : 'text-black'}`}
            >
              <FileText className="w-6 h-6" />
              <span className="text-[10px]">README.txt</span>
            </button>
            <button
              onClick={() => setActiveTab('gear')}
              className={`flex flex-col items-center gap-1 p-2 rounded ${activeTab === 'gear' ? 'bg-[#000080] text-white' : 'text-black'}`}
            >
              <Folder className="w-6 h-6" />
              <span className="text-[10px]">EditingBay.app</span>
            </button>
          </div>

          {/* Active File Content */}
          <div className="bg-white border-2 border-black p-3 shadow-inner min-h-[160px]">
            {activeTab === 'welcome' && (
              <div className="space-y-2">
                <div className="font-bold text-sm">Welcome to Macintosh (1984)</div>
                <p className="text-[11px] leading-relaxed">
                  You are viewing Kevin Perez's creative workstation node located in Batangas, Philippines.
                </p>
                <div className="p-2 bg-neutral-100 border border-neutral-300 text-[10px]">
                  Memory: 512K RAM · Storage: 400K MicroDisk · Status: Online
                </div>
              </div>
            )}

            {activeTab === 'bio' && (
              <div className="space-y-2">
                <div className="font-bold text-xs uppercase underline">About Kevin Perez</div>
                <p className="text-[11px] leading-relaxed">
                  "Turning ideas into visuals that move—literally and strategically. 9-10 years of creative editing, motion graphics, and narrative timing."
                </p>
                <p className="text-[10px] text-neutral-600">
                  Contact: kevin.m.perez123@gmail.com
                </p>
              </div>
            )}

            {activeTab === 'gear' && (
              <div className="space-y-1.5 text-[11px]">
                <div className="font-bold">Hardware & Software Stack:</div>
                <div>• M3 Max MacBook Pro (128GB Unified Memory)</div>
                <div>• Studio Display & Calibrated Grading Monitors</div>
                <div>• Premiere Pro, After Effects, DaVinci Resolve Studio</div>
                <div>• Blender 3D & Octane Render Engine</div>
              </div>
            )}
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-[#c3c7cb] border-2 border-black font-bold shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5"
            >
              OK
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
