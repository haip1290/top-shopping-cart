import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";

function App() {
  const [totalQuantity, setTotalQuantity] = useState(0);
  return (
    <>
      <NavBar quantity={totalQuantity} />
      <main>
        <Outlet context={setTotalQuantity} />
      </main>
    </>
  );
}

export default App;
