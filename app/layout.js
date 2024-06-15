"use client"
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { SearchProvider } from '@/context/SearchContext';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-100">
      <body className={inter.className}>
        <SearchProvider>
          <Navbar />
          {children}
        </SearchProvider>
      </body>
    </html>
  );
}
