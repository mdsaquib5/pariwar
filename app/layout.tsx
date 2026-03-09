import type { Metadata } from "next";
import "./globals.css";
import "./responsive.css";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import BackToTop from "./components/layout/backtoTop";
import { montserrat } from "./fonts/font";

export const metadata: Metadata = {
  title: "Deep Pariwar | Pure, Fresh & Wholesome Food Staples",
  description: "Deep Pariwar is your trusted partner for premium quality wheat atta, besan, sooji, and other pure food staples. Tradition meets purity.",
  keywords: "wheat atta, besan, sooji, poha, dalia, organic food, deep pariwar, healthy breakfast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${montserrat.className}`}>
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
