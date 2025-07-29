import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientToaster from "./clientToaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Carbon Calculator - Track Your Environmental Impact",
    template: "%s | Carbon Calculator",
  },
  description:
    "Calculate and track your carbon footprint with our comprehensive carbon calculator. Get personalized insights and actionable tips to reduce your environmental impact.",
  keywords: [
    "carbon calculator",
    "carbon footprint",
    "environmental impact",
    "sustainability",
    "climate change",
    "emissions calculator",
    "eco-friendly",
    "green living",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Company",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Carbon Calculator - Track Your Environmental Impact",
    description:
      "Calculate and track your carbon footprint with our comprehensive carbon calculator. Get personalized insights and actionable tips to reduce your environmental impact.",
    siteName: "Carbon Calculator",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Carbon Calculator - Environmental Impact Tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carbon Calculator - Track Your Environmental Impact",
    description:
      "Calculate and track your carbon footprint with our comprehensive carbon calculator.",
    images: ["/og-image.jpg"],
    creator: "@yourtwitterhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json", // Create a web manifest for PWA features
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://your-domain.com",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter antialiased bg-white text-gray-900">
        {children}
        <ClientToaster />
      </body>
    </html>
  );
}
