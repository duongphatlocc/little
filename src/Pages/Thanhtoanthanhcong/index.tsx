import React, { useEffect, useState } from "react";
import Background from "../../Component/SlideMenu";
import { Typography, Image, Card, Space, Button } from "antd";
import Alvin from "../../image/Alvin.svg";
import leftdown from "../../image/leftdown.svg";
import tich from "../../image/tich.svg";
import { ThanhtoanData } from "../../firebase/thanhtoanSlice";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import "../../css/thanhtoanthanhcong.css";

function ThanhToanThanhCong() {
  const { id } = useParams();
  const [thanhtoans, setThanhtoans] = useState<ThanhtoanData | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

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
        console.error("Error fetching thanhtoan:", err);
      }
    }
    fetchThanhtoan();
  }, [id]);

  const renderCards = (quantity: number) => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    const cards = [];
    for (let i = startIndex; i < Math.min(quantity, endIndex); i++) {
      cards.push(
        <Space>
          <Card
            key={i}
            style={{
              width: "230px",
              height: "360px",
              borderRadius: "1rem",
              marginLeft: "10px",
              marginRight: "20px",
            }}
          >
            <Image
              src={thanhtoans?.image}
              style={{ paddingLeft: "12px" }}
              preview={false}
            />
            <br />
            <br />
            <Typography.Text className="card-ma-qr">
              {thanhtoans?.ma}
            </Typography.Text>
            <br />

            <Typography.Text
              className="card-ve-cong"
              style={{ paddingTop: "20px" }}
            >
              {thanhtoans?.tenVe}
            </Typography.Text>
            <br />
            <Typography.Text className="card-">---</Typography.Text>
            <p>Ngày sử dụng: {thanhtoans?.ngaySuDung}</p>
            <Image src={tich} preview={false} style={{ paddingLeft: "65px" }} />
            {/* Card content */}
          </Card>
        </Space>
      );
    }
    return cards;
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

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
          <div>
            <Button
              className="nut-trai"
              disabled={currentPage === 1}
              onClick={goToPreviousPage}
            ></Button>
            <Image
              src={leftdown}
              preview={false}
              className="thanhtoan-thanhcong-image-leftdown"
            />
          </div>

          <div className="card-thanhtoan-thanhcong">
            {renderCards(Number(thanhtoans?.soLuongVe))}
          </div>
          <div>
            <p className="slv">Số lượng vé: {thanhtoans?.soLuongVe}</p>
            <p className="trang">Trang {currentPage}/3</p>
          </div>
          <div>
            <div className="bg-red-left-shadow"></div>
            <div className="bg-red-left">
              <div className="bold-park btn-taive">Tải vé</div>
            </div>
            <div className="bg-red-right-shadow"></div>
            <div className="bg-red-right">
              <div className="bold-park btn-taive">Gửi Email</div>
            </div>
          </div>
          <div className="thanhtoan-thanhcong-bg-rightdown-shadow"></div>
          <div className="thanhtoan-thanhcong-bg-rightdown"></div>
          <Button
            className="nut-phai"
            disabled={currentPage === 3}
            onClick={goToNextPage}
          ></Button>
          <Image
            src={leftdown}
            preview={false}
            className="thanhtoan-thanhcong-image-rightdown"
          />
        </Space>
      </div>
      <Image src={Alvin} preview={false} className="Alvin" />
    </div>
  );
}

export default ThanhToanThanhCong;
