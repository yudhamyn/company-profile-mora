"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  MapPin,
  Building,
  Calendar,
  Search,
  Filter,
  ArrowRight,
  CheckCircle2,
  Layers
} from "lucide-react";
import { PORTFOLIO_PROJECTS, PortfolioItem } from "@/data/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { NavTab } from "../Navbar";

interface PortfolioTabProps {
  onSelectProject: (project: PortfolioItem) => void;
  setActiveTab: (tab: NavTab) => void;
}

export const PortfolioTab: React.FC<PortfolioTabProps> = ({
  onSelectProject,
  setActiveTab,
}) => {
  const { locale, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "BTS Relocation",
    "Equipment Installation",
    "CME Works",
    "Fiber Optic",
    "Maintenance"
  ];

  const filteredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter((proj) => {
      const matchCat =
        selectedCategory === "All" || proj.category.toLowerCase().includes(selectedCategory.toLowerCase());
      const q = searchQuery.toLowerCase();
      const matchSearch =
        !q ||
        proj.title[locale].toLowerCase().includes(q) ||
        proj.client.toLowerCase().includes(q) ||
        proj.location[locale].toLowerCase().includes(q) ||
        proj.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery, locale]);

  return (
    <div className="pt-[110px] pb-24 bg-white">
      {/* Hero Header */}
      <div className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/api/media/file/hero-5.jpg"
            alt="Portfolio Banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-3 border border-sky-400/30">
            {t("Rekam Jejak Kinerja", "Proven Track Record")}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            {t("Portofolio Proyek Kami", "Our Project Portfolio")}
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            {t(
              "Setiap proyek yang kami selesaikan mencerminkan komitmen terhadap kualitas teknik, keselamatan K3, dan kepuasan mitra nasional.",
              "Every completed project exemplifies our dedication to structural safety, technical rigor, and client partnership."
            )}
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8">
            <div className="px-5 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
              <span className="text-xl sm:text-2xl font-black text-sky-400">14</span>
              <span className="text-xs text-slate-300 ml-2 font-medium">{t("Total Proyek", "Total Projects")}</span>
            </div>
            <div className="px-5 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
              <span className="text-xl sm:text-2xl font-black text-emerald-400">14</span>
              <span className="text-xs text-slate-300 ml-2 font-medium">{t("Selesai 100%", "100% Completed")}</span>
            </div>
            <div className="px-5 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
              <span className="text-xl sm:text-2xl font-black text-teal-300">5</span>
              <span className="text-xs text-slate-300 ml-2 font-medium">{t("Kategori Layanan", "Categories")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-3xl bg-slate-50 border border-slate-200/80">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-sky-500 text-white shadow-md shadow-sky-500/20"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("Cari proyek, klien, lokasi...", "Search project, client, city...")}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
            <Layers className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-600 font-bold text-base">
              {t("Tidak ada proyek yang sesuai filter pencarian.", "No projects match your filter query.")}
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-3 text-xs font-bold text-sky-600 hover:underline cursor-pointer"
            >
              {t("Reset Filter", "Reset Filters")}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1.5"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <Image
                      src={project.image}
                      alt={project.title[locale]}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-sky-400 text-xs font-bold border border-sky-400/30">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-sky-400" />
                        <span className="line-clamp-1">{project.location[locale]}</span>
                      </span>
                      <span className="text-sky-300 font-bold">{project.year}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <Building className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-medium line-clamp-1">{project.client}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">
                      {project.title[locale]}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                      {project.description[locale]}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-sky-600 font-bold group-hover:text-sky-700 transition-colors mt-2">
                  <span>{t("Lihat Lingkup Kerja", "View Scope Details")}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {t("Tertarik Berkolaborasi Bersama Kami?", "Interested in Working Together?")}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t(
                "Kami siap menjadi mitra kontraktor terpercaya untuk proyek pembangunan dan pemeliharaan telekomunikasi Anda berikutnya.",
                "We stand prepared to partner as your dependable infrastructure contractor for upcoming telecommunication builds."
              )}
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setActiveTab("contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm shadow-lg shadow-sky-500/25 transition-all cursor-pointer"
              >
                <span>{t("Mulai Konsultasi Proyek", "Start Project Consultation")}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
