import { useState, useEffect } from "react";
import EcommerceCard from "../components/Cards/EcommerceCard";
import PageLayout from "../layouts/PageLayout";
import Cart from "../components/Cart/Cart";
import { getProducts } from "../services/products.service";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <PageLayout>
      <h1 className="w-9/12 mb-4 text-3xl font-bold text-center ">Products</h1>
      <div className="flex gap-x-2">
        <div className="w-9/12">
          <div className="grid grid-cols-3 gap-3">
            {products.map((product) => (
              <EcommerceCard
                key={product.id}
                id={product.id}
                title={product.title}
                category={product.category}
                description={product.description}
                image={product.image}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
        <div className="w-3/12 px-3">
          <Cart />
        </div>
      </div>
    </PageLayout>
  );
}
