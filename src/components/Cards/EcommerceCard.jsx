import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlices";
import PropTypes from "prop-types";

EcommerceCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  rating: PropTypes.shape({
    rate: PropTypes.number,
    count: PropTypes.number,
  }),
};

export default function EcommerceCard({
  id,
  title,
  category,
  description,
  price = 0,
  image,
  rating = {
    rate: 0,
    count: 0,
  },
}) {
  const ratingElement = [];
  let i = 0;
  let ratingElementKey = 0;
  const dispatch = useDispatch();

  while (i < rating.rate) {
    ratingElement.push(
      <svg
        key={ratingElementKey}
        className="w-4 h-4 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    );
    i++;
    ratingElementKey++;
  }
  i = 0;
  while (i < 5 - rating.rate) {
    ratingElement.push(
      <svg
        key={ratingElementKey}
        className="w-4 h-4 text-gray-200 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    );
    i++;
    ratingElementKey++;
  }

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/product/${id}`}>
        <div className="flex items-center justify-center h-64 p-4 overflow-hidden rounded-t-lg">
          <img
            className="object-contain w-full h-full"
            src={image}
            alt="product image"
          />
        </div>
      </Link>
      <div className="px-5 pb-5 ">
        <div className="flex flex-col justify-between h-36">
          <div className="">
            <Link to={`/product/${id}`}>
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 line-clamp-2 dark:text-white">
                {title}
                category, description,
              </h5>
            </Link>
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {ratingElement}
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {rating.rate}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${price.toLocaleString("en-US")}
            </span>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id,
                    title,
                    category,
                    description,
                    price,
                    image,
                    rating,
                  })
                )
              }
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
