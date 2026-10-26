"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO, SERVICES } from "@/data/siteData";
import { NavTab } from "./Navbar";

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
  onSelectService?: (serviceSlug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onSelectService }) => {
  const { locale, t } = useLanguage();

  const handleNav = (tab: NavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleServiceClick = (slug: string) => {
    setActiveTab("services");
    if (onSelectService) {
      onSelectService(slug);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-800/80">
          {/* Col 1: Brand & Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/mora-logo.png"
                  alt="PT Mora Jaya Persada"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-extrabold text-white text-lg tracking-tight leading-tight">
                  MORA JAYA
                </div>
                <div className="text-[10px] text-sky-400 font-semibold tracking-[0.25em] uppercase">
                  Persada
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {t(
                "PT. Mora Jaya Persada adalah perusahaan kontraktor telekomunikasi terintegrasi yang melayani instalasi, relokasi combat, CME, fiber optic, dan pemeliharaan menara BTS di seluruh Indonesia.",
                "PT. Mora Jaya Persada is an integrated telecommunications contractor specializing in installation, combat relocation, CME, fiber optic, and BTS tower maintenance across Indonesia."
              )}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-sky-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="font-medium text-slate-300">ISO 9001 • ISO 14001 • ISO 45001</span>
            </div>
          </div>

          {/* Col 2: Corporate Pages */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-4">
              {t("Perusahaan", "Corporate")}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleNav("about")}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t("Profil Perusahaan", "About Us")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("vision-mission")}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t("Visi, Misi & Nilai", "Vision & Mission")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("organization")}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t("Struktur Organisasi", "Organization")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("legality")}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t("Legalitas & Sertifikasi", "Legality & ISO")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("clients")}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t("Klien & Rekanan", "Clients & Partners")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("download")}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t("Download Center", "Download Center")}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-4">
              {t("Layanan Unggulan", "Services")}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleServiceClick(s.slug)}
                    className="text-slate-400 hover:text-sky-300 transition-colors text-left flex items-start gap-1 group cursor-pointer"
                  >
                    <span className="line-clamp-1">{s.title[locale]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-4">
              {t("Kontak & Lokasi", "Contact & Office")}
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-relaxed">
                  {COMPANY_INFO.fullAddress}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-slate-300 hover:text-white transition-colors font-medium"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  {COMPANY_INFO.workHours[locale]}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 PT. Mora Jaya Persada. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Palembang • Sumatera • Indonesia</span>
            <span>Telecommunication Infrastructure Contractor</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
