import React from "react";
import MainLayout from "./components/Molecules/layout/MainLayout";
import { Route, Routes } from "react-router-dom";
import Error404 from "./components/Molecules/Error404/Error404";
import Home from "./components/Pages/Home/Home";
import Products from "./components/Pages/Products/Products";
import Users from "./components/Pages/Users/Users";

export const BASE_URL = "secure_chunk/";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path={BASE_URL}>
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
