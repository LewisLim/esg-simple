import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { createTheme, MantineProvider } from "@mantine/core";
import "./globals.css";
import "@/css/main.css";
import "rc-slider/assets/index.css";
import "@mantine/core/styles.css";
import ClientToaster from "./clientToaster";
import LayoutWrapper from "./layoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Simple to Learn Environmental Topics",
    template: "%s | LookAtGaia",
  },
  description:
    "Learn about climate, pollution, carbon, and the environment with simple explanations for everyone. Includes quizzes, guides, and a carbon calculator.",
  keywords: [
    "environmental impact",
    "sustainability",
    "climate change",
    "eco-friendly",
    "green living",
    "carbon calculator",
    "carbon footprint",
    "emissions calculator",
  ],
  authors: [{ name: "George" }],
  creator: "George",
  publisher: "Look At Gaia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lookatgaia.com",
    title: "Simple to Learn Environmental Topics",
    description:
      "Learn about climate, pollution, carbon, and the environment with simple explanations for everyone. Includes quizzes, guides, and a carbon calculator.",
    siteName: "Carbon Calculator",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Simple to Learn Environmental Topics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simple to Learn Environmental Topics",
    description:
      "Learn about climate, pollution, carbon, and the environment with simple explanations for everyone. Includes quizzes, guides, and a carbon calculator.",
    images: ["/og-image.jpg"],
    creator: "@lookatgaia",
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
  },
  alternates: {
    canonical: "https://lookatgaia.com",
  },
  category: "technology",
};

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <MantineProvider theme={theme}>
          <LayoutWrapper>{children}</LayoutWrapper>
          <ClientToaster />
        </MantineProvider>
      </body>
    </html>
  );
}
