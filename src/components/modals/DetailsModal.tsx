"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  MapPin,
  Calendar,
  CheckCircle2,
  Building,
  Upload,
  Send,
  Check,
  Clock,
  User,
  Share2
} from "lucide-react";
import { PortfolioItem, NewsItem, CareerItem, COMPANY_INFO } from "@/data/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { NavTab } from "../Navbar";

/* =========================================================================
   PROJECT DETAIL MODAL
========================================================================= */
interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  setActiveTab: (tab: NavTab) => void;
}

export const ProjectDetailModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  setActiveTab,
}) => {
  const { locale, t } = useLanguage();

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto border border-slate-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-md transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative w-full h-64 sm:h-80 bg-slate-900">
          <Image
            src={project.image}
            alt={project.title[locale]}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-full bg-sky-500 text-white text-xs font-bold mb-2">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
              {project.title[locale]}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs sm:text-sm">
            <div>
              <div className="text-slate-400 text-xs mb-1">{t("Klien", "Client")}</div>
              <div className="font-bold text-slate-800 flex items-center gap-1.5">
                <Building className="w-4 h-4 text-sky-500 shrink-0" />
                <span className="line-clamp-1">{project.client}</span>
              </div>
            </div>
            <div>
              <div className="text-slate-400 text-xs mb-1">{t("Lokasi", "Location")}</div>
              <div className="font-bold text-slate-800 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-sky-500 shrink-0" />
                <span className="line-clamp-1">{project.location[locale]}</span>
              </div>
            </div>
            <div>
              <div className="text-slate-400 text-xs mb-1">{t("Tahun / Status", "Year / Status")}</div>
              <div className="font-bold text-slate-800 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-sky-500 shrink-0" />
                <span>{project.year} • {t("Selesai", "Completed")}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
              {t("Deskripsi Proyek", "Project Description")}
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              {project.description[locale]}
            </p>
          </div>

          {/* Scope of Work */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
              {t("Lingkup Pekerjaan", "Scope of Work")}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.scope[locale].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 text-slate-700 text-xs sm:text-sm border border-slate-100"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              {t(
                "Ingin berdiskusi mengenai proyek serupa?",
                "Interested in discussing a similar project?"
              )}
            </span>
            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold text-xs cursor-pointer"
              >
                {t("Tutup", "Close")}
              </button>
              <button
                onClick={() => {
                  onClose();
                  setActiveTab("contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-md shadow-sky-500/20 transition-all cursor-pointer"
              >
                {t("Konsultasi Proyek", "Inquire Project")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   NEWS DETAIL MODAL
========================================================================= */
interface NewsModalProps {
  article: NewsItem | null;
  onClose: () => void;
}

export const NewsDetailModal: React.FC<NewsModalProps> = ({ article, onClose }) => {
  const { locale, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto border border-slate-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-md transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Article Image */}
        <div className="relative w-full h-64 sm:h-80 bg-slate-900">
          <Image
            src={article.image}
            alt={article.title[locale]}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-full bg-sky-500 text-white text-xs font-bold mb-2">
              {article.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
              {article.title[locale]}
            </h3>
          </div>
        </div>

        {/* Article Meta & Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 text-xs text-slate-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <User className="w-3.5 h-3.5 text-sky-500" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {article.readTime[locale]}
              </span>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 font-semibold cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? t("Link Tersalin!", "Link Copied!") : t("Bagikan", "Share")}</span>
            </button>
          </div>

          <p className="text-base font-semibold text-slate-800 leading-relaxed border-l-4 border-sky-500 pl-4 py-1 italic bg-sky-50/50 rounded-r-xl">
            {article.excerpt[locale]}
          </p>

          <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
            {article.content[locale].map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-100 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-sky-600 transition-colors cursor-pointer"
            >
              {t("Tutup Artikel", "Close Article")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   CAREER APPLY MODAL
========================================================================= */
interface CareerModalProps {
  career: CareerItem | null;
  onClose: () => void;
}

export const CareerApplyModal: React.FC<CareerModalProps> = ({ career, onClose }) => {
  const { locale, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    coverLetter: "",
    fileName: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  if (!career) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto border border-slate-100 p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {status === "success" ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              {t("Lamaran Berhasil Terkirim!", "Application Submitted Successfully!")}
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              {t(
                `Terima kasih telah melamar posisi ${career.title[locale]} di PT Mora Jaya Persada. Tim HR kami akan meninjau CV Anda dan menghubungi jika lolos kualifikasi.`,
                `Thank you for applying for ${career.title[locale]} at PT Mora Jaya Persada. Our HR talent team will review your credentials and contact you shortly.`
              )}
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-sky-600 transition-colors cursor-pointer"
              >
                {t("Selesai", "Done")}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                {t("Formulir Lamaran Kerja", "Job Application Form")}
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">
                {career.title[locale]}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {career.department} • {career.location} • {career.type}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Nama Lengkap", "Full Name")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Budi Pratama"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Email Aktif", "Active Email")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@email.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Nomor WhatsApp / HP", "WhatsApp / Phone Number")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0812-xxxx-xxxx"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Link Portofolio / LinkedIn", "Portfolio / LinkedIn Link")}
                  </label>
                  <input
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    placeholder="https://linkedin.com/in/..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Upload CV */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t("Unggah CV / Resume (PDF / DOCX)", "Upload CV / Resume (PDF / DOCX)")} <span className="text-red-500">*</span>
                </label>
                <div className="relative border-2 border-dashed border-slate-200 hover:border-sky-500 rounded-2xl p-4 text-center cursor-pointer transition-colors bg-slate-50/50">
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center justify-center gap-1.5">
                    <Upload className="w-5 h-5 text-sky-500" />
                    <span className="text-xs font-semibold text-slate-700">
                      {formData.fileName || t("Klik untuk pilih file CV Anda (Maks. 5MB)", "Click to attach your CV document (Max 5MB)")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t("Pesan Singkat / Cover Letter", "Brief Cover Note")}
                </label>
                <textarea
                  rows={3}
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  placeholder={t("Ceritakan pengalaman singkat Anda yang relevan...", "Briefly highlight your relevant experience...")}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                ></textarea>
              </div>

              {/* Agreement */}
              <div className="flex items-start gap-2 pt-1 text-xs text-slate-500">
                <input type="checkbox" required className="mt-0.5 rounded text-sky-600" />
                <span>
                  {t(
                    "Saya menyatakan data yang saya kirimkan adalah benar dan bersedia diproses untuk keperluan rekrutmen PT Mora Jaya Persada.",
                    "I certify that the information provided is accurate and consent to its processing for recruitment by PT Mora Jaya Persada."
                  )}
                </span>
              </div>

              <div className="pt-3 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs hover:bg-slate-50 cursor-pointer"
                >
                  {t("Batal", "Cancel")}
                </button>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-md shadow-sky-500/25 transition-all cursor-pointer disabled:opacity-50"
                >
                  {status === "submitting" ? (
                    <span>{t("Mengirim...", "Sending...")}</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>{t("Kirim Lamaran", "Submit Application")}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
