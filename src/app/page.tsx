"use client";

import React, { useState, useEffect } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar, NavTab } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { HeroSlider } from "@/components/home/HeroSlider";
import { FeaturedProjectsSlider } from "@/components/home/FeaturedProjectsSlider";
import {
  HomeServicesSection,
  HomeAdvantagesSection,
  PartnersMarqueeSection,
  HomeCtaBanner,
} from "@/components/home/HomeSections";
import { AboutTab } from "@/components/tabs/AboutTab";
import { ServicesTab } from "@/components/tabs/ServicesTab";
import { PortfolioTab } from "@/components/tabs/PortfolioTab";
import { MediaTab } from "@/components/tabs/MediaTab";
import { CareersTab } from "@/components/tabs/CareersTab";
import { ContactTab } from "@/components/tabs/ContactTab";
import {
  ProjectDetailModal,
  NewsDetailModal,
  CareerApplyModal,
} from "@/components/modals/DetailsModal";
import { PortfolioItem, NewsItem, CareerItem, SERVICES } from "@/data/siteData";

function MainApp() {
  const [activeTab, setActiveTab] = useState<NavTab>("home");
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string>(SERVICES[0].slug);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);
  const [selectedCareer, setSelectedCareer] = useState<CareerItem | null>(null);

  // Sync hash from URL if accessed directly e.g. /#about or /#services
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase() as NavTab;
      const validTabs: NavTab[] = ["home", "about", "services", "portfolio", "media", "careers", "contact"];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    window.location.hash = tab === "home" ? "" : tab;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectService = (slug: string) => {
    setSelectedServiceSlug(slug);
    setActiveTab("services");
    window.location.hash = "services";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* Navbar with active tab selector */}
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === "home" && (
          <div className="space-y-0 animate-in fade-in duration-300">
            <HeroSlider setActiveTab={handleTabChange} />
            <HomeServicesSection
              setActiveTab={handleTabChange}
              onSelectService={handleSelectService}
            />
            <FeaturedProjectsSlider
              setActiveTab={handleTabChange}
              onSelectProject={(proj) => setSelectedProject(proj)}
            />
            <HomeAdvantagesSection />
            <PartnersMarqueeSection />
            <HomeCtaBanner setActiveTab={handleTabChange} />
          </div>
        )}

        {activeTab === "about" && (
          <div className="animate-in fade-in duration-300">
            <AboutTab setActiveTab={handleTabChange} />
          </div>
        )}

        {activeTab === "services" && (
          <div className="animate-in fade-in duration-300">
            <ServicesTab
              selectedSlug={selectedServiceSlug}
              setActiveTab={handleTabChange}
            />
          </div>
        )}

        {activeTab === "portfolio" && (
          <div className="animate-in fade-in duration-300">
            <PortfolioTab
              onSelectProject={(proj) => setSelectedProject(proj)}
              setActiveTab={handleTabChange}
            />
          </div>
        )}

        {activeTab === "media" && (
          <div className="animate-in fade-in duration-300">
            <MediaTab onSelectArticle={(article) => setSelectedArticle(article)} />
          </div>
        )}

        {activeTab === "careers" && (
          <div className="animate-in fade-in duration-300">
            <CareersTab onApplyCareer={(career) => setSelectedCareer(career)} />
          </div>
        )}

        {activeTab === "contact" && (
          <div className="animate-in fade-in duration-300">
            <ContactTab />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={handleTabChange}
        onSelectService={handleSelectService}
      />

      {/* Floating Action Buttons */}
      <FloatingActions />

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        setActiveTab={handleTabChange}
      />

      <NewsDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <CareerApplyModal
        career={selectedCareer}
        onClose={() => setSelectedCareer(null)}
      />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
