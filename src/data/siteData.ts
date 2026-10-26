export interface LocalizedString {
  id: string;
  en: string;
}

export interface HeroSlide {
  id: number;
  title: LocalizedString;
  description: LocalizedString;
  ctaText: LocalizedString;
  ctaLink: string;
  image: string;
}

export interface StatItem {
  value: string;
  numeric: number;
  suffix: string;
  label: LocalizedString;
}

export interface ServiceItem {
  id: string;
  number: string;
  slug: string;
  title: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  fullDescription: LocalizedString;
  image: string;
  scopeOfWork: {
    id: string[];
    en: string[];
  };
  keyFeatures: {
    id: string[];
    en: string[];
  };
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: LocalizedString;
  category: string;
  client: string;
  location: LocalizedString;
  year: string;
  description: LocalizedString;
  image: string;
  scope: {
    id: string[];
    en: string[];
  };
  status: "completed" | "ongoing";
}

export interface NewsItem {
  id: string;
  slug: string;
  title: LocalizedString;
  category: "Project" | "Company" | "Industry" | "CSR";
  date: string;
  readTime: LocalizedString;
  author: string;
  image: string;
  excerpt: LocalizedString;
  content: {
    id: string[];
    en: string[];
  };
}

export interface CareerItem {
  id: string;
  slug: string;
  title: LocalizedString;
  department: string;
  location: string;
  type: "Full Time" | "Contract";
  deadline: string;
  description: LocalizedString;
  requirements: {
    id: string[];
    en: string[];
  };
  responsibilities: {
    id: string[];
    en: string[];
  };
}

export interface MilestoneItem {
  year: string;
  title: LocalizedString;
  description: LocalizedString;
}

export const COMPANY_INFO = {
  name: "PT Mora Jaya Persada",
  shortName: "Mora Jaya",
  legalName: "PT. Mora Jaya Persada",
  founded: "2018",
  phone: "0811-7301-232",
  phoneRaw: "+628117301232",
  whatsappUrl: "https://wa.me/628117301232?text=Halo%20PT%20Mora%20Jaya%20Persada%2C%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20telekomunikasi.",
  email: "info@morajaya.co.id",
  address: "Jl. Soekarno Hatta, Green Resort Residence Blok A-33",
  city: "Palembang",
  province: "Sumatera Selatan",
  postalCode: "30137",
  country: "Indonesia",
  fullAddress: "Jl. Soekarno Hatta, Green Resort Residence Blok A-33, Palembang, Sumatera Selatan 30137",
  workHours: {
    id: "Senin - Jumat: 08.00 - 17.00 WIB",
    en: "Monday - Friday: 08:00 - 17:00 WIB"
  },
  socialMedia: {
    linkedin: "https://linkedin.com/company/pt-mora-jaya-persada",
    instagram: "https://instagram.com/morajayapersada",
    facebook: "https://facebook.com/morajayapersada"
  }
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: {
      id: "Membangun Infrastruktur Telekomunikasi Indonesia",
      en: "Building Indonesia's Telecommunication Infrastructure"
    },
    description: {
      id: "PT. Mora Jaya Persada bergerak di bidang penyedia jasa layanan telekomunikasi yang komprehensif. Berdiri sejak tahun 2018, kami merupakan mitra terpercaya dalam sektor telekomunikasi.",
      en: "PT. Mora Jaya Persada specializes in providing comprehensive telecommunications services. Founded in 2018, we are a trusted partner in the telecommunication sector."
    },
    ctaText: {
      id: "Hubungi Kami",
      en: "Contact Us"
    },
    ctaLink: "/contact",
    image: "/api/media/file/Gemini_Generated_Image_a032ba032ba032ba.png"
  },
  {
    id: 2,
    title: {
      id: "Solusi Instalasi & Pemeliharaan Terintegrasi",
      en: "Integrated Installation & Maintenance Solutions"
    },
    description: {
      id: "Mulai dari konstruksi menara BTS hingga penggelaran fiber optic, kami menghadirkan layanan infrastruktur telekomunikasi terpadu dengan standar kualitas bersertifikasi ISO.",
      en: "From BTS tower construction to fiber optic deployment, we deliver end-to-end telecom infrastructure services with ISO-certified quality standards."
    },
    ctaText: {
      id: "Lihat Portofolio",
      en: "View Portfolio"
    },
    ctaLink: "/portfolio",
    image: "/api/media/file/Gemini_Generated_Image_en8xx9en8xx9en8x (1).png"
  },
  {
    id: 3,
    title: {
      id: "Dipercaya Operator & Mitra Strategis Nasional",
      en: "Trusted by Leading Operators & Partners"
    },
    description: {
      id: "Bermitra erat dengan PT Telkom Infrastruktur, PT Pertamina, PT Smart Telecom, dan berbagai operator telekomunikasi di seluruh wilayah Nusantara.",
      en: "Partnered with PT Telkom Infrastruktur, PT Pertamina, PT Smart Telecom, and various strategic partners across Indonesia."
    },
    ctaText: {
      id: "Layanan Kami",
      en: "Our Services"
    },
    ctaLink: "/services",
    image: "/api/media/file/Gemini_Generated_Image_4vg2tj4vg2tj4vg2 (1).png"
  }
];

