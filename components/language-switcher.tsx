"use client";

import { ChangeEvent } from "react";
import { useTranslation } from "@/i18n/use-translation";

export default function LanguageSwitcher() {
  const { lang, setLang } = useTranslation();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as "en" | "vi";
    setLang(value);
  };

  return (
    <div className="relative inline-flex items-center">
      <select
        value={lang}
        onChange={handleChange}
        className="
          appearance-none
          pl-4 pr-8
          py-2
          text-[11px]
          font-semibold
          tracking-[0.2em]
          uppercase
          text-white
          focus:outline-none
          cursor-pointer
        "
      >
        <option className="text-primary" value="en">ENG</option>
        <option className="text-primary" value="vi">VI</option>
      </select>

      {/* icon mũi tên material-icons */}
      <span className="pointer-events-none material-icons absolute right-3 text-sm text-natural-100">
        arrow_drop_down
      </span>
    </div>
  );
}
