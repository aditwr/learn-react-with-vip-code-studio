import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";
import Button from "../Button/Button";

export default function Navbar() {
  function handleLogOut() {
    localStorage.setItem("isAuthenticated", false);
    localStorage.removeItem("user");
    localStorage.removeItem("password");
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
          {localStorage.getItem("isAuthenticated") === "true" ? (
            <>
              <p className="px-6 py-2 font-bold bg-blue-100 rounded-full">
                {localStorage.getItem("user")}
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
