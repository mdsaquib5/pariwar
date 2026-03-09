import type { Metadata } from "next";
import "./globals.css";
import "./responsive.css";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import BackToTop from "./components/layout/backtoTop";
import { montserrat } from "./fonts/font";

export const metadata: Metadata = {
  title: "Deep Parivar",
  description: "Deep Parivar - Your trusted partner for financial solutions",
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
