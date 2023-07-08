import React, { useState } from "react";
import Background from "../../Component/SlideMenu";
import { Button, Input, Space, Typography } from "antd";
import Alex from "../../image/Alex.svg";
import { Image } from "antd";
import address from "../../image/address.svg";
import mail from "../../image/mail.svg";
import telephone from "../../image/telephone.svg";
function Lienhe() {
  const [isSent, setIsSent] = useState(false);

  const handleContactSubmit = () => {
    // Xử lý logic gửi liên hệ ở đây

    // Sau khi gửi thành công, đặt isSent thành true
    setIsSent(true);
  };

  const handleCloseModal = () => {
    setIsSent(false);
  };
  return (
    <div>
      <Background />
      <br />
      <div className="title-lienhe">
        <Typography.Title
          className="bold-park"
          style={{
            color: "#fff",
            fontSize: "60px",
            fontStyle: "normal",
            fontWeight: "900",
            lineHeight: "100px",
          }}
        >
          Liên hệ
        </Typography.Title>
      </div>

      <div style={{ position: "relative" }}>
        <div className="lienhe-bg-1"></div>
        <div className="lienhe-bg-2"></div>
        <div className="lienhe-bg-3">
          <Typography.Text className="lienhe-bg-3-text montserrat">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut
            posuere ex facilisis.{" "}
          </Typography.Text>
          <Space className="lienhe-input-ten-email">
            <Input placeholder="Tên" className="lienhe-input-ten"></Input>
            <Input placeholder="Email" className="lienhe-input-email"></Input>
          </Space>
          <Space className="lienhe-input-sdt-dc">
            <Input
              placeholder="Số điện thoại"
              className="lienhe-input-ten"
            ></Input>
            <Input placeholder="Địa chỉ" className="lienhe-input-email"></Input>
          </Space>
          <Input
            placeholder="Lời nhắn"
            className="lienhe-input-loinhan"
          ></Input>
          <div className="lienhe-bg-button-guilienhe">
            <div className="lienhe-bg-button-guilienhe-shadow"></div>
            {/* <Button className="bold-park lienhe-button-guilienhe">
              Gửi liên hệ
            </Button> */}
            <div>
              <Button
                className="bold-park lienhe-button-guilienhe"
                onClick={handleContactSubmit}
              >
                Gửi liên hệ
              </Button>
              {isSent && (
                <div className="modal-overlay">
                  <div className="modal-content">
                    <div className="modal-close" onClick={handleCloseModal}>
                      X
                    </div>
                    <div className="modal-message">
                      <Typography.Text>
                        Gửi liên hệ thành công. <br />
                        Vui lòng kiên nhẫn đợi phản hồi từ chúng tôi, bạn nhé!
                      </Typography.Text>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="Alex">
        <Image src={Alex} preview={false}></Image>
      </div>
      <div className="lienhe-background-right">
        {/* background address */}
        <div className="lienhe-bg-address-shadow"></div>
        <div className="lienhe-bg-address"></div>
        <div className="lienhe-bg-address-content">
          <Space>
            <Image
              src={address}
              preview={false}
              className="lienhe-image-address"
            ></Image>
            <Typography.Text className="lienhe-bold-title montserrat">
              Địa chỉ:
            </Typography.Text>
          </Space>
          <Typography.Text className="lienhe-text-address">
            86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh
          </Typography.Text>
        </div>
        {/* background email */}

        <div className="lienhe-bg-email-shadow"></div>
        <div className="lienhe-bg-email"></div>
        <div className="lienhe-bg-email-content">
          <Space>
            <Image
              src={mail}
              preview={false}
              className="lienhe-image-address"
            ></Image>
            <Typography.Text className="lienhe-bold-title-email montserrat">
              Email:
            </Typography.Text>
          </Space>
          <Typography.Text className="lienhe-text-email">
            investigate@your-site.com
          </Typography.Text>
        </div>
        {/* background phone */}
        <div className="lienhe-bg-phone-shadow"></div>
        <div className="lienhe-bg-phone"></div>
        <div className="lienhe-bg-phone-content">
          <Space>
            <Image
              src={telephone}
              preview={false}
              className="lienhe-image-address"
            ></Image>
            <Typography.Text className="lienhe-bold-title-email montserrat">
              Điện thoại
            </Typography.Text>
          </Space>
          <Typography.Text className="lienhe-text-email">
            +84 145 689 798
          </Typography.Text>
        </div>
      </div>
    </div>
  );
}
export default Lienhe;
