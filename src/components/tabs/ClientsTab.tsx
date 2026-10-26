"use client";

import React from "react";
import Image from "next/image";
import {
  Building2,
  Handshake,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Globe2
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CLIENTS_LIST } from "@/data/siteData";
import { NavTab } from "../Navbar";

interface ClientsTabProps {
  setActiveTab: (tab: NavTab) => void;
}

export const ClientsTab: React.FC<ClientsTabProps> = ({ setActiveTab }) => {
  const { locale, t } = useLanguage();

  return (
    <div className="pt-[110px] pb-24 bg-white">
      {/* Hero Banner */}
      <div className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/api/media/file/hero-4.jpg"
            alt="Clients Banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-3 border border-sky-400/30">
            {t("Jejaring Kemitraan", "Client Alliances")}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            {t("Klien & Mitra Strategis Kami", "Our Clients & Strategic Partners")}
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            {t(
              "Perusahaan operator telekomunikasi, penyedia menara, dan BUMN terkemuka yang mempercayakan proyek infrastrukturnya kepada kami.",
              "Premier telecommunication carriers, tower infrastructure corporations, and energy enterprises trusting us with mission-critical projects."
            )}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8">
            <div className="px-5 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
              <span className="text-xl font-black text-sky-400">14+</span>
              <span className="text-xs text-slate-300 ml-2 font-medium">{t("Mitra Korporat", "Corporate Partners")}</span>
            </div>
            <div className="px-5 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
              <span className="text-xl font-black text-emerald-400">200+</span>
              <span className="text-xs text-slate-300 ml-2 font-medium">{t("Site Selesai", "Sites Completed")}</span>
            </div>
            <div className="px-5 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
              <span className="text-xl font-black text-teal-300">2018</span>
              <span className="text-xs text-slate-300 ml-2 font-medium">{t("Bermitra Sejak", "Partnered Since")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            {t("Mitra Kerja yang Mempercayai Kapabilitas Kami", "Partners Trusting Our Technical Execution")}
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            {t(
              "Kami bangga telah menjadi bagian dari berbagai ekspansi jaringan dan modernisasi teknologi bersama para pemimpin industri.",
              "We take pride in powering network modernization and coverage expansion alongside leading industry giants."
            )}
          </p>
        </div>

        {/* 14 Clients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CLIENTS_LIST.map((client, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-sky-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-black text-base group-hover:bg-sky-500 group-hover:text-white transition-colors">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold">
                    {client.projectsCount}
                  </span>
                </div>

                <div className="text-xs font-bold text-sky-600 uppercase tracking-wide mb-1">
                  {client.sector}
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-2 group-hover:text-sky-600 transition-colors leading-snug">
                  {client.name}
                </h3>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t("Mitra Terverifikasi", "Verified Partner")}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Partner CTA Box */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center mx-auto border border-sky-400/30">
              <Handshake className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {t("Ingin Menjadi Mitra Kami?", "Interested in Partnering With Us?")}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t(
                "PT Mora Jaya Persada membuka peluang kemitraan strategis bagi operator seluler, tower provider, vendor teknologi, maupun pemerintah daerah untuk bersama membangun infrastruktur telekomunikasi yang lebih kokoh.",
                "PT Mora Jaya Persada welcomes strategic collaborations with cellular operators, tower companies, and vendors to accelerate infrastructure connectivity."
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
                <span>{t("Hubungi Kami Sekarang", "Contact Our Commercial Team")}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
