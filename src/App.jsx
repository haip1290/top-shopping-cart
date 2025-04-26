import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <>
      <NavBar quantity={cartItems.length} />
      <main>
        <Outlet context={handleAddToCart} />
      </main>
    </>
  );
}

export default App;
