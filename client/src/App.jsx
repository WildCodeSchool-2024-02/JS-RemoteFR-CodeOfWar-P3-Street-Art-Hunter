import { useLocation, Outlet } from "react-router-dom";

import { GeoLocationProvider } from "./services/context/GeoLocationContext";
import { UserInfoProvider } from "./services/context/UserInfoContext";

import NavBar from "./components/NavBar";

import "./styles/app.css";

function App() {
  const location = useLocation();

  return (
    <UserInfoProvider>
      {location.pathname === "/connection" ||
      location.pathname === "/register" ? null : (
        <NavBar />
      )}
      <GeoLocationProvider>
        <main>
          <Outlet />
        </main>
      </GeoLocationProvider>
    </UserInfoProvider>
  );
}

export default App;
