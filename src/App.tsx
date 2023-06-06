import React from "react";
import MainLayout from "./components/layout/MainLayout";
import { Route, Routes } from "react-router-dom";
import Error404 from "./components/Error404/Error404";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Users from "./components/Users/Users";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
