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
import { VisionMissionTab } from "@/components/tabs/VisionMissionTab";
import { OrganizationTab } from "@/components/tabs/OrganizationTab";
import { LegalityTab } from "@/components/tabs/LegalityTab";
import { ServicesTab } from "@/components/tabs/ServicesTab";
import { PortfolioTab } from "@/components/tabs/PortfolioTab";
import { ClientsTab } from "@/components/tabs/ClientsTab";
import { MediaTab } from "@/components/tabs/MediaTab";
import { DownloadTab } from "@/components/tabs/DownloadTab";
import { CareersTab } from "@/components/tabs/CareersTab";
import { ContactTab } from "@/components/tabs/ContactTab";
import { ProjectDetailView } from "@/components/views/ProjectDetailView";
import { NewsDetailView } from "@/components/views/NewsDetailView";
import { CareerApplyModal } from "@/components/modals/DetailsModal";
import {
  PortfolioItem,
  NewsItem,
  CareerItem,
  SERVICES,
  PORTFOLIO_PROJECTS,
  NEWS_ARTICLES
} from "@/data/siteData";

function MainApp() {
  const [activeTab, setActiveTab] = useState<NavTab>("home");
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string>(SERVICES[0].slug);
  const [activeProject, setActiveProject] = useState<PortfolioItem | null>(null);
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);
  const [selectedCareer, setSelectedCareer] = useState<CareerItem | null>(null);

  // Sync hash from URL if accessed directly e.g. #vision-mission, #legality, #download, etc.
  useEffect(() => {
    const handleHash = () => {
      const hashRaw = window.location.hash.replace("#", "").toLowerCase();
      if (!hashRaw) {
        setActiveTab("home");
        return;
      }

      if (hashRaw.startsWith("project/")) {
        const slug = hashRaw.replace("project/", "");
        const found = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
        if (found) {
          setActiveProject(found);
          setActiveTab("project-detail");
          return;
        }
      }

      if (hashRaw.startsWith("news/")) {
        const slug = hashRaw.replace("news/", "");
        const found = NEWS_ARTICLES.find((n) => n.slug === slug);
        if (found) {
          setActiveArticle(found);
          setActiveTab("news-detail");
          return;
        }
      }

      const validTabs: NavTab[] = [
        "home",
        "about",
        "vision-mission",
        "organization",
        "legality",
        "services",
        "portfolio",
        "clients",
        "media",
        "download",
        "careers",
        "contact",
      ];

      if (validTabs.includes(hashRaw as NavTab)) {
        setActiveTab(hashRaw as NavTab);
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

  // Open Project as dedicated Page
  const handleOpenProjectPage = (project: PortfolioItem) => {
    setActiveProject(project);
    setActiveTab("project-detail");
    window.location.hash = `project/${project.slug}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Open News as dedicated Page
  const handleOpenNewsPage = (article: NewsItem) => {
    setActiveArticle(article);
    setActiveTab("news-detail");
    window.location.hash = `news/${article.slug}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* Navbar with full dropdowns */}
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Home */}
        {activeTab === "home" && (
          <div className="space-y-0 animate-in fade-in duration-300">
            <HeroSlider setActiveTab={handleTabChange} />
            <HomeServicesSection
              setActiveTab={handleTabChange}
              onSelectService={handleSelectService}
            />
            <FeaturedProjectsSlider
              setActiveTab={handleTabChange}
              onSelectProject={handleOpenProjectPage}
            />
            <HomeAdvantagesSection />
            <PartnersMarqueeSection />
            <HomeCtaBanner setActiveTab={handleTabChange} />
          </div>
        )}

        {/* 2. About Us */}
        {activeTab === "about" && (
          <div className="animate-in fade-in duration-300">
            <AboutTab setActiveTab={handleTabChange} />
          </div>
        )}

        {/* 3. Vision & Mission */}
        {activeTab === "vision-mission" && (
          <div className="animate-in fade-in duration-300">
            <VisionMissionTab setActiveTab={handleTabChange} />
          </div>
        )}

        {/* 4. Organization */}
        {activeTab === "organization" && (
          <div className="animate-in fade-in duration-300">
            <OrganizationTab />
          </div>
        )}

        {/* 5. Legality & Certifications */}
        {activeTab === "legality" && (
          <div className="animate-in fade-in duration-300">
            <LegalityTab />
          </div>
        )}

        {/* 6. Services */}
        {activeTab === "services" && (
          <div className="animate-in fade-in duration-300">
            <ServicesTab
              selectedSlug={selectedServiceSlug}
              setActiveTab={handleTabChange}
            />
          </div>
        )}

        {/* 7. Portfolio */}
        {activeTab === "portfolio" && (
          <div className="animate-in fade-in duration-300">
            <PortfolioTab
              onSelectProject={handleOpenProjectPage}
              setActiveTab={handleTabChange}
            />
          </div>
        )}

        {/* 8. Clients & Partners */}
        {activeTab === "clients" && (
          <div className="animate-in fade-in duration-300">
            <ClientsTab setActiveTab={handleTabChange} />
          </div>
        )}

        {/* 9. Media & News */}
        {activeTab === "media" && (
          <div className="animate-in fade-in duration-300">
            <MediaTab onSelectArticle={handleOpenNewsPage} />
          </div>
        )}

        {/* 10. Download Center */}
        {activeTab === "download" && (
          <div className="animate-in fade-in duration-300">
            <DownloadTab />
          </div>
        )}

        {/* 11. Careers */}
        {activeTab === "careers" && (
          <div className="animate-in fade-in duration-300">
            <CareersTab onApplyCareer={(career) => setSelectedCareer(career)} />
          </div>
        )}

        {/* 12. Contact */}
        {activeTab === "contact" && (
          <div className="animate-in fade-in duration-300">
            <ContactTab />
          </div>
        )}

        {/* 13. Dedicated Project Page View (No Popup) */}
        {activeTab === "project-detail" && activeProject && (
          <ProjectDetailView
            project={activeProject}
            onBack={() => handleTabChange("portfolio")}
            setActiveTab={handleTabChange}
          />
        )}

        {/* 14. Dedicated News Article Page View (No Popup) */}
        {activeTab === "news-detail" && activeArticle && (
          <NewsDetailView
            article={activeArticle}
            onBack={() => handleTabChange("media")}
            onSelectArticle={handleOpenNewsPage}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={handleTabChange}
        onSelectService={handleSelectService}
      />

      {/* Floating Action Buttons */}
      <FloatingActions />

      {/* Career Job Application Modal */}
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
