"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./language-switcher";
import { useTranslation } from "@/i18n/use-translation";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuToggleButton } from "./menu-toggle-button";

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
    <header className="bg-secondary-900 sticky top-0 z-40">
      <div className="container mx-auto px-5 py-3.5 md:py-5 flex items-center justify-between flex-row md:flex-col lg:flex-row md:gap-3.5">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* Mobile Menu Button */}
            <MenuToggleButton
              open={mobileMenuOpen}
              setOpen={setMobileMenuOpen}
            />
            <Link href={"/"}>
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={138}
                height={40}
                className="hidden md:inline-block"
              />
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="md:hidden object-cover aspect-square"
                style={{ objectPosition: "left" }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href="#"
                className={`text-sm py-2.5 px-5 rounded-full hover:text-primary hover:bg-secondary-600 transition-all ${
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
          <button className="btn-primary text-sm md:px-8 px-6 py-2">
            {t("header.signUp")}
          </button>
          <button className="btn-secondary text-sm md:px-8 px-6 py-2">
            {t("header.logIn")}
          </button>
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-secondary-800 px-5 absolute w-full left-0 h-lvh max-h-0 transition-all duration-300 overflow-hidden ${ mobileMenuOpen ? 'max-h-screen py-5' : '' }`}>
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href="#"
                className={`text-sm leading-5 rounded-full py-3.5 px-5 text-center hover:text-primary hover:bg-secondary-600 transition-all ${
                  item.path === pathname ? "nav-active" : "text-neutral-200"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
    </header>
  );
}
