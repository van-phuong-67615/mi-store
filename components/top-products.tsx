"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from "@/i18n/use-translation";
import Image from "next/image";

const TOP_PRODUCTS = [
  { id: 1, title: "Haier MEMC", image: "/images/top-product-1.png" },
  {
    id: 2,
    title: "Google TV Endless Color",
    image: "/images/top-product-2.png",
  },
  { id: 3, title: "SPJ Smart Visual", image: "/images/top-product-3.png" },
  { id: 4, title: 'Smart TV 32"', image: "/images/top-product-4.png" },
  { id: 5, title: "Big Screen Bigger Eid", image: "/images/top-product-5.png" },
  { id: 6, title: "Ultra Clear TV", image: "/images/top-product-6.png" },
  { id: 7, title: "Haier MEMC", image: "/images/top-product-1.png" },
  {
    id: 8,
    title: "Google TV Endless Color",
    image: "/images/top-product-2.png",
  },
  { id: 9, title: "SPJ Smart Visual", image: "/images/top-product-3.png" },
  { id: 10, title: 'Smart TV 32"', image: "/images/top-product-4.png" },
  {
    id: 11,
    title: "Big Screen Bigger Eid",
    image: "/images/top-product-5.png",
  },
  { id: 12, title: "Ultra Clear TV", image: "/images/top-product-6.png" },
];

export default function TopProducts() {
  const { t } = useTranslation();
  return (
    <section className=" mb-16 md:mb-20">
      <div className="mx-auto container px-4">
        {/* Header */}
        <div className="mb-2 flex items-center justify-between gap-4">
          <h3 className="uppercase text-primary">
            {t("section.topProducts.title")}
          </h3>

          {/* Nav buttons */}
          <div className="flex items-center gap-2">
            <button
              className="top-products-prev inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary-600 text-white hover:bg-[#363941] cursor-pointer"
              aria-label="Previous"
            >
              <span className="material-icons text-base">chevron_left</span>
            </button>
            <button
              className="top-products-next inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary-600 text-white hover:bg-[#363941] cursor-pointer"
              aria-label="Next"
            >
              <span className="material-icons text-base">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".top-products-prev",
            nextEl: ".top-products-next",
          }}
          slidesPerView={5.8} // intentionally fractional
          spaceBetween={16}
          grabCursor
          loop
        >
          {TOP_PRODUCTS.map((item) => (
            <SwiperSlide key={item.id} className="">
              <div className="group relative overflow-hidden rounded-lg aspect-36/49">
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
    </section>
  );
}
