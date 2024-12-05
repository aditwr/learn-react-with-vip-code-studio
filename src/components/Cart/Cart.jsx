import { ShoppingCart } from "lucide-react";
import { CirclePlus, CircleMinus } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../store/slices/cartSlices";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const { theme, setTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="flex items-center text-xl font-bold leading-none text-gray-900 gap-x-2 dark:text-white">
          <div className="p-3 bg-blue-100 rounded-full">
            <ShoppingCart size={16} />
          </div>
          Cart
        </h5>
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          View all Products
        </a>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {cart.length !== 0
            ? cart.map((product) => (
                <li key={product.id} className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="relative">
                      <div className="absolute bottom-0 left-0 flex items-center justify-center w-5 h-5 text-sm font-semibold text-white rounded-full bg-rose-500">
                        {product.quantity}
                      </div>
                      <div className="flex items-center justify-center w-12 h-12 p-1 overflow-hidden border rounded-full">
                        <img
                          className="object-contain w-full h-full"
                          src={product.image}
                          alt="product image"
                        ></img>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="w-10/12 text-sm font-medium text-gray-900 truncate dark:text-white">
                        {product.title}
                      </p>
                      <div className="flex gap-x-2">
                        <p className="text-sm font-semibold text-neutral-600">
                          {product.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 0,
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <p className="font-semibold text-neutral-800">
                        {(product.price * product.quantity).toLocaleString(
                          "en-US",
                          {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 0,
                          }
                        )}
                      </p>
                    </div>
                    <div className="flex flex-col ml-4 gap-y-1">
                      <button
                        onClick={() =>
                          dispatch(increaseQuantity({ ...product }))
                        }
                        className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 active:bg-blue-600 active:rounded-full active:text-white"
                      >
                        <CirclePlus size={20} />
                      </button>
                      <button
                        onClick={() =>
                          dispatch(decreaseQuantity({ ...product }))
                        }
                        className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 active:bg-blue-600 active:rounded-full active:text-white"
                      >
                        <CircleMinus size={20} />
                      </button>
                    </div>
                  </div>
                </li>
              ))
            : "No items in cart"}
        </ul>
        {cart.length !== 0 && (
          <div className="flex items-center justify-between mt-4">
            <p className="font-medium text-gray-900 text-md dark:text-white">
              Total
            </p>
            <p className="text-xl font-bold text-neutral-800">
              {cart
                .reduce(
                  (acc, product) => acc + product.price * product.quantity,
                  0
                )
                .toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
