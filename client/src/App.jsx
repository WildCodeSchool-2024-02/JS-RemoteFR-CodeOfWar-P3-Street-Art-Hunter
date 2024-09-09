import { Outlet } from "react-router-dom";

import { GeoLocationProvider } from "./services/context/GeoLocationContext";
import NavBar from "./components/NavBar";

import "./styles/app.css";

function App() {
  return (
    <>
      <NavBar />
      <GeoLocationProvider>
        <main>
          <Outlet />
        </main>
      </GeoLocationProvider>
    </>
  );
}

export default App;
