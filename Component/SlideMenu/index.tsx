import React from "react";
import Header from "../Header";
import { Image } from "antd";
import backgroundanh from "../../image/backgroundanh.svg";

function Background() {
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
          borderBottomLeftRadius: "6.5rem",
          borderBottomRightRadius: "6.5rem",
        }}
      />
    </div>
  );
}
export default Background;
