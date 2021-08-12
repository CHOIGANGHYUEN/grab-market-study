import "antd/dist/antd.css";
import "post/index.css";
import { Carousel } from "antd";
import Comment from "post/postSrc/Comment";
import React from "react";
import GetImg from "post/postSrc/GetImg";
import InteractionComponent from "post/postSrc/interactionComponent";
import { getMyName, getMyProfileImg, ChangeUser } from "users/index";

let post = [
  {
    author_imgUrl: "logo192.png",
    author_name: "1page",
    map_imgUrl: "images/지도캡쳐본.png",
    post: "김진혁이 준 사진",
  },
  {
    author_imgUrl: "logo192.png",
    author_name: "2page",
    map_imgUrl: "images/지도캡쳐본.png",
    post: "날씨 맑음",
    comments: "",
  },
];
function PostComponent() {
  return (
    <div>
      <div id="post">
        <div id="author-space">
          <ChangeUser></ChangeUser>
          <img src={post[0].author_imgUrl}></img>
          <div id="author-profile">{post[0].author_name}</div>
        </div>
        <div className="map">
          <Carousel>
            <GetImg id="get_Img"></GetImg>
          </Carousel>
        </div>
        <div id="interaction">
          <InteractionComponent></InteractionComponent>
        </div>
        <div id="social_space">
          <div id="main-comment">{post[0].post}</div>
          <Comment></Comment>
        </div>
      </div>
    </div>
  );
}
export default PostComponent;
