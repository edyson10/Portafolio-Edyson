import type { Metadata } from "next";
import { Outfit, Work_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { SITE } from "@/constants/site";
import { profile } from "@/data/profile";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const outfit = Outfit({
  variable: "--font-heading-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s — ${profile.personal.name}`,
  },
  description: SITE.description,
  keywords: SITE.keywords,
  authors: [{ name: profile.personal.name }],
  creator: profile.personal.name,
  alternates: { canonical: SITE.url },
  openGraph: {
    type: "profile",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.personal.name,
  jobTitle: profile.personal.role,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.personal.location,
  },
  url: SITE.url,
  sameAs: profile.socials.filter((s) => s.icon !== "download").map((s) => s.href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${workSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
