import React from "react";
import { Image, Menu, Space, Typography } from "antd";
import logo from "../../image/logo.svg";
import iconPhone from "../../image/iconPhone.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigte = useNavigate();

  return (
    <div>
      <div className="Header">
        <Image
          className="Header-image"
          src={logo}
          preview={false}
          style={{ paddingBottom: "40px" }}
        />
        <Space>
          <Menu
            onClick={(item) => {
              navigte(item.key);
              //
            }}
            style={{
              paddingTop: "10px",
            }}
            className="menu"
            mode="horizontal" // Corrected spelling
            items={[
              {
                label: "Trang chủ",
                key: "/",
              },
              {
                label: "Sự kiện",
                key: "/sukien",
              },
              {
                label: "Liên hệ",
                key: "/lienhe",
              },
            ]}
          ></Menu>
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
