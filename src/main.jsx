import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home.jsx";
import NotFound from "./pages/404.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import ProductPage from "./pages/products.jsx";
import TestPage from "./pages/test.jsx";
import DetailProductPage from "./pages/detailProduct.jsx";
import { Provider } from "react-redux";
import store from "./store/store";
import { ThemeProvider } from "./context/ThemeContext.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/products",
      element: <ProductPage />,
    },
    {
      path: "/test",
      element: <TestPage />,
    },
    {
      path: "/product/:id",
      element: <DetailProductPage />,
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
