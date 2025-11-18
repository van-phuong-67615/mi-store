"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./language-switcher";
import { useTranslation } from "@/i18n/use-translation";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { key: "header.nav.home", label: t("header.nav.home"), path: "/" },
    {
      key: "header.nav.products",
      label: t("header.nav.products"),
      path: "/products",
    },
    {
      key: "header.nav.contact",
      label: t("header.nav.contact"),
      path: "/contact",
    },
    { key: "header.nav.price", label: t("header.nav.price"), path: "/price" },
  ];

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Logo" width={138} height={40} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href="#"
                className={`text-sm py-2 px-5 rounded-full hover:text-primary hover:bg-secondary-600 transition-all ${
                  item.path === pathname ? "nav-active" : "text-neutral-200"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="hidden md:inline-block btn-primary text-sm">
            {t("header.signUp")}
          </button>
          <button className="hidden md:inline-block btn-secondary text-sm">
            {t("header.logIn")}
          </button>
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 py-4">
          <nav className="flex flex-col gap-4 px-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href="#"
                className={`text-sm font-semibold ${
                  item.key === "header.nav.home"
                    ? "text-yellow-400"
                    : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-700 space-y-3">
              <button className="btn-primary w-full text-sm">
                {t("header.signUp")}
              </button>
              <button className="btn-secondary w-full text-sm">
                {t("header.logIn")}
              </button>
              <div className="flex justify-center pt-2">
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