export const STATS: StatItem[] = [
  {
    value: "10+",
    numeric: 10,
    suffix: "+",
    label: {
      id: "Tahun Pengalaman",
      en: "Years Experience"
    }
  },
  {
    value: "200+",
    numeric: 200,
    suffix: "+",
    label: {
      id: "Menara Dibangun",
      en: "Towers Built"
    }
  },
  {
    value: "50+",
    numeric: 50,
    suffix: "+",
    label: {
      id: "Kota Terjangkau",
      en: "Cities Covered"
    }
  },
  {
    value: "500+",
    numeric: 500,
    suffix: "+",
    label: {
      id: "Personel Terlatih",
      en: "Trained Personnel"
    }
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "bts-relocation",
    number: "01",
    slug: "bts-relocation",
    title: {
      id: "Relokasi BTS & Combat Redeployment",
      en: "BTS Relocation & Combat Redeployment"
    },
    tagline: {
      id: "Relokasi menara combat & BTS dengan presisi dan downtime minimal",
      en: "Combat tower & BTS relocation with precision and minimal downtime"
    },
    description: {
      id: "Layanan menyeluruh relokasi dan redeployment menara combat, meliputi pembongkaran (dismantling), pengiriman, instalasi ulang, dan optimasi. Termasuk re-engineering BTS, modernisasi antena, dan permanenisasi site.",
      en: "Comprehensive combat tower relocation and redeployment services, covering dismantling, delivery, reinstallation, and optimization. Includes BTS re-engineering, antenna modernization, and site permanentization."
    },
    fullDescription: {
      id: "PT Mora Jaya Persada memiliki rekam jejak panjang dalam mobilisasi dan demobilisasi menara combat di berbagai medan geografis Indonesia, mulai dari area perkotaan padat hingga lokasi terpencil. Kami memastikan seluruh proses pemindahan menara BTS berlangsung aman dengan standar K3 tinggi, zero incident, dan downtime seminimal mungkin.",
      en: "PT Mora Jaya Persada has a proven track record in mobilizing and demobilizing combat towers across Indonesia diverse geography, from dense urban corridors to remote areas. We ensure the entire BTS relocation process is executed safely under strict HSE standards, zero incidents, and minimal downtime."
    },
    image: "/api/media/file/730x480-img-41112-ilustrasi-tower-bts-jaringan-telekomunikasi-13.jpg",
    scopeOfWork: {
      id: [
        "Survey kelayakan teknis site tujuan & site asal",
        "Dismantling menara combat dan perangkat BTS secara sistematis",
        "Pengangkutan aman (logistik & transport darat/laut)",
        "Ereksi kembali struktur menara di site baru",
        "Re-engineering BTS dan perakitan antena",
        "Alignment microwave & pengujian operasional on-air"
      ],
      en: [
        "Technical site feasibility survey for origin and destination",
        "Systematic dismantling of combat towers and BTS equipment",
        "Safe overland and maritime heavy transport logistics",
        "Tower re-erection and alignment at target site",
        "BTS re-engineering and antenna feeder assembly",
        "Microwave alignment, commissioning, and on-air testing"
      ]
    },
    keyFeatures: {
      id: [
        "Tim rigger bersertifikasi TKBT & TKPK Kemnaker",
        "Armada crane dan truk angkut terstandarisasi",
        "SLA pengerjaan tepat waktu",
        "Prosedur mitigasi risiko K3/HSE ketat"
      ],
      en: [
        "Certified rigging team with high-altitude safety licenses",
        "Standardized mobile crane and specialized transport fleet",
        "Strict SLA adherence and zero-delay execution",
        "Rigorous HSE risk mitigation protocols"
      ]
    }
  },
  {
    id: "equipment-installation",
    number: "02",
    slug: "equipment-installation",
    title: {
      id: "Instalasi & Komisioning Perangkat",
      en: "Equipment Installation & Commissioning"
    },
    tagline: {
      id: "Instalasi, swap-upgrade, dan integrasi perangkat multi-vendor",
      en: "Multi-vendor equipment installation, swap-upgrade, and integration"
    },
    description: {
      id: "Instalasi, swap-upgrade, dan komisioning perangkat telekomunikasi dari berbagai vendor ternama (Huawei, ZTE, Ericsson, Nokia). Meliputi perangkat RF, microwave, power system, hingga integrasi site dan on-air.",
      en: "Installation, swap-upgrade, and commissioning of telecom equipment from leading vendors (Huawei, ZTE, Ericsson, Nokia). Covering RF equipment, microwave, power systems, through to site integration and on-air."
    },
    fullDescription: {
      id: "Kami menyediakan teknisi telekomunikasi berpengalaman untuk mengintegrasikan teknologi 4G LTE dan 5G. Kami menangani konfigurasi BBU, RRU, Rectifier, Battery Bank, Antenna Azimuth/Tilt alignment, serta Microwave transmission hop dengan akurasi link budget teruji.",
      en: "We deploy highly skilled telecom engineers to integrate 4G LTE and cutting-edge 5G technologies. We handle BBU, RRU, Rectifier, Battery Bank configurations, Antenna Azimuth/Tilt alignment, and Microwave transmission links with verified link budget precision."
    },
    image: "/api/media/file/images (9).jpg",
    scopeOfWork: {
      id: [
        "Instalasi BBU (Baseband Unit) & RRU (Remote Radio Unit)",
        "Penggantian / Modernisasi Antena Sektoral & GPS",
        "Instalasi dan pointing Microwave Hop (Mini-Link, RTN, dsb)",
        "Instalasi sistem catu daya (Rectifier, Inverter, Baterai Lithium)",
        "Pengujian VSWR, Return Loss, dan PIM test",
        "Komisioning software, integrasi OSS, dan On-Air acceptance"
      ],
      en: [
        "BBU (Baseband Unit) & RRU (Remote Radio Unit) installation",
        "Sectoral antenna modernization & GPS installation",
        "Microwave hop installation, alignment and pointing",
        "DC power system setup (Rectifiers, Inverters, Lithium batteries)",
        "VSWR, Return Loss, and PIM testing certification",
        "Software commissioning, OSS integration, and On-Air acceptance"
      ]
    },
    keyFeatures: {
      id: [
        "Multi-vendor certified engineers (Huawei, ZTE, Ericsson)",
        "Peralatan ukur terkalibrasi (Anritsu Site Master, Fiber Scope)",
        "Dokumentasi Acceptance Test Procedure (ATP) lengkap",
        "Dukungan standby 24/7 paska cut-over"
      ],
      en: [
        "Multi-vendor certified engineers (Huawei, ZTE, Ericsson)",
        "Calibrated test instruments (Anritsu Site Master, Fiber Scope)",
        "Comprehensive Acceptance Test Procedure (ATP) documentation",
        "24/7 post-cutover stabilization standby"
      ]
    }
  },
  {
    id: "cme-works",
    number: "03",
    slug: "cme-works",
    title: {
      id: "CME Works (Sipil, Mekanikal, Elektrikal)",
      en: "CME Works (Civil, Mechanical, Electrical)"
    },
    tagline: {
      id: "Konstruksi pondasi menara, shelter, pagar perimeter, dan sistem kelistrikan",
      en: "Tower foundation civil works, shelter, perimeter fencing, and electrical systems"
    },
    description: {
      id: "Pekerjaan konstruksi sipil, mekanikal, dan elektrikal menyeluruh untuk infrastruktur menara BTS. Meliputi pondasi tiang/tower (SST, Guyed, Monopole), shelter perangkat, grounding system, fencing, serta penyambungan daya PLN.",
      en: "Comprehensive civil, mechanical, and electrical engineering for BTS tower infrastructure. Includes tower foundation (SST, Guyed, Monopole), equipment shelter, grounding system, perimeter fence, and PLN grid connection."
    },
    fullDescription: {
      id: "Kualitas konstruksi CME adalah fondasi utama dari keandalan jaringan telekomunikasi berjangka panjang. Kami menerapkan standar teknik sipil yang kokoh dengan uji daya dukung tanah (soil test), beton mutu tinggi bersertifikasi lab, serta instalasi sistem penangkal petir dan pentanahan dengan tahanan di bawah standar industri (< 1 Ohm).",
      en: "CME quality is the bedrock of long-term telecom network resilience. We apply uncompromising civil engineering standards backed by rigorous soil testing, lab-certified concrete mixes, and robust lightning protection and grounding systems with ground resistance well below industry thresholds (< 1 Ohm)."
    },
    image: "/api/media/file/BTS-1024x576.jpg",
    scopeOfWork: {
      id: [
        "Penyelidikan tanah (Soil Investigation / Sondir & Boring)",
        "Pondasi Bore Pile, Pad & Chimney, atau Raft Foundation",
        "Ereksi struktur tower (Greenfield SST, Guyed Mast, Monopole, Rooftop)",
        "Pemasangan pagar BRC, guard rail, dan perkerasan halaman site",
        "Pemasangan shelter CKD / Shelter outdoor",
        "Instalasi grounding tembaga, surge arrester, dan koneksi PLN TR/TM"
      ],
      en: [
        "Soil investigation (Cone penetration test / Sondir & Core boring)",
        "Bore Pile, Pad & Chimney, or Raft Foundation construction",
        "Tower structural erection (Greenfield SST, Guyed Mast, Monopole, Rooftop)",
        "BRC perimeter fencing, drainage, and gravel yard hardening",
        "CKD equipment shelter or outdoor cabinet foundation placement",
        "Copper grounding mesh, surge arresters, and PLN grid power connections"
      ]
    },
    keyFeatures: {
      id: [
        "Baja tower bersertifikasi SNI dan hot-dip galvanized",
        "Uji tekan beton independen dengan laporan resmi",
        "Grounding system presisi rendah resistansi (< 1-5 Ohm)",
        "Sesuai regulasi tata ruang dan izin PBG daerah"
      ],
      en: [
        "SNI-certified hot-dip galvanized structural tower steel",
        "Independent laboratory concrete compression test validation",
        "Low-resistance precision grounding (< 1-5 Ohm)",
        "Full compliance with spatial planning and building permits"
      ]
    }
  },
  {
    id: "fiber-optic",
    number: "04",
    slug: "fiber-optic",
    title: {
      id: "Layanan Fiber Optic",
      en: "Fiber Optic Services"
    },
    tagline: {
      id: "Penggelaran kabel optik bawah tanah, udara, splicing, dan testing OTDR",
      en: "Underground & aerial fiber deployment, fusion splicing, and OTDR testing"
    },
    description: {
      id: "Solusi jaringan kabel serat optik terpadu dari penggelaran kabel udara (aerial) dan bawah tanah (buried/duct), pembuatan handhole/manhole, penarikan kabel, fusion splicing presisi tinggi, hingga uji end-to-end OTDR dan Power Meter.",
      en: "End-to-end fiber optic deployment covering aerial and underground (buried/duct) cabling, handhole/manhole construction, subduct pulling, high-precision fusion splicing, through to OTDR and optical power meter validation."
    },
    fullDescription: {
      id: "Sebagai tulang punggung transmisi data berkecepatan tinggi, jaringan serat optik membutuhkan ketelitian tinggi dalam proses penarikan, penyambungan core, dan perapian ODF/closure. Kami memiliki tim teknisi bersertifikasi FO dengan mesin splicing modern seperti Fujikura dan Sumitomo.",
      en: "As the backbone of high-capacity data transmission, fiber optic networks demand micro-level precision in cable pulling, core alignment, and ODF/closure dressing. Our FO technician teams utilize modern fusion splicers (Fujikura, Sumitomo) and precision cleavers."
    },
    image: "/api/media/file/Handhole.jpg",
    scopeOfWork: {
      id: [
        "Rute survey dan pemetaan jalur FO (Route Survey & As-Built Drawing)",
        "Pekerjaan sipil trenching, boring manual / HDD, dan handhole",
        "Penarikan kabel optik udara pada tiang besi dan kabel tanam",
        "Terminasi OTB (Optical Termination Box) dan Joint Closure",
        "Fusion splicing core serat optik single mode / multi mode",
        "Pengujian OTDR (Optical Time-Domain Reflectometer) & Power Meter test"
      ],
      en: [
        "Route survey and GIS-based fiber path mapping (As-Built Drawings)",
        "Civil trenching, manual boring / HDD, and precast handhole installation",
        "Aerial fiber stringing on poles and underground subduct cable pulling",
        "OTB (Optical Termination Box) and Joint Closure termination",
        "Core-by-core fusion splicing (single-mode / multi-mode)",
        "End-to-end bidirectional OTDR & Optical Power Meter verification"
      ]
    },
    keyFeatures: {
      id: [
        "Rata-rata splice loss di bawah 0.02 dB per sambungan",
        "Dokumentasi trace OTDR komprehensif untuk serah terima",
        "Peralatan fusion splicer & OTDR mutakhir",
        "Layanan perbaikan darurat putus kabel (cable cut repair) responsif"
      ],
      en: [
        "Average splice loss under 0.02 dB per joint",
        "Comprehensive bidirectional OTDR traces for acceptance sign-off",
        "State-of-the-art fusion splicers & OTDR units",
        "Rapid-response emergency fiber cut restoration service"
      ]
    }
  },
  {
    id: "maintenance",
    number: "05",
    slug: "maintenance",
    title: {
      id: "Maintenance & Optimasi",
      en: "Maintenance & Optimization"
    },
    tagline: {
      id: "Pemeliharaan preventif, korektif, inspeksi struktur, dan audit K3",
      en: "Preventive & corrective maintenance, structural inspection, and safety audits"
    },
    description: {
      id: "Program pemeliharaan preventif dan korektif rutin untuk menjaga ketersediaan jaringan (uptime 99.99%). Meliputi inspeksi kekencangan baut menara, pengecekan vertikalitas tower, genset & baterai backup, pengecatan ulang, serta audit K3 berkala.",
      en: "Routine preventive and corrective maintenance programs designed to secure maximum network availability (99.99% uptime). Encompassing tower bolt torque inspection, verticality checks, backup generators & batteries, repainting, and structural audits."
    },
    fullDescription: {
      id: "Infrastruktur telekomunikasi beroperasi tanpa henti 24/7/365 di bawah paparan cuaca tropis ekstrem. Melalui program pemeliharaan terstruktur, kami mendeteksi potensi kegagalan lebih awal, mencegah downtime tak terduga, dan memperpanjang usia pakai aset menara dan perangkat.",
      en: "Telecommunication infrastructure operates non-stop 24/7/365 exposed to harsh tropical elements. Through our structured maintenance routines, we preempt failures, minimize unplanned outages, and extend the lifespan of critical tower and radio assets."
    },
    image: "/api/media/file/images (10).jpg",
    scopeOfWork: {
      id: [
        "Inspeksi berkala kekencangan baut (torque wrench audit) dan karat",
        "Uji kelurusan / vertikalitas menara dengan Theodolite",
        "Pengecatan ulang tower standar ICAO (Aviation Orange & White)",
        "Pembersihan site, pemotongan rumput, dan perbaikan pagar",
        "Pemeliharaan sistem catu daya cadangan (Genset, Solar, Baterai)",
        "Audit K3, tangga panjat, dan lifeline safety cable"
      ],
      en: [
        "Periodic bolt torque wrench audit and anti-corrosion inspection",
        "Tower plumbness and verticality measurement via digital theodolite",
        "ICAO-compliant tower repainting (Aviation Orange & White)",
        "Site clearing, vegetation control, and fencing upkeep",
        "Auxiliary backup power maintenance (Diesel generators, solar, batteries)",
        "Fall-arrest ladder and lifeline safety cable compliance audits"
      ]
    },
    keyFeatures: {
      id: [
        "Tim Emergency Response 24/7 dengan SLA respon cepat",
        "Laporan digital terstandarisasi dengan foto sebelum & sesudah",
        "Checklist inspeksi menyeluruh lebih dari 50 poin pemeriksaan",
        "Garansi kualitas pekerjaan pemeliharaan"
      ],
      en: [
        "24/7 Emergency response teams with rapid dispatch SLAs",
        "Standardized digital reporting with clear before-and-after evidence",
        "Exhaustive 50+ point preventive inspection checklist",
        "Guaranteed workmanship warranty on all maintenance operations"
      ]
    }
  },
  {
    id: "site-acquisition",
    number: "06",
    slug: "site-acquisition",
    title: {
      id: "Site Acquisition & Survey (SITAC)",
      en: "Site Acquisition & Survey"
    },
    tagline: {
      id: "Akuisisi lahan, survey kelayakan TSSR, dan legalitas perizinan menara",
      en: "Land acquisition, TSSR feasibility surveys, and statutory tower permitting"
    },
    description: {
      id: "Layanan akuisisi lahan dan survei lokasi telekomunikasi dari tahap awal. Meliputi survei kelayakan teknis (TSSR), negosiasi sewa lahan dengan pemilik, pengurusan izin warga sekitar (HO), rekomendasi ketinggian (KKOP/Lanud), hingga penerbitan Persetujuan Bangunan Gedung (PBG).",
      en: "End-to-end site acquisition and technical survey services. Including Technical Site Survey Reports (TSSR), landowner lease negotiations, community consent (HO), aviation obstacle approvals (KKOP), through to official building permits (PBG)."
    },
    fullDescription: {
      id: "Keberhasilan pembangunan menara BTS sangat bergantung pada kelancaran aspek sosial dan legalitas di lapangan. Tim SITAC kami memiliki pendekatan persuasif dengan masyarakat lokal dan pemahaman mendalam tentang regulasi perizinan pemerintah daerah.",
      en: "Successful tower rollout hinges on smooth community relations and airtight statutory licensing. Our SITAC negotiators possess deep localized understanding of regional permitting procedures and community engagement dynamics."
    },
    image: "/api/media/file/images (11).jpg",
    scopeOfWork: {
      id: [
        "Pencarian alternatif kandidat site (Nominal Site Identification)",
        "Pembuatan laporan teknis TSSR (Technical Site Survey Report)",
        "Negosiasi kontrak sewa lahan dengan pemilik tanah",
        "Sosialisasi warga dan penandatanganan persetujuan warga sekitar",
        "Pengurusan rekomendasi KKOP Dinas Perhubungan / Lanud TNI AU",
        "Pengurusan izin PBG (Persetujuan Bangunan Gedung) / SLF"
      ],
      en: [
        "Candidate site identification within search ring coordinates",
        "Comprehensive Technical Site Survey Report (TSSR) formulation",
        "Landowner commercial negotiation and notarized lease execution",
        "Community socialization and neighborhood consent signing",
        "Civil aviation obstacle clearance (KKOP) approvals",
        "Statutory building permit (PBG) and Certificate of Functionality (SLF)"
      ]
    },
    keyFeatures: {
      id: [
        "Tingkat keberhasilan akuisisi lahan tinggi",
        "Kepatuhan legalitas dan mitigasi potensi sengketa",
        "Jaringan kerja sama luas dengan pemerintah daerah",
        "Waktu penyelesaian terukur sesuai target roll-out klien"
      ],
      en: [
        "High success rate in land acquisition across diverse regions",
        "Strict legal compliance to prevent future tenancy disputes",
        "Established liaison networks with local government authorities",
        "Time-bound delivery aligned with client network rollout milestones"
      ]
    }
  },
  {
    id: "plts",
    number: "07",
    slug: "plts",
    title: {
      id: "PLTS (Pembangkit Listrik Tenaga Surya)",
      en: "PLTS (Solar Power Plant)"
    },
    tagline: {
      id: "Solusi energi surya mandiri dan hybrid untuk site telekomunikasi ramah lingkungan",
      en: "Off-grid and hybrid solar power solutions for sustainable telecom sites"
    },
    description: {
      id: "Penyediaan dan instalasi sistem Pembangkit Listrik Tenaga Surya (PLTS) baik off-grid, on-grid, maupun hybrid untuk mencatu daya menara BTS di lokasi remote yang belum terjangkau jaringan listrik PLN, serta mendukung program Net Zero Emission.",
      en: "Procurement, engineering, and installation of Solar Photovoltaic (PLTS) systems — off-grid, on-grid, or hybrid configurations — to reliably power BTS sites in remote off-grid locations while contributing to corporate Net Zero Emission targets."
    },
    fullDescription: {
      id: "Energi terbarukan menjadi solusi krusial bagi operasional telekomunikasi yang efisien di daerah 3T (Terdepan, Terluar, Tertinggal). Kami merancang konfigurasi Solar PV, MPPT Solar Charge Controller, dan Battery Energy Storage System (BESS) dengan keandalan suplai listrik 99.9% sepanjang tahun.",
      en: "Renewable energy is vital for cost-efficient telecom site operation, especially across remote islands and mountainous terrain. We engineer custom Solar PV arrays, MPPT Solar Charge Controllers, and Battery Energy Storage Systems (BESS) to deliver dependable year-round power supply."
    },
    image: "/api/media/file/Screenshot 2026-03-12 091200.png",
    scopeOfWork: {
      id: [
        "Analisis radiasi matahari dan kalkulasi kebutuhan daya beban site",
        "Desain struktur mounting solar panel (Ground mount / Roof mount)",
        "Pemasangan modul fotovoltaik Tier-1 efisiensi tinggi",
        "Instalasi MPPT inverter / charge controller dan Battery Lithium LifePO4",
        "Integrasi sistem auto-start genset cadangan (Hybrid Power System)",
        "Instalasi sistem IoT pemantauan daya solar secara real-time"
      ],
      en: [
        "Solar irradiance analysis and telecom load profile computation",
        "Mounting structure design (ground-mounted or elevated rooftop frames)",
        "High-efficiency Tier-1 photovoltaic module installation",
        "MPPT solar charge controller & LiFePO4 battery storage integration",
        "Hybrid generator auto-start controller synchronization",
        "Real-time IoT solar yield and telemetry monitoring integration"
      ]
    },
    keyFeatures: {
      id: [
        "Panel surya efisiensi tinggi dengan garansi kinerja 25 tahun",
        "Baterai Lithium LiFePO4 tahan suhu tinggi dengan siklus panjang",
        "Menghemat biaya operasional bahan bakar genset hingga 80%",
        "Dapat dimonitor dari jarak jauh melalui dashboard cloud"
      ],
      en: [
        "High-efficiency solar panels backed by 25-year performance warranty",
        "High-temperature resilient LiFePO4 batteries with extended cycle life",
        "Up to 80% operational fuel savings over diesel-only generation",
        "Remote cloud telemetry dashboard for performance tracking"
      ]
    }
  }
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: "p1",
    slug: "combat-relocation-2024",
    title: {
      id: "Relokasi Combat Telkomsel 2024",
      en: "Combat Relocation Telkomsel 2024"
    },
    category: "BTS Relocation",
    client: "PT Telkomsel / PT Telkom Infrastruktur",
    location: {
      id: "Sumatera Selatan & Lampung",
      en: "South Sumatra & Lampung"
    },
    year: "2024",
    status: "completed",
    description: {
      id: "Pekerjaan relokasi dan redeployment menara combat Telkomsel di 12 titik strategis Sumatera Selatan dan Lampung untuk mendukung penguatan sinyal acara nasional.",
      en: "Relocation and redeployment of Telkomsel combat towers across 12 strategic points in South Sumatra and Lampung to bolster national event coverage."
    },
    image: "/api/media/file/BTS-1024x576.jpg",
    scope: {
      id: ["Dismantling menara combat", "Transportasi antarkabupaten", "Ereksi ulang dan pengujian sinyal", "Integrasi on-air"],
      en: ["Combat tower dismantling", "Inter-district heavy haulage", "Re-erection & signal verification", "On-air integration"]
    }
  },
  {
    id: "p2",
    slug: "re-engineering-r1-jabodetabek",
    title: {
      id: "BTS Re-Engineering Region 1 Jabodetabek",
      en: "BTS Re-Engineering Region 1 Greater Jakarta"
    },
    category: "BTS Relocation",
    client: "PT Telkomsel",
    location: {
      id: "DKI Jakarta & Jawa Barat",
      en: "Jakarta & West Java"
    },
    year: "2023",
    status: "completed",
    description: {
      id: "Optimasi dan re-engineering 25 site menara BTS di kawasan padat Jabodetabek untuk meningkatkan kapasitas throughput data pelanggan.",
      en: "Optimization and re-engineering of 25 BTS sites in high-density Greater Jakarta to elevate user data throughput."
    },
    image: "/api/media/file/cell-towers_adobestock_302109297-40.jpg",
    scope: {
      id: ["Modernisasi antena MIMO", "Re-routing feeder & fiber", "Audit struktur beban tower", "Optimasi azimuth"],
      en: ["MIMO antenna upgrade", "Feeder & fiber re-routing", "Tower load structural audit", "Azimuth optimization"]
    }
  },
  {
    id: "p3",
    slug: "eqp-relocation-sumatera-2022",
    title: {
      id: "Relokasi Perangkat Sumatera Batch 2022",
      en: "Equipment Relocation Sumatra Batch 2022"
    },
    category: "Equipment Installation",
    client: "PT Telkom Infrastruktur",
    location: {
      id: "Sumatera Bagian Selatan",
      en: "Southern Sumatra"
    },
    year: "2022",
    status: "completed",
    description: {
      id: "Program relokasi modul radio BBU, RRU, dan transmisi microwave di 40 site telekomunikasi di regional Sumbagsel.",
      en: "Relocation program for BBU, RRU radio modules, and microwave transmission systems across 40 telecom sites in Southern Sumatra."
    },
    image: "/api/media/file/images (9).jpg",
    scope: {
      id: ["De-instalasi modul eksisting", "Pengujian fungsional modul", "Instalasi di site baru", "Re-commissioning"],
      en: ["Legacy module de-installation", "Module functional bench test", "Re-installation at new site", "Re-commissioning"]
    }
  },
  {
    id: "p4",
    slug: "konsultan-pertamina",
    title: {
      id: "Konsultan Spesialis Telekomunikasi Pertamina",
      en: "Specialist Consultant for Pertamina"
    },
    category: "Maintenance",
    client: "PT Pertamina (Persero)",
    location: {
      id: "Plaju & Prabumulih, Sumatera Selatan",
      en: "Plaju & Prabumulih, South Sumatra"
    },
    year: "2023 - 2024",
    status: "completed",
    description: {
      id: "Layanan konsultansi teknik dan supervisi pemeliharaan menara telekomunikasi radio link di lingkungan kilang dan aset hulu minyak Pertamina.",
      en: "Engineering consultancy and maintenance supervision for radio link telecom towers across Pertamina refinery and upstream oil assets."
    },
    image: "/api/media/file/tower-monopole-13.jpg",
    scope: {
      id: ["Audit K3 struktur menara", "Uji ketebalan ultrasonik (UT)", "Evaluasi sistem grounding migas", "Rekomendasi teknis"],
      en: ["HSE structural tower audit", "Ultrasonic thickness (UT) testing", "Grounding evaluation in oil facilities", "Engineering advisory"]
    }
  },
  {
    id: "p5",
    slug: "swap-upgrade-smartfren",
    title: {
      id: "Swap-Upgrade BTS Smartfren",
      en: "Swap-Upgrade BTS Smartfren"
    },
    category: "Equipment Installation",
    client: "PT Smart Telecom (Smartfren)",
    location: {
      id: "Palembang, Jambi & Bengkulu",
      en: "Palembang, Jambi & Bengkulu"
    },
    year: "2023",
    status: "completed",
    description: {
      id: "Proyek modernisasi perangkat BTS ke teknologi 4G+ dan 5G Ready untuk 50 site Smartfren di Sumbagsel.",
      en: "BTS modernization project to 4G+ and 5G Ready architecture for 50 Smartfren sites across Southern Sumatra."
    },
    image: "/api/media/file/cell-towers_adobestock_302109297-41.jpg",
    scope: {
      id: ["Swap radio ZTE / Huawei", "Instalasi antena multi-band", "Penyelarasan microwave", "Uji drive test KPI"],
      en: ["ZTE / Huawei radio swap", "Multi-band antenna installation", "Microwave hop re-alignment", "KPI drive test acceptance"]
    }
  },
  {
    id: "p6",
    slug: "cme-immobi-100-site",
    title: {
      id: "Implementasi CME IMMOBI",
      en: "CME Implementation IMMOBI"
    },
    category: "CME Works",
    client: "PT IMMOBI Solusi Prima",
    location: {
      id: "Sumatera & Jawa",
      en: "Sumatra & Java"
    },
    year: "2022",
    status: "completed",
    description: {
      id: "Pekerjaan sipil mekanikal elektrikal pondasi menara monopole dan shelter untuk penyedia menara telekomunikasi.",
      en: "Civil, mechanical, and electrical construction of monopole tower foundations and outdoor shelters for telecom infrastructure."
    },
    image: "/api/media/file/cme-site-13.jpg",
    scope: {
      id: ["Pengecoran pondasi bore pile", "Ereksi monopole 30m", "Instalasi pagar pengaman", "Penyambungan daya PLN"],
      en: ["Bore pile concrete foundation", "30m monopole erection", "Perimeter security fencing", "PLN grid power energization"]
    }
  },
  {
    id: "p7",
    slug: "maintenance-pln-sss",
    title: {
      id: "Pemeliharaan PLN (PT Sinar Sugan Sejahtera)",
      en: "PLN Maintenance (PT Sinar Sugan Sejahtera)"
    },
    category: "Maintenance",
    client: "PT Sinar Sugan Sejahtera / PLN",
    location: {
      id: "Sumatera Selatan",
      en: "South Sumatra"
    },
    year: "2023",
    status: "completed",
    description: {
      id: "Pemeliharaan preventif dan korektif jaringan telekomunikasi SCADA dan radio link sistem kelistrikan PLN.",
      en: "Preventive and corrective maintenance for SCADA communications and electricity grid radio links."
    },
    image: "/api/media/file/hero-5.jpg",
    scope: {
      id: ["Pembersihan perangkat transmisi", "Pengecekan power rectifier", "Perapian kabel grounding", "SLA kesiapan 99.9%"],
      en: ["Transmission unit servicing", "Power rectifier health check", "Grounding cable maintenance", "99.9% SLA readiness"]
    }
  },
  {
    id: "p8",
    slug: "cme-tower-sst-kalsel",
    title: {
      id: "CME Tower SST Batch Kalimantan",
      en: "CME Tower SST Batch Kalimantan"
    },
    category: "CME Works",
    client: "Operator Telekomunikasi Nasional",
    location: {
      id: "Kalimantan Selatan & Kalimantan Timur",
      en: "South & East Kalimantan"
    },
    year: "2024",
    status: "completed",
    description: {
      id: "Konstruksi menara 4-leg Self Supporting Tower (SST) 52 meter di 8 titik ekspansi jaringan Kalimantan.",
      en: "Construction of 52-meter 4-leg Self Supporting Towers (SST) across 8 network expansion sites in Kalimantan."
    },
    image: "/api/media/file/cme-xl-13.jpg",
    scope: {
      id: ["Pondasi tiang pancang", "Ereksi rangka baja galvanis 52m", "Instalasi grounding & penangkal petir", "Pengecatan aviasi"],
      en: ["Precast piling foundation", "52m galvanized steel tower erection", "Grounding & lightning rod installation", "Aviation repainting"]
    }
  },
  {
    id: "p9",
    slug: "fo-maintenance-sumsel",
    title: {
      id: "Pemeliharaan Fiber Optic Sumatera Selatan",
      en: "Fiber Optic Maintenance South Sumatra"
    },
    category: "Fiber Optic",
    client: "Leading Fiber Provider",
    location: {
      id: "Palembang - Prabumulih - Baturaja",
      en: "Palembang - Prabumulih - Baturaja"
    },
    year: "2023 - 2024",
    status: "completed",
    description: {
      id: "Pemeliharaan rutin rute kabel fiber optic backbone dan tributary sepanjang 350 km dengan tim patroli dan tanggap darurat putus kabel.",
      en: "Routine maintenance for 350 km of backbone and tributary optical fiber routes with route patrols and emergency splice teams."
    },
    image: "/api/media/file/fo-cable-13.jpg",
    scope: {
      id: ["Patroli rutin rute kabel optik", "Perbaikan kabel putus (MTTR < 4 jam)", "Pembersihan closure & ODF", "Audit berkala OTDR"],
      en: ["Routine fiber route patrolling", "Emergency cable cut restoration (MTTR < 4h)", "Joint closure & ODF servicing", "Periodic OTDR audit"]
    }
  },
  {
    id: "p10",
    slug: "ekspansi-pln-dylya",
    title: {
      id: "Ekspansi Jaringan PLN (PT Dylya)",
      en: "PLN Expansion (PT Dylya)"
    },
    category: "Maintenance",
    client: "PT Dylya / Mitra PLN",
    location: {
      id: "Lampung & Sumatera Selatan",
      en: "Lampung & South Sumatra"
    },
    year: "2022",
    status: "completed",
    description: {
      id: "Dukungan infrastruktur telekomunikasi untuk ekspansi jaringan transmisi tenaga listrik di regional Lampung.",
      en: "Telecom infrastructure deployment supporting electrical power grid transmission expansion in Lampung."
    },
    image: "/api/media/file/hero-6.jpg",
    scope: {
      id: ["Pemasangan tiang telekomunikasi", "Instalasi kabel kontrol & radio", "Kalibrasi link transmisi", "Dokumentasi ATP"],
      en: ["Telecom pole erection", "Control cable & radio installation", "Transmission link calibration", "ATP documentation"]
    }
  },
  {
    id: "p11",
    slug: "combat-redeployment-2021",
    title: {
      id: "Combat Redeployment Batch 2021",
      en: "Combat Redeployment Batch 2021"
    },
    category: "BTS Relocation",
    client: "PT Telkomsel",
    location: {
      id: "Riau, Kepri & Jambi",
      en: "Riau, Riau Islands & Jambi"
    },
    year: "2021",
    status: "completed",
    description: {
      id: "Pemindahan dan instalasi cepat 18 unit menara combat bergerak untuk penanganan lonjakan trafik komunikasi data.",
      en: "Rapid redeployment and setup of 18 mobile combat towers to handle seasonal data traffic surges."
    },
    image: "/api/media/file/hero-4.jpg",
    scope: {
      id: ["Demobilisasi site asal", "Mobilisasi lintas pulau via kapal ferry", "Ereksi dan penarikan guyed wire", "Turn-on service"],
      en: ["Origin demobilization", "Inter-island ferry logistics", "Tower re-erection and guyed wire tensioning", "Turn-on service"]
    }
  },
  {
    id: "p12",
    slug: "fo-bp2020-palembang",
    title: {
      id: "Penggelaran Fiber Optic BP2020 Palembang",
      en: "Fiber Optic Implementation BP2020 Palembang"
    },
    category: "Fiber Optic",
    client: "Telkom Regional 1",
    location: {
      id: "Kota Palembang",
      en: "Palembang City"
    },
    year: "2020",
    status: "completed",
    description: {
      id: "Penggelaran kabel optik bawah tanah dan udara sepanjang 85 km untuk menghubungkan 42 menara BTS Telkomsel ke jaringan fiber.",
      en: "Underground and aerial fiber rollout spanning 85 km connecting 42 Telkomsel BTS sites to fiber backhaul."
    },
    image: "/api/media/file/Handhole.jpg",
    scope: {
      id: ["Pemasangan subduct & penarikan kabel", "Pembuatan precast handhole", "Splicing di setiap ODC/ODP", "Sertifikasi OTDR"],
      en: ["Subduct blowing & cable pulling", "Precast handhole placement", "Splicing at all ODC/ODP nodes", "OTDR certification"]
    }
  },
  {
    id: "p13",
    slug: "bts-sml-multisite",
    title: {
      id: "BTS Telkomsel Multi-Site Sumatera",
      en: "BTS Telkomsel Multi-Site Sumatra"
    },
    category: "Equipment Installation",
    client: "PT Telkomsel",
    location: {
      id: "Sumatera Utara & Aceh",
      en: "North Sumatra & Aceh"
    },
    year: "2021",
    status: "completed",
    description: {
      id: "Pemasangan perangkat BTS baru dan antenna feeder di 30 site regional Sumatera bagian utara.",
      en: "Turnkey equipment installation and antenna feeder setup across 30 greenfield BTS sites in Northern Sumatra."
    },
    image: "/api/media/file/microwave-13.jpg",
    scope: {
      id: ["Instalasi perangkat radio", "Pengkabelan DC & optical jumper", "Uji kelayakan grounding", "Site integration"],
      en: ["Radio equipment installation", "DC & optical jumper routing", "Grounding certification", "Site integration"]
    }
  },
  {
    id: "p14",
    slug: "antenna-modernization-vin",
    title: {
      id: "Modernisasi Antena Telekomunikasi",
      en: "Antenna Modernization"
    },
    category: "Equipment Installation",
    client: "PT Telkomsel",
    location: {
      id: "Sumatera Selatan",
      en: "South Sumatra"
    },
    year: "2022",
    status: "completed",
    description: {
      id: "Penggantian antena konvensional ke Massive MIMO Antenna generasi terbaru untuk efisiensi spektrum frekuensi.",
      en: "Replacement of legacy directional antennas with next-generation Massive MIMO arrays for spectrum efficiency."
    },
    image: "/api/media/file/cell-towers_adobestock_302109297-40.jpg",
    scope: {
      id: ["Pelepasan antena lama", "Pemasangan bracket khusus MIMO", "Penyambungan jumper low-loss", "Optimasi tilt elektrik (RET)"],
      en: ["Legacy antenna dismantling", "Heavy-duty MIMO bracket installation", "Low-loss jumper cabling", "Remote Electrical Tilt (RET) optimization"]
    }
  }
];

