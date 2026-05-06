import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/lib/providers/QueryProvider";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/context/theme-context";
import { ConditionalHeader } from '@/components/layout/ConditionalHeader';
import { Footer } from '@/components/layout/Footer';
import { ScrollSmootherProvider } from '@/components/layout/ScrollSmootherProvider';
import { structuredData } from '@/lib/seo/structured-data';

const APP_NAME = "Fusion Group";
const APP_DESCRIPTION = "Representantes oficiales de Capstone Green Energy y Tablú en Bolivia. Soluciones energéticas sostenibles y tecnología innovadora.";
const APP_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  keywords: [
    "Capstone Green Energy Bolivia",
    "Tablú Bolivia",
    "microturbinas Bolivia, Perú",
    "soluciones energéticas Bolivia",
    "energía industrial, Oil Gas",
    "Fusion Group",
    "representación comercial B2B",
    "tecnología limpia",
  ],
  authors: [{ name: "Fusion Group" }],
  creator: "Fusion Group",
  publisher: "Fusion Group",
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    url: APP_URL,
    siteName: APP_NAME,
    locale: "es_BO",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Fusion Group - Representantes de Capstone Green Energy y Tablú en Bolivia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: ["/opengraph-image.png"],
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
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
    other: [
      {
        rel: "apple-touch-icon",
        url: "/apple-icon.png",
      },
    ],
  },
  verification: {
    google: "verification_token", // Reemplazar con el token real de Google Search Console
  },
};

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Generate Organization structured data for SEO
  const organizationSchema = structuredData.organization();

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Organization Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: structuredData.toScript(organizationSchema),
          }}
        />
      </head>
      <body className={`${outfit.variable} antialiased bg-white`}>
        <ThemeProvider defaultTheme="light" storageKey="fusion-group-theme">
          <QueryProvider>
            <ScrollSmootherProvider>
              {/* ScrollSmoother wrapper structure */}
              <div id="smooth-wrapper">
                <div id="smooth-content">
                  <div className="flex min-h-screen flex-col">
                    {/* Header with navigation (only on non-home pages) */}
                    <ConditionalHeader />

                    {/* Main content */}
                    <main className="flex-1">
                      {children}
                    </main>

                    {/* Footer */}
                    <Footer />
                  </div>
                </div>
              </div>
              <Toaster />
            </ScrollSmootherProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
