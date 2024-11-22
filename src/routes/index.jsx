import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/Homepage/Homepage";
import RootLayout from "../layouts/RootLayout";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    // Parent Route
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      //   {
      //     path: "/services",
      //     element: <Services />,
      //   },
    ],
  },
]);

export default router;
