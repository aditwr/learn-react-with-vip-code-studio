import EcommerceCard from "../components/Cards/EcommerceCard";
import { products } from "../utils/data";
import PageLayout from "../layouts/PageLayout";

export default function ProductPage() {
  return (
    <PageLayout>
      <div className="flex">
        <div className="grid grid-cols-3 gap-3">
          {products.map((product) => (
            <EcommerceCard
              key={product.id}
              productName={product.productName}
              image={product.image}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
        <div className="px-3 w-80">
          <div className="p-3 border rounded-lg border-neutral-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ipsam
            nisi molestias placeat nostrum delectus, iure suscipit aspernatur.
            Vero, voluptatem!
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
