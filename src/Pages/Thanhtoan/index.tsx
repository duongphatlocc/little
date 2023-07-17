import Background from "../../Component/SlideMenu";
import { Typography, Image, Space, Input, Button, Modal } from "antd";
import sach from "../../image/sach.svg";
import Trini from "../../image/Trini.svg";
import vecong from "../../image/vecong.svg";
import calender from "../../image/calendar.svg";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { db } from "../../firebase/firebase";
import { ThanhtoanData, updateThanhtoan } from "../../firebase/thanhtoanSlice";
import { useDispatch } from "react-redux";
import "../../css/thanhtoan.css";

function Thanhtoan() {
  const { id } = useParams();
  const [date, setDate] = useState("");
  const [thanhtoans, setThanhtoans] = useState<ThanhtoanData | null>(null);
  const [soThe, setSoThe] = useState<string | undefined>("");
  const [cvv, setCvv] = useState<string | undefined>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const price = Number(thanhtoans?.soLuongVe) * 180;

  const dateChange = (e: any) => {
    setDate(dayjs(e).format("DD/MM/YYYY"));
  };

  const handleThanhtoan = () => {
    if (soThe && cvv && id) {
      const updateData = {
        id: id,
        diaChiEmail: thanhtoans?.diaChiEmail || "",
        goiGiaDinh: thanhtoans?.goiGiaDinh || "",
        hoTen: thanhtoans?.hoTen || "",
        ngaySuDung: thanhtoans?.ngaySuDung || "",
        soDienThoai: thanhtoans?.soDienThoai || "",
        soLuongVe: thanhtoans?.soLuongVe || "",
        soThe: soThe,
        cvv: cvv,
        image:
          "https://firebasestorage.googleapis.com/v0/b/little-28456.appspot.com/o/qr.svg?alt=media&token=d272cc2c-b888-4e35-a504-c7ec3b706a02",
        ma: "ALT20210501",
        tenVe: "VÉ CỔNG",
      };

      dispatch(updateThanhtoan(updateData) as any);
      navigate(`/thanhtoanthanhcong/${id}`); // Navigate to "thanhtoanthanhcong" page with the ID parameter
    } else {
      Modal.error({
        title: "Lỗi xảy ra khi thanh toán",
        content:
          "Vui lòng kiểm tra lại thông tin liên hệ, thông tin thẻ và thử lại.",
        cancelButtonProps: { style: { display: "none" } },
      });
    }
  };

  useEffect(() => {
    async function fetchThanhtoan() {
      try {
        const thanhtoanRef = db.collection("bookings").doc(id);
        const dataRef = await thanhtoanRef.get();
        if (dataRef.exists) {
          const data = dataRef.data() as ThanhtoanData;
          setThanhtoans(data);
          console.log(id);
        } else {
          console.log("error");
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchThanhtoan();
  }, [id]);

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
      />
      <div>
        <div className="thanh-toan-bg-left-shadow" />
        <div className="thanh-toan-bg-left" />
        <div>
          <div className="thanh-toan-bg-left-content">
            <Image src={vecong} preview={false} className="vecong" />
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
              <Input
                className="group-input-1"
                value={`${price.toFixed(3)} VNĐ`}
              />
              <Input
                className="input-thanhtoan-1"
                value={thanhtoans?.soLuongVe}
              />
              vé
              <Input
                className="input-thanhtoan-2"
                value={thanhtoans?.ngaySuDung}
              />
            </Space>

            <div style={{ marginTop: "5px" }}>
              <Typography.Text className="group-text-1">
                Thông tin liên hệ
              </Typography.Text>
              <br />
              <Input className="input-thanhtoan-3" value={thanhtoans?.hoTen} />
            </div>
            <div style={{ marginTop: "5px" }}>
              <Typography.Text className="group-text-1">
                Điện thoại
              </Typography.Text>
              <br />
              <Input
                className="group-input-1"
                value={thanhtoans?.soDienThoai}
              />
            </div>

            <div style={{ marginTop: "5px" }}>
              <Typography.Text className="group-text-1">Email</Typography.Text>
              <br />
              <Input
                className="input-thanhtoan-3"
                value={thanhtoans?.diaChiEmail}
              />
            </div>
          </div>
        </div>

        <div className="thanh-toan-bg-right-shadow" />
        <div className="thanh-toan-bg-right" />
        <div className="thanh-toan-bg-right-content">
          <Image src={vecong} preview={false} className="thongtin-thanhtoan" />
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
            <Input
              className="group-input-2"
              value={soThe}
              onChange={(e) => setSoThe(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "5px" }}>
            <Typography.Text className="group-text-2">
              Họ tên chủ thẻ
            </Typography.Text>
            <br />
            <Input className="group-input-2" />
          </div>
          <div style={{ marginTop: "5px" }}>
            <Typography.Text className="group-text-2">
              Ngày hết hạn
            </Typography.Text>
            <br />
            <Space>
              <Input className="group-input-3" value={date} />
              <div className="bg-icon-button-pay-shadow" />
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
                />
              </div>
            </Space>
          </div>
          <div style={{ marginTop: "5px" }}>
            <Typography.Text className="group-text-2">CVV/CVC</Typography.Text>
            <br />
            <Input
              className="group-input-4"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
          <div className="button-thanhtoan-shadow" />
          <div className="button-thanhtoan-bg-red">
            <Button
              onClick={handleThanhtoan}
              className="button-text-thanhtoan bold-park"
              style={{
                backgroundColor: "#ff000a",
                color: "#fff",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "900",
                lineHeight: "normal",
                width: "289px",
                marginLeft: "0px",
                borderRadius: "1rem",
                height: "50px",
              }}
            >
              Thanh toán
            </Button>
          </div>
        </div>
      </div>
      <Image src={Trini} preview={false} className="Trini" />
    </div>
  );
}

export default Thanhtoan;
