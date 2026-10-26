"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  FileText,
  CheckCircle,
  Building2,
  Award,
  ExternalLink,
  Lock,
  Search
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LEGALITY_DOCS, LegalityDoc } from "@/data/siteData";

export const LegalityTab: React.FC = () => {
  const { locale, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filters = ["All", "SBU", "Sertifikasi", "Legalitas Usaha"];

  const filteredDocs = LEGALITY_DOCS.filter((doc) => {
    const matchType = activeFilter === "All" || doc.type === activeFilter;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      doc.title[locale].toLowerCase().includes(q) ||
      doc.number.toLowerCase().includes(q) ||
      doc.issuer.toLowerCase().includes(q);
    return matchType && matchSearch;
  });

  return (
    <div className="pt-[110px] pb-24 bg-white">
      {/* Hero Banner */}
      <div className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/api/media/file/hero-6.jpg"
            alt="Legality Banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-3 border border-sky-400/30">
            {t("Kepatuhan Hukum & Standar", "Compliance & Accreditation")}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            {t("Legalitas & Sertifikasi Perusahaan", "Company Legality & Certifications")}
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            {t(
              "Dokumen perizinan resmi, akta pendirian, sertifikasi badan usaha (SBU), serta standar manajemen internasional yang menjamin kredibilitas kami.",
              "Statutory operating permits, corporate deeds, business licenses (SBU), and global ISO accreditations assuring our corporate integrity."
            )}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8">
            <div className="px-5 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
              <span className="text-xl font-black text-sky-400">14</span>
              <span className="text-xs text-slate-300 ml-2 font-medium">{t("Total Dokumen", "Total Documents")}</span>
            </div>
            <div className="px-5 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
              <span className="text-xl font-black text-emerald-400">100%</span>
              <span className="text-xs text-slate-300 ml-2 font-medium">{t("Status Aktif & Valid", "Active & Valid")}</span>
            </div>
            <div className="px-5 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
              <span className="text-xl font-black text-teal-300">ISO</span>
              <span className="text-xs text-slate-300 ml-2 font-medium">9001 • 14001 • 45001</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-3xl bg-slate-50 border border-slate-200">
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((fil) => {
              const isActive = activeFilter === fil;
              return (
                <button
                  key={fil}
                  onClick={() => setActiveFilter(fil)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-sky-500 text-white shadow-md shadow-sky-500/20"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {fil === "All" ? t("Semua Dokumen", "All Documents") : fil}
                </button>
              );
            })}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("Cari nomor izin, sertifikat...", "Search permit number, license...")}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-sky-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold border border-emerald-100 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{t("Status: Berlaku", "Status: Active")}</span>
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {doc.type}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <FileText className="w-6 h-6" />
                </div>

                <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">
                  {doc.title[locale]}
                </h3>

                <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100 mb-4">
                  <div>
                    <span className="text-slate-400">{t("Nomor Dokumen:", "Document Number:")}</span>
                    <div className="font-mono font-bold text-slate-800 break-all">{doc.number}</div>
                  </div>
                  <div>
                    <span className="text-slate-400">{t("Instansi Penerbit:", "Issuing Authority:")}</span>
                    <div className="font-medium text-slate-700">{doc.issuer}</div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-sky-600 font-bold">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-slate-500">{t("Tervalidasi Resmi", "Official Verified")}</span>
                </span>
                <span className="group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Good Corporate Governance Callout */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="text-xl font-bold text-white">
              {t("Komitmen Tata Kelola Perusahaan (GCG)", "Good Corporate Governance Commitment")}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {t(
                "Seluruh dokumen legalitas dan perizinan usaha PT Mora Jaya Persada senantiasa diperbarui secara berkala sesuai ketentuan hukum Republik Indonesia.",
                "All statutory licenses and corporate certifications of PT Mora Jaya Persada are audited and renewed in full compliance with Indonesian regulations."
              )}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-400/30 shrink-0">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Legal & Terdaftar</span>
          </div>
        </div>
      </div>
    </div>
  );
};
