"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, ChevronLeft, ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_PROJECTS, PortfolioItem } from "@/data/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { NavTab } from "../Navbar";

interface FeaturedProjectsSliderProps {
  setActiveTab: (tab: NavTab) => void;
  onSelectProject: (project: PortfolioItem) => void;
}

export const FeaturedProjectsSlider: React.FC<FeaturedProjectsSliderProps> = ({
  setActiveTab,
  onSelectProject,
}) => {
  const { locale, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  // We take the top 6 featured projects
  const featured = PORTFOLIO_PROJECTS.slice(0, 7);

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + featured.length) % featured.length);
  };

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % featured.length);
  };

  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
      {/* Background glow dots */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-2">
            {t("Portofolio Proyek", "Project Portfolio")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            {t("Proyek Unggulan Kami", "Our Featured Projects")}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t(
              "Sebagian portofolio proyek strategis yang berhasil kami selesaikan dengan kepuasan klien dan standar K3 tertinggi.",
              "Selected strategic infrastructure projects successfully delivered with client satisfaction and the highest HSE benchmarks."
            )}
          </p>
        </div>

        {/* 3D Coverflow Container */}
        <div className="relative h-[360px] sm:h-[420px] md:h-[460px] w-full max-w-5xl mx-auto flex items-center justify-center">
          {featured.map((proj, idx) => {
            const offset = (idx - activeIndex + featured.length) % featured.length;
            // Normalize offset: 0 is center, 1 is right, -1 is left
            let normOffset = offset;
            if (normOffset > featured.length / 2) {
              normOffset -= featured.length;
            }

            const isCenter = normOffset === 0;
            const isVisible = Math.abs(normOffset) <= 2;

            if (!isVisible) return null;

            const translateX = normOffset * 220; // px
            const translateZ = -Math.abs(normOffset) * 120; // px
            const rotateY = -normOffset * 25; // deg
            const scale = 1 - Math.abs(normOffset) * 0.15;
            const opacity = 1 - Math.abs(normOffset) * 0.35;
            const zIndex = 20 - Math.abs(normOffset);

            return (
              <div
                key={proj.id}
                onClick={() => {
                  if (isCenter) {
                    onSelectProject(proj);
                  } else {
                    setActiveIndex(idx);
                  }
                }}
                style={{
                  transform: `translateX(-50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                }}
                className={`absolute left-1/2 top-0 w-[290px] sm:w-[360px] md:w-[410px] aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-700 ease-out select-none border border-white/20 group hover:border-sky-400/80`}
              >
                {/* Image */}
                <Image
                  src={proj.image}
                  alt={proj.title[locale]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                {/* Badge Category */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900/80 backdrop-blur-md text-sky-400 text-xs font-semibold rounded-full border border-sky-400/30">
                    <CheckCircle2 className="w-3 h-3 text-sky-400" />
                    {proj.category}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 line-clamp-1 group-hover:text-sky-300 transition-colors">
                    {proj.title[locale]}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>{proj.location[locale]}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-sky-400 font-medium">{proj.year}</span>
                  </div>
                </div>

                {/* Center Hover Prompt */}
                {isCenter && (
                  <div className="absolute inset-0 bg-sky-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-slate-900/90 text-white text-xs font-bold border border-sky-400 shadow-lg">
                      {t("Klik untuk Detail", "Click for Details")}
                    </span>
                  </div>
                )}
              </div>
            );
          })}

          {/* Left / Right Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-2 sm:left-4 z-30 p-3 rounded-full bg-slate-900/70 hover:bg-sky-500 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg hover:scale-110"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 sm:right-4 z-30 p-3 rounded-full bg-slate-900/70 hover:bg-sky-500 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg hover:scale-110"
            aria-label="Next Project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* View All Portfolio CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              setActiveTab("portfolio");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-sky-500/40 text-sky-400 hover:bg-sky-500 hover:text-white font-semibold text-sm transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-sky-500/20"
          >
            <span>{t("Lihat Semua 14 Proyek", "View All 14 Projects")}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
