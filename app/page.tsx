import Hero from "@/components/hero";
import TopSellingProducts from "@/components/top-selling-products";
import TopProducts from "@/components/top-products";
import BlackFriday from "@/components/black-friday";
import NewProductsSales from "@/components/new-products-sales";
import OtherProduct from "@/components/other-product";

export default function Home() {
  return (
    <div>
      {/* <IntroModal /> */}
      <Hero />
      <TopSellingProducts />
      <TopProducts />
      <OtherProduct />
    </div>
  );
}
