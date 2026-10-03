import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akil S — AI & Data Science Engineer Portfolio",
  description:
    "Portfolio of Akil S, a B.Tech Artificial Intelligence and Data Science student. Explore projects, skills, certifications, and connect for internship opportunities.",
  keywords: [
    "Akil S",
    "AI Engineer",
    "Data Science",
    "Machine Learning",
    "Python",
    "Portfolio",
    "B.Tech AI & DS",
    "VSB Engineering College",
    "Internship",
  ],
  authors: [{ name: "Akil S" }],
  metadataBase: new URL("https://akil-portfolio.example.com"),
  openGraph: {
    title: "Akil S — AI & Data Science Engineer",
    description:
      "AI & Data Science student building trustworthy, explainable AI systems. Open to internships.",
    type: "profile",
    siteName: "Akil S Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1344,
        height: 768,
        alt: "Akil S — AI & Data Science Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akil S — AI & Data Science Engineer",
    description:
      "AI & Data Science student building trustworthy, explainable AI systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Akil S",
  jobTitle: "AI & Data Science Student",
  description:
    "B.Tech Artificial Intelligence and Data Science student open to online internships. Builder of UAT-Lens-Ai and Rock-Guard AI.",
  url: "https://akil-portfolio.example.com",
  email: "mailto:akilrmhss@gmail.com",
  telephone: "+91-9842651523",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tirupur",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "VSB Engineering College",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Data Science",
    "Machine Learning",
    "Python",
    "Natural Language Processing",
    "Generative AI",
  ],
  sameAs: [
    "https://www.linkedin.com/in/akil008",
    "https://github.com/Akil-Ai",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Akil S — AI & Data Science Portfolio",
  url: "https://akil-portfolio.example.com",
  inLanguage: "en",
  potentialAction: {
    "@type": "ContactAction",
    target: "mailto:akilrmhss@gmail.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <SonnerToaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "rgb(15 23 42)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "white",
            },
          }}
        />
      </body>
    </html>
  );
}
