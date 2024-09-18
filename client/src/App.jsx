import { useLocation, Outlet } from "react-router-dom";

import { GeoLocationProvider } from "./services/context/GeoLocationContext";
import NavBar from "./components/NavBar";

import "./styles/app.css";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/connection" ||
      location.pathname === "/register" ? null : (
        <NavBar />
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
