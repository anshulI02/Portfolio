import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/data";
import "./globals.css";

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const title = `${site.name} · Electrical Engineering, Embedded Systems & Validation`;
const description =
  "Portfolio of Anshul Israni: UBC electrical engineering student specializing in embedded firmware, power electronics, FPGA design, and hardware-in-the-loop validation. Co-op experience at Schneider Electric, plus battery-systems leadership at UBC Thunderbikes.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: [
    "Anshul Israni",
    "electrical engineering",
    "embedded systems",
    "firmware engineer",
    "hardware engineer",
    "FPGA",
    "validation engineer",
    "HIL testing",
    "power electronics",
    "UBC",
    "Vancouver",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: site.url,
    title,
    description,
    siteName: site.name,
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

/** JSON-LD structured data so search engines understand who this page is about. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  email: `mailto:${site.email}`,
  url: site.url,
  jobTitle: "Electrical Engineering Student",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "University of British Columbia",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vancouver",
    addressRegion: "BC",
    addressCountry: "CA",
  },
  sameAs: [site.linkedin, site.github],
  knowsAbout: [
    "Embedded Systems",
    "Power Electronics",
    "FPGA Design",
    "Hardware-in-the-Loop Testing",
    "Control Systems",
    "PCB Design",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${monoFont.variable} scroll-smooth`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
