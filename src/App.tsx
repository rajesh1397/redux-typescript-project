// import Shop from "./components/shop/Shop";
// import Cart from "./components/Cart/Cart";
import React, { Suspense } from "react";
import Welcome from "./pages/Welcome";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

const Shop = React.lazy(() => import("./components/shop/Shop"));
const Cart = React.lazy(() => import("./components/Cart/Cart"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
