import  { useState } from "react";
import { Button, Image, Input, Space } from "antd";
import { Typography } from "antd";
import image2 from "../../image/image2.svg";
import backgroundanh from "../../image/backgroundanh.svg";
import "../../font/index.css";
import khicau1 from "../../image/khicau1.svg";
import khicau2 from "../../image/khicau2.svg";
import people from "../../image/people.svg";
import sach from "../../image/sach.svg";
import khicau3 from "../../image/khicau3.svg";
import khicau4 from "../../image/khicau4.svg";
import khicau5 from "../../image/khicau5.svg";
import khicau6 from "../../image/khicau6.svg";
import sao from "../../image/sao.svg";
import Lisa from "../../image/Lisa.svg";
import titlebackground from "../../image/titlebackground.svg";
import titlebackground2 from "../../image/titlebackground2.svg";
import borderbackground from "../../image/borderbackground.svg";
import down from "../../image/down.svg";
import dayjs from "dayjs";
import calender from "../../image/calendar.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
function Trangchu() {
  const [date, setDate] = useState("");

  const dateChange = (e: any) => {
    setDate(dayjs(e).format("DD/MM/YYYY"));
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
          // borderBottomLeftRadius: "30%",
          // borderBottomRightRadius: "2%",
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
        <Image src={khicau1} preview={false} style={{ width: "100px" }}></Image>
      </div>
      <div className="Trangchu-khicau2">
        <Image src={khicau2} preview={false} style={{ width: "90px" }}></Image>
      </div>
      <div className="Trangchu-people">
        <Image
          src={people}
          preview={false}
          style={{ width: "550px", marginLeft: "100px" }}
        ></Image>
      </div>
      <div className="Trangchu-sach">
        <Image src={sach} preview={false} style={{ width: "120px" }}></Image>
      </div>
      <div className="Trangchu-khicau3">
        <Image src={khicau3} preview={false}></Image>
      </div>
      <div className="Trangchu-khicau4">
        <Image src={khicau4} preview={false}></Image>
      </div>
      <div className="Trangchu-khicau5">
        <Image src={khicau5} preview={false}></Image>
      </div>
      <div className="Trangchu-khicau6">
        <Image src={khicau6} preview={false} style={{ width: "150px" }}></Image>
      </div>
      <div style={{ position: "relative" }}>
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
              <Image src={sao} preview={false}></Image>
              <Typography.Text className="content-book-start montserrat">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </Typography.Text>
            </Space>

            <br />
            <Space>
              <Image src={sao} preview={false}></Image>
              <Typography.Text className="content-book-start montserrat">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </Typography.Text>
            </Space>
            <br />
            <Space>
              <Image src={sao} preview={false}></Image>
              <Typography.Text className="content-book-start montserrat">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </Typography.Text>
            </Space>
            <br />
            <Space>
              <Image src={sao} preview={false}></Image>
              <Typography.Text className="content-book-start montserrat">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </Typography.Text>
            </Space>
          </div>
        </div>
        <div className="bg-sach2-shadow"></div>
        <div className="bg-sach2"></div>
        <div className="bg-sach2-nen">
          <div className="">
            <Space>
              <Input className="input" value={"Gói gia đình"}></Input>
              <Button className="bg-icon-button-1">
                <Image
                  src={down}
                  preview={false}
                  style={{
                    width: "40px",
                    marginLeft: "-18px",
                    marginTop: "-5px",
                  }}
                ></Image>
              </Button>
              <div className="bg-icon-button-1-1"></div>
            </Space>

            <Space>
              <Input className="input1" placeholder="Số lượng vé"></Input>
              <Input
                className="input2"
                placeholder="Ngày sử dụng"
                value={date}
              ></Input>
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
                ></Image>
              </div>
              <div className="bg-icon-button-2-2"></div>
            </Space>
            <Input className="input3"></Input>
            <Input className="input3"></Input>
            <Input className="input3"></Input>
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
            >
              Đặt vé
            </Button>
            <div className="bg-button "></div>
          </div>
        </div>

        {/* title backround red */}
        <div>
          <div className="title-background-2">
            <Image src={titlebackground2} preview={false}></Image>
          </div>
          <div className="title-background">
            <Image src={titlebackground} preview={false}></Image>
          </div>
          <div className="borderbackground">
            <Image src={borderbackground} preview={false}></Image>
          </div>
          <div className="title-background-red">
            <Typography.Text className="bold-park content-background-red ">
              VÉ CỦA BẠN
            </Typography.Text>
          </div>
        </div>
      </div>

      <div className="image-lisa">
        <Image src={Lisa} preview={false}></Image>
      </div>
    </div>
  );
}
export default Trangchu;
