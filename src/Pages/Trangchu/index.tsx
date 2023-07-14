import React, { useState } from "react";
import { Button, Image, Input, Space } from "antd";
import { Typography } from "antd";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { createBooking, BookingData } from "../../Api/bookingSlice";
import { useNavigate } from "react-router-dom";
import backgroundanh from "../../image/backgroundanh.svg";
import borderbackground from "../../image/borderbackground.svg";
import calender from "../../image/calendar.svg";
import down from "../../image/down.svg";
import image2 from "../../image/image2.svg";
import khicau1 from "../../image/khicau1.svg";
import khicau2 from "../../image/khicau2.svg";
import khicau3 from "../../image/khicau3.svg";
import khicau4 from "../../image/khicau4.svg";
import khicau5 from "../../image/khicau5.svg";
import khicau6 from "../../image/khicau6.svg";
import Lisa from "../../image/Lisa.svg";
import people from "../../image/people.svg";
import sach from "../../image/sach.svg";
import sao3 from "../../image/sao3.png";
import titlebackground from "../../image/titlebackground.svg";
import titlebackground2 from "../../image/titlebackground2.svg";
import "../../font/index.css";

function Trangchu() {
  const [goiGiaDinh, setGoiGiaDinh] = useState("Gói gia đình");
  const [soLuongVe, setSoLuongVe] = useState("");
  const [hoTen, setHoTen] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const [diaChiEmail, setDiaChiEmail] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const defaultNgaySuDung = "";
  const dispatch: any = useDispatch();

  const dateChange = (e: Date | null) => {
    if (e) {
      setDate(dayjs(e).format("DD/MM/YYYY"));
    } else {
      setDate("");
    }
  };

  const handleBookTicket = () => {
    const bookingData: BookingData = {
      goiGiaDinh,
      soLuongVe,
      hoTen,
      soDienThoai,
      diaChiEmail,
      ngaySuDung: date,
    };

    dispatch(createBooking(bookingData))
      .then((action: any) => {
        const bookingId = action.payload;
        console.log("Data saved successfully with ID:", bookingId);
        // Clear the form fields
        setSoLuongVe("");
        setHoTen("");
        setSoDienThoai("");
        setDiaChiEmail("");
        setDate(defaultNgaySuDung);
        navigate(`/thanhtoan/${bookingId}`);
      })
      .catch((error: any) => {
        console.log("Error saving data:", error);
      });
  };

  return (
    <div className="bg">
      <Image
        src={backgroundanh}
        preview={false}
        style={{
          position: "relative",
          width: "96%",
          height: "auto",
          top: "-20px",
          marginLeft: "25px",
          marginRight: "25px",
          borderRadius: "99px",
        }}
      />
      <div className="Trangchu-image-damsen">
        <Image src={image2} preview={false} style={{ width: "150px" }} />
      </div>
      <div className="Trangchu-text-damsen">
        <Typography.Title
          className="bold-park"
          style={{
            color: "white",
            fontSize: "45px",
            fontWeight: "900",
            fontStyle: "normal",
          }}
        >
          ĐẦM SEN <br /> PARK
        </Typography.Title>
      </div>
      <div className="Trangchu-khicau1">
        <Image src={khicau1} preview={false} style={{ width: "100px" }} />
      </div>
      <div className="Trangchu-khicau2">
        <Image src={khicau2} preview={false} style={{ width: "90px" }} />
      </div>
      <div className="Trangchu-people">
        <Image
          src={people}
          preview={false}
          style={{ width: "550px", marginLeft: "100px" }}
        />
      </div>
      <div className="Trangchu-sach">
        <Image src={sach} preview={false} style={{ width: "120px" }} />
      </div>
      <div className="Trangchu-khicau3">
        <Image src={khicau3} preview={false} />
      </div>
      <div className="Trangchu-khicau4">
        <Image src={khicau4} preview={false} />
      </div>
      <div className="Trangchu-khicau5">
        <Image src={khicau5} preview={false} />
      </div>
      <div className="Trangchu-khicau6">
        <Image src={khicau6} preview={false} style={{ width: "150px" }} />
      </div>
      <div style={{ position: "relative" }}>
        {/* Content */}
        <div className="bg-sach1-shadow"></div>
        <div className="bg-sach1"></div>
        <div className="bg-sach1-nen">
          <div className="content-book">
            <Typography.Text className="montserrat content-book-font">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ac mollis \n justo. Etiam volutpat tellus quis risus
              volutpat, ut posuere ex facilisis.
            </Typography.Text>
            <br />
            <br />
            <Typography.Text className="montserrat content-book-font">
              Suspendisse iaculis libero lobortis condimentum gravida. Aenean
              auctor iaculis risus, lobortis molestie lectus consequat a.
            </Typography.Text>
          </div>
          <div className="content-book-left2">
            <Space>
              <Image src={sao3} preview={false} />
              <Typography.Text className="content-book-start montserrat">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </Typography.Text>
            </Space>
            <br />
            <Space>
              <Image src={sao3} preview={false} />
              <Typography.Text className="content-book-start montserrat">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </Typography.Text>
            </Space>
            <br />
            <Space>
              <Image src={sao3} preview={false} />
              <Typography.Text className="content-book-start montserrat">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </Typography.Text>
            </Space>
            <br />
            <Space>
              <Image src={sao3} preview={false} />
              <Typography.Text className="content-book-start montserrat">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </Typography.Text>
            </Space>
          </div>
        </div>
        {/* Booking form */}
        <div className="bg-sach2-shadow"></div>
        <div className="bg-sach2"></div>
        <div className="bg-sach2-nen">
          <div className="">
            <Space>
              <Input
                className="input"
                value="Gói gia đình"
                onChange={(e) => setGoiGiaDinh(e.target.value)}
              />
              <Button className="bg-icon-button-1">
                <Image
                  src={down}
                  preview={false}
                  style={{
                    width: "40px",
                    marginLeft: "-18px",
                    marginTop: "-5px",
                  }}
                />
              </Button>
              <div className="bg-icon-button-1-1"></div>
            </Space>
            <Space>
              <Input
                className="input1"
                placeholder="Số lượng vé"
                value={soLuongVe}
                onChange={(e) => setSoLuongVe(e.target.value)}
              />
              <Input
                className="input2"
                placeholder="Ngày sử dụng"
                value={date}
              />
              <div className="bg-icon-button-2">
                <div>
                  <DatePicker
                    className="date"
                    onChange={dateChange}
                    popperClassName="custom-datepicker-popper"
                    wrapperClassName="custom-datepicker-wrapper"
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
              <div className="bg-icon-button-2-2"></div>
            </Space>
            <Input
              className="input3"
              placeholder="Họ và tên"
              value={hoTen}
              onChange={(e) => setHoTen(e.target.value)}
            />
            <Input
              className="input4"
              placeholder="Số điện thoại"
              value={soDienThoai}
              onChange={(e) => setSoDienThoai(e.target.value)}
            />
            <Input
              className="input5"
              placeholder="Địa chỉ email"
              value={diaChiEmail}
              onChange={(e) => setDiaChiEmail(e.target.value)}
            />
            <Button
              className="button bold-park"
              style={{
                backgroundColor: "#ff000a",
                color: "#fff",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "900",
                lineHeight: "normal",
              }}
              onClick={handleBookTicket}
            >
              Đặt vé
            </Button>
            <div className="bg-button "></div>
          </div>
        </div>

        {/* Title background red */}
        <div>
          <div className="title-background-2">
            <Image src={titlebackground2} preview={false} />
          </div>
          <div className="title-background">
            <Image src={titlebackground} preview={false} />
          </div>
          <div className="borderbackground">
            <Image src={borderbackground} preview={false} />
          </div>
          <div className="title-background-red">
            <Typography.Text className="bold-park content-background-red ">
              VÉ CỦA BẠN
            </Typography.Text>
          </div>
        </div>
      </div>

      <div className="image-lisa">
        <Image src={Lisa} preview={false} />
      </div>
    </div>
  );
}

export default Trangchu;
