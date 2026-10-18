import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { SidebarWidgets } from './components/SidebarWidgets';
import { CareerJourney } from './components/CareerJourney';
import { BottomCTA } from './components/BottomCTA';
import { ProjectLightboxModal } from './components/ProjectLightboxModal';
import { RetroMacModal } from './components/RetroMacModal';
import { InquiryModal } from './components/InquiryModal';
import { ProjectMediaItem, CareerRole, HERO_DATA } from './data/portfolioData';

export default function App() {
  const [activeFilterPill, setActiveFilterPill] = useState<string>('Video Editing');
  const [selectedProject, setSelectedProject] = useState<{
    item: ProjectMediaItem;
    role: CareerRole;
  } | null>(null);
  const [isRetroMacOpen, setIsRetroMacOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquirySubject, setInquirySubject] = useState<string>('');

  const handleOpenInquiry = (subject: string = 'General Collaboration') => {
    setInquirySubject(subject);
    setIsInquiryOpen(true);
  };

  const handleOpenProject = (item: ProjectMediaItem, role: CareerRole) => {
    setSelectedProject({ item, role });
  };

  return (
    <div className="min-h-screen bg-[#ededed] text-neutral-900 selection:bg-red-100 selection:text-red-700">
      
      {/* 1. TOP BAR (Apple Clean Navigation) */}
      <header className="sticky top-0 z-40 w-full bg-[#ededed]/80 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="font-display font-extrabold text-sm sm:text-base tracking-tight text-neutral-900 whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity flex items-center gap-2"
          >
            <span>{HERO_DATA.contact.name.toUpperCase()}</span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-neutral-600">
            <a href="#overview" className="hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0">
              Overview
            </a>
            <a href="#expertise" className="hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0">
              Core Expertise
            </a>
            <a href="#journey" className="hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0">
              Career Journey
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsRetroMacOpen(true);
              }}
              className="hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0"
            >
              1984 Mac OS
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleOpenInquiry('Top Navigation Contact')}
              className="px-4 py-1.5 text-xs font-bold text-white bg-neutral-900 hover:bg-black rounded-full transition-transform active:scale-95 whitespace-nowrap shrink-0 shadow-sm"
            >
              Start a Project
            </button>
          </div>
        </div>
      </header>

      {/* 2. MAIN CONTAINER */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-16" id="overview">
        
        {/* HERO SECTION */}
        <HeroSection
          onOpenInquiry={() => handleOpenInquiry('Hero CTA')}
          onFilterSkill={(skill) => setActiveFilterPill(skill)}
        />

        {/* TWO-COLUMN EDITORIAL CONTENT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8 pt-4">
          
          {/* LEFT COLUMN: SIDEBAR WIDGETS (4 Columns) */}
          <div className="lg:col-span-4" id="expertise">
            <SidebarWidgets
              activePill={activeFilterPill}
              onSelectPill={(pill) => setActiveFilterPill(pill)}
              onOpenInquiry={(subject) => handleOpenInquiry(subject)}
              onOpenRetroMac={() => setIsRetroMacOpen(true)}
            />
          </div>

          {/* RIGHT COLUMN: CAREER JOURNEY SHOWCASES (8 Columns) */}
          <div className="lg:col-span-8">
            <CareerJourney
              activeFilter={activeFilterPill}
              onOpenProject={handleOpenProject}
            />
          </div>

        </div>

        {/* BOTTOM CTA: VINTAGE TELEPHONE & SPEECH BUBBLE */}
        <BottomCTA onOpenInquiry={() => handleOpenInquiry('Bottom CTA Section')} />

      </main>

      {/* MODALS */}
      {selectedProject && (
        <ProjectLightboxModal
          project={selectedProject.item}
          role={selectedProject.role}
          onClose={() => setSelectedProject(null)}
          onOpenInquiry={handleOpenInquiry}
        />
      )}

      {isRetroMacOpen && (
        <RetroMacModal onClose={() => setIsRetroMacOpen(false)} />
      )}

      {isInquiryOpen && (
        <InquiryModal
          initialSubject={inquirySubject}
          onClose={() => setIsInquiryOpen(false)}
        />
      )}

    </div>
  );
}
