import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Children } from "react";
import { AboutScreen } from "../pages/AboutScreen";
import { HomeScreen } from "../pages/HomeScreen";
import { ContactScreen } from "../pages/ContactScreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomeScreen />,
      },
      {
        path: "/contact",
        element: <ContactScreen />,
      },
      {
        path: "/about",
        element: <AboutScreen />,
      },
    ],
  },
]);
