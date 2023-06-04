import React from "react";
import MainLayout from "./components/layout/MainLayout";
import { Route, Routes } from "react-router-dom";
import ZeroFound from "./components/ZeroFound/ZeroFound";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="*" element={<ZeroFound />}></Route>
        </Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
