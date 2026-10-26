"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Building,
  CheckCircle2,
  Share2,
  ShieldCheck,
  Phone,
  ArrowRight
} from "lucide-react";
import { PortfolioItem, COMPANY_INFO } from "@/data/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { NavTab } from "../Navbar";

interface ProjectDetailViewProps {
  project: PortfolioItem;
  onBack: () => void;
  setActiveTab: (tab: NavTab) => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  onBack,
  setActiveTab,
}) => {
  const { locale, t } = useLanguage();

  return (
    <div className="pt-[110px] pb-24 bg-white animate-in fade-in duration-300">
      {/* Breadcrumb & Back Bar */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-sky-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("Kembali ke Portofolio", "Back to Portfolio")}</span>
          </button>

          <span className="text-xs text-slate-400 hidden sm:inline">
            Portofolio / {project.category} / {project.slug}
          </span>
        </div>
      </div>

      {/* Hero Cover of Project */}
      <div className="relative h-72 sm:h-96 lg:h-[450px] bg-slate-900 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title[locale]}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>

        <div className="absolute bottom-8 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block px-3.5 py-1 rounded-full bg-sky-500 text-white text-xs font-bold mb-3 shadow-md">
              {project.category}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight max-w-4xl">
              {project.title[locale]}
            </h1>
          </div>
        </div>
      </div>

      {/* Detailed Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-10">
            {/* Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 rounded-3xl bg-slate-50 border border-slate-200">
              <div>
                <div className="text-xs text-slate-400 mb-1">{t("Klien Resmi", "Client")}</div>
                <div className="font-extrabold text-slate-900 flex items-center gap-1.5 text-sm">
                  <Building className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>{project.client}</span>
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-1">{t("Wilayah / Lokasi", "Location")}</div>
                <div className="font-extrabold text-slate-900 flex items-center gap-1.5 text-sm">
                  <MapPin className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>{project.location[locale]}</span>
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-1">{t("Tahun & Status", "Year & Status")}</div>
                <div className="font-extrabold text-slate-900 flex items-center gap-1.5 text-sm">
                  <Calendar className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>{project.year} • 100% {t("Selesai", "Completed")}</span>
                </div>
              </div>
            </div>

            {/* Project Overview */}
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                {t("Ringkasan Proyek", "Project Overview")}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {project.description[locale]}
              </p>
            </div>

            {/* Scope of Work */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                {t("Lingkup Pekerjaan Teknis", "Technical Scope of Work")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.scope[locale].map((s, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 text-xs sm:text-sm text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery / Field Highlights */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                {t("Dokumentasi Lapangan", "Field Documentation")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={project.image}
                    alt="Documentation 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/api/media/file/cell-towers_adobestock_302109297-40.jpg"
                    alt="Documentation 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Inquire Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 text-white p-7 rounded-3xl border border-slate-800 shadow-xl space-y-5 sticky top-32">
              <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold border border-sky-400/30">
                {t("Konsultasi Proyek", "Project Consultation")}
              </span>
              <h3 className="text-xl font-bold text-white">
                {t("Tertarik Mengembangkan Proyek Serupa?", "Need a Similar Telecom Build?")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t(
                  "Konsultasikan kebutuhan spesifikasi teknis, survei kelayakan lokasi, dan jadwal implementasi dengan tim teknik kami.",
                  "Discuss technical specifications, site feasibility surveys, and delivery SLAs with our engineering leads."
                )}
              </p>

              <div className="pt-2 space-y-2.5">
                <button
                  onClick={() => {
                    setActiveTab("contact");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t("Hubungi Tim Komersial", "Inquire Project Proposal")}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`https://wa.me/628117301232?text=Halo%20PT%20Mora%20Jaya%20Persada%2C%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20${encodeURIComponent(
                    project.title[locale]
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>{t("Chat WhatsApp Resmi", "WhatsApp Direct Chat")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