export const NEWS_ARTICLES: NewsItem[] = [
  {
    id: "n1",
    slug: "smart-tower-monitoring-2024",
    title: {
      id: "Implementasi Sistem Monitoring Menara Berbasis IoT di 50 Site",
      en: "Implementation of Smart Tower Monitoring System at 50 Sites"
    },
    category: "Project",
    date: "1 Desember 2024",
    readTime: { id: "4 menit baca", en: "4 min read" },
    author: "Tim Redaksi Mora Jaya",
    image: "/api/media/file/news-smart-monitoring-13.jpg",
    excerpt: {
      id: "PT Mora Jaya Persada sukses mengimplementasikan sistem monitoring menara berbasis IoT pada 50 site BTS untuk memantau keamanan dan catu daya secara real-time.",
      en: "PT Mora Jaya Persada has successfully deployed an IoT-based smart tower monitoring platform across 50 BTS sites for real-time security and power telemetry."
    },
    content: {
      id: [
        "Dalam rangka meningkatkan efisiensi operasional dan mempercepat respon terhadap insiden di lapangan, PT Mora Jaya Persada memperkenalkan sistem pemantauan pintar berbasis sensor IoT pada 50 menara BTS mitra di Sumatera Bagian Selatan.",
        "Sistem ini memantau berbagai parameter kritis seperti temperatur ruang shelter, voltase baterai cadangan, getaran abnormal pada menara akibat cuaca ekstrem, serta sensor keamanan pintu secara otomatis dan nirkabel.",
        "Hasil implementasi tahap pertama menunjukkan penurunan waktu deteksi gangguan (Mean Time to Detect) sebesar 65%, memastikan ketersediaan sinyal telekomunikasi bagi masyarakat selalu berada pada level optimal."
      ],
      en: [
        "To enhance operational agility and accelerate field incident turnaround times, PT Mora Jaya Persada has introduced an IoT sensor-driven smart tower monitoring system across 50 partner BTS sites in Southern Sumatra.",
        "The system autonomously tracks critical operational metrics including shelter temperature, backup battery bank voltage, abnormal structural vibrations during adverse weather, and door security breaches via wireless sensors.",
        "Phase-one implementation findings demonstrate a 65% reduction in Mean Time to Detect (MTTD), guaranteeing telecommunication uptime for communities remains at optimum levels."
      ]
    }
  },
  {
    id: "n2",
    slug: "award-telkomsel-2024",
    title: {
      id: "Penghargaan Subkontraktor Terbaik Kategori Kualitas dari Telkomsel",
      en: "Best Subcontractor Award for Quality Excellence from Telkomsel"
    },
    category: "Company",
    date: "18 November 2024",
    readTime: { id: "3 menit baca", en: "3 min read" },
    author: "Humas Mora Jaya",
    image: "/api/media/file/news-award-telkomsel-13.jpg",
    excerpt: {
      id: "PT Mora Jaya Persada meraih penghargaan bergengsi atas dedikasi tinggi dalam mutu pengerjaan instalasi dan keselamatan kerja K3 selama tahun 2024.",
      en: "PT Mora Jaya Persada has garnered the prestigious subcontractor quality excellence accolade for unwavering installation craftmanship and safety compliance."
    },
    content: {
      id: [
        "PT Mora Jaya Persada dengan bangga mengumumkan keberhasilan meraih penghargaan Best Subcontractor Quality Excellence pada gelaran Vendor Gathering Regional Telkomsel.",
        "Apresiasi ini diberikan berkat konsistensi tim lapangan Mora Jaya dalam menyelesaikan proyek tepat waktu dengan tingkat Acceptance Test Procedure (ATP) first-pass mencapai 98.7% serta rekor zero accident.",
        "Direktur Utama PT Mora Jaya Persada menyampaikan terima kasih kepada seluruh tim teknisi, rigger, engineer, dan manajemen atas dedikasi luar biasa yang ditunjukkan sepanjang tahun."
      ],
      en: [
        "PT Mora Jaya Persada proudly announces winning the Best Subcontractor Quality Excellence award during the Telkomsel Regional Vendor Gathering.",
        "This recognition honors Mora Jaya field personnel for on-time delivery, maintaining a 98.7% first-pass Acceptance Test Procedure (ATP) rate, and an exemplary zero-accident safety record.",
        "The President Director of PT Mora Jaya Persada expressed heartfelt appreciation to all riggers, field engineers, and project managers for their extraordinary commitment."
      ]
    }
  },
  {
    id: "n3",
    slug: "kontrak-5g-telkomsel-2024",
    title: {
      id: "PT Mora Jaya Persada Raih Kontrak Baru Pembangunan Menara 5G",
      en: "PT Mora Jaya Persada Wins New 5G Tower Contract from Telkomsel"
    },
    category: "Company",
    date: "25 Oktober 2024",
    readTime: { id: "5 menit baca", en: "5 min read" },
    author: "Divisi Komersial",
    image: "/api/media/file/5g-contract-13.jpg",
    excerpt: {
      id: "Kepercayaan mitra terwujud lewat penandatanganan kontrak penggelaran infrastruktur pendukung jaringan 5G di wilayah Sumatera dan sekitarnya.",
      en: "Partner trust demonstrated through the contract signing for new 5G infrastructure rollout across Sumatra and adjacent territories."
    },
    content: {
      id: [
        "PT Mora Jaya Persada resmi ditunjuk sebagai mitra pelaksana dalam pembangunan infrastruktur pendukung jaringan 5G berkecepatan ultra-tinggi.",
        "Kontrak kerja ini mencakup penguatan struktur menara (tower strengthening), instalasi perangkat Massive MIMO, penarikan kabel optik dark fiber, serta penyediaan daya listrik berkapasitas besar.",
        "Proyek ini dijadwalkan berjalan selama 12 bulan ke depan dengan sasaran mencakup titik-titik pusat industri, bandara, dan pusat keramaian perkotaan."
      ],
      en: [
        "PT Mora Jaya Persada has officially been awarded the rollout contract for high-speed 5G telecommunication infrastructure.",
        "The contractual scope encompasses tower structural reinforcement, Massive MIMO radio integration, dark fiber haulage, and high-capacity electrical power upgrades.",
        "The project will span 12 months, targeting critical industrial zones, international airports, and dense commercial centers."
      ]
    }
  },
  {
    id: "n4",
    slug: "upgrade-5g-ready-palembang",
    title: {
      id: "Upgrade Infrastruktur 4G ke 5G Ready di 30 Site Kota Palembang",
      en: "Infrastructure Upgrade from 4G to 5G Ready at 30 Sites in Palembang"
    },
    category: "Project",
    date: "12 September 2024",
    readTime: { id: "4 menit baca", en: "4 min read" },
    author: "Tim Lapangan Palembang",
    image: "/api/media/file/news-upgrade-5g-13.jpg",
    excerpt: {
      id: "Penyelesaian tahapan upgrade sistem antena dan rectifier di 30 lokasi strategis untuk menjamin kesiapan konektivitas generasi kelima.",
      en: "Successful completion of antenna and power rectifier modernization across 30 strategic sites preparing for fifth-generation connectivity."
    },
    content: {
      id: [
        "Sebanyak 30 site telekomunikasi di Kota Palembang kini telah siap melayani jaringan 5G setelah melalui proses modernisasi intensif oleh tim teknik PT Mora Jaya Persada.",
        "Pekerjaan mencakup penggantian antena lawas dengan antena berfrekuensi lebar, pembaruan kabel grounding berkapasitas tinggi, dan integrasi unit Baseband terkini.",
        "Dengan peningkatan ini, kapasitas jaringan di area padat penduduk mengalami peningkatan hingga 3 kali lipat."
      ],
      en: [
        "A total of 30 telecom sites across Palembang are now fully prepared to broadcast 5G frequencies following comprehensive technical modernization by PT Mora Jaya Persada.",
        "Works encompassed replacing legacy antennas with wide-band multi-beam arrays, upgrading heavy grounding conductors, and configuring latest-generation Baseband hardware.",
        "Through these enhancements, network capacity in dense urban centers has increased by up to threefold."
      ]
    }
  },
  {
    id: "n5",
    slug: "ekspansi-kalimantan-2024",
    title: {
      id: "Ekspansi Bisnis dan Pembukaan Kantor Cabang Baru di Kalimantan Selatan",
      en: "Business Expansion to South Kalimantan Region"
    },
    category: "Company",
    date: "5 Agustus 2024",
    readTime: { id: "3 menit baca", en: "3 min read" },
    author: "Manajemen Mora Jaya",
    image: "/api/media/file/news-ekspansi-kalsel-13.jpg",
    excerpt: {
      id: "Langkah strategis memperluas jangkauan layanan ke pulau Kalimantan guna mendukung pembangunan infrastruktur telekomunikasi IKN dan sekitarnya.",
      en: "Strategic step expanding operations to Kalimantan island to support telecom infrastructure connectivity around the new capital region."
    },
    content: {
      id: [
        "Sebagai bagian dari komitmen pemerataan akses telekomunikasi di seluruh Indonesia, PT Mora Jaya Persada meresmikan operasional cabang di Kalimantan Selatan.",
        "Keberadaan tim operasional di Kalimantan mempercepat mobilisasi personil dan logistik untuk melayani proyek-proyek pembangunan menara dan fiber optic di Kalimantan Selatan dan Kalimantan Timur.",
        "Kantor perwakilan baru ini dilengkapi workshop perlengkapan teknik dan fasilitas penyimpanan material bersertifikasi standar mutu."
      ],
      en: [
        "In line with our pledge to advance digital parity across Indonesia, PT Mora Jaya Persada has inaugurated operations in South Kalimantan.",
        "A permanent Kalimantan presence accelerates personnel and logistics mobilization to service tower construction and fiber rollout in South and East Kalimantan.",
        "The new branch facility features a dedicated technical workshop and quality-certified material warehousing."
      ]
    }
  },
  {
    id: "n6",
    slug: "200-tower-milestone",
    title: {
      id: "Pencapaian Milestone 200+ Menara Dibangun di Seluruh Indonesia",
      en: "Achievement of 200 Towers Built Across Indonesia"
    },
    category: "Company",
    date: "10 Juli 2024",
    readTime: { id: "4 menit baca", en: "4 min read" },
    author: "Tim Manajemen",
    image: "/api/media/file/200-tower-13.jpg",
    excerpt: {
      id: "PT Mora Jaya Persada berhasil membukukan sejarah baru dengan menuntaskan pembangunan menara telekomunikasi ke-200 sejak berdiri tahun 2018.",
      en: "PT Mora Jaya Persada marks a historical milestone by completing its 200th telecommunication tower build since founding in 2018."
    },
    content: {
      id: [
        "Tahun 2024 menjadi tahun bersejarah bagi PT Mora Jaya Persada dengan tercapainya pembangunan menara ke-200 yang berlokasi di Sumatera.",
        "Perjalanan dari awal pendirian hingga saat ini membuktikan ketangguhan dan kepercayaan yang diberikan para operator nasional kepada kapabilitas teknik perusahaan.",
        "Manajemen menegaskan target berikutnya untuk memperluas portofolio energi hijau (PLTS) dan pemeliharaan cerdas berbasis kecerdasan buatan."
      ],
      en: [
        "Year 2024 marks a historic milestone for PT Mora Jaya Persada with the successful completion of its 200th tower build located in Sumatra.",
        "The journey from inception to this moment stands as proof of resilience and the deep trust placed in our engineering capabilities by national operators.",
        "Leadership reaffirmed our next vision: expanding green energy (PLTS) portfolios and AI-assisted predictive maintenance solutions."
      ]
    }
  },
  {
    id: "n7",
    slug: "workshop-5g-zte-2024",
    title: {
      id: "Workshop Teknologi 5G Bersama ZTE Corporation",
      en: "5G Technology Workshop with ZTE Corporation"
    },
    category: "Industry",
    date: "22 Mei 2024",
    readTime: { id: "3 menit baca", en: "3 min read" },
    author: "Divisi Engineering",
    image: "/api/media/file/news-workshop-5g-13.jpg",
    excerpt: {
      id: "Pelatihan teknis intensif bagi para engineer Mora Jaya terkait konfigurasi dan pemecahan masalah perangkat 5G New Radio.",
      en: "Intensive technical certification training for Mora Jaya engineers on 5G New Radio configuration and troubleshooting."
    },
    content: {
      id: [
        "Sebanyak 35 engineer dan team leader PT Mora Jaya Persada mengikuti workshop sertifikasi teknis yang diselenggarakan bersama tim ahli ZTE Corporation.",
        "Materi pelatihan mencakup arsitektur 5G Standalone (SA) & Non-Standalone (NSA), teknik komisioning perangkat AAU terkini, dan optimasi beamforming.",
        "Pelatihan berkelanjutan ini memastikan kapabilitas sumber daya manusia Mora Jaya senantiasa berada di garis depan evolusi teknologi seluler."
      ],
      en: [
        "A cohort of 35 engineers and project leads from PT Mora Jaya Persada completed an advanced technical certification workshop co-hosted with ZTE Corporation.",
        "Curriculum encompassed 5G Standalone (SA) and Non-Standalone (NSA) architectures, next-gen AAU commissioning, and beamforming tuning.",
        "Continuous technical upskilling ensures Mora Jaya workforce stays at the forefront of cellular network innovation."
      ]
    }
  },
  {
    id: "n8",
    slug: "beasiswa-karyawan-2024",
    title: {
      id: "Program Beasiswa Pendidikan untuk Putra-Putri Karyawan Lapangan",
      en: "Educational Scholarship Program for Employees' Children"
    },
    category: "CSR",
    date: "2 Mei 2024",
    readTime: { id: "3 menit baca", en: "3 min read" },
    author: "CSR Mora Jaya",
    image: "/api/media/file/news-beasiswa-13.jpg",
    excerpt: {
      id: "Wujud kepedulian perusahaan terhadap kesejahteraan dan masa depan generasi penerus keluarga besar PT Mora Jaya Persada.",
      en: "Corporate social responsibility initiative advancing education for the children of Mora Jaya field personnel."
    },
    content: {
      id: [
        "Dalam rangka Hari Pendidikan Nasional, PT Mora Jaya Persada menyalurkan beasiswa pendidikan berprestasi kepada puluhan putra-putri teknisi dan rigger lapangan.",
        "Program beasiswa ini mencakup bantuan dana pendidikan bagi jenjang sekolah dasar hingga perguruan tinggi.",
        "Perusahaan meyakini bahwa kesejahteraan dan ketenangan keluarga karyawan merupakan pilar utama di balik kinerja unggul di tempat kerja."
      ],
      en: [
        "Commemorating National Education Day, PT Mora Jaya Persada disbursed academic achievement scholarships to children of field riggers and technicians.",
        "The scholarship program delivers tuition support spanning primary education through university degrees.",
        "The company strongly believes that family well-being forms the true bedrock of excellence in the field."
      ]
    }
  },
  {
    id: "n9",
    slug: "pelatihan-k3-2024",
    title: {
      id: "Pelatihan Keselamatan Kerja (K3) Bekerja di Ketinggian untuk Seluruh Tim",
      en: "Occupational Health and Safety Training for All Field Teams"
    },
    category: "Company",
    date: "14 April 2024",
    readTime: { id: "4 menit baca", en: "4 min read" },
    author: "Departemen HSE",
    image: "/api/media/file/k3-training-13.jpg",
    excerpt: {
      id: "Penyegaran sertifikasi Tenaga Kerja Bangunan Tinggi (TKBT) dan sertifikasi penyelamatan darurat bagi personel rigger menara.",
      en: "Working at heights (TKBT) recertification and emergency tower rescue training for all active field climbers."
    },
    content: {
      id: [
        "Keselamatan jiwa adalah prioritas tertinggi yang tidak dapat ditawar di PT Mora Jaya Persada. Seluruh personel lapangan diwajibkan mengikuti pelatihan penyegaran K3 berkala.",
        "Pelatihan meliputi inspeksi APD (Alat Pelindung Diri), tata cara penggunaan double lanyard dengan energy absorber, simulasi evakuasi darurat di ketinggian (tower rescue), serta pertolongan pertama (P3K).",
        "Melalui disiplin keselamatan ini, Mora Jaya mempertahankan catatan Zero Lost Time Injury (LTI) selama bertahun-tahun."
      ],
      en: [
        "Human safety is an uncompromising top priority at PT Mora Jaya Persada. All operational staff regularly undergo rigorous safety refreshers.",
        "Training modules cover PPE inspection, double-lanyard fall arrest with shock absorbers, high-altitude emergency tower rescues, and advanced first aid.",
        "Through strict adherence to safety standards, Mora Jaya maintains a clean Zero Lost Time Injury (LTI) safety track record."
      ]
    }
  },
  {
    id: "n10",
    slug: "indo-telecom-expo-2024",
    title: {
      id: "Partisipasi PT Mora Jaya Persada dalam Indo Telecom Expo 2024",
      en: "Participation in Indo Telecom Expo 2024"
    },
    category: "Industry",
    date: "8 Maret 2024",
    readTime: { id: "3 menit baca", en: "3 min read" },
    author: "Tim Komunikasi Publik",
    image: "/api/media/file/news-telecom-expo-13.jpg",
    excerpt: {
      id: "Menampilkan portofolio layanan infrastruktur dan inovasi teknologi menara ramah lingkungan di ajang pameran telekomunikasi nasional.",
      en: "Showcasing telecom infrastructure capabilities and green tower innovation at the premier national telecom expo."
    },
    content: {
      id: [
        "PT Mora Jaya Persada berpartisipasi aktif dalam ajang tahunan pameran industri telekomunikasi terbesar di Jakarta Convention Center.",
        "Booth Mora Jaya menarik perhatian ratusan pengunjung dari kalangan operator seluler, tower provider, dan perwakilan kementerian Kominfo.",
        "Acara ini memperkuat posisi Mora Jaya sebagai mitra kontraktor infrastruktur telekomunikasi yang profesional, adaptif, dan berorientasi masa depan."
      ],
      en: [
        "PT Mora Jaya Persada actively participated in the premier national telecommunications exhibition at the Jakarta Convention Center.",
        "The Mora Jaya showcase welcomed hundreds of delegates including mobile network operators, tower companies, and government officials.",
        "The event solidified Mora Jaya reputation as a trusted, forward-looking infrastructure engineering partner."
      ]
    }
  }
];

