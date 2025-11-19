"use client";

import { useTranslation } from "@/i18n/use-translation";
import { Barlow_Semi_Condensed } from "next/font/google";
import Image from "next/image";

const barlow = Barlow_Semi_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function TopSellingProducts() {
  const { t } = useTranslation();

  const products = [
    {
      id: 1,
      name: "XIAOMI MAX 24",
      quantity: "1,424,042",
      price: "$7,090,099",
    },
    {
      id: 2,
      name: "XIAOMI MAX 24",
      quantity: "1,424,042",
      price: "$7,090,099",
    },
    {
      id: 3,
      name: "XIAOMI MAX 24",
      quantity: "1,424,042",
      price: "$7,090,099",
    },
    {
      id: 4,
      name: "XIAOMI MAX 24",
      quantity: "1,424,042",
      price: "$7,090,099",
    },
    {
      id: 5,
      name: "XIAOMI MAX 24",
      quantity: "1,424,042",
      price: "$7,090,099",
    },
    {
      id: 6,
      name: "XIAOMI MAX 24",
      quantity: "1,424,042",
      price: "$7,090,099",
    },
    {
      id: 7,
      name: "XIAOMI MAX 24",
      quantity: "1,424,042",
      price: "$7,090,099",
    },
    {
      id: 8,
      name: "XIAOMI MAX 24",
      quantity: "1,424,042",
      price: "$7,090,099",
    },
    {
      id: 9,
      name: "XIAOMI MAX 24",
      quantity: "1,424,042",
      price: "$7,090,099",
    },
  ];

  return (
    <section className="mb-10 md:mb-20">
      <div className="container mx-auto px-5 md:px-4">
        <h3 className=" mb-2 bg-gradient text-center text-primary">
          {t("section.topSelling.title")}
        </h3>

        {/* Table - Desktop */}
        <div className="overflow-x-auto max-h-[360px] md:max-h-[465px] scrollbar-xiaomi">
          <table className="w-full border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th className="t-header  py-1 md:py-2 pl-3 md:px-6">
                  {t("section.topSelling.no")}
                </th>
                <th className="t-header  py-1 md:py-2 pl-3 md:px-6">
                  {t("section.topSelling.products")}
                </th>
                <th className="t-header  py-1 md:py-2 pl-3 md:px-6">
                  {t("section.topSelling.quantity")}
                </th>
                <th className="t-header  py-1 md:py-2 px-3 md:px-6 text-right">
                  {t("section.topSelling.price")}
                </th>
              </tr>
            </thead>
            <tbody className="border-separate border-spacing-y-3.5">
              {products.map((product, index) => {
                let rankClass;
                let rankIcon;
                switch (index) {
                  case 0:
                    rankClass = "bg-rank-1";
                    rankIcon = "/images/rank1.png";
                    break;
                  case 1:
                    rankClass = "bg-rank-2";
                    rankIcon = "/images/rank2.png";
                    break;
                  case 2:
                    rankClass = "bg-rank-3";
                    rankIcon = "/images/rank3.png";
                    break;
                  default:
                    rankClass = "bg-rank";
                }
                return (
                  <tr
                    key={product.id}
                    className={`${rankClass} hover:bg-gray-900/50 transition-all row-rounded px-3 md:px-0`}
                  >
                    <td className="py-4.5 px-3 md:px-6">
                      {rankIcon ? (
                        <Image
                          src={rankIcon}
                          width={40}
                          height={40}
                          alt="rank-img"
                          className="w-5 h-5 md:w-10 md:h-10"
                        />
                      ) : (
                        <div
                          className={`${barlow.className} text-xl md:text-[32px] leading-5 md:leading-12 font-black  italic w-5 h-5 md:w-10 md:h-10 text-center `}
                        >
                          {index + 1}
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-3 md:px-6 text-neutral-100 font-black text-[10px] md:text-base leading-6 italic">
                      {product.name}
                    </td>
                    <td className="py-4 px-3 md:px-6 text-neutral-100 font-black text-[10px] md:text-base leading-6 italic">
                      {product.quantity}
                    </td>
                    <td className="py-4 px-3 md:px-6">
                      <div className="bg-secondary-900 py-1 md:py-2 px-2 md:px-4 text-[10px] md:text-base rounded-md md:rounded-2xl text-primary font-black italic w-max ml-auto">
                        {product.price}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
