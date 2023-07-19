import React, { useEffect, useState } from "react";
import { Image, Typography } from "antd";
import { useParams } from "react-router-dom";

import { EventData } from "../../firebase/eventSlice";
import Background from "../../Component/SlideMenu";
import framesukien2 from "../../image/framesukien2.svg";
import leftflag from "../../image/leftflag.svg";
import rightflag from "../../image/rightflag.svg";
import calendaryellow from "../../image/calendaryellow.svg";

import { db } from "../../firebase/firebase";
import "../../css/chitietsukien.css";

function ChiTietSuKien() {
  const { id } = useParams<{ id: string }>();
  const [events, setEvents] = useState<EventData | null>(null);

  useEffect(() => {
    async function fetchEvent() {
      try {
        const eventRef = db.collection("suKiens").doc(id);
        const dataRef = await eventRef.get();
        if (dataRef.exists) {
          const data = dataRef.data() as EventData;
          setEvents(data);
          console.log(id);
        } else {
          console.log("error");
        }
      } catch (err) {}
    }
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

      <div>
        <div className="title-sukien-chitiet">
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
            {events?.sukien}
          </Typography.Title>
        </div>
        <div className="bg-sukien-chitiet-shadow"></div>
        <div className="bg-sukien-chitiet"></div>
        <div className="bg-sukien-chitiet-content">
          <div className="sukien-chitiet-content-1">
            <Image
              src={events?.image1}
              preview={false}
              style={{ borderRadius: "1rem", height: "250px" }}
            />
            <br />
            <div className="sukien-chitiet-calendar">
              <Image
                src={calendaryellow}
                preview={false}
                style={{ marginTop: "15px" }}
              />
              <p>{events?.timeStart}</p>
              <p>-</p>
              <p>{events?.timeEnd}</p>
            </div>
            <p className="card-sukien-title">{events?.name}</p>
            <p className="card-sukien-price" style={{ marginTop: "-20px" }}>
              {events?.price}.VNĐ
            </p>
          </div>
          <div className="sukien-chitiet-content-2">
            <Typography.Text style={{ fontSize: "15px" }}>
              <span style={{ color: "orange" }} className="chitiet-content-2">
                {events?.cotent2.slice(0, 11)}
              </span>
              <strong>{events?.cotent2.slice(11)}</strong>
            </Typography.Text>
          </div>
          <div className="sukien-chitiet-content-3">
            <Image
              src={events?.image}
              className="image-sukien-chitiet-content-3"
              preview={false}
            />
            <br />
            <br />
            <Typography.Text className="text-sukien-chitiet-content-3">
              {events?.content3}
            </Typography.Text>
          </div>
          <div className="sukien-chitiet-content-4">
            <Typography.Text className="text-sukien-chitiet-content-3">
              {events?.content3}
            </Typography.Text>
            <br />
            <br />
            <Image
              src={events?.image}
              className="image-sukien-chitiet-content-3"
              preview={false}
            />
          </div>
        </div>
      </div>

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