export const CAREER_OPENINGS: CareerItem[] = [
  {
    id: "c1",
    slug: "hse-officer",
    title: {
      id: "HSE Officer (Health, Safety & Environment)",
      en: "HSE Officer"
    },
    department: "HSE / K3",
    location: "Palembang & Field",
    type: "Full Time",
    deadline: "30 April 2025",
    description: {
      id: "Bertanggung jawab merencanakan, menerapkan, dan mengawasi kepatuhan standar K3 (Keselamatan dan Kesehatan Kerja) serta lingkungan pada seluruh proyek konstruksi menara dan instalasi telekomunikasi.",
      en: "Responsible for planning, executing, and auditing compliance with HSE (Health, Safety, and Environment) policies across all tower construction and telecom installation sites."
    },
    requirements: {
      id: [
        "Pendidikan min. S1 K3 / Teknik Lingkungan / Teknik Sipil",
        "Memiliki sertifikat Ahli K3 Umum (AK3U) Kemnaker RI yang masih aktif",
        "Pengalaman min. 2 tahun di proyek telekomunikasi / konstruksi sipil",
        "Memahami standar K3 bekerja di ketinggian (Working at Heights)",
        "Memiliki kemampuan komunikasi yang tegas, persuasif, dan teliti",
        "Bersedia melakukan perjalanan dinas inspeksi ke site lapangan"
      ],
      en: [
        "Bachelor degree in Occupational Health & Safety, Environmental or Civil Engineering",
        "Active General OHS Expert (AK3U) certification from Ministry of Manpower",
        "Minimum 2 years experience in telecommunication or civil engineering projects",
        "In-depth knowledge of Working at Heights safety protocols and fall protection",
        "Strong communication, hazard identification, and auditing skills",
        "Willingness to conduct regular field site audits across provinces"
      ]
    },
    responsibilities: {
      id: [
        "Menyusun dokumen JSA (Job Safety Analysis) dan HIRADC untuk setiap pekerjaan",
        "Melakukan safety induction bagi seluruh pekerja dan kontraktor sebelum mulai bekerja",
        "Memastikan kelayakan seluruh APD, harness, lifeline, dan peralatan kerja rigger",
        "Melakukan inspeksi berkala dan audit kepatuhan K3 di site proyek",
        "Membuat laporan berkala insiden/near-miss dan evaluasi tindak lanjut"
      ],
      en: [
        "Draft Job Safety Analysis (JSA) and HIRADC assessments for site activities",
        "Conduct daily toolbox talks and mandatory safety inductions for crew",
        "Inspect and certify all PPE, full body harnesses, lifelines, and rigging gear",
        "Execute routine safety audits and compliance walkthroughs on active sites",
        "Investigate incidents or near-misses and formulate corrective actions"
      ]
    }
  },
  {
    id: "c2",
    slug: "fiber-optic-technician",
    title: {
      id: "Teknisi Fiber Optic",
      en: "Fiber Optic Technician"
    },
    department: "Transmission / FO",
    location: "Palembang, Jambi, Lampung",
    type: "Full Time",
    deadline: "15 Mei 2025",
    description: {
      id: "Melakukan instalasi, penarikan, penyambungan (splicing), terminasi, dan pengujian kabel serat optik bawah tanah dan udara untuk menghubungkan menara BTS ke jaringan core.",
      en: "Execute installation, pulling, fusion splicing, termination, and OTDR testing of underground and aerial fiber cables connecting BTS sites to backhaul networks."
    },
    requirements: {
      id: [
        "Pendidikan min. SMK Teknik Telekomunikasi / Elektro / D3",
        "Pengalaman min. 2 tahun dalam penggelaran & splicing kabel fiber optic",
        "Mahir mengoperasikan mesin fusion splicer (Fujikura / Sumitomo) & cleaver",
        "Mampu menggunakan alat ukur OTDR, OPM (Optical Power Meter), dan Visual Fault Locator",
        "Mampu membaca as-built drawing rute kabel dan diagram alokasi core",
        "Memiliki SIM C / SIM A aktif dan siap bekerja mobile"
      ],
      en: [
        "Vocational diploma in Telecommunications / Electrical Engineering",
        "Minimum 2 years proven experience in fiber optic deployment and splicing",
        "Proficient with precision fusion splicers (Fujikura / Sumitomo) and cleavers",
        "Skilled in interpreting OTDR bidirectional traces and Optical Power Meters",
        "Ability to interpret fiber straight line diagrams and core allocation charts",
        "Valid driving license and readiness for mobile on-call duty"
      ]
    },
    responsibilities: {
      id: [
        "Melakukan penarikan kabel optik udara dan subduct bawah tanah",
        "Penyambungan core serat optik pada Joint Closure dan ODF dengan loss < 0.02 dB",
        "Pengujian kualitas sambungan dengan OTDR dan menyusun laporan ATP",
        "Menangani laporan gangguan kabel putus (emergency restoration) sesuai SLA",
        "Memastikan perapian kabel optik di enclosure dan tiang telekomunikasi"
      ],
      en: [
        "Install aerial and underground subduct fiber optic cables",
        "Perform core-by-core fusion splicing with attenuation < 0.02 dB per joint",
        "Conduct optical attenuation testing via OTDR and compile handover reports",
        "Respond rapidly to fiber cut emergencies meeting strict client SLAs",
        "Maintain clean cable dressing in OTB enclosures and pole attachments"
      ]
    }
  },
  {
    id: "c3",
    slug: "admin-procurement-staff",
    title: {
      id: "Staf Admin & Pengadaan (Procurement)",
      en: "Admin & Procurement Staff"
    },
    department: "Finance & Admin",
    location: "Kantor Palembang",
    type: "Full Time",
    deadline: "20 Mei 2025",
    description: {
      id: "Mengelola pengadaan material proyek (baja tower, semen, kabel, aksesoris BTS), evaluasi vendor supplier, administrasi surat-menyurat, serta dokumentasi tender.",
      en: "Manage project material procurement (structural steel, cement, cables, accessories), supplier vendor evaluations, correspondence, and tender documentation."
    },
    requirements: {
      id: [
        "Pendidikan min. D3 / S1 Manajemen, Akuntansi, atau Teknik Industri",
        "Pengalaman min. 1 tahun di bagian procurement / administrasi logistik proyek",
        "Menguasai Microsoft Office (Excel formula lanjutan, Word, PowerPoint)",
        "Memiliki kemampuan negosiasi harga dan hubungan vendor yang baik",
        "Teliti, jujur, terorganisir, dan mampu bekerja di bawah tenggat waktu"
      ],
      en: [
        "Diploma or Bachelor degree in Management, Accounting, or Industrial Engineering",
        "Minimum 1 year experience in procurement or project administrative logistics",
        "Advanced proficiency in MS Excel (spreadsheets, VLOOKUP, pivot), Word",
        "Strong negotiation acumen and vendor relationship building",
        "Meticulous, dependable, organized, and deadline-driven"
      ]
    },
    responsibilities: {
      id: [
        "Memproses Purchase Requisition (PR) menjadi Purchase Order (PO) proyek",
        "Melakukan negosiasi harga dan jadwal pengiriman dengan supplier material",
        "Memonitor stok material di gudang dan status pengiriman ke site proyek",
        "Menyiapkan dokumen penagihan invoice, berita acara serah terima (BAST)",
        "Mengelola arsip kontrak kerja sama dan korespondensi resmi perusahaan"
      ],
      en: [
        "Transform Purchase Requisitions (PR) into verified Purchase Orders (PO)",
        "Negotiate pricing terms and shipping schedules with material suppliers",
        "Monitor warehouse inventory levels and site dispatch delivery tracking",
        "Prepare client invoicing packets and formal project handover milestones (BAST)",
        "Archive contractual agreements and official corporate correspondence"
      ]
    }
  },
  {
    id: "c4",
    slug: "rigger-tower-climber",
    title: {
      id: "Rigger / Tower Climber",
      en: "Rigger / Tower Climber"
    },
    department: "Field Operations",
    location: "Sumatera (Mobile)",
    type: "Full Time",
    deadline: "31 Mei 2025",
    description: {
      id: "Bertugas memanjat menara untuk pemasangan antena, radio unit, feeder cable, alignment microwave, perakitan struktur tower, dan pemeliharaan ketinggian.",
      en: "Climb telecommunication towers to install antennas, radio units, feeder cables, align microwave dishes, assemble steel structures, and execute aloft maintenance."
    },
    requirements: {
      id: [
        "Pendidikan min. SMK / SMA sederajat",
        "Memiliki sertifikat TKBT (Tenaga Kerja Bangunan Tinggi) / K3 Ketinggian Kemnaker",
        "Kondisi fisik prima, sehat jasmani dan rohani, tidak memiliki fobia ketinggian",
        "Pengalaman memanjat menara BTS (SST / Monopole / Guyed Mast) min. 1 tahun",
        "Memahami penggunaan alat rigging, hoist, pulley, dan shackle dengan aman",
        "Disiplin tinggi terhadap penggunaan APD lengkap (Full Body Harness)"
      ],
      en: [
        "High school or vocational certificate",
        "Certified in Working at Heights (TKBT) from Ministry of Manpower",
        "Peak physical condition, medically fit, and zero fear of extreme heights",
        "Minimum 1 year climbing experience on SST, Monopole, and Guyed Mast towers",
        "Proficient with rigging equipment, pulleys, winches, and lifting hardware",
        "Strict discipline regarding 100% tie-off PPE and safety harness compliance"
      ]
    },
    responsibilities: {
      id: [
        "Melakukan pemanjatan menara untuk instalasi antena sektoral, RRU, dan microwave",
        "Perakitan dan pembongkaran rangka baja menara combat dan menara permanen",
        "Pemasangan kabel feeder, optical jumper, dan grounding penangkal petir di tower",
        "Melakukan re-pointing azimuth dan elevasi antena microwave sesuai link budget",
        "Menjalankan inspeksi kekencangan baut dan kondisi fisik struktur menara"
      ],
      en: [
        "Climb towers to hoist and mount sectoral antennas, RRUs, and microwave dishes",
        "Erect and dismantle steel lattice structures on combat and permanent towers",
        "Route RF coaxial feeders, fiber jumpers, and lightning grounding down the tower",
        "Align microwave antenna azimuth and elevation per engineering link budgets",
        "Conduct structural bolt torque checks and physical rust inspection"
      ]
    }
  },
  {
    id: "c5",
    slug: "project-manager",
    title: {
      id: "Manajer Proyek (Project Manager Telekomunikasi)",
      en: "Project Manager"
    },
    department: "Project Management",
    location: "Palembang (Head Office)",
    type: "Full Time",
    deadline: "10 Juni 2025",
    description: {
      id: "Memimpin perencanaan, koordinasi tim lapangan, alokasi anggaran, manajemen risiko, dan serah terima proyek infrastruktur telekomunikasi skala regional.",
      en: "Lead planning, multi-team field orchestration, budget allocation, risk management, and formal handover for regional telecom infrastructure programs."
    },
    requirements: {
      id: [
        "Pendidikan min. S1 Teknik Telekomunikasi / Teknik Elektro / Teknik Sipil",
        "Pengalaman min. 5 tahun di bidang manajemen proyek roll-out telekomunikasi",
        "Memiliki sertifikasi PMP atau pemahaman metodologi manajemen proyek teruji",
        "Kepemimpinan kuat dan rekam jejak memimpin puluhan teknisi dan engineer",
        "Mampu berkomunikasi efektif dengan klien korporat (Telkomsel, Indosat, dll.)",
        "Kemampuan analisis jadwal (Critical Path Method) dan pengendalian anggaran"
      ],
      en: [
        "Bachelor degree in Telecommunications, Electrical, or Civil Engineering",
        "Minimum 5 years leading telecom network rollout and maintenance contracts",
        "PMP certification or demonstrated mastery of structured PM methodologies",
        "Proven leadership managing multi-site field engineers and subcontractors",
        "Strong presentation skills with corporate operator clients (Telkomsel, etc.)",
        "Expertise in schedule optimization (Critical Path Method) and budget control"
      ]
    },
    responsibilities: {
      id: [
        "Menyusun Project Management Plan, work breakdown structure (WBS), dan jadwal kerja",
        "Memimpin koordinasi berkala antar divisi (SITAC, CME, Instalasi, HSE, Finance)",
        "Memantau deviasi jadwal dan biaya serta mengambil tindakan perbaikan cepat",
        "Menjadi narahubung utama untuk pelaporan progres kepada manajemen klien",
        "Memastikan pencapaian target SLA, kualitas pekerjaan, dan kepuasan pelanggan"
      ],
      en: [
        "Develop comprehensive Project Management Plans, WBS, and master timelines",
        "Lead cross-functional syncs across SITAC, CME, Installation, HSE, and Finance",
        "Monitor schedule variances, financial burn rates, and enact corrective levers",
        "Act as principal point-of-contact for client executive progress reporting",
        "Ensure uncompromising SLA fulfillment, craftsmanship quality, and client trust"
      ]
    }
  },
  {
    id: "c6",
    slug: "site-engineer",
    title: {
      id: "Site Engineer (Sipil / Telekomunikasi)",
      en: "Site Engineer"
    },
    department: "Engineering",
    location: "Sumatera & Jawa",
    type: "Contract",
    deadline: "15 Juni 2025",
    description: {
      id: "Mengawasi pelaksanaan teknis di lapangan, memastikan kesesuaian gambar kerja (shop drawing), mengontrol mutu material beton/baja, dan menyiapkan laporan teknis.",
      en: "Supervise on-site engineering execution, ensure adherence to shop drawings, inspect concrete/steel quality, and generate technical documentation."
    },
    requirements: {
      id: [
        "Pendidikan min. S1 / D3 Teknik Sipil / Teknik Telekomunikasi",
        "Pengalaman min. 2 tahun sebagai Site Engineer proyek tower atau sipil telekomunikasi",
        "Mahir menggunakan AutoCAD dan software kalkulasi struktur dasar",
        "Memahami uji mutu tanah, uji slump beton, dan toleransi ereksi menara",
        "Mampu menyusun laporan harian/mingguan dan As-Built Drawing (ABD)",
        "Siap ditempatkan di lokasi proyek lapangan"
      ],
      en: [
        "Bachelor or Diploma in Civil Engineering or Telecommunications",
        "Minimum 2 years experience as Site Engineer in tower or civil telecom projects",
        "Proficient in AutoCAD and basic structural verification tools",
        "Sound understanding of soil mechanics, concrete slump testing, and steel plumbness",
        "Skilled in drafting daily site logs and verified As-Built Drawings (ABD)",
        "Readiness for extended site deployment throughout project lifecycle"
      ]
    },
    responsibilities: {
      id: [
        "Supervisi harian pekerjaan pengecoran pondasi, perakitan tower, dan instalasi CME",
        "Memastikan seluruh tahapan konstruksi memenuhi spesifikasi teknis klien",
        "Melakukan joint survey dan pengukuran elevasi/koordinat bersama perwakilan klien",
        "Memverifikasi material yang datang di site sesuai standar mutu yang disetujui",
        "Menyusun berkas Acceptance Test Procedure (ATP) untuk serah terima pekerjaan"
      ],
      en: [
        "Daily technical supervision over concrete foundations, steel erection, and CME works",
        "Ensure all construction steps strictly mirror client engineering specs",
        "Perform joint site surveys and topographical measurements with client reps",
        "Inspect incoming site materials against approved specifications and bills of quantities",
        "Assemble comprehensive Acceptance Test Procedure (ATP) binders for client sign-off"
      ]
    }
  }
];

