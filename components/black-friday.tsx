"use client";

import { useTranslation } from "@/i18n/use-translation";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TOP_PRODUCTS = [
  { id: 1, title: "Haier MEMC", image: "/images/black-fri-day.png" },
  {
    id: 2,
    title: "Google TV Endless Color",
    image: "/images/black-fri-day.png",
  },
];

export default function BlackFriday() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <h3 className="uppercase text-primary">
          {t("section.blackFriday.title")}
        </h3>

        {/* Nav buttons */}
        <div className="flex items-center gap-2">
          <button
            className="bl-fr-prev inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary-600 text-white hover:bg-[#363941] cursor-pointer"
            aria-label="Previous"
          >
            <span className="material-icons text-base">chevron_left</span>
          </button>
          <button
            className="bl-fr-next inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary-600 text-white hover:bg-[#363941] cursor-pointer"
            aria-label="Next"
          >
            <span className="material-icons text-base">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Featured Banner */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".bl-fr-prev",
          nextEl: ".bl-fr-next",
        }}
        slidesPerView={1} // intentionally fractional
        grabCursor
        loop
        className="max-w-full"
      >
        {TOP_PRODUCTS.map((item) => (
          <SwiperSlide key={item.id} className="">
            <div className="group relative overflow-hidden rounded-lg aspect-5/2">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
