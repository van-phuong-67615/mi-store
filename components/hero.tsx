"use client";

import { useTranslation } from "@/i18n/use-translation";
import Image from "next/image";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full mb-16 md:mb-20">
      <Image
        src="/images/desktop_slider.jpg"
        alt="Hero Banner"
        width={1600}
        height={642}
        className="w-full h-auto object-cover aspect-1600/642"
        style={{ objectPosition: "0 25%" }}
      />
      <div className="absolute flex flex-col items-center gap-[7px] justify-center text-center left-1/2 top-11 transform -translate-x-1/2">
        <h1 className="text-gradient">
          {t("hero.title")}
        </h1>
        <h2>{t("hero.subtitle")}</h2>
      </div>
    </section>
  );
}
