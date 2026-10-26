"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Phone, Mail, Globe, Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO } from "@/data/siteData";

export type NavTab =
  | "home"
  | "about"
  | "vision-mission"
  | "organization"
  | "legality"
  | "services"
  | "portfolio"
  | "clients"
  | "media"
  | "download"
  | "careers"
  | "contact"
  | "project-detail"
  | "news-detail";

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const { locale, setLocale, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isAboutActive = ["about", "vision-mission", "organization", "legality"].includes(activeTab);
  const isPortfolioActive = ["portfolio", "clients"].includes(activeTab);
  const isMediaActive = ["media", "download"].includes(activeTab);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar Info */}
      <div className="bg-slate-900 text-white text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-medium">{COMPANY_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-sky-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          {/* Bilingual Switcher */}
          <div className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-slate-400 mr-1" />
            <button
              onClick={() => setLocale("id")}
              className={`px-2.5 py-0.5 text-xs rounded font-semibold transition-all cursor-pointer ${
                locale === "id"
                  ? "bg-sky-500 text-white shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
              aria-label="Bahasa Indonesia"
            >
              ID
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-2.5 py-0.5 text-xs rounded font-semibold transition-all cursor-pointer ${
                locale === "en"
                  ? "bg-sky-500 text-white shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-2.5"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-100/80 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <div className="relative w-11 h-11 transition-transform group-hover:scale-105">
                <Image
                  src="/images/mora-logo.png"
                  alt="PT Mora Jaya Persada"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <div className="font-extrabold text-slate-900 text-lg leading-tight tracking-tight group-hover:text-sky-600 transition-colors">
                  MORA JAYA
                </div>
                <div className="text-[10px] text-slate-500 font-semibold tracking-[0.25em] uppercase">
                  Persada
                </div>
              </div>
            </button>

            {/* Desktop Navigation Links with Dropdown Menus */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Home */}
              <button
                onClick={() => handleNavClick("home")}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "home"
                    ? "text-sky-600 bg-sky-50 shadow-sm"
                    : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                }`}
              >
                {t("Beranda", "Home")}
              </button>

              {/* About Us ▾ Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setOpenDropdown("about")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick("about")}
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    isAboutActive
                      ? "text-sky-600 bg-sky-50 shadow-sm"
                      : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                  }`}
                >
                  <span>{t("Tentang Kami", "About Us")}</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </button>

                <div className="absolute top-full left-0 pt-2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-1">
                    <button
                      onClick={() => handleNavClick("about")}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                        activeTab === "about" ? "bg-sky-50 text-sky-600" : "text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                      }`}
                    >
                      {t("Profil Perusahaan", "Company Profile")}
                    </button>
                    <button
                      onClick={() => handleNavClick("vision-mission")}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                        activeTab === "vision-mission" ? "bg-sky-50 text-sky-600" : "text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                      }`}
                    >
                      {t("Visi, Misi & Nilai", "Vision, Mission & Values")}
                    </button>
                    <button
                      onClick={() => handleNavClick("organization")}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                        activeTab === "organization" ? "bg-sky-50 text-sky-600" : "text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                      }`}
                    >
                      {t("Struktur Organisasi", "Organizational Structure")}
                    </button>
                    <button
                      onClick={() => handleNavClick("legality")}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                        activeTab === "legality" ? "bg-sky-50 text-sky-600" : "text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                      }`}
                    >
                      {t("Legalitas & Sertifikasi", "Legality & Certifications")}
                    </button>
                  </div>
                </div>
              </div>

              {/* Services */}
              <button
                onClick={() => handleNavClick("services")}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "services"
                    ? "text-sky-600 bg-sky-50 shadow-sm"
                    : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                }`}
              >
                {t("Layanan", "Services")}
              </button>

              {/* Portfolio ▾ Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setOpenDropdown("portfolio")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick("portfolio")}
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    isPortfolioActive
                      ? "text-sky-600 bg-sky-50 shadow-sm"
                      : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                  }`}
                >
                  <span>{t("Portofolio", "Portfolio")}</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </button>

                <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-1">
                    <button
                      onClick={() => handleNavClick("portfolio")}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                        activeTab === "portfolio" ? "bg-sky-50 text-sky-600" : "text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                      }`}
                    >
                      {t("Portofolio Proyek", "Project Portfolio")}
                    </button>
                    <button
                      onClick={() => handleNavClick("clients")}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                        activeTab === "clients" ? "bg-sky-50 text-sky-600" : "text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                      }`}
                    >
                      {t("Klien & Rekanan", "Clients & Partners")}
                    </button>
                  </div>
                </div>
              </div>

              {/* Media ▾ Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setOpenDropdown("media")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick("media")}
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    isMediaActive
                      ? "text-sky-600 bg-sky-50 shadow-sm"
                      : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                  }`}
                >
                  <span>{t("Media", "Media")}</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </button>

                <div className="absolute top-full left-0 pt-2 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-1">
                    <button
                      onClick={() => handleNavClick("media")}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                        activeTab === "media" ? "bg-sky-50 text-sky-600" : "text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                      }`}
                    >
                      {t("Berita & Artikel", "News & Articles")}
                    </button>
                    <button
                      onClick={() => handleNavClick("download")}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                        activeTab === "download" ? "bg-sky-50 text-sky-600" : "text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                      }`}
                    >
                      {t("Download Center", "Download Center")}
                    </button>
                  </div>
                </div>
              </div>

              {/* Careers */}
              <button
                onClick={() => handleNavClick("careers")}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "careers"
                    ? "text-sky-600 bg-sky-50 shadow-sm"
                    : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                }`}
              >
                {t("Karir", "Careers")}
              </button>

              {/* Contact */}
              <button
                onClick={() => handleNavClick("contact")}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "contact"
                    ? "text-sky-600 bg-sky-50 shadow-sm"
                    : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                }`}
              >
                {t("Kontak", "Contact")}
              </button>
            </div>

            {/* CTA Button & Mobile Trigger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNavClick("contact")}
                className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{t("Hubungi Kami", "Contact Us")}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto space-y-2 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick("home")}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold ${
                activeTab === "home" ? "bg-sky-500 text-white" : "text-slate-800 hover:bg-slate-100"
              }`}
            >
              {t("Beranda", "Home")}
            </button>

            {/* About Group */}
            <div className="pt-1">
              <div className="px-4 py-1 text-[11px] font-black uppercase tracking-wider text-slate-400">
                {t("Tentang Perusahaan", "About Company")}
              </div>
              <button
                onClick={() => handleNavClick("about")}
                className={`w-full text-left px-4 py-2 rounded-xl text-xs font-semibold ${
                  activeTab === "about" ? "bg-sky-50 text-sky-600 font-bold" : "text-slate-700"
                }`}
              >
                • {t("Profil Perusahaan", "Company Profile")}
              </button>
              <button
                onClick={() => handleNavClick("vision-mission")}
                className={`w-full text-left px-4 py-2 rounded-xl text-xs font-semibold ${
                  activeTab === "vision-mission" ? "bg-sky-50 text-sky-600 font-bold" : "text-slate-700"
                }`}
              >
                • {t("Visi, Misi & Nilai", "Vision, Mission & Values")}
              </button>
              <button
                onClick={() => handleNavClick("organization")}
                className={`w-full text-left px-4 py-2 rounded-xl text-xs font-semibold ${
                  activeTab === "organization" ? "bg-sky-50 text-sky-600 font-bold" : "text-slate-700"
                }`}
              >
                • {t("Struktur Organisasi", "Organizational Structure")}
              </button>
              <button
                onClick={() => handleNavClick("legality")}
                className={`w-full text-left px-4 py-2 rounded-xl text-xs font-semibold ${
                  activeTab === "legality" ? "bg-sky-50 text-sky-600 font-bold" : "text-slate-700"
                }`}
              >
                • {t("Legalitas & Sertifikasi", "Legality & Certifications")}
              </button>
            </div>

            {/* Services */}
            <button
              onClick={() => handleNavClick("services")}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold ${
                activeTab === "services" ? "bg-sky-500 text-white" : "text-slate-800 hover:bg-slate-100"
              }`}
            >
              {t("Layanan Kami", "Our Services")}
            </button>

            {/* Portfolio Group */}
            <div className="pt-1">
              <div className="px-4 py-1 text-[11px] font-black uppercase tracking-wider text-slate-400">
                {t("Portofolio & Klien", "Portfolio & Clients")}
              </div>
              <button
                onClick={() => handleNavClick("portfolio")}
                className={`w-full text-left px-4 py-2 rounded-xl text-xs font-semibold ${
                  activeTab === "portfolio" ? "bg-sky-50 text-sky-600 font-bold" : "text-slate-700"
                }`}
              >
                • {t("Portofolio Proyek", "Project Portfolio")}
              </button>
              <button
                onClick={() => handleNavClick("clients")}
                className={`w-full text-left px-4 py-2 rounded-xl text-xs font-semibold ${
                  activeTab === "clients" ? "bg-sky-50 text-sky-600 font-bold" : "text-slate-700"
                }`}
              >
                • {t("Klien & Rekanan", "Clients & Partners")}
              </button>
            </div>

            {/* Media Group */}
            <div className="pt-1">
              <div className="px-4 py-1 text-[11px] font-black uppercase tracking-wider text-slate-400">
                {t("Media & Publikasi", "Media & Publications")}
              </div>
              <button
                onClick={() => handleNavClick("media")}
                className={`w-full text-left px-4 py-2 rounded-xl text-xs font-semibold ${
                  activeTab === "media" ? "bg-sky-50 text-sky-600 font-bold" : "text-slate-700"
                }`}
              >
                • {t("Berita & Artikel", "News & Articles")}
              </button>
              <button
                onClick={() => handleNavClick("download")}
                className={`w-full text-left px-4 py-2 rounded-xl text-xs font-semibold ${
                  activeTab === "download" ? "bg-sky-50 text-sky-600 font-bold" : "text-slate-700"
                }`}
              >
                • {t("Download Center", "Download Center")}
              </button>
            </div>

            {/* Careers */}
            <button
              onClick={() => handleNavClick("careers")}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold ${
                activeTab === "careers" ? "bg-sky-500 text-white" : "text-slate-800 hover:bg-slate-100"
              }`}
            >
              {t("Karir & Lowongan", "Careers")}
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavClick("contact")}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold ${
                activeTab === "contact" ? "bg-sky-500 text-white" : "text-slate-800 hover:bg-slate-100"
              }`}
            >
              {t("Kontak Kami", "Contact Us")}
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full text-center bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <span>{t("Hubungi Kami", "Contact Us")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
