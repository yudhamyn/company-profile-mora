"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Newspaper,
  BookOpen
} from "lucide-react";
import { NEWS_ARTICLES, NewsItem } from "@/data/siteData";
import { useLanguage } from "@/context/LanguageContext";

interface MediaTabProps {
  onSelectArticle: (article: NewsItem) => void;
}

export const MediaTab: React.FC<MediaTabProps> = ({ onSelectArticle }) => {
  const { locale, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Project", "Company", "Industry", "CSR"];

  const filteredNews = useMemo(() => {
    return NEWS_ARTICLES.filter((item) => {
      const matchCat =
        selectedCategory === "All" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchSearch =
        !q ||
        item.title[locale].toLowerCase().includes(q) ||
        item.excerpt[locale].toLowerCase().includes(q) ||
        item.author.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery, locale]);

  const featured = filteredNews[0] || NEWS_ARTICLES[0];
  const listItems = filteredNews.slice(1);

  return (
    <div className="pt-[110px] pb-24 bg-white">
      {/* Hero Banner */}
      <div className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/api/media/file/hero-6.jpg"
            alt="Media Banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-3 border border-sky-400/30">
            {t("Media & Publikasi", "Media & Publications")}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            {t("Berita & Artikel Terkini", "Latest News & Insights")}
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            {t(
              "Ikuti perkembangan proyek strategis, inovasi teknologi telekomunikasi, dan kabar korporasi dari PT Mora Jaya Persada.",
              "Stay updated on critical rollout milestones, telecom innovations, and official corporate press releases from PT Mora Jaya Persada."
            )}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-3xl bg-slate-50 border border-slate-200/80">
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-sky-500 text-white shadow-md shadow-sky-500/20"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {cat === "All" ? t("Semua", "All") : cat}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("Cari artikel atau topik...", "Search news or topic...")}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Featured Big Article Card */}
        {featured && (
          <div
            onClick={() => onSelectArticle(featured)}
            className="group relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-2xl border border-slate-800 cursor-pointer grid grid-cols-1 lg:grid-cols-12 transform hover:-translate-y-1 transition-all duration-500"
          >
            <div className="lg:col-span-7 relative h-72 lg:h-[420px] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title[locale]}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/80 via-transparent to-transparent"></div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-sky-500 text-white text-xs font-bold">
                    {featured.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    {featured.readTime[locale]}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-4 group-hover:text-sky-300 transition-colors leading-tight">
                  {featured.title[locale]}
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-6">
                  {featured.excerpt[locale]}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  {featured.date}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sky-400 font-bold group-hover:text-white transition-colors">
                  <span>{t("Baca Selengkapnya", "Read Full Article")}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Other News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {listItems.map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1.5"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <Image
                    src={article.image}
                    alt={article.title[locale]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-sky-400 text-xs font-bold border border-sky-400/30">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="text-sky-600 font-medium">{article.readTime[locale]}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 group-hover:text-sky-600 transition-colors line-clamp-2">
                    {article.title[locale]}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {article.excerpt[locale]}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-sky-600 font-bold group-hover:text-sky-700 transition-colors mt-2">
                <span>{t("Baca Artikel", "Read Article")}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
