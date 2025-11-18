import Header from "@/components/header";
import Hero from "@/components/hero";
import TopSellingProducts from "@/components/top-selling-products";
import TopProducts from "@/components/top-products";
import BlackFriday from "@/components/black-friday";
import NewProductsSales from "@/components/new-products-sales";
import Footer from "@/components/footer";
import IntroModal from "@/components/intro-modal";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      {/* <IntroModal /> */}
      <Hero />
      <TopSellingProducts />
      <TopProducts />
      <BlackFriday />
      <NewProductsSales />
      <Footer />
    </main>
  );
}
