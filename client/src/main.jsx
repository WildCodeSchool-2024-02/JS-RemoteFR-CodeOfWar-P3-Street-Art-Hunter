import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { getMap, getCamera } from "./services/request";

import App from "./App";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Gallery from "./pages/Gallery";
import Camera from "./pages/Camera";
// import Profile from "./pages/Profile";
// import Ranking from "./pages/Ranking";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: getMap,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/camera",
        element: <Camera />,
        loader: getCamera,
      },
      /*
      {
        path: "/profile",
        element: <Profile />,
      },
            {
        path: "/profile/ranking",
        element: <Ranking />,
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