export const MILESTONES: MilestoneItem[] = [
  {
    year: "2018",
    title: {
      id: "Awal Pendirian",
      en: "Company Inception"
    },
    description: {
      id: "Memulai kiprah sebagai CV Greentech dengan fokus pada pekerjaan sipil dan pemeliharaan BTS di wilayah Sumatera Selatan.",
      en: "Inception as CV Greentech focusing on telecom civil works and BTS maintenance in South Sumatra."
    }
  },
  {
    year: "2020",
    title: {
      id: "Transformasi Menjadi PT Mora Jaya Persada",
      en: "Corporate Transformation to PT Mora Jaya Persada"
    },
    description: {
      id: "Ekspansi legalitas dan kapasitas usaha menjadi PT Mora Jaya Persada, memperluas kemitraan strategis dengan operator terkemuka.",
      en: "Restructuring into PT Mora Jaya Persada, scaling operational capacity and forging partnerships with national operators."
    }
  },
  {
    year: "2022",
    title: {
      id: "Sertifikasi ISO & Ekspansi Regional",
      en: "ISO Certifications & Regional Footprint"
    },
    description: {
      id: "Meraih sertifikasi standar internasional ISO 9001, 14001, dan 45001 serta memperluas jangkauan proyek ke seluruh Pulau Sumatera dan Jawa.",
      en: "Secured international ISO 9001, 14001, and 45001 certifications while expanding project footprints across Sumatra and Java."
    }
  },
  {
    year: "2024",
    title: {
      id: "200+ Menara & Ekspansi Energi Hijau",
      en: "200+ Towers & Clean Energy Expansion"
    },
    description: {
      id: "Menuntaskan pembangunan menara ke-200, meresmikan cabang Kalimantan, dan merintis divisi solusi energi terbarukan PLTS mandiri.",
      en: "Delivered 200th tower build milestone, inaugurated Kalimantan branch, and pioneered turnkey off-grid solar (PLTS) systems."
    }
  }
];

