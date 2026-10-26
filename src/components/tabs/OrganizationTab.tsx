"use client";

import React from "react";
import Image from "next/image";
import {
  Users,
  MapPin,
  ShieldCheck,
  Building2,
  Briefcase,
  ChevronRight,
  HardHat,
  Network
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LEADERSHIP, REGIONAL_PMS } from "@/data/siteData";

export const OrganizationTab: React.FC = () => {
  const { locale, t } = useLanguage();

  return (
    <div className="pt-[110px] pb-24 bg-white">
      {/* Hero Banner */}
      <div className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/api/media/file/hero-5.jpg"
            alt="Organization Banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-3 border border-sky-400/30">
            {t("Manajemen & Tata Kelola", "Governance & Structure")}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            {t("Struktur Organisasi Perusahaan", "Corporate Organizational Structure")}
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            {t(
              "Dirancang efisien untuk memfasilitasi koordinasi cepat, ketepatan eksekusi di lapangan, dan akuntabilitas mutu di seluruh region.",
              "Engineered for agile decision-making, swift site coordination, and rigorous quality accountability across all operational regions."
            )}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8">
            <div className="px-5 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
              <span className="text-xl font-black text-sky-400">8</span>
              <span className="text-xs text-slate-300 ml-2 font-medium">{t("Pimpinan Inti", "Core Leaders")}</span>
            </div>
            <div className="px-5 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
              <span className="text-xl font-black text-emerald-400">5</span>
              <span className="text-xs text-slate-300 ml-2 font-medium">{t("Area Regional", "Regional Hubs")}</span>
            </div>
            <div className="px-5 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
              <span className="text-xl font-black text-teal-400">500+</span>
              <span className="text-xs text-slate-300 ml-2 font-medium">{t("Personel Terlatih", "Field Personnel")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Board of Directors & Leadership */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
              {t("Dewan Pimpinan", "Leadership Board")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              {t("Tim Inti Kepemimpinan Perusahaan", "Executive Leadership Team")}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              {t(
                "Praktisi berpengalaman belasan tahun dalam industri telekomunikasi nasional.",
                "Seasoned industry veterans with extensive telecommunication engineering experience."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP.map((leader, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 hover:bg-white hover:border-sky-300 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 to-sky-900 text-white flex items-center justify-center font-black text-xl mb-4 group-hover:scale-105 transition-transform shadow-md">
                    {leader.name.charAt(0)}
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-600 text-[11px] font-bold mb-2">
                    {leader.department}
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-sky-600 transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {leader.role[locale]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Project Managers & Coverage */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
              {t("Struktur Wilayah", "Regional Division")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {t("Jajaran Project Manager Area Operasional", "Regional Project Managers")}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              {t(
                "Menjamin kecepatan mobilisasi tim dan koordinasi langsung dengan kantor perwakilan daerah.",
                "Guaranteeing rapid team mobilization and synchronized liaison across province hubs."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REGIONAL_PMS.map((pm, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-sky-400/50 hover:bg-white/10 transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-sky-400 uppercase tracking-wide">
                      {pm.region}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 text-[11px] font-semibold border border-sky-400/30">
                      {pm.staffCount} {t("Staf", "Staff")}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{pm.name}</h3>
                  <div className="text-xs text-slate-300 font-medium mb-3">{pm.role}</div>
                  <div className="pt-3 border-t border-white/10 text-xs text-slate-400 flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span>{pm.coverage[locale]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
