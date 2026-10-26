import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PT. Mora Jaya Persada | Comprehensive Telecommunication Services",
  description:
    "PT. Mora Jaya Persada specializes in providing comprehensive telecommunications services. Founded in 2018, serving integrated installation, swap-upgrade, commissioning, and maintenance-monitoring.",
  keywords: [
    "BTS tower contractor",
    "telecommunication tower construction",
    "PT Mora Jaya Persada",
    "BTS tower",
    "telecom infrastructure",
    "CME works",
    "fiber optic",
    "SITAC",
    "PLTS",
    "kontraktor menara BTS",
    "relokasi combat"
  ],
  authors: [{ name: "PT Mora Jaya Persada" }],
  creator: "PT Mora Jaya Persada",
  publisher: "PT Mora Jaya Persada",
  metadataBase: new URL("https://mora-jaya.com"),
  alternates: {
    canonical: "/en",
    languages: {
      id: "/id",
      en: "/en"
    }
  },
  openGraph: {
    title: "PT. Mora Jaya Persada | Comprehensive Telecommunication Services",
    description:
      "Comprehensive telecommunication services specialist since 2018. Trusted partner of PT Telkom Infrastruktur, PT Pertamina, and leading operators.",
    url: "https://mora-jaya.com",
    siteName: "PT Mora Jaya Persada",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/mora-logo.png",
        width: 1200,
        height: 630,
        alt: "PT Mora Jaya Persada Logo"
      }
    ]
  },
  icons: {
    icon: "/images/mora-logo.png",
    apple: "/images/mora-logo.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/images/mora-logo.png" />
      </head>
      <body className="min-h-screen bg-white text-slate-800 antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