export const PARTNERS = [
  { name: "Telkomsel", role: "Leading Cellular Operator" },
  { name: "PT Telkom Infrastruktur Indonesia", role: "Infrastructure Provider" },
  { name: "PT Pertamina (Persero)", role: "Energy & Industrial Partner" },
  { name: "Smartfren (PT Smart Telecom)", role: "Telecommunication Partner" },
  { name: "Huawei", role: "Technology Vendor" },
  { name: "ZTE Corporation", role: "Technology Vendor" },
  { name: "Ericsson", role: "Technology Vendor" },
  { name: "Tower Bersama Group (TBG)", role: "Tower Infrastructure" },
  { name: "Protelindo", role: "Tower Infrastructure" },
  { name: "XL Axiata", role: "Cellular Partner" },
  { name: "Indosat Ooredoo Hutchison", role: "Cellular Partner" },
  { name: "PT IMMOBI Solusi Prima", role: "Solutions Partner" }
];

export interface OrganizationLeader {
  name: string;
  role: LocalizedString;
  department: string;
  image?: string;
}

export interface RegionalPM {
  region: string;
  name: string;
  role: string;
  coverage: LocalizedString;
  staffCount: number;
}

export interface LegalityDoc {
  id: string;
  title: LocalizedString;
  number: string;
  issuer: string;
  type: "Legalitas Usaha" | "Sertifikasi" | "SBU";
  status: "Berlaku" | "Active";
  file?: string;
}

