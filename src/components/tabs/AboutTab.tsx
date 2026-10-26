"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Target,
  Compass,
  Award,
  CheckCircle2,
  HardHat,
  Calendar,
  Building,
  HeartHandshake
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { STATS, MILESTONES, COMPANY_INFO } from "@/data/siteData";
import { NavTab } from "../Navbar";

interface AboutTabProps {
  setActiveTab: (tab: NavTab) => void;
}

export const AboutTab: React.FC<AboutTabProps> = ({ setActiveTab }) => {
  const { locale, t } = useLanguage();

  return (
    <div className="pt-[110px] pb-24 bg-white">
      {/* Hero Header Banner */}
      <div className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/api/media/file/cell-towers_adobestock_302109297-40.jpg"
            alt="About Mora Jaya"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-3 border border-sky-400/30">
            {t("Tentang Perusahaan", "About Company")}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            {t("Tentang PT Mora Jaya Persada", "About PT Mora Jaya Persada")}
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            {t(
              "Mitra strategis terpercaya dalam pembangunan dan pemeliharaan infrastruktur telekomunikasi berstandar nasional dan internasional.",
              "A trusted strategic partner in the engineering, rollout, and maintenance of national and international telecommunication infrastructure."
            )}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Stats Row */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-800 text-center">
            {STATS.map((s, idx) => (
              <div key={idx} className="pt-4 md:pt-0 px-4">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-sky-400 mb-1">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium">
                  {s.label[locale]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
              {t("Kisah & Dedikasi Kami", "Our Story & Dedication")}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t(
                "Membangun Konektivitas, Menggerakkan Kemajuan Bangsa",
                "Building Connectivity, Empowering National Progress"
              )}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t(
                "PT. Mora Jaya Persada berawal dari komitmen sekelompok praktisi telekomunikasi berpengalaman pada tahun 2018 (bermula sebagai CV Greentech). Seiring dengan kepercayaan yang terus tumbuh dari operator terkemuka seperti Telkomsel dan Telkom Infrastruktur, kami bertransformasi menjadi PT. Mora Jaya Persada.",
                "PT. Mora Jaya Persada originated from the dedicated vision of seasoned telecommunication practitioners in 2018 (initially established as CV Greentech). Driven by mounting client trust from premier operators such as Telkomsel and Telkom Infrastruktur, we incorporated into PT. Mora Jaya Persada."
              )}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t(
                "Kini, kami mengoperasikan ratusan personel lapangan tersertifikasi, armada logistik alat berat, dan peralatan ukur mutakhir untuk menangani tantangan geografis dari pulau Sumatera hingga Kalimantan dan pelosok Indonesia.",
                "Today, we deploy hundreds of certified field specialists, specialized heavy haulage logistics, and calibrated diagnostic instruments to conquer topographical challenges across Sumatra, Kalimantan, and distant archipelagos."
              )}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{t("Berbadan Hukum Resmi", "Fully Licensed Entity")}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{t("Lisensi K3 Kemnaker RI", "Ministry HSE Licensed")}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{t("Jangkauan Nasional", "Nationwide Reach")}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-slate-100">
              <Image
                src="/api/media/file/200-tower-13.jpg"
                alt="Mora Jaya Site"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-sky-500 text-white p-5 rounded-2xl shadow-xl hidden sm:block max-w-xs">
              <div className="text-2xl font-black">2018</div>
              <div className="text-xs font-medium text-sky-100">
                {t("Berdiri dan melayani telekomunikasi Indonesia", "Founded and serving Indonesian telecoms")}
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-6 border border-sky-400/30">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {t("Visi Perusahaan", "Corporate Vision")}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t(
                  "Menjadi perusahaan kontraktor dan penyedia jasa infrastruktur telekomunikasi terkemuka, terpercaya, dan paling adaptif di Indonesia yang unggul dalam mutu teknik, ketepatan waktu, dan integritas tinggi.",
                  "To be the premier, trusted, and most agile telecommunication contractor in Indonesia, recognized for technical craftsmanship, punctuality, and unwavering integrity."
                )}
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                {t("Misi Perusahaan", "Corporate Mission")}
              </h3>
              <ul className="space-y-3 text-slate-600 text-xs sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>
                    {t(
                      "Menyediakan solusi end-to-end telekomunikasi berstandar mutu tinggi sesuai SLA klien.",
                      "Deliver high-caliber end-to-end telecom solutions adhering strictly to client SLAs."
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>
                    {t(
                      "Mengutamakan keselamatan kerja (K3/HSE) dengan target Zero Accident di setiap aktivitas.",
                      "Prioritize Occupational Health & Safety (HSE) targeting Zero Incidents across all sites."
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>
                    {t(
                      "Mengembangkan kompetensi teknis sumber daya manusia melalui pelatihan berkala.",
                      "Nurture workforce expertise through continuous technical certification and training."
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>
                    {t(
                      "Mendorong adopsi teknologi ramah lingkungan seperti PLTS di site terpencil.",
                      "Pioneer eco-friendly technologies including solar PV at remote telecom facilities."
                    )}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="py-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
              {t("Jejak Langkah", "Milestones")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              {t("Sejarah & Perjalanan Kami", "Our Journey & Growth")}
            </h2>
          </div>

          <div className="relative border-l-2 border-sky-200 ml-4 md:ml-32 space-y-10 pl-6 md:pl-10">
            {MILESTONES.map((m, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-sky-500 group-hover:scale-125 transition-transform"></div>
                <div className="inline-block px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-xs font-extrabold mb-1.5">
                  {m.year}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">
                  {m.title[locale]}
                </h4>
                <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
                  {m.description[locale]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & HSE Section */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center mx-auto border border-sky-400/30">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {t("Sertifikasi & Komitmen QHSE", "QHSE Certifications & Standards")}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t(
                "PT. Mora Jaya Persada secara ketat menerapkan Sistem Manajemen Terintegrasi berstandar internasional:",
                "PT. Mora Jaya Persada strictly complies with internationally accredited management systems:"
              )}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="font-extrabold text-sky-400 text-lg mb-1">ISO 9001:2015</div>
                <div className="text-xs text-slate-300">
                  {t("Sistem Manajemen Mutu Pelaksanaan Konstruksi & Instalasi", "Quality Management for Construction & Installation")}
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="font-extrabold text-sky-400 text-lg mb-1">ISO 14001:2015</div>
                <div className="text-xs text-slate-300">
                  {t("Sistem Manajemen Lingkungan Berkelanjutan", "Environmental Sustainability Management System")}
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="font-extrabold text-sky-400 text-lg mb-1">ISO 45001:2018</div>
                <div className="text-xs text-slate-300">
                  {t("Sistem Manajemen Keselamatan & Kesehatan Kerja (K3)", "Occupational Health & Safety (OHS) Management")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
