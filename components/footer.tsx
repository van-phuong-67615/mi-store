"use client";

import { Mail, Shield } from "lucide-react";
import { useTranslation } from "@/i18n/use-translation";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const { t } = useTranslation();

  const footerSections = [
    {
      title: t("footer.about"),
      links: t("footer.aboutLinks").split(","),
    },
    {
      title: t("footer.help"),
      links: t("footer.helpLinks").split(","),
    },
    {
      title: t("footer.products"),
      links: t("footer.productsLinks").split(","),
    },

    {
      title: t("footer.contact"),
      links: t("footer.contactLinks").split(","),
    },
  ];

  return (
    <footer className=" border-t border-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-black text-sm mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.trim()}>
                    <Link
                      href="#"
                      className="text-neutral-200 text-sm hover:text-primary transition-colors"
                    >
                      {link.trim()}
                    </Link>
                  </li>
                ))}
              </ul>
              {section.title === t("footer.contact") && (
                <Link href={"#"} className="mt-6 block">
                  <Image
                    src="/images/installapp.png"
                    width={150}
                    height={44}
                    alt="install app"
                  ></Image>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Security & Downloads */}
        <div className="py-10 space-y-10">
          <div className="flex items-center gap-4 text-sm text-neutral-200">
            <Image
              src="/images/18plus.png"
              width={30}
              height={30}
              alt="18-plus"
            />
            <Image src="/images/ssl.png" width={88} height={30} alt="18-plus" />
            <span className="pl-2">{t("footer.warranty")}</span>
          </div>
          <div className="text-sm text-neutral-200 leading-5">
            {t("footer.warranty2")}
          </div>
          <div className="py-4 bg-secondary-800 text-sm text-center rounded-lg">
            {t("footer.copyright")}
          </div>
        </div>

        {/* Bottom Section */}

        <div className="flex gap-6 justify-center">
          <span>
            <Image src={"/images/visa.svg"} height={24} alt="visa" width={74} />
          </span>
          <span><Image src={"/images/mastercard.svg"} height={24} alt="visa" width={133} /></span>
          <span><Image src={"/images/astropay.svg"} height={24} alt="visa" width={90} /></span>
          <span><Image src={"/images/InteracLogo2.svg"} height={24} alt="visa" width={24} /></span>
          <span><Image src={"/images/jetonbanklogo.png"} height={24} alt="visa" width={40} /></span>
        </div>
      </div>
    </footer>
  );
}
