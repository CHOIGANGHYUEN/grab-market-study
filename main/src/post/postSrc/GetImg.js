import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
let imgs = [
  {
    imgUrl: "images/김진혁이준사진.jpg",
  },
  {
    imgUrl: "images/진혁이를위한브런치.jpg",
  },
  {
    imgUrl: "images/지도캡쳐본.png",
  },
];
function GetImg() {
  const [img, setImgs] = React.useState(0);
  const nextImage = () => {
    if (img < imgs.length - 1) setImgs(img + 1);
    console.log(img);
  };
  const prevImage = () => {
    if (img > 0) setImgs(img - 1);
    console.log(img);
  };
  return (
    <div className="imgUrl">
      <img src={"/" + imgs[img].imgUrl} alt="이미지 안뜸" />
      <Button
        onClick={prevImage}
        type="primary"
        id="prevImg"
        style={{
          paddingLeft: "3px",
          paddingTop: "1px",
          fontSize: "5px",
          width: "50px",
          height: "20px",
        }}
      >
        prevImg
      </Button>
      <Button
        onClick={nextImage}
        type="primary"
        id="nextImg"
        style={{
          paddingLeft: "3px",
          paddingTop: "1px",
          fontSize: "5px",
          width: "50px",
          height: "20px",
        }}
      >
        nextImg
      </Button>
    </div>
  );
}
export default GetImg;
