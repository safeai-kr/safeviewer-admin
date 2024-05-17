import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import DashBoard from "./Pages/DashBoard/DashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <DashBoard />,
      },
    ],
  },
]);

export default router;
