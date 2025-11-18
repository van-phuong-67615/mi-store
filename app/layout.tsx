import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "material-icons/iconfont/material-icons.css";
import { LanguageProvider } from "@/i18n/language-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XiaoMi Store | Premium Electronics & Smart Devices",
  description:
    "Explore XiaoMi TV Max Series and other premium electronics. Top best-selling products, Black Friday deals, and exclusive sales.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-secondary-900 text-white`}>
        <LanguageProvider>
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
