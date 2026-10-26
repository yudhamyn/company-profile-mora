"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  Layers,
  Radio,
  Wrench,
  Cpu,
  Sun,
  MapPin,
  MessageSquare
} from "lucide-react";
import { SERVICES, COMPANY_INFO, ServiceItem } from "@/data/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { NavTab } from "../Navbar";

interface ServicesTabProps {
  selectedSlug?: string;
  setActiveTab: (tab: NavTab) => void;
}

export const ServicesTab: React.FC<ServicesTabProps> = ({
  selectedSlug,
  setActiveTab,
}) => {
  const { locale, t } = useLanguage();
  const [activeSlug, setActiveSlug] = useState<string>(selectedSlug || SERVICES[0].slug);

  useEffect(() => {
    if (selectedSlug) {
      setActiveSlug(selectedSlug);
    }
  }, [selectedSlug]);

  const currentService = SERVICES.find((s) => s.slug === activeSlug) || SERVICES[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "bts-relocation":
        return Radio;
      case "equipment-installation":
        return Cpu;
      case "cme-works":
        return Layers;
      case "fiber-optic":
        return Shield;
      case "maintenance":
        return Wrench;
      case "site-acquisition":
        return MapPin;
      case "plts":
        return Sun;
      default:
        return Radio;
    }
  };

  return (
    <div className="pt-[110px] pb-24 bg-white">
      {/* Hero Banner */}
      <div className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/api/media/file/hero-4.jpg"
            alt="Services Banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-3 border border-sky-400/30">
            {t("Solusi Terintegrasi", "Integrated Solutions")}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            {t("Layanan Lengkap Infrastruktur Telekomunikasi", "Complete Telecommunication Infrastructure Services")}
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            {t(
              "7 spektrum layanan utama yang dirancang untuk mendukung keandalan jaringan dan ekspansi konektivitas operator di seluruh pelosok negeri.",
              "7 core service verticals engineered to safeguard network reliability and fuel nationwide digital connectivity."
            )}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Tabs for 7 Services */}
        <div className="flex overflow-x-auto pb-4 gap-2.5 mb-12 scrollbar-none sm:justify-center">
          {SERVICES.map((s) => {
            const Icon = getServiceIcon(s.id);
            const isActive = s.slug === activeSlug;
            return (
              <button
                key={s.id}
                onClick={() => setActiveSlug(s.slug)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer border ${
                  isActive
                    ? "bg-sky-500 text-white border-sky-500 shadow-lg shadow-sky-500/25"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-sky-500"}`} />
                <span>{s.title[locale]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Image & Quick Inquiry Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl border border-slate-100 bg-slate-900 group">
              <Image
                src={currentService.image}
                alt={currentService.title[locale]}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-sky-400 text-xs font-black border border-sky-400/30">
                  {currentService.number}
                </span>
              </div>
            </div>

            {/* Inquire Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 sm:p-7 rounded-3xl border border-slate-800 shadow-lg space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {t("Butuh Layanan Ini?", "Need This Service?")}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {t("Konsultasi teknis & penawaran SLA", "Technical consultation & SLA quotation")}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setActiveTab("contact");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t("Hubungi Tim Komersial", "Contact Commercial Team")}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`https://wa.me/628117301232?text=Halo%20PT%20Mora%20Jaya%20Persada%2C%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(
                    currentService.title[locale]
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>{t("Chat WhatsApp Langsung", "Instant WhatsApp Inquiry")}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Full In-depth Info */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="text-xs font-bold text-sky-600 uppercase tracking-widest mb-1">
                {currentService.tagline[locale]}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                {currentService.title[locale]}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {currentService.fullDescription[locale]}
              </p>
            </div>

            {/* Scope of Work */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-500" />
                <span>{t("Ruang Lingkup Pekerjaan (Scope of Work)", "Scope of Work")}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentService.scopeOfWork[locale].map((scope, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{scope}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features & Advantage */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <Shield className="w-4 h-4 text-sky-500" />
                <span>{t("Keunggulan & Standar Kualitas", "Key Technical Advantages")}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentService.keyFeatures[locale].map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-sky-50/50 border border-sky-100 text-xs sm:text-sm text-slate-800 font-medium flex items-center gap-2.5"
                  >
                    <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
