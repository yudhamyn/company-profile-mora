"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { HERO_SLIDES, STATS } from "@/data/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { NavTab } from "../Navbar";

interface HeroSliderProps {
  setActiveTab: (tab: NavTab) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ setActiveTab }) => {
  const { locale, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  // Auto rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Stats count-up animation
  useEffect(() => {
    const duration = 1800;
    const steps = 30;
    const stepTime = duration / steps;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts(
        STATS.map((stat) => Math.floor(stat.numeric * Math.min(progress, 1)))
      );
      if (step >= steps) {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleCta = (slideIndex: number) => {
    if (slideIndex === 0) setActiveTab("contact");
    else if (slideIndex === 1) setActiveTab("portfolio");
    else if (slideIndex === 2) setActiveTab("services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-slate-950 pt-[88px] lg:pt-[104px]">
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <div
                className={`relative w-full h-full transition-transform duration-10000 ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title[locale]}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
              </div>

              {/* Dark Gradient Overlays for contrast and richness */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />
            </div>
          );
        })}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
          <div className="max-w-3xl">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              {t("Kontraktor Menara Telekomunikasi", "Telecommunication Infrastructure Specialist")}
            </div>

            {/* Slide Title with smooth transition */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.12] mb-4 sm:mb-6 tracking-tight drop-shadow-md">
              {HERO_SLIDES[currentSlide].title[locale]}
            </h1>

            {/* Slide Description */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed mb-6 sm:mb-8 max-w-2xl font-normal drop-shadow">
              {HERO_SLIDES[currentSlide].description[locale]}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleCta(currentSlide)}
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 text-sm sm:text-base cursor-pointer"
              >
                <span>{HERO_SLIDES[currentSlide].ctaText[locale]}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={() => {
                  setActiveTab("about");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 sm:py-4 rounded-xl font-semibold backdrop-blur-md border border-white/20 transition-all text-sm sm:text-base cursor-pointer hover:border-white/40"
              >
                <span>{t("Pelajari Selengkapnya", "Learn More")}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-13 lg:h-13 bg-slate-900/40 hover:bg-sky-500/80 backdrop-blur-md rounded-full hidden sm:flex items-center justify-center text-white transition-all border border-white/20 cursor-pointer shadow-lg"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-13 lg:h-13 bg-slate-900/40 hover:bg-sky-500/80 backdrop-blur-md rounded-full hidden sm:flex items-center justify-center text-white transition-all border border-white/20 cursor-pointer shadow-lg"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators Dots */}
      <div className="absolute bottom-28 sm:bottom-32 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === currentSlide
                ? "w-8 h-2.5 bg-sky-500 shadow-md shadow-sky-500/50"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Docked Stats Counter Bar at Bottom */}
      <div className="relative z-20 mt-auto border-t border-white/10 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950/60 pt-6 pb-8 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x divide-white/15">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center px-3 sm:px-4 lg:px-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-0.5 tracking-tight flex items-center justify-center gap-0.5">
                  <span className="text-sky-400">{counts[i]}</span>
                  <span className="text-sky-400">{stat.suffix}</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 uppercase tracking-wider font-medium">
                  {stat.label[locale]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
