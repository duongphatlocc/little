import Background from "../../Component/SlideMenu";
import { Typography, Image, Space, Input } from "antd";
import sach from "../../image/sach.svg";
import Trini from "../../image/Trini.svg";
import vecong from "../../image/vecong.svg";
import calender from "../../image/calendar.svg";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import dayjs from "dayjs";

function Thanhtoan() {
  const [date, setDate] = useState("");

  const dateChange = (e: any) => {
    setDate(dayjs(e).format("DD/MM/YYYY"));
  };
  return (
    <div>
      <Background />
      <br />
      <Typography.Title
        className="bold-park title-thanh-toan"
        style={{
          color: "#fff",
          fontSize: "60px",
          fontWeight: "900",
          fontStyle: "normal",
          lineHeight: "100px",
        }}
      >
        Thanh toán
      </Typography.Title>
      <Image
        src={sach}
        preview={false}
        className="thanh-toan-sach"
        style={{ height: "440px" }}
      ></Image>
      <div>
        <div className="thanh-toan-bg-left-shadow"></div>
        <div className="thanh-toan-bg-left"></div>
        <div className="thanh-toan-bg-left-content">
          <Image src={vecong} preview={false} className="vecong"></Image>
          <Typography.Title
            className="bold-park vecong-thanh-toan"
            style={{
              color: "#fff",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "900",
              lineHeight: "normal",
            }}
          >
            VÉ CỔNG - VÉ GIA ĐÌNH
          </Typography.Title>
          <Space>
            <Typography.Text className="group-text-1">
              Số tiền thanh toán
            </Typography.Text>
            <Typography.Text
              className="group-text-1"
              style={{ marginLeft: "50px" }}
            >
              Số lượng vé
            </Typography.Text>
            <Typography.Text
              className="group-text-1"
              style={{ marginLeft: "40px" }}
            >
              Ngày sử dụng
            </Typography.Text>
          </Space>
          <Space>
            <Input className="group-input-1"></Input>
            <Input className="input-thanhtoan-1"></Input>vé
            <Input className="input-thanhtoan-2"></Input>
          </Space>

          <div style={{ marginTop: "5px" }}>
            <Typography.Text className="group-text-1">
              Thông tin liên hệ
            </Typography.Text>
            <br />
            <Input className="input-thanhtoan-3"></Input>
          </div>
          <div style={{ marginTop: "5px" }}>
            <Typography.Text className="group-text-1">
              Điện thoại
            </Typography.Text>
            <br />
            <Input className="group-input-1"></Input>
          </div>

          <div style={{ marginTop: "5px" }}>
            <Typography.Text className="group-text-1">Email</Typography.Text>
            <br />
            <Input className="input-thanhtoan-3"></Input>
          </div>
        </div>

        <div className="thanh-toan-bg-right-shadow"></div>
        <div className="thanh-toan-bg-right"></div>
        <div className="thanh-toan-bg-right-content">
          <Image
            src={vecong}
            preview={false}
            className="thongtin-thanhtoan"
          ></Image>
          <Typography.Title
            style={{
              color: "#fff",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "900",
              lineHeight: "normal",
              position: "absolute",
              zIndex: "1",
              top: "-34px",
              left: "65px",
            }}
            className="bold-park"
          >
            THÔNG TIN THANH TOÁN
          </Typography.Title>
          <div style={{ marginTop: "10px" }}>
            <Typography.Text className="group-text-2">Số thẻ</Typography.Text>
            <br />
            <Input className="group-input-2"></Input>
          </div>
          <div style={{ marginTop: "5px" }}>
            <Typography.Text className="group-text-2">
              Họ tên chủ thẻ
            </Typography.Text>
            <br />
            <Input className="group-input-2"></Input>
          </div>
          <div style={{ marginTop: "5px" }}>
            <Typography.Text className="group-text-2">
              Ngày hết hạn
            </Typography.Text>
            <br />
            <Space>
              <Input className="group-input-3" value={date}></Input>
              <div className="bg-icon-button-2" style={{ marginTop: "-5px" }}>
                <div>
                  <DatePicker
                    className="date"
                    popperClassName="custom-datepicker-popper"
                    wrapperClassName="custom-datepicker-wrapper"
                    onChange={dateChange}
                  />
                </div>
                <Image
                  src={calender}
                  preview={false}
                  style={{
                    width: "20px",
                    marginLeft: "8px",
                    marginTop: "-60px",
                  }}
                ></Image>
              </div>
            </Space>
          </div>
          <div style={{ marginTop: "5px" }}>
            <Typography.Text className="group-text-2">CVV/CVC</Typography.Text>
            <br />
            <Input className="group-input-4"></Input>
          </div>
          <div className="button-thanhtoan-shadow"></div>
          <div className="button-thanhtoan-bg-red">
            <Typography.Text className="button-text-thanhtoan bold-park">
              Thanh toán
            </Typography.Text>
          </div>
        </div>
      </div>
      <Image src={Trini} preview={false} className="Trini"></Image>
    </div>
  );
}
export default Thanhtoan;
