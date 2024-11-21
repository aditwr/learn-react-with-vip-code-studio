import { useState, useEffect } from "react";
import EcommerceCard from "../components/Cards/EcommerceCard";
import PageLayout from "../layouts/PageLayout";
import Cart from "../components/Cart/Cart";
import { getProducts } from "../services/products.service";

export default function ProductPage() {
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function handleAddToCart(product) {
    const existingProduct = cart.find((p) => p.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map((p) => {
        if (p.id === product.id) {
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function handleAddQuantity(product) {
    const updatedCart = cart.map((p) => {
      if (p.id === product.id) {
        return { ...p, quantity: p.quantity + 1 };
      }
      return p;
    });
    setCart(updatedCart);
  }

  function handleRemoveQuantity(product) {
    const existingProduct = cart.find((p) => p.id === product.id);
    if (existingProduct.quantity === 1) {
      const updatedCart = cart.filter((p) => p.id !== product.id);
      setCart(updatedCart);
    } else {
      const updatedCart = cart.map((p) => {
        if (p.id === product.id) {
          return { ...p, quantity: p.quantity - 1 };
        }
        return p;
      });
      setCart(updatedCart);
    }
  }

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
                productName={product.title}
                image={product.image}
                price={product.price}
                rating={product.rating.rate}
                handleAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
        </div>
        <div className="w-3/12 px-3">
          <Cart
            cart={cart}
            handleAddQuantity={handleAddQuantity}
            handleRemoveQuantity={handleRemoveQuantity}
          />
        </div>
      </div>
    </PageLayout>
  );
}