export interface DownloadItem {
  id: string;
  title: LocalizedString;
  category: "Profil Perusahaan" | "Katalog" | "Brosur" | "Legalitas" | "Sertifikasi";
  description: LocalizedString;
  fileSize: string;
  fileFormat: string;
  downloadUrl: string;
}

export const LEADERSHIP: OrganizationLeader[] = [
  {
    name: "Ebdi Bronson",
    role: { id: "Direktur Utama", en: "President Director" },
    department: "Executive Board"
  },
  {
    name: "M Subagia",
    role: { id: "Direktur Proyek", en: "Project Director" },
    department: "Operations"
  },
  {
    name: "Dirgantara",
    role: { id: "Direktur Komersial & Penjualan", en: "Sales Director" },
    department: "Commercial"
  },
  {
    name: "Glori S",
    role: { id: "General Manager", en: "General Manager" },
    department: "Executive Management"
  },
  {
    name: "Sarah",
    role: { id: "Manajer Keuangan", en: "Finance Manager" },
    department: "Finance"
  },
  {
    name: "Lia",
    role: { id: "Manajer SDM (HR)", en: "HR Manager" },
    department: "Human Resources"
  },
  {
    name: "T Syahrina",
    role: { id: "Project Coordinator Nasional", en: "National Project Coordinator" },
    department: "Project Management"
  },
  {
    name: "Fera Ansori",
    role: { id: "Manajer Penjualan", en: "Sales Manager" },
    department: "Commercial"
  }
];

