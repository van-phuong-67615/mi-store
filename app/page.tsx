import Hero from "@/components/hero";
import TopSellingProducts from "@/components/top-selling-products";
import TopProducts from "@/components/top-products";
import OtherProduct from "@/components/other-product";
import IntroModal from "@/components/intro-modal";

export default function Home() {
  return (
    <div>
      <IntroModal />
      <Hero />
      <TopSellingProducts />
      <TopProducts />
      <OtherProduct />
    </div>
  );
}
