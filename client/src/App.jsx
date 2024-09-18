import { useLocation, Outlet } from "react-router-dom";
import useScreenWidth from "./utils/hook/useScreenWidth";

import { GeoLocationProvider } from "./services/context/GeoLocationContext";

import NavBarDesktop from "./components/desktop/NavBarDesktop";
import NavBar from "./components/NavBar";

import "./styles/app.css";

function App() {
  const location = useLocation();
  const screenWidth = useScreenWidth();

  return (
    <>
      {screenWidth <= 480 ? (
        <>
          (
          {location.pathname === "/connection" ||
          location.pathname === "/inscription" ? null : (
            <NavBar />
          )}
          )
        </>
      ) : (
        <NavBarDesktop />
      )}

      <GeoLocationProvider>
        <main>
          <Outlet />
        </main>
      </GeoLocationProvider>
    </>
  );
}

export default App;
