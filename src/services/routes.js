import App from "./App.jsx";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: (
      <div className="flex items-center justify-center w-full min-h-screen">
        <h2 className="text-xl font-bold text-emerald-700">Login</h2>
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div className="flex items-center justify-center w-full min-h-screen">
        <h2 className="text-xl font-bold text-blue-700">Register</h2>
      </div>
    ),
  },
];
