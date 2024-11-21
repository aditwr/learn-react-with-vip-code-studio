import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetailProduct } from "../services/products.service";
import PageLayout from "../layouts/PageLayout";

export default function DetailProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getDetailProduct(id).then((singleProduct) => {
      setProduct(singleProduct);
    });
  }, []);

  return (
    <PageLayout>
      <div>
        {product && (
          <div className="grid grid-cols-2 h-[600px] border">
            <div className="flex items-center border border-t-0 border-b-0 justify-center w-full h-[600px] p-4 ">
              <img
                src={product.image}
                alt=""
                className="object-contain w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="bg-blue-50/40">
              <form className="p-6">
                <div className="">
                  <h1 className="flex-auto text-2xl font-semibold text-slate-900">
                    {product.title}
                  </h1>
                  <div className="my-4">
                    <span className="flex-none w-full px-4 py-1 mt-2 text-sm font-medium bg-white border rounded-full text-slate-700">
                      {product.category}
                    </span>
                  </div>
                  <p className="mt-8 text-slate-700">{product.description}</p>
                </div>
                <div className="flex items-baseline pb-6 mt-4 mb-6 border-b border-slate-200">
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="font-medium text-md text-slate-900">
                      Price:
                    </span>
                    <span className="text-3xl font-semibold text-slate-900">
                      ${product.price}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-4 text-sm font-medium">
                  <div className="flex flex-auto space-x-4">
                    <button
                      className="h-10 px-6 font-semibold text-white bg-black rounded-md"
                      type="submit"
                    >
                      Buy now
                    </button>
                    <button
                      className="h-10 px-6 font-semibold border rounded-md border-slate-200 text-slate-900"
                      type="button"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <button
                    className="flex items-center justify-center flex-none border rounded-md w-9 h-9 text-slate-300 border-slate-200"
                    type="button"
                    aria-label="Like"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      />
                    </svg>
                  </button>
                </div>
                <p className="mt-4 text-sm text-slate-700">
                  Free shipping on all continental US orders.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
