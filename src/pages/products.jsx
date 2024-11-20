import { useState, useEffect } from "react";
import { products } from "../utils/data";
import EcommerceCard from "../components/Cards/EcommerceCard";
import PageLayout from "../layouts/PageLayout";
import Cart from "../components/Cart/Cart";

export default function ProductPage() {
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

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
      <div className="flex">
        <div className="grid grid-cols-3 gap-3">
          {products.map((product) => (
            <EcommerceCard
              key={product.id}
              productName={product.productName}
              image={product.image}
              price={product.price}
              rating={product.rating}
              handleAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
        <div className="px-3 w-96">
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
