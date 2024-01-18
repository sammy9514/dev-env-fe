import React from "react";
import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";

export const App = () => {
  return (
    <div>
      <RouterProvider router={mainRouter} />
    </div>
  );
};