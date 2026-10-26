"use client";

import React from "react";
import Image from "next/image";
import {
  Target,
  Compass,
  Award,
  ShieldCheck,
  Zap,
  Users,
  CheckCircle2,
  TrendingUp,
  HeartHandshake
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { NavTab } from "../Navbar";

interface VisionMissionTabProps {
  setActiveTab: (tab: NavTab) => void;
}

export const VisionMissionTab: React.FC<VisionMissionTabProps> = ({ setActiveTab }) => {
  const { locale, t } = useLanguage();

  const missions = [
    {
      num: "01",
      title: {
        id: "Layanan Berkualitas Tinggi Berstandar Internasional",
        en: "High Quality Services Meeting Global Standards"
      },
      desc: {
        id: "Menyediakan layanan konstruksi dan pemeliharaan infrastruktur telekomunikasi berkualitas tinggi yang memenuhi standar mutu internasional dan spesifikasi teknis klien.",
        en: "Deliver premier telecom infrastructure construction and maintenance complying with global quality benchmarks and stringent client technical specifications."
      }
    },
    {
      num: "02",
      title: {
        id: "Keselamatan Kerja & Kelestarian Lingkungan (K3/HSE)",
        en: "Occupational Safety & Environmental Stewardship"
      },
      desc: {
        id: "Mengutamakan keselamatan kerja (K3), kesehatan, dan kelestarian lingkungan dalam setiap aktivitas operasional dengan target konsisten Zero Accident.",
        en: "Prioritize occupational safety, employee health, and ecological sustainability across all field operations targeting zero incidents."
      }
    },
    {
      num: "03",
      title: {
        id: "Pengembangan Kompetensi SDM Berkelanjutan",
        en: "Continuous Human Capital Development"
      },
      desc: {
        id: "Mengembangkan kompetensi teknis sumber daya manusia secara berkesinambungan melalui program pelatihan, sertifikasi TKBT/rigger, dan sertifikasi vendor tier-1.",
        en: "Advance human resource competencies through continuous training, certified rigging programs, and Tier-1 multi-vendor certifications."
      }
    },
    {
      num: "04",
      title: {
        id: "Kemitraan Strategis Saling Menguntungkan",
        en: "Mutually Beneficial Strategic Alliances"
      },
      desc: {
        id: "Membangun kemitraan strategis jangka panjang yang saling menguntungkan dengan seluruh pemangku kepentingan (operator, tower provider, vendor, dan regulator).",
        en: "Forge lasting, win-win strategic relationships with all industry stakeholders including operators, tower companies, vendors, and regulators."
      }
    },
    {
      num: "05",
      title: {
        id: "Inovasi Teknologi & Keberlanjutan Energi",
        en: "Technological Innovation & Clean Energy Solutions"
      },
      desc: {
        id: "Menerapkan inovasi teknologi IoT dan solusi energi terbarukan (PLTS mandiri) untuk meningkatkan efisiensi operasional dan mendukung Net Zero Emission.",
        en: "Adopt IoT monitoring innovations and off-grid solar (PLTS) technologies to heighten operational efficiency and support Net Zero carbon goals."
      }
    }
  ];

  const coreValues = [
    {
      icon: Award,
      title: { id: "Kepemimpinan (Leadership)", en: "Leadership" },
      desc: {
        id: "Memimpin dengan keteladanan, proaktif mengambil inisiatif, dan memandu tim mencapai standar tertinggi dalam setiap proyek.",
        en: "Leading by example, acting proactively, and steering field teams toward top-tier project excellence."
      }
    },
    {
      icon: ShieldCheck,
      title: { id: "Integritas & Kejujuran", en: "Integrity & Trust" },
      desc: {
        id: "Menjunjung transparansi, kejujuran dalam pelaporan progres teknis, dan kepatuhan penuh terhadap etika bisnis.",
        en: "Upholding transparency, rigorous honesty in engineering logs, and uncompromising corporate compliance."
      }
    },
    {
      icon: Zap,
      title: { id: "Kualitas & Presisi", en: "Quality & Precision" },
      desc: {
        id: "Tidak ada kompromi pada kualitas bahan baku, perhitungan beban struktur, maupun akurasi pengujian instrumen.",
        en: "Zero compromises on raw materials, structural calculations, and calibrated instrument verification."
      }
    },
    {
      icon: HeartHandshake,
      title: { id: "Keselamatan Jiwa (Safety First)", en: "Safety First" },
      desc: {
        id: "Keselamatan personel rigger dan teknisi adalah amanah tertinggi yang melandasi seluruh prosedur kerja lapangan.",
        en: "The physical safety of riggers and engineers is the highest priority governing all on-site procedures."
      }
    },
    {
      icon: TrendingUp,
      title: { id: "Inovasi Adaptif", en: "Adaptive Innovation" },
      desc: {
        id: "Cepat beradaptasi terhadap lompatan teknologi seluler dari 4G, 5G, hingga telemetri pemantauan berbasis IoT.",
        en: "Agile adaptation to rapid mobile telecom leaps from 4G and 5G to IoT-driven telemetry systems."
      }
    }
  ];

  return (
    <div className="pt-[110px] pb-24 bg-white">
      {/* Hero Banner */}
      <div className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/api/media/file/hero-4.jpg"
            alt="Vision Mission"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-3 border border-sky-400/30">
            {t("Fondasi & Panduan Arah", "Guiding Principles")}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            {t("Visi, Misi & Nilai-Nilai Kami", "Vision, Mission & Core Values")}
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            {t(
              "Prinsip fundamental dan arah strategis yang memandu setiap langkah PT Mora Jaya Persada dalam melayani industri telekomunikasi.",
              "Fundamental principles and strategic directions guiding every milestone of PT Mora Jaya Persada in telecommunications."
            )}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Big Vision Highlight Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 text-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-slate-800 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <div className="w-16 h-16 rounded-3xl bg-sky-500/20 text-sky-400 flex items-center justify-center mx-auto border border-sky-400/30">
              <Target className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              {t("Visi Perusahaan", "Corporate Vision")}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug tracking-tight">
              &ldquo;{t(
                "Menjadi perusahaan kontraktor infrastruktur telekomunikasi terdepan dan terpercaya di Indonesia yang memberikan kontribusi nyata bagi kemajuan konektivitas digital nasional.",
                "To be the premier and trusted telecommunications infrastructure contractor in Indonesia, delivering real contributions to national digital connectivity."
              )}&rdquo;
            </h2>
          </div>
        </div>

        {/* 5 Pillars of Mission */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
              {t("Misi Kami", "Our Mission")}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              {t("5 Pilar Strategis Operasional Kami", "5 Strategic Operational Pillars")}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">
              {t(
                "Pedoman kerja harian yang kami jalankan dengan penuh komitmen dan dedikasi di setiap site.",
                "Daily work guidelines executed with discipline and dedication on every active site."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((m) => (
              <div
                key={m.num}
                className="bg-slate-50 rounded-3xl p-7 border border-slate-200/80 hover:border-sky-300 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="text-3xl font-black text-sky-500 mb-4 group-hover:scale-110 transition-transform origin-left">
                    {m.num}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 group-hover:text-sky-600 transition-colors">
                    {m.title[locale]}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {m.desc[locale]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
              {t("Nilai-Nilai Inti", "Core Values")}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              {t("Prinsip yang Mendefinisikan Siapa Kami", "Principles Defining Who We Are")}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-sky-600 transition-colors">
                      {val.title[locale]}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {val.desc[locale]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
