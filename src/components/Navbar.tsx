"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Mail, Globe, Menu, X, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO } from "@/data/siteData";

export type NavTab = "home" | "about" | "services" | "portfolio" | "media" | "careers" | "contact";

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const { locale, setLocale, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: { id: NavTab; label: { id: string; en: string } }[] = [
    { id: "home", label: { id: "Beranda", en: "Home" } },
    { id: "about", label: { id: "Tentang Kami", en: "About Us" } },
    { id: "services", label: { id: "Layanan", en: "Services" } },
    { id: "portfolio", label: { id: "Portofolio", en: "Portfolio" } },
    { id: "media", label: { id: "Media", en: "Media" } },
    { id: "careers", label: { id: "Karir", en: "Careers" } },
    { id: "contact", label: { id: "Kontak", en: "Contact" } },
  ];

  const handleNavClick = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
              className={`px-2.5 py-0.5 text-xs rounded font-semibold transition-all ${
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
              className={`px-2.5 py-0.5 text-xs rounded font-semibold transition-all ${
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

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "text-sky-600 bg-sky-50 shadow-sm"
                        : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.label[locale]}
                  </button>
                );
              })}
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
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-sky-500 text-white"
                      : "text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  <span>{item.label[locale]}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-white"></div>}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full text-center bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <span>{t("Hubungi Kami", "Contact Us")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-center text-xs text-slate-500">
              Tel: <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-sky-600 font-medium">{COMPANY_INFO.phone}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
