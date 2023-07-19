import React from "react";
import { Route, Routes } from "react-router-dom";
import Trangchu from "../../Pages/Trangchu";
import Sukien from "../../Pages/Sukien";
import Lienhe from "../../Pages/Lienhe";
import ChiTietSuKien from "./../../Pages/ChitietSukien/index";
import Thanhtoan from "../../Pages/Thanhtoan";
import ThanhToanThanhCong from "../../Pages/Thanhtoanthanhcong";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Trangchu />}></Route>
      <Route path="/sukien" element={<Sukien />}></Route>
      <Route path="/lienhe" element={<Lienhe />}></Route>
      <Route path="/thanhtoan/:id" Component={Thanhtoan} />{" "}
      <Route path="/thanhtoanthanhcong/:id" Component={ThanhToanThanhCong} />{" "}
      <Route path="/chiTietSuKien/:id" Component={ChiTietSuKien} />{" "}
    </Routes>
  );
}
export default AppRoutes;
