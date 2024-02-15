import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Product from "./pages/product/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/product" element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
