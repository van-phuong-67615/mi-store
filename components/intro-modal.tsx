"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useTranslation } from "@/i18n/use-translation";
import Image from "next/image";

export default function IntroModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-secondary-800/80 flex items-center justify-center z-50 p-4 backdrop-blur">
      <div className="bg-gray-900 max-w-sm relative w-[350px] h-[404px] rounded-2xl">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-white hover:text-gray-300 z-10 bg-secondary-800 rounded-full p-1 cursor-pointer"
        >
          <X size={24} />
        </button>

        {/* Image Area */}
        <Image
          src="/images/welcome-popup.jpg"
          fill
          alt="intro"
          className="object-cover rounded-2xl "
          style={{ objectPosition: "25%" }}
        />

        {/* Content */}
        <div className="text-center absolute top-10 w-full">
          <h1 className="text-gradient text-2xl! leading-6! mb-[7px]">
            {t("hero.title")}
          </h1>
          <h2 className="text-[16px]! leading-6!">{t("hero.subtitle")}</h2>
        </div>
        <button className="btn-primary absolute -bottom-5 left-1/2 transform -translate-x-1/2 px-8 py-2">
          {t("modal.cta")}
        </button>
      </div>
    </div>
  );
}
