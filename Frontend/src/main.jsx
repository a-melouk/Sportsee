import "./main.css";
import Home from "./pages/Home/Home";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/profile/:userId",
    element: <Home />,
  },
  {
    path: "/error",
    element: <Error />,
  },
  {
    path: "*",
    element: <Error />,
  },
  { path: "/", element: <Navigate to="/profile/12" replace /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
