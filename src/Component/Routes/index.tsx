import React from "react";
import { Route, Routes } from "react-router-dom";
import Trangchu from "../../Pages/Trangchu";
import Sukien from "../../Pages/Sukien";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Trangchu />}></Route>
      <Route path="/sukien" element={<Sukien />}></Route>
    </Routes>
  );
}
export default AppRoutes;
