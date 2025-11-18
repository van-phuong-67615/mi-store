import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/language-provider";

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
      <body className={`${inter.className} bg-black text-white`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
