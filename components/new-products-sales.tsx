"use client";

import { useTranslation } from "@/i18n/use-translation";
import Image from "next/image";

export default function NewProductsSales() {
  const { t } = useTranslation();

  return (
    <>
      {/* New Products */}
      <div className="aspect-square">
        <h3 className="uppercase text-primary mb-2">
          {t("section.newProducts.title")}
        </h3>
        <Image
          src="/images/new-product.png"
          fill
          alt="new product"
        />
      </div>

      {/* Sales */}
      <div className="aspect-square">
        <h3 className="uppercase text-primary mb-2">
          {t("section.sales.title")}
        </h3>
        <Image
          src="/images/sales-product.png"
          fill
          alt="sales product"
        />
      </div>
    </>
  );
}
