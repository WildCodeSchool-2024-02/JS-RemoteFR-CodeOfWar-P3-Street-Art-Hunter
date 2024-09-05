import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { getMap, getGallery } from "./services/request";

import App from "./App";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Gallery from "./pages/Gallery";
import GalleryDetails from "./pages/GalleryDetails";
import Camera from "./pages/Camera";
// import Profile from "./pages/Profile";
// import Ranking from "./pages/Ranking";

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
        path: "/help",
        element: <Help />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
        loader: getMap,
      },
      {
        path: "/gallery/:id",
        element: <GalleryDetails />,
        loader: ({ params }) => getGallery(params.id),
      },
      {
        path: "/camera",
        element: <Camera />,
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
