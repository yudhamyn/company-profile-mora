"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Download,
  FileText,
  FileCheck,
  CheckCircle,
  ShieldCheck,
  BookOpen,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { DOWNLOAD_DOCS, DownloadItem } from "@/data/siteData";

export const DownloadTab: React.FC = () => {
  const { locale, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const categories = ["All", "Profil Perusahaan", "Katalog", "Brosur", "Legalitas", "Sertifikasi"];

  const filteredDocs = DOWNLOAD_DOCS.filter((doc) => {
    if (activeCategory === "All") return true;
    return doc.category === activeCategory;
  });

  const handleDownload = (doc: DownloadItem) => {
    setDownloadingId(doc.id);
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadSuccess(doc.id);
      setTimeout(() => setDownloadSuccess(null), 3000);
    }, 1000);
  };

  return (
    <div className="pt-[110px] pb-24 bg-white">
      {/* Hero Banner */}
      <div className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/api/media/file/hero-5.jpg"
            alt="Download Center Banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-3 border border-sky-400/30">
            {t("Pusat Informasi & Unduhan", "Download Center")}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            {t("Pusat Unduhan Dokumen Resmi", "Official Documents & Brochures")}
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            {t(
              "Unduh company profile resmi, katalog spesifikasi teknis, brosur solusi menara BTS & fiber optic, serta sertifikat ISO PT Mora Jaya Persada.",
              "Download official company profiles, technical specification catalogs, tower & fiber brochures, and accredited ISO certificates."
            )}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-200 w-fit mx-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-sky-500 text-white shadow-md shadow-sky-500/20"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white"
                }`}
              >
                {cat === "All" ? t("Semua Dokumen", "All Documents") : cat}
              </button>
            );
          })}
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => {
            const isDownloading = downloadingId === doc.id;
            const isSuccess = downloadSuccess === doc.id;

            return (
              <div
                key={doc.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-sky-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-600 text-[11px] font-bold border border-sky-100">
                      {doc.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono font-bold">
                      {doc.fileFormat} • {doc.fileSize}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                    <FileText className="w-6 h-6" />
                  </div>

                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">
                    {doc.title[locale]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                    {doc.description[locale]}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleDownload(doc)}
                    disabled={isDownloading}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                      isSuccess
                        ? "bg-emerald-500 text-white"
                        : "bg-slate-900 hover:bg-sky-500 text-white"
                    }`}
                  >
                    {isDownloading ? (
                      <span>{t("Memproses Unduhan...", "Preparing Download...")}</span>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-white" />
                        <span>{t("Berhasil Diunduh!", "Downloaded Successfully!")}</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>{t("Unduh Dokumen", "Download File")}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Document Request Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto space-y-4">
          <h4 className="font-bold text-slate-900 text-lg">
            {t("Butuh Dokumen atau Data Teknis Lainnya?", "Need Additional Technical Specs or Vendor Packets?")}
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t(
              "Untuk kebutuhan registrasi rekanan tender, audit legalitas, maupun paket prakualifikasi (PQ), silakan hubungi tim legal & administrasi kami.",
              "For formal vendor prequalification (PQ) packets, safety manuals, or customized tender submissions, contact our legal administration team."
            )}
          </p>
          <div className="pt-2">
            <a
              href="mailto:info@morajaya.co.id?subject=Permintaan%20Dokumen%20Prakualifikasi%20PT%20Mora%20Jaya%20Persada"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-md transition-all"
            >
              <span>{t("Ajukan Permintaan Dokumen", "Request Documents via Email")}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
