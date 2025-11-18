"use client";

import { useTranslation } from "@/i18n/use-translation";
import Image from "next/image";

export default function NewProductsSales() {
  const { t } = useTranslation();

  return (
    <>
      {/* New Products */}
      <div>
        <h3 className="uppercase text-primary mb-2">
          {t("section.newProducts.title")}
        </h3>
        <div className="aspect-square relative">
          <Image
            src="/images/new-product.png"
            fill
            alt="new product"
            className="object-cover  transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      </div>

      {/* Sales */}
      <div>
        <h3 className="uppercase text-primary mb-2">
          {t("section.sales.title")}
        </h3>
        <div className="aspect-square relative">
          <Image
            src="/images/sales-product.png"
            fill
            alt="sales product"
            className="object-cover  transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </>
  );
}
