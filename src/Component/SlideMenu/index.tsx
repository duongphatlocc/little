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
          width: "96%",
          height: "auto",
          marginLeft: "25px",
          marginRight: "25px",
        }}
      />
      <Header />
    </div>
  );
}
export default Background;
