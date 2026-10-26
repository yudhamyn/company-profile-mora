"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Send,
  HelpCircle
} from "lucide-react";
import { CAREER_OPENINGS, CareerItem, COMPANY_INFO } from "@/data/siteData";
import { useLanguage } from "@/context/LanguageContext";

interface CareersTabProps {
  onApplyCareer: (career: CareerItem) => void;
}

export const CareersTab: React.FC<CareersTabProps> = ({ onApplyCareer }) => {
  const { locale, t } = useLanguage();
  const [filterType, setFilterType] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>(CAREER_OPENINGS[0].id);

  const filteredJobs = CAREER_OPENINGS.filter((job) => {
    if (filterType === "All") return true;
    return job.type === filterType;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="pt-[110px] pb-24 bg-white">
      {/* Hero Banner */}
      <div className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/api/media/file/k3-training-13.jpg"
            alt="Careers Banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-3 border border-sky-400/30">
            {t("Peluang Karir", "Career Opportunities")}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            {t("Bergabung Bersama Tim Profesional Kami", "Join Our Professional Engineering Team")}
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            {t(
              "Kembangkan keahlian Anda di garis terdepan industri telekomunikasi Indonesia bersama PT Mora Jaya Persada dalam lingkungan kerja yang aman dan suportif.",
              "Grow your engineering career at the forefront of Indonesia telecom rollout with PT Mora Jaya Persada in a safety-first, meritocratic environment."
            )}
          </p>

          {/* Pillars */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 text-xs font-semibold">
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t("Standar K3 Tinggi", "Strict HSE Standards")}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <Award className="w-4 h-4 text-sky-400" />
              <span>{t("Jenjang Karir Jelas", "Clear Career Growth")}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <Users className="w-4 h-4 text-teal-400" />
              <span>{t("Pelatihan Berkala", "Continuous Training")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header & Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-2xl font-black text-slate-900">
              {t("Posisi yang Sedang Dibuka", "Open Positions")}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {filteredJobs.length} {t("posisi tersedia saat ini", "active openings available")}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {["All", "Full Time", "Contract"].map((type) => {
              const isActive = filterType === type;
              return (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-sky-500 text-white shadow-md shadow-sky-500/20"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {type === "All" ? t("Semua", "All") : type}
                </button>
              );
            })}
          </div>
        </div>

        {/* Jobs List Accordion */}
        <div className="space-y-4">
          {filteredJobs.map((job) => {
            const isExpanded = expandedId === job.id;
            return (
              <div
                key={job.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                {/* Accordion Head */}
                <div
                  onClick={() => toggleExpand(job.id)}
                  className="p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-xs font-bold border border-sky-100">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      {job.title[locale]}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-sky-500" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {t("Batas Lamaran:", "Deadline:")} {job.deadline}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onApplyCareer(job);
                      }}
                      className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-md shadow-sky-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{t("Lamar Sekarang", "Apply Now")}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                    <div className="p-2 text-slate-400 hover:text-slate-600">
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-sky-600" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Accordion Expanded Body */}
                {isExpanded && (
                  <div className="px-6 pb-7 sm:px-7 pt-2 border-t border-slate-100 space-y-6 text-sm text-slate-700 animate-in slide-in-from-top-2 duration-200">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                        {t("Deskripsi Pekerjaan", "Job Overview")}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {job.description[locale]}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      {/* Requirements */}
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-sky-500" />
                          <span>{t("Kualifikasi & Persyaratan", "Qualifications & Requirements")}</span>
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                          {job.requirements[locale].map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0 mt-2"></span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Responsibilities */}
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4 text-sky-500" />
                          <span>{t("Tanggung Jawab Utama", "Key Responsibilities")}</span>
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                          {job.responsibilities[locale].map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0 mt-2"></span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={() => onApplyCareer(job)}
                        className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <span>{t("Isi Formulir Lamaran", "Fill Application Form")}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Career Questions Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">
                {t("Punya Pertanyaan Seputar Rekrutmen?", "Questions About Careers?")}
              </h4>
              <p className="text-xs text-slate-500">
                {t(
                  "Hubungi tim HR kami melalui email atau pesan WhatsApp resmi.",
                  "Reach our talent team via email or verified WhatsApp channel."
                )}
              </p>
            </div>
          </div>

          <a
            href={`mailto:${COMPANY_INFO.email}?subject=Pertanyaan%20Karir%20PT%20Mora%20Jaya%20Persada`}
            className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-white text-slate-800 font-bold text-xs transition-colors shrink-0"
          >
            {COMPANY_INFO.email}
          </a>
        </div>
      </div>
    </div>
  );
};
