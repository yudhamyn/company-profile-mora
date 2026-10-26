"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Check,
  Building2,
  ArrowRight
} from "lucide-react";
import { NewsItem, NEWS_ARTICLES } from "@/data/siteData";
import { useLanguage } from "@/context/LanguageContext";

interface NewsDetailViewProps {
  article: NewsItem;
  onBack: () => void;
  onSelectArticle: (article: NewsItem) => void;
}

export const NewsDetailView: React.FC<NewsDetailViewProps> = ({
  article,
  onBack,
  onSelectArticle,
}) => {
  const { locale, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const related = NEWS_ARTICLES.filter((n) => n.id !== article.id).slice(0, 3);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-[110px] pb-24 bg-white animate-in fade-in duration-300">
      {/* Breadcrumb & Back Bar */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-sky-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("Kembali ke Berita & Media", "Back to News & Media")}</span>
          </button>

          <span className="text-xs text-slate-400 hidden sm:inline">
            Media / {article.category} / {article.slug}
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Article Header */}
        <div className="space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-sky-500 text-white text-xs font-bold">
            {article.category}
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
            {article.title[locale]}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 text-xs text-slate-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-bold text-slate-800">
                <User className="w-4 h-4 text-sky-500" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                {article.readTime[locale]}
              </span>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-600 font-semibold transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? t("Link Tersalin!", "Link Copied!") : t("Bagikan", "Share")}</span>
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-xl bg-slate-900">
          <Image
            src={article.image}
            alt={article.title[locale]}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Lead Excerpt */}
        <div className="p-6 rounded-2xl bg-sky-50/70 border-l-4 border-sky-500 text-slate-800 text-base sm:text-lg font-medium leading-relaxed italic">
          {article.excerpt[locale]}
        </div>

        {/* Body Text */}
        <div className="space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
          {article.content[locale].map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Related News */}
        <div className="pt-12 border-t border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-6">
            {t("Berita Terkait Lainnya", "Related News")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectArticle(rel)}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 p-4 cursor-pointer hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3">
                  <Image
                    src={rel.image}
                    alt={rel.title[locale]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="text-[11px] text-sky-600 font-bold mb-1">{rel.category}</div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm line-clamp-2 group-hover:text-sky-600 transition-colors">
                  {rel.title[locale]}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
