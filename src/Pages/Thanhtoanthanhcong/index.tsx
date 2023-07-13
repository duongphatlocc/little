import React from "react";
import Background from "../../Component/SlideMenu";
import { Typography, Image, Card, Space } from "antd";
import Alvin from "../../image/Alvin.svg";
import leftdown from "../../image/leftdown.svg";
import qr from "../../image/qr.svg";
import tich from "../../image/tich.svg";

function ThanhToanThanhCong() {
  return (
    <div>
      <Background />
      <Typography.Text className="title-thanhtoan-thanhcong bold-park">
        Thanh toán thành công
      </Typography.Text>
      <div className="bg-thanhtoan-thanhcong-shadow"></div>
      <div className="bg-thanhtoan-thanhcong"></div>
      <div className="bg-thanhtoan-thanhcong-content">
        <Space>
          <div className="thanhtoan-thanhcong-bg-leftdown-shadow"></div>
          <div className="thanhtoan-thanhcong-bg-leftdown"></div>

          <Image
            src={leftdown}
            preview={false}
            className="thanhtoan-thanhcong-image-leftdown"
          ></Image>

          <div className="card-thanhtoan-thanhcong">
            <Card style={{ width: "230px", height: "400px" }}>
              <Image
                src={qr}
                style={{ paddingLeft: "12px" }}
                preview={false}
              ></Image>
              <br />
              <br />
              <Typography.Text className="card-ma-qr">
                ALT20210501
              </Typography.Text>
              <br />
              <br />
              <Typography.Text className="card-ve-cong">
                VÉ CỔNG
              </Typography.Text>
              <br />
              <Typography.Text className="card-">---</Typography.Text>
              <p>Ngày sử dụng: 31/05/2021</p>
              <Image
                src={tich}
                preview={false}
                style={{ paddingLeft: "55px" }}
              ></Image>
            </Card>
          </div>

          <div className="thanhtoan-thanhcong-bg-rightdown-shadow"></div>
          <div className="thanhtoan-thanhcong-bg-rightdown"></div>

          <Image
            src={leftdown}
            preview={false}
            className="thanhtoan-thanhcong-image-rightdown"
          ></Image>
        </Space>
      </div>
      <Image src={Alvin} preview={false} className="Alvin"></Image>
    </div>
  );
}
export default ThanhToanThanhCong;
