import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// eslint-disable-next-line react/prop-types
export default function AuthLayout({ children, description }) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`${
          theme === "dark" ? "dark" : ""
        } flex flex-col dark:bg-neutral-900 justify-center flex-1 min-h-full px-6 py-12 lg:px-8`}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="w-auto h-10 mx-auto"
          />
          <h2 className="mt-10 font-bold tracking-tight text-center text-gray-900 text-2xl/9">
            {description}
          </h2>
        </div>

        {children}
      </div>
    </>
  );
}
