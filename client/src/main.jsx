import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import getMap, { getUserbyId } from "./services/request";

import App from "./App";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Gallery from "./pages/Gallery";
import Camera from "./pages/Camera";
import Profile from "./pages/Profile";
// import Ranking from "./pages/Ranking";

import "./styles/app.css";

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
      },
      {
        path: "/camera",
        element: <Camera />,
      },

      {
        path: "/profile/:id",
        element: <Profile />,
        loader: ({ params }) => getUserbyId(params.id),
      },
      /*
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
