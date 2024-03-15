import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar.js";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import Products from "./pages/Products/Products.js";
import Orders from "./pages/Orders/Orders.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
