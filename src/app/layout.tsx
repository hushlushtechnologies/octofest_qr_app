import type { Metadata } from "next";
import type { Viewport } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { AppShell } from "@/components/layout/AppShell";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { QRContextProvider } from "@/components/providers/QRContentProvider";
import { SplashScreen } from "@/components/splash/SplashScreen";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OctoFest — Scan. Explore. Connect.",
  description: "The digital experience for Octofest.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // required for env(safe-area-inset-*) to resolve
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0E1A" },
    { media: "(prefers-color-scheme: light)", color: "#EDEFF5" },
  ],
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('octolink-theme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolageGrotesque.variable} ${manrope.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-background text-foreground font-body antialiased">
        <div className="gradient-bg" aria-hidden="true" />
        <SplashScreen />
        <MotionProvider>
          <QRContextProvider>
            <AppShell>{children}</AppShell>
          </QRContextProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
