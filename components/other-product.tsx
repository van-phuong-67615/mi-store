import BlackFriday from "./black-friday";
import NewProductsSales from "./new-products-sales";

export default function OtherProduct() {
  return (
    <section className="mb-16 md:mb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1  md:grid-cols-[53.19%_21.28%_21.28%] gap-6">
          <BlackFriday />
          <NewProductsSales />
        </div>
      </div>
    </section>
  );
}
