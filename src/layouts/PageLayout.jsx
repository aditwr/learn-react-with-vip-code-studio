import Navbar from "../components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
// import Footer from "../components/Footer";

// eslint-disable-next-line react/prop-types
export default function PageLayout({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "dark"
          ? "dark bg-neutral-900 text-white"
          : "bg-white text-slate-900"
      } flex flex-col transition-colors duration-500 min-h-screen`}
    >
      <Navbar />
      <main className="container flex-1 mx-auto">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
