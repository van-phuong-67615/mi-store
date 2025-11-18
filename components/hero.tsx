"use client";

import { useTranslation } from "@/i18n/use-translation";
import Image from "next/image";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full ">
      <Image
        src="/images/desktop_slider.jpg"
        alt="Hero Banner"
        width={1600}
        height={642}
        className="w-full h-auto object-cover aspect-1600/642"
         style={{ objectPosition: '0 25%' }}
      />
    </section>
  );
}
