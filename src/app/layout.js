import { Fraunces, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { ScrollProgress } from "@/components/motion";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://capedecor.com"),
  title: {
    default: "Cape Decor — Doors, Windows, Window Blinds & Printed Wallpapers",
    template: "%s · Cape Decor",
  },
  description:
    "uPVC & Aluminium System Doors & Windows, window blinds, mosquito mesh, strip curtains and printed wallpapers by Cape Decor, New Delhi — since 2011.",
  openGraph: {
    siteName: "Cape Decor",
    type: "website",
    images: ["/products/home-glass-house.jpg"],
  },
};

export const viewport = {
  themeColor: "#3a2832",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jost.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
