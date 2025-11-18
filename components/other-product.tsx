import BlackFriday from "./black-friday";
import NewProductsSales from "./new-products-sales";

export default function OtherProduct() {
  return (
    <section className="mb-16 md:mb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(240px,20%)minmax(240px,20%)] gap-6">
          <BlackFriday />
          <NewProductsSales />
        </div>
      </div>
    </section>
  );
}
