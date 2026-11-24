import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const host = incomingHeaders.get("host") ?? "www.xn--traditionvrdochomsorg-12b.com";
  const origin = `${host.includes("localhost") ? "http" : "https"}://${host}`;
  const title = "Tradition vård & omsorg | Personlig omsorg i Stockholm";
  const description =
    "Exklusiv, trygg och personlig hemtjänst, ledsagning, avlösning och privatfinansierad hemtjänst i Stockholms norra innerstad.";

  return {
    title,
    description,
    icons: {
      icon: "/images/tradition-logo-crop.png",
      shortcut: "/images/tradition-logo-crop.png",
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "sv_SE",
      url: origin,
      images: [{ url: `${origin}/images/tradition-logo-crop.png`, width: 1200, height: 675, alt: "Tradition vård & omsorg – logotyp" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/images/tradition-logo-crop.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
