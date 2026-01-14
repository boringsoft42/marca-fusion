import type { Metadata } from "next";
import { Geist, Geist_Mono, Kaushan_Script } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/lib/providers/QueryProvider";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/context/theme-context";
import { ConditionalHeader } from '@/components/layout/ConditionalHeader';
import { Footer } from '@/components/layout/Footer';
import { ScrollSmootherProvider } from '@/components/layout/ScrollSmootherProvider';
import { structuredData } from '@/lib/seo/structured-data';

const APP_NAME = "Marca Fusión SRL";
const APP_DESCRIPTION = "Representantes exclusivos de Capstone Green Energy y Tablú en Bolivia. Soluciones energéticas sostenibles y tecnología innovadora.";
const APP_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    url: APP_URL,
    siteName: APP_NAME,
    locale: "es_BO",
    type: "website",
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
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon",
      url: "/apple-icon.png",
    },
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

const kaushanScript = Kaushan_Script({
  variable: "--font-kaushan",
  subsets: ["latin"],
  weight: "400",
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
      <body className={`${geistSans.variable} ${geistMono.variable} ${kaushanScript.variable} antialiased bg-sierra-cream`}>
        <ThemeProvider defaultTheme="light" storageKey="marca-fusion-theme">
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
