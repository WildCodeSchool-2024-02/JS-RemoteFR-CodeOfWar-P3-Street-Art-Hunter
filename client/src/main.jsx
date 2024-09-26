import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  getMap,
  getUserbyId,
  getStyle,
  getGallery,
  getUsersRanking,
  getValidated,
  getUser,
} from "./services/request";
import useScreenWidth from "./utils/hook/useScreenWidth";

import App from "./App";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Gallery from "./pages/Gallery";
import GalleryDetails from "./pages/GalleryDetails";
import Camera from "./pages/Camera";
import Profile from "./pages/Profile";
import Ranking from "./pages/Ranking";
import Connection from "./pages/Connection";
import Register from "./pages/Register";
import HomeDesktop from "./pages/HomeDesktop";
import Gestion from "./pages/Gestion";
import GestionDetails from "./pages/GestionDetails";

import "./styles/app.css";

function HomeResponsive() {
  const screenWidth = useScreenWidth();

  return screenWidth <= 480 ? <Home /> : <HomeDesktop />;
}

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/connection",
        element: <Connection />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/",
        element: <HomeResponsive />,
        loader: async () => ({
          rankings: await getUsersRanking(),
          usersGlobal: await getMap(),
        }),
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
        loader: async () => ({
          artworkList: await getMap(),
          styleArtwork: await getStyle(),
        }),
      },
      {
        path: "/gallery/:id",
        element: <GalleryDetails />,
        loader: ({ params }) => getGallery(params.id),
      },
      {
        path: "/camera",
        element: <Camera />,
        loader: getStyle,
      },
      {
        path: "/gestion",
        element: <Gestion />,
        loader: async () => ({
          readArtwork: await getValidated(),
          readUsers: await getUser(),
        }),
      },
      {
        path: "/gestion/:id",
        element: <GestionDetails />,
        loader: ({ params }) => getGallery(params.id),
      },
      {
        path: "/profile/:id",
        element: <Profile />,
        loader: ({ params }) => getUserbyId(params.id),
      },
      {
        path: "/profile/ranking/:id",
        element: <Ranking />,
        loader: async ({ params }) => ({
          userInfo: await getUserbyId(params.id),
          rankings: await getUsersRanking(),
        }),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
