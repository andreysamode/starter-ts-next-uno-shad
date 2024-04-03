import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrey's Starter Project",
  description: "Andrey's Starter Project"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-default [&_*]:font-default`}>
        <Navbar/>
        <div className="min-h-[calc(100vh-182px)]">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
