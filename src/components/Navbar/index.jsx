import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";
import Button from "../Button/Button";
import { getUsername } from "../../services/auth.service";
import { useSelector } from "react-redux";
import { useEffect, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { ShoppingCart } from "lucide-react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const cart = useSelector((state) => state.cart);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {}, [cart]);

  function handleLogOut() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            ElaShop
          </span>
        </a>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto"
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to={"/"}
                className="block px-3 py-2 text-white bg-blue-700 rounded md:p-0 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/products"}
                className="block px-3 py-2 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Producs
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-x-4">
          {localStorage.getItem("token") ? (
            <>
              <p className="px-6 py-2 font-bold bg-blue-100 rounded-full">
                {getUsername()}
              </p>
              <div className="flex items-center">
                <button
                  onClick={handleLogOut}
                  className="p-4 rounded-full hover:bg-red-100"
                >
                  <LogOut size={24} />
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="">
                {/* shopping cart icon */}
                <Link to={"/products"}>
                  <div className="relative p-3 rounded-sm bg-slate-100">
                    <ShoppingCart size={16} />
                    <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-red-600 rounded-full -top-1 -right-1">
                      {cart.length}
                    </span>
                  </div>
                </Link>
              </div>
              <div className="">
                {/* toggle theme icon */}
                <button
                  onClick={() =>
                    setTheme((theme) => {
                      return theme === "light" ? "dark" : "light";
                    })
                  }
                  className="relative p-3 rounded-sm bg-slate-100"
                >
                  {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
                </button>
              </div>
              <Link to={"/login"}>
                <Button type="secondary">Login</Button>
              </Link>
              <Link to={"/register"}>
                <Button type="primary">Register</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
