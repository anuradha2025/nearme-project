import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/Homepage/Homepage";
import RootLayout from "../layouts/RootLayout";
import Register from "../pages/Register/Register";
import ProductListing from "../components/MainGroup/ProductListing";

const router = createBrowserRouter([
  {
    path: "/nearme-project",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/nearme-project/register",
        element: <Register />,
      },
      {
        path: "/nearme-project/search-results",
        element: <ProductListing />,
      },
    ],
  },
]);

export default router;
