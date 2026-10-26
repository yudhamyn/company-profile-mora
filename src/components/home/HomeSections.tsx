"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Zap,
  Users,
  CheckCircle,
  Building2,
  HardHat,
  Radio,
  FileCheck
} from "lucide-react";
import { SERVICES, PARTNERS } from "@/data/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { NavTab } from "../Navbar";

interface HomeSectionsProps {
  setActiveTab: (tab: NavTab) => void;
  onSelectService: (serviceSlug: string) => void;
}

export const HomeServicesSection: React.FC<HomeSectionsProps> = ({
  setActiveTab,
  onSelectService,
}) => {
  const { locale, t } = useLanguage();

  const handleCardClick = (slug: string) => {
    setActiveTab("services");
    onSelectService(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const topTwo = SERVICES.slice(0, 2);
  const remainingFive = SERVICES.slice(2, 7);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sky-600 text-xs font-bold tracking-widest uppercase mb-2">
            {t("Layanan Kami", "Our Services")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            {t(
              "Solusi Lengkap untuk Infrastruktur Telekomunikasi",
              "Complete Solutions for Telecommunication Infrastructure"
            )}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t(
              "Kami menyediakan layanan terintegrasi dari hulu ke hilir untuk pembangunan, modernisasi, dan pemeliharaan infrastruktur telekomunikasi di seluruh Indonesia.",
              "We provide end-to-end integrated services for the construction, modernization, and maintenance of telecommunication infrastructure across Indonesia."
            )}
          </p>
        </div>

        {/* Top 2 Featured Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {topTwo.map((service) => (
            <div
              key={service.id}
              onClick={() => handleCardClick(service.slug)}
              className="group relative block overflow-hidden rounded-2xl aspect-[16/9] sm:aspect-[16/10] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <Image
                src={service.image}
                alt={service.title[locale]}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent group-hover:from-slate-950/95 transition-colors"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/80 text-white text-xs font-bold w-fit mb-3 backdrop-blur-sm">
                  <span>{service.number}</span>
                  <span>•</span>
                  <span>{t("Layanan Utama", "Core Service")}</span>
                </div>
                <h3 className="font-extrabold text-white text-xl sm:text-2xl mb-2 group-hover:text-sky-300 transition-colors">
                  {service.title[locale]}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2 max-w-lg mb-3">
                  {service.description[locale]}
                </p>
                <div className="flex items-center gap-2 text-sky-400 font-semibold text-xs sm:text-sm group-hover:text-white transition-colors">
                  <span>{t("Pelajari Selengkapnya", "Learn More")}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 5 Grid Cards Below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {remainingFive.map((service) => (
            <div
              key={service.id}
              onClick={() => handleCardClick(service.slug)}
              className="group relative block overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <Image
                src={service.image}
                alt={service.title[locale]}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent group-hover:from-slate-950/95 transition-colors"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
                <div className="text-sky-400 text-xs font-black mb-1">{service.number}</div>
                <h3 className="font-bold text-white text-base sm:text-lg mb-1 group-hover:text-sky-300 transition-colors line-clamp-1">
                  {service.title[locale]}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed line-clamp-2 mb-2">
                  {service.description[locale]}
                </p>
                <div className="flex items-center gap-1.5 text-sky-400 font-semibold text-xs group-hover:text-white transition-colors">
                  <span>{t("Lihat Detail", "View Details")}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              setActiveTab("services");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white font-bold text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>{t("Lihat Seluruh 7 Layanan Kami", "Explore All 7 Services")}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export const HomeAdvantagesSection: React.FC = () => {
  const { locale, t } = useLanguage();

  const advantages = [
    {
      icon: ShieldCheck,
      title: {
        id: "Standar Mutu & Keselamatan Tinggi",
        en: "High Quality & Safety Standards",
      },
      desc: {
        id: "Penerapan sistem manajemen mutu ISO 9001, lingkungan ISO 14001, dan K3 ISO 45001 dengan rekam jejak Zero Accident di lapangan.",
        en: "ISO 9001 quality, ISO 14001 environment, and ISO 45001 safety certified with proven Zero Accident site execution.",
      },
      tag: "ISO Certified",
    },
    {
      icon: Users,
      title: {
        id: "Tenaga Ahli & Rigger Bersertifikat",
        en: "Certified Riggers & Field Engineers",
      },
      desc: {
        id: "Lebih dari 500 personel terlatih dan rigger pemanjat menara berlisensi TKBT/TKPK Kemnaker RI dengan peralatan APD standar internasional.",
        en: "Over 500 certified climbers and engineers licensed in high-altitude tower rigging with international-grade PPE gear.",
      },
      tag: "500+ Experts",
    },
    {
      icon: Zap,
      title: {
        id: "Respon Cepat & SLA Terjamin",
        en: "Rapid Response & Guaranteed SLA",
      },
      desc: {
        id: "Mobilisasi tim cepat untuk penanganan darurat kabel putus (cable cut), gangguan menara, maupun redeployment combat tepat waktu.",
        en: "Rapid mobile dispatch for fiber restoration emergencies, structural tower anomalies, and time-critical combat deployments.",
      },
      tag: "24/7 Standby",
    },
    {
      icon: Award,
      title: {
        id: "Multi-Vendor Capability Teruji",
        en: "Proven Multi-Vendor Expertise",
      },
      desc: {
        id: "Keahlian instalasi dan komisioning perangkat dari berbagai vendor global (Huawei, ZTE, Ericsson, Nokia) serta integrasi daya surya (PLTS).",
        en: "Hands-on commissioning mastery across multi-vendor telecom ecosystems (Huawei, ZTE, Ericsson, Nokia) and solar hybrid setups.",
      },
      tag: "Tier-1 Vendor",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sky-600 text-xs font-bold tracking-widest uppercase mb-2">
            {t("Keunggulan Kami", "Why Choose Us")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            {t(
              "Mengapa Memilih PT Mora Jaya Persada?",
              "Why Partner with PT Mora Jaya Persada?"
            )}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t(
              "Komitmen tanpa kompromi pada kualitas konstruksi, kepatuhan K3, dan kepuasan mitra menjadikan kami pilihan utama di sektor telekomunikasi.",
              "Our uncompromising commitment to construction quality, HSE compliance, and client trust makes us a premier telecommunication partner."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-sky-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5 group-hover:bg-sky-500 group-hover:text-white transition-colors shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold mb-2">
                    {adv.tag}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-sky-600 transition-colors">
                    {adv.title[locale]}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {adv.desc[locale]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const PartnersMarqueeSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          {t(
            "Dipercaya Oleh Operator Telekomunikasi & Perusahaan Energi Terkemuka",
            "Trusted by Leading Telecommunication Operators & Energy Corporations"
          )}
        </p>
      </div>

      <div className="relative w-full overflow-hidden mask-fade">
        <div className="flex gap-6 animate-marquee">
          {[...PARTNERS, ...PARTNERS].map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 shrink-0 hover:bg-sky-50 hover:border-sky-300 transition-all shadow-sm"
            >
              <Building2 className="w-5 h-5 text-sky-600 shrink-0" />
              <div>
                <div className="text-sm font-bold text-slate-800 whitespace-nowrap">
                  {partner.name}
                </div>
                <div className="text-[10px] text-slate-500">{partner.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HomeCtaBanner: React.FC<{ setActiveTab: (tab: NavTab) => void }> = ({
  setActiveTab,
}) => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 text-white relative overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-sky-500/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold mb-3 border border-sky-400/30">
            <Radio className="w-3.5 h-3.5" />
            <span>{t("Kolaborasi Infrastruktur", "Infrastructure Partnership")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-3">
            {t(
              "Siap Memulai Proyek Telekomunikasi Bersama Kami?",
              "Ready to Roll Out Your Telecom Project With Us?"
            )}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t(
              "Konsultasikan kebutuhan pembangunan menara BTS, relokasi combat, perizinan SITAC, maupun penggelaran fiber optic dengan tim teknis kami.",
              "Consult your BTS construction, combat relocation, SITAC licensing, or optical fiber rollout requirements with our engineering specialists."
            )}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              setActiveTab("contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2.5 bg-sky-500 hover:bg-sky-600 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
          >
            <span>{t("Konsultasi Sekarang", "Consult Now")}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              setActiveTab("portfolio");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/20 transition-all cursor-pointer text-sm sm:text-base"
          >
            <span>{t("Lihat Portofolio", "View Portfolio")}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
