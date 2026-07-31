import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrendzBySarah | Fashion, Accessories & Home Essentials",
  description:
    "Shop quality fashion, stylish accessories, footwear, and home essentials at TrendzBySarah. Discover products you'll love at affordable prices.",

  keywords: [
    "TrendzBySarah",
    "fashion store",
    "women's fashion",
    "accessories",
    "footwear",
    "home appliances",
    "Nigeria",
    "online shopping",
  ],

  authors: [{ name: "TrendzBySarah" }],
  creator: "Oise Okugbe",
  publisher: "TrendzBySarah",

  openGraph: {
    title: "TrendzBySarah",
    description:
      "Fashion, accessories, footwear, and home essentials.",
    url: "https://trendzbysarah.vercel.app", // Replace with the real domain
    siteName: "TrendzBySarah",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TrendzBySarah",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TrendzBySarah",
    description:
      "Fashion, accessories, footwear, and home essentials.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-pink-50 text-slate-200">
            {children}
      </body>
    </html>
  );
}
