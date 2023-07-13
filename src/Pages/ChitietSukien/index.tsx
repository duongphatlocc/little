import React, { useEffect, useState } from "react";
import Background from "../../Component/SlideMenu";
import framesukien2 from "../../image/framesukien2.svg";
import { Image, Typography } from "antd";
import leftflag from "../../image/leftflag.svg";
import rightflag from "../../image/rightflag.svg";
import { db } from "../../Api/firebase";
import { useParams } from "react-router-dom";
import calendaryellow from "../../image/calendaryellow.svg";

interface EventData {
  id: string;
  name: string;
  price: number;
  image: string;
  timeStart: string;
  timeEnd: string;
  cotent2: string;
  image1: string;
  content3: string;
  sukien: string;
}

function ChiTietSuKien() {
  const { id } = useParams();
  const [event, setEvent] = useState<EventData | undefined>(undefined);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventRef = db.collection("suKiens").doc(id);
        const snapshot = await eventRef.get();
        if (snapshot.exists && snapshot.data()) {
          setEvent(snapshot.data() as EventData);
        } else {
          console.log("Sự kiện không tồn tại");
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchEvent();
  }, [id]);

  return (
    <div>
      <Background />

      <Image
        src={framesukien2}
        preview={false}
        className="frame-sukien-chitiet"
      />

      {event && (
        <div>
          <div className=" title-sukien-chitiet">
            <Typography.Title
              className="bold-park"
              style={{
                color: "#fff",
                fontSize: "49px",
                fontStyle: "normal",
                fontWeight: "900",
                lineHeight: "100px",
              }}
            >
              {event.sukien}
            </Typography.Title>
          </div>
          <div className="bg-sukien-chitiet-shadow"></div>
          <div className="bg-sukien-chitiet"></div>
          <div className="bg-sukien-chitiet-content">
            <div className="sukien-chitiet-content-1">
              <Image
                src={event.image1}
                preview={false}
                style={{ borderRadius: "1rem", height: "250px" }}
              />
              <br />
              <div className="sukien-chitiet-calendar">
                <Image
                  src={calendaryellow}
                  preview={false}
                  style={{ marginTop: "15px" }}
                ></Image>
                <p>{event.timeStart}</p>
                <p>-</p>
                <p>{event.timeEnd}</p>
              </div>
              <p className="card-sukien-title">{event.name}</p>
              <p className="card-sukien-price" style={{ marginTop: "-20px" }}>
                {event.price}.VNĐ
              </p>
            </div>
            <div className="sukien-chitiet-content-2">
              <Typography.Text style={{ fontSize: "15px" }}>
                <span style={{ color: "orange" }} className="chitiet-content-2">
                  {event.cotent2.slice(0, 11)}
                </span>
                <strong>{event.cotent2.slice(11)}</strong>
              </Typography.Text>
            </div>
            <div className="sukien-chitiet-content-3">
              <Image
                src={event.image}
                className="image-sukien-chitiet-content-3"
                preview={false}
              />
              <br />
              <br />
              <Typography.Text className="text-sukien-chitiet-content-3">
                {event.content3}
              </Typography.Text>
            </div>
            <div className="sukien-chitiet-content-4">
              <Typography.Text className="text-sukien-chitiet-content-3">
                {event.content3}
              </Typography.Text>
              <br />
              <br />
              <Image
                src={event.image}
                className="image-sukien-chitiet-content-3"
                preview={false}
              />
            </div>
          </div>
        </div>
      )}

      <Image
        src={leftflag}
        preview={false}
        className="left-flag-sukienchitiet"
        style={{ width: "470px" }}
      />
      <br />

      <Image
        src={rightflag}
        preview={false}
        style={{ width: "470px" }}
        className="right-flag-sukienchitiet"
      />
    </div>
  );
}

export default ChiTietSuKien;