export const REGIONAL_PMS: RegionalPM[] = [
  {
    region: "Area 1 - Sumatera",
    name: "Anton S",
    role: "Project Manager Sumatera",
    coverage: { id: "Aceh, Sumut, Sumbar, Riau, Kepri, Jambi, Sumsel, Bengkulu, Lampung", en: "Sumatra Region" },
    staffCount: 18
  },
  {
    region: "Area 2 - Jabodetabek & Jawa Barat",
    name: "Guntur A",
    role: "Project Manager Jabo & WJ",
    coverage: { id: "DKI Jakarta, Bogor, Depok, Tangerang, Bekasi, Banten, Jawa Barat", en: "Greater Jakarta & West Java" },
    staffCount: 15
  },
  {
    region: "Area 3 - Jawa Tengah, Jatim & Bali Nusra",
    name: "Afriyadhi",
    role: "Project Manager CJ, EJ, BN",
    coverage: { id: "Jawa Tengah, DI Yogyakarta, Jawa Timur, Bali, NTB, NTT", en: "Central & East Java, Bali Nusra" },
    staffCount: 14
  },
  {
    region: "Area 4 - Kalimantan",
    name: "Erwin",
    role: "Project Manager Kalimantan",
    coverage: { id: "Kalimantan Selatan, Timur, Tengah, Barat, dan Utara", en: "Kalimantan Island" },
    staffCount: 12
  },
  {
    region: "Area 5 - Sulawesi, Papua & Maluku",
    name: "Rudin FS",
    role: "Project Manager Sulawesi & PUMA",
    coverage: { id: "Sulawesi Selatan, Utara, Tengah, Tenggara, Maluku, Papua", en: "Sulawesi, Papua & Maluku" },
    staffCount: 10
  }
];

export const LEGALITY_DOCS: LegalityDoc[] = [
  {
    id: "leg-1",
    title: { id: "SBU - Jasa Pelaksana Instalasi Telekomunikasi", en: "SBU - Telecom Installation Contracting" },
    number: "PB-UMKU: 9120001432717100050003",
    issuer: "LPJK / Kementerian PUPR",
    type: "SBU",
    status: "Berlaku"
  },
  {
    id: "leg-2",
    title: { id: "SBU - Konstruksi Gedung Perkantoran & Bangunan Sipil", en: "SBU - Office & Civil Building Construction" },
    number: "PB-UMKU: 9120001432717100040003",
    issuer: "LPJK / Kementerian PUPR",
    type: "SBU",
    status: "Berlaku"
  },
  {
    id: "leg-3",
    title: { id: "ISO 9001:2015 - Sistem Manajemen Mutu", en: "ISO 9001:2015 - Quality Management System" },
    number: "Sertifikat #629429",
    issuer: "TUV Rheinland / International Certification",
    type: "Sertifikasi",
    status: "Berlaku"
  },
  {
    id: "leg-4",
    title: { id: "ISO 14001:2015 - Sistem Manajemen Lingkungan", en: "ISO 14001:2015 - Environmental Management" },
    number: "Sertifikat #629431",
    issuer: "TUV Rheinland / International Certification",
    type: "Sertifikasi",
    status: "Berlaku"
  },
  {
    id: "leg-5",
    title: { id: "ISO 45001:2018 - Keselamatan & Kesehatan Kerja (K3)", en: "ISO 45001:2018 - Occupational Health & Safety" },
    number: "Sertifikat #629430",
    issuer: "TUV Rheinland / International Certification",
    type: "Sertifikasi",
    status: "Berlaku"
  },
  {
    id: "leg-6",
    title: { id: "Nomor Induk Berusaha (NIB) Berbasis Risiko", en: "Business Identification Number (NIB)" },
    number: "NIB: 9120001432717",
    issuer: "Kementerian Investasi / BKPM (OSS-RBA)",
    type: "Legalitas Usaha",
    status: "Berlaku"
  },
  {
    id: "leg-7",
    title: { id: "Akta Notaris Pendirian Perusahaan", en: "Notarial Deed of Company Establishment" },
    number: "Akta No. 46100 Tanggal 9 April 2019",
    issuer: "Notaris & PPAT Palembang",
    type: "Legalitas Usaha",
    status: "Berlaku"
  },
  {
    id: "leg-8",
    title: { id: "Pengesahan Badan Hukum Kemenkumham", en: "Ministry of Law & Human Rights Approval" },
    number: "SK AHU-0018692.AH.01.01.Tahun 2019",
    issuer: "Kementerian Hukum dan HAM RI",
    type: "Legalitas Usaha",
    status: "Berlaku"
  },
  {
    id: "leg-9",
    title: { id: "Kartu Tanda Anggota (KTA) ASPEKNAS", en: "ASPEKNAS National Contractor Association Member" },
    number: "KTA-ASPEKNAS: 016/DAP/KTA/2021",
    issuer: "Dewan Pengurus ASPEKNAS",
    type: "Sertifikasi",
    status: "Berlaku"
  },
  {
    id: "leg-10",
    title: { id: "Nomor Pokok Wajib Pajak (NPWP) Perusahaan", en: "Corporate Tax ID (NPWP)" },
    number: "91.028.981.4-307.000",
    issuer: "Direktorat Jenderal Pajak Kemenkeu RI",
    type: "Legalitas Usaha",
    status: "Berlaku"
  },
  {
    id: "leg-11",
    title: { id: "Sertifikasi Tenaga Kerja Bangunan Tinggi (TKBT)", en: "Working at Heights Climbing Certification" },
    number: "Lisensi K3 Ketinggian TKBT Tingkat 1 & 2",
    issuer: "Kementerian Ketenagakerjaan RI",
    type: "Sertifikasi",
    status: "Berlaku"
  },
  {
    id: "leg-12",
    title: { id: "Surat Pengukuhan Pengusaha Kena Pajak (SPPKP)", en: "Taxable Entrepreneur Registration Certificate" },
    number: "S-142PKP/WPJ.03/KP.0803/2019",
    issuer: "Kantor Pelayanan Pajak Pratama",
    type: "Legalitas Usaha",
    status: "Berlaku"
  }
];

export const CLIENTS_LIST = [
  { name: "PT. Telkom Infrastruktur Indonesia", sector: "Tower & Infra Operator", projectsCount: "25+ Sites", logoText: "Telkom Infra" },
  { name: "PT. Smart Telecom (Smartfren)", sector: "Cellular Provider", projectsCount: "50+ Sites", logoText: "Smartfren" },
  { name: "PT. IMMOBI Solusi Prima", sector: "Tower Infrastructure", projectsCount: "100+ Sites", logoText: "IMMOBI" },
  { name: "PT. Visi Infra Nusantara", sector: "Telecom Engineering", projectsCount: "15+ Sites", logoText: "VIN" },
  { name: "PT. Sarana Maju Lestari", sector: "Infrastructure", projectsCount: "20+ Sites", logoText: "SML" },
  { name: "PT. Tekno Infrastruktur Sukses", sector: "Engineering & Civil", projectsCount: "18+ Sites", logoText: "TIS" },
  { name: "PT. Mahardika Teknotama Integrasi", sector: "System Integration", projectsCount: "12+ Sites", logoText: "Mahardika" },
  { name: "PT. Sempurna Global Pertama", sector: "Telecommunication", projectsCount: "10+ Sites", logoText: "SGP" },
  { name: "PT. Tower Bersama Group (TBG)", sector: "Tower Provider", projectsCount: "40+ Sites", logoText: "TBG" },
  { name: "PT. GCI Indonesia", sector: "Telecom Services", projectsCount: "30+ Sites", logoText: "GCI" },
  { name: "PT. Pertamina (Persero)", sector: "Energy & Telemetry", projectsCount: "14 Sites", logoText: "Pertamina" },
  { name: "PT. Citrine Solvo Energi", sector: "Renewable Energy", projectsCount: "8 Sites", logoText: "Citrine" },
  { name: "PT. Sinar Sugan Sejahtera", sector: "Electrical & Grid", projectsCount: "22 Sites", logoText: "SSS" },
  { name: "PT. Dylya", sector: "Power Infrastructure", projectsCount: "16 Sites", logoText: "Dylya" }
];

export const DOWNLOAD_DOCS: DownloadItem[] = [
  {
    id: "dl-1",
    title: { id: "Company Profile PT Mora Jaya Persada 2024", en: "Company Profile PT Mora Jaya Persada 2024" },
    category: "Profil Perusahaan",
    description: { id: "Profil komprehensif perusahaan meliputi sejarah, jajaran manajemen, portofolio, dan sertifikasi.", en: "Full corporate overview including history, leadership, portfolio, and QHSE credentials." },
    fileSize: "8.4 MB",
    fileFormat: "PDF",
    downloadUrl: "#download-compro"
  },
  {
    id: "dl-2",
    title: { id: "Katalog Lengkap Layanan Infrastruktur 2024", en: "Comprehensive Services Catalog 2024" },
    category: "Katalog",
    description: { id: "Katalog teknis 7 pilar layanan: BTS Combat, CME, Fiber Optic, Maintenance, dan PLTS.", en: "Technical catalog covering 7 service pillars: BTS Combat, CME, Fiber, Maintenance, and Solar." },
    fileSize: "6.2 MB",
    fileFormat: "PDF",
    downloadUrl: "#download-catalog"
  },
  {
    id: "dl-3",
    title: { id: "Brosur Tower BTS & Combat Solutions", en: "Tower BTS & Combat Solutions Brochure" },
    category: "Brosur",
    description: { id: "Panduan spesifikasi teknis relokasi combat tower, re-engineering, dan ereksi menara SST/Monopole.", en: "Technical brochure for combat tower relocation, re-engineering, and tower erection." },
    fileSize: "3.5 MB",
    fileFormat: "PDF",
    downloadUrl: "#download-bts"
  },
  {
    id: "dl-4",
    title: { id: "Brosur Fiber Optic Network Solutions", en: "Fiber Optic Network Solutions Brochure" },
    category: "Brosur",
    description: { id: "Panduan teknis penggelaran kabel serat optik bawah tanah (HDD/trenching), aerial, dan splicing OTDR.", en: "Technical brochure for underground and aerial fiber haulage, fusion splicing, and OTDR verification." },
    fileSize: "4.1 MB",
    fileFormat: "PDF",
    downloadUrl: "#download-fo"
  },
  {
    id: "dl-5",
    title: { id: "Sertifikat Badan Usaha (SBU) Jasa Konstruksi", en: "Construction Business Entity Certificate (SBU)" },
    category: "Legalitas",
    description: { id: "Salinan resmi SBU Jasa Pelaksana Konstruksi Instalasi Telekomunikasi PB-UMKU LPJK.", en: "Official copy of the SBU Telecom Contracting License from the Construction Development Board." },
    fileSize: "2.8 MB",
    fileFormat: "PDF",
    downloadUrl: "#download-sbu"
  },
  {
    id: "dl-6",
    title: { id: "Sertifikat ISO 9001:2015 (Mutu)", en: "ISO 9001:2015 Certificate (Quality)" },
    category: "Sertifikasi",
    description: { id: "Sertifikat Sistem Manajemen Mutu TUV Rheinland #629429.", en: "TUV Rheinland Quality Management Certificate #629429." },
    fileSize: "1.9 MB",
    fileFormat: "PDF",
    downloadUrl: "#download-iso9001"
  },
  {
    id: "dl-7",
    title: { id: "Sertifikat ISO 14001:2015 (Lingkungan)", en: "ISO 14001:2015 Certificate (Environment)" },
    category: "Sertifikasi",
    description: { id: "Sertifikat Sistem Manajemen Lingkungan TUV Rheinland #629431.", en: "TUV Rheinland Environmental Management Certificate #629431." },
    fileSize: "1.9 MB",
    fileFormat: "PDF",
    downloadUrl: "#download-iso14001"
  },
  {
    id: "dl-8",
    title: { id: "Sertifikat ISO 45001:2018 (K3 / HSE)", en: "ISO 45001:2018 Certificate (Safety)" },
    category: "Sertifikasi",
    description: { id: "Sertifikat Sistem Manajemen Keselamatan & Kesehatan Kerja K3 TUV Rheinland #629430.", en: "TUV Rheinland Occupational Health & Safety Certificate #629430." },
    fileSize: "1.9 MB",
    fileFormat: "PDF",
    downloadUrl: "#download-iso45001"
  }
];
