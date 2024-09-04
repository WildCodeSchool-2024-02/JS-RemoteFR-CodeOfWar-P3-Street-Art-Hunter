import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import getMap from "./services/request";

import App from "./App";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Gallery from "./pages/Gallery";
import Camera from "./pages/Camera";
// import Profile from "./pages/Profile"

const router = createBrowserRouter([
  {
    element: <App />,
    id: "app",
    children: [
      {
        path: "/",
        element: <Home />,
        loader: getMap,
      },
      {
        path: "/Help",
        element: <Help />,
      },
      {
        path: "/Gallery",
        element: <Gallery />,
      },
      {
        path: "/Camera",
        element: <Camera />,
      },
      /*
      {
        path: "/Profile",
        element: <Profile />,
      },
      */
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
