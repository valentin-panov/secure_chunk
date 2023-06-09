import React, { Suspense } from "react";
import MainLayout from "./components/Molecules/layout/MainLayout";
import { Navigate, Route, Routes } from "react-router-dom";
import Error404 from "./components/Molecules/Error404/Error404";
import Home from "./components/Pages/Home/Home";
import Products from "./components/Pages/Products/Products";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import Users from "./components/Pages/Users/Users";

export const BASE_URL = "secure_chunk/";

// const Users = lazy(() => import("./components/Pages/Users/Users"));

function App() {
  const { token } = useSelector((store: RootState) => store);

  return (
    <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={BASE_URL}>
            <Route index element={<Home />}></Route>
            <Route path="products" element={<Products />}></Route>
            <Route
              path="users"
              element={
                token === "admin" ? (
                  <Users />
                ) : (
                  <Navigate to={"/" + BASE_URL} replace />
                )
              }
            ></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </MainLayout>
  );
}

export default App;
