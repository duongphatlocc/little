import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Typography, Space, Image } from "antd";
import { RootState } from "../../firebase/reducer";
import { fetchItems } from "../../firebase/action";
import Background from "../../Component/SlideMenu";
import leftdown from "../../image/leftdown.svg";
import Framesukien from "../../image/Framesukien.svg";
import leftflag from "../../image/leftflag.svg";
import rightflag from "../../image/rightflag.svg";
import calendaryellow from "../../image/calendaryellow.svg";
import { useNavigate } from "react-router-dom";
import "../../css/sukien.css";

const Sukien: React.FC = () => {
  const items = useSelector((state: RootState) => state.items);
  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleViewDetail = (id: string) => {
    navigate(`/chiTietSuKien/${id}`);
  };

  return (
    <div>
      <Background />
      <div style={{ position: "relative" }} className="bg-test">
        <div className=" title-sukien">
          <Typography.Title
            className="bold-park"
            style={{
              color: "#fff",
              fontSize: "70px",
              fontStyle: "normal",
              fontWeight: "900",
              lineHeight: "100px",
            }}
          >
            Sự kiện nổi bật
          </Typography.Title>
        </div>
        <div className="bg-sukien-content">
          <Space>
            <div className="left-down-sukien">
              <div className="bg-left-down-shadow"></div>
              <div className="bg-left-down"></div>
              <Image
                src={leftdown}
                preview={false}
                style={{ width: "50px" }}
                className="left-down"
              />
            </div>
            <div className="right-down-sukien">
              <div className="bg-right-down-shadow"></div>
              <div className="bg-right-down"></div>
              <Image
                src={leftdown}
                preview={false}
                className="right-down-icon"
                style={{ width: "50px" }}
              />
            </div>
            <div className="card-sukien">
              {items.map((item) => (
                <Card
                  key={item.idSk}
                  hoverable
                  style={{
                    width: "285px",
                    height: "auto",
                    right: "10px",
                    marginRight: "10px",
                  }}
                  cover={<img alt={item.name} src={item.image} />}
                >
                  <b className="card-sukien-idSk">{item.sukien}</b>
                  <p className="card-sukien-title">{item.name}</p>
                  <div style={{ marginTop: "-20px" }}>
                    <Image
                      src={calendaryellow}
                      preview={false}
                      style={{ marginTop: "-5px" }}
                    />
                    <p className="card-sukien-time">
                      {item.timeStart} - {item.timeEnd}
                    </p>
                  </div>
                  <br />
                  <div style={{ marginTop: "-25px" }}>
                    <b className="card-sukien-price">{item.price} VNĐ</b>
                  </div>

                  <br />
                  <div style={{ position: "relative" }}>
                    <br />
                    <div className="card-sukien-button-shadow"></div>
                    <Button
                      className="card-sukien-button bold-park"
                      onClick={() => handleViewDetail(item.idSk)}
                    >
                      Xem chi tiết
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Space>
        </div>
      </div>

      <Image src={Framesukien} preview={false} className="frame-sukien" />

      <div>
        <Image
          src={leftflag}
          preview={false}
          className="left-flag"
          style={{ width: "450px" }}
        />
      </div>
      <div>
        <Image
          src={rightflag}
          preview={false}
          className="right-flag"
          style={{ width: "450px" }}
        />
      </div>

      <br />
    </div>
  );
};

export default Sukien;
