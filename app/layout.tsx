import type { Metadata } from "next";
import Header from "@/app/ui/Header";
import Navbar from "@/app/ui/Navbar";
import "./globals.css";
import { ibm } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | KitsuDev',
    default: 'KitsuDev',
  },
  description: "Portfolie page of Kitsu The Developer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full w-full antialiased ${ibm.variable}`}
    >
      <body className={`h-full grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] `}>
        <header className="col-span-2 min-h-16" >
          <Header />
        </header>
        <nav className="min-w-16">
          <Navbar />
        </nav>
        <main className="overflow-y-auto">
          { children }
        </main>
      </body>
    </html>
  );
}
