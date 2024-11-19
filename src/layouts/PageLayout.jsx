import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

export default function PageLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container flex-1 mx-auto">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
