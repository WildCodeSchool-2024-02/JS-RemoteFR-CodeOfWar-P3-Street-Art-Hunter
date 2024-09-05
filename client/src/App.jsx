import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";

import "./styles/app.css";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
