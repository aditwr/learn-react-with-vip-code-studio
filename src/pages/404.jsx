import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <h2 className="text-xl font-bold text-red-700">404 Not Found</h2>
      <p className="text-sm text-gray-500">{error.statusText}</p>
    </div>
  );
}
