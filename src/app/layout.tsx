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
  openGraph: {
    title: "Akil S — AI & Data Science Engineer",
    description:
      "AI & Data Science student building trustworthy, explainable AI systems. Open to internships.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akil S — AI & Data Science Engineer",
    description:
      "AI & Data Science student building trustworthy, explainable AI systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
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
