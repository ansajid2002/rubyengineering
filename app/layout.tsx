import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/HeaderAndFooter/Footer";
import NewHeader from "@/components/HeaderAndFooter/NewHeader";
import NextTopLoader from "nextjs-toploader";
import Announcement from "@/components/HeaderAndFooter/Announcement";
import FloatingButton from "@/components/FloatingButton";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ruby Engineering Works",
  description: "Ruby Engineering Works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <NextTopLoader showSpinner={false} easing="ease"  color="#fff" />
        <Announcement />
        <NewHeader />
        {children}
        <FloatingButton/>
        <Footer />
      </body>
  </html>
  );
}
