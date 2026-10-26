"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
  Building2,
  ShieldAlert
} from "lucide-react";
import { COMPANY_INFO } from "@/data/siteData";
import { useLanguage } from "@/context/LanguageContext";

export const ContactTab: React.FC = () => {
  const { locale, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "Kerjasama Proyek Telekomunikasi",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <div className="pt-[110px] pb-24 bg-white">
      {/* Hero Banner */}
      <div className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/api/media/file/hero-4.jpg"
            alt="Contact Banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-3 border border-sky-400/30">
            {t("Hubungi Kami", "Get In Touch")}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            {t("Konsultasi & Kontak Resmi", "Contact & Project Inquiries")}
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            {t(
              "Tim engineering dan komersial kami siap memberikan solusi terbaik untuk proyek menara, fiber optic, dan pemeliharaan telekomunikasi Anda.",
              "Our engineering and business development team stands ready to deliver customized solutions for your telecom build and maintenance requirements."
            )}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Phone */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {t("Telepon Kantor", "Office Phone")}
            </div>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="text-base font-extrabold text-slate-900 hover:text-sky-600 transition-colors block"
            >
              {COMPANY_INFO.phone}
            </a>
            <div className="text-xs text-slate-500 mt-2">
              {COMPANY_INFO.workHours[locale]}
            </div>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {t("WhatsApp Resmi", "Official WhatsApp")}
            </div>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-extrabold text-emerald-600 hover:text-emerald-700 transition-colors block"
            >
              {COMPANY_INFO.phone}
            </a>
            <div className="text-xs text-slate-500 mt-2">
              {t("Respon cepat dalam hitungan menit", "Quick response within minutes")}
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {t("Email Resmi", "Official Email")}
            </div>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="text-sm font-extrabold text-slate-900 hover:text-sky-600 transition-colors block"
            >
              {COMPANY_INFO.email}
            </a>
            <div className="text-xs text-slate-500 mt-2">
              {t("Proposal & korespondensi legal", "Proposals & corporate inquiries")}
            </div>
          </div>

          {/* Card 4: Address */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {t("Kantor Pusat", "Headquarters")}
            </div>
            <div className="text-xs font-bold text-slate-900 leading-snug">
              {COMPANY_INFO.city}, {COMPANY_INFO.province}
            </div>
            <div className="text-xs text-slate-500 mt-2 leading-relaxed">
              {COMPANY_INFO.address}
            </div>
          </div>
        </div>

        {/* Contact Form & Location Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            <div className="mb-6">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                {t("Formulir Pesan", "Message Form")}
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-1">
                {t("Kirimkan Pesan atau Permintaan Proyek", "Send a Message or Project Request")}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                {t(
                  "Isi formulir di bawah ini dan perwakilan tim kami akan segera menghubungi Anda.",
                  "Fill out the form below and our representative will reach out promptly."
                )}
              </p>
            </div>

            {status === "success" ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  {t("Pesan Berhasil Terkirim!", "Message Sent Successfully!")}
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  {t(
                    "Terima kasih telah menghubungi PT Mora Jaya Persada. Tim kami akan meninjau pesan Anda dan merespon ke email atau WhatsApp Anda secepatnya.",
                    "Thank you for contacting PT Mora Jaya Persada. Our team will review your message and reply via email or WhatsApp shortly."
                  )}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-3 px-5 py-2 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  {t("Kirim Pesan Lain", "Send Another Message")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
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
                      placeholder="Contoh: Ir. Hendra Saputra"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t("Email Perusahaan / Pribadi", "Email Address")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@perusahaan.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t("Nomor Telepon / WhatsApp", "Phone / WhatsApp")} <span className="text-red-500">*</span>
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
                      {t("Nama Perusahaan / Instansi", "Company / Organization")}
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="PT / CV / Instansi"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Topik / Subjek Permintaan", "Subject / Category")} <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="Relokasi BTS & Combat">Relokasi BTS & Combat Redeployment</option>
                    <option value="Instalasi & Komisioning">Instalasi & Komisioning Perangkat</option>
                    <option value="CME Works">CME Works (Sipil, Mekanikal, Elektrikal)</option>
                    <option value="Layanan Fiber Optic">Layanan Penggelaran Fiber Optic</option>
                    <option value="Maintenance & Optimasi">Maintenance Menara & Optimasi Jaringan</option>
                    <option value="Site Acquisition & SITAC">Site Acquisition (SITAC) & Perizinan</option>
                    <option value="PLTS & Energi Terbarukan">PLTS Solar Power Plant</option>
                    <option value="Lainnya">Lainnya / Konsultasi Umum</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Detail Pesan / Spesifikasi Proyek", "Project Message & Requirements")} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t(
                      "Jelaskan kebutuhan lokasi site, volume pekerjaan, target waktu, atau dokumen yang dibutuhkan...",
                      "Detail the site locations, scope volume, targeted schedule, or tender specs..."
                    )}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  ></textarea>
                </div>

                <div className="flex items-start gap-2 pt-1 text-xs text-slate-500">
                  <input type="checkbox" required className="mt-0.5 rounded text-sky-600" />
                  <span>
                    {t(
                      "Saya menyetujui data saya diproses oleh PT Mora Jaya Persada untuk tujuan komunikasi penawaran dan layanan.",
                      "I consent to the collection and processing of my contact information by PT Mora Jaya Persada."
                    )}
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold text-sm shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <span>{t("Mengirim Pesan...", "Sending Message...")}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t("Kirimkan Pesan Sekarang", "Submit Inquiry Now")}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Google Maps & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white p-7 rounded-3xl border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-base">
                    {COMPANY_INFO.name}
                  </h3>
                  <p className="text-xs text-sky-400">Head Office Palembang</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {COMPANY_INFO.fullAddress}
              </p>

              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{COMPANY_INFO.workHours[locale]}</span>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md h-72 sm:h-80 bg-slate-100 relative">
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127504.66750376182!2d104.6789728481445!3d-2.954794936495247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b7593c2079f8b%3A0x6b4df3ea568858e3!2sPalembang%2C%20Palembang%20City%2C%20South%20Sumatra!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
