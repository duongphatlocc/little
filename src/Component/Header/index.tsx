import React from "react";
import { Image, Menu, Space, Typography } from "antd";
import logo from "../../image/logo.svg";
import iconPhone from "../../image/iconPhone.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const navigte = useNavigate();
  const location = useLocation();

  return (
    <div>
      <div className="Header">
        <Image
          className="Header-image"
          src={logo}
          preview={false}
          style={{ paddingBottom: "40px" }}
        />
        <Space className="menu">
          <Link
            style={{
              marginRight: "50px",
              color: "#fff",
              fontSize: "17px",

              fontStyle: "normal",
              fontWeight: "600",
            }}
            to="/"
            className={`Home ${location.pathname === "/" ? "active" : ""}`}
          >
            Trang chủ
          </Link>
          <Link
            style={{
              marginLeft: "50px",
              marginRight: "50px",
              color: "#fff",
              fontSize: "17px",
              fontStyle: "normal",
              fontWeight: "600",
            }}
            to="/sukien"
            className={`Party ${
              location.pathname === "/sukien" ? "active" : ""
            }`}
          >
            Sự kiện
          </Link>
          <Link
            style={{
              marginLeft: "50px",
              marginRight: "50px",
              color: "#fff",
              fontSize: "17px",

              fontStyle: "normal",
              fontWeight: "600",
            }}
            to="/lienhe"
            className={`Contact ${
              location.pathname === "/lienhe" ? "active" : ""
            }`}
          >
            Liên hệ
          </Link>

          <Space>
            <Image
              className="Header-image"
              src={iconPhone}
              preview={false}
              style={{}}
            />
            <Typography.Text
              style={{
                color: "white",
                fontWeight: "700",
                fontSize: "16px",
                fontFamily: "Montserrat",
                fontStyle: "normal",
              }}
            >
              0825742489
            </Typography.Text>
          </Space>
        </Space>
      </div>
    </div>
  );
}
export default Header;
