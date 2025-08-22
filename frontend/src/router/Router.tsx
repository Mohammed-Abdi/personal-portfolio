import type React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/HomePage/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
