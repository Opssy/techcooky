import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "CMS Blog",
  description: "Blog ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed z-20 w-full top-0">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
