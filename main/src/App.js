import "./App.css";
import "antd/dist/antd.css";
import { Comment, Avatar, Form, Button, List, Input, Carousel } from "antd";
import React, { useState, useEffect } from "react";
import GetImg from "./GetImg";
import InputCommponent from "./input_comment_Box";
import InteractionComponent from "./interactionComponent";
import MyComponent from "./Comment";

function App() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  let comment = [
    {
      commenter_profile_imgUrl: "images/쩡게이.jpg",
      commenter_name: "쩡게이",
      comment: "안녕",
    },
    {
      commenter_profile_imgUrl: "images/쩡게이.jpg",
      commenter_name: "쩡게이",
      comment: "너 누구야",
    },
    {
      commenter_profile_imgUrl: "images/쩡게이.jpg",
      commenter_name: "쩡게이",
      comment: "나 알아?",
    },
  ];
  let post_img = [
    {
      img: "images/쩡게이.jpg",
    },
    {
      img: "images/지도캡쳐본.png",
    },
  ];
  let post = [
    {
      author_imgUrl: "logo192.png",
      author_name: "1page",
      map_imgUrl: "images/지도캡쳐본.png",
      post: "날씨 맑음",
      commenter_profile_imgUrl: "images/쩡게이.jpg",
      commenter_name: "쩡게이",
    },
    {
      author_imgUrl: "logo192.png",
      author_name: "2page",
      map_imgUrl: "images/지도캡쳐본.png",
      post: "날씨 맑음",
      comments: "",
      commenter_profile_imgUrl: "images/쩡게이.jpg",
      commenter_name: "쩡게이",
    },
  ];

  return (
    <div>
      <div id="header-space">
        <div id="logo_space">
          <div id="header-logo">
            <img src="images\길.png"></img>
          </div>
          <div id="header-text">GiiLL</div>
        </div>
        <div id="btn_post_upload">
          <Button type="primary" size="small">
            +
          </Button>
        </div>
      </div>
      <div id="body">
        <div id="post">
          <div id="author-space">
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
            <div id="comment-space">
              <div id="read_comment">{post[0].comments}</div>
              <div id="comment">
                <div id="profile_img">
                  <img src={post[0].commenter_profile_imgUrl}></img>
                </div>
                <div id="profile_name">
                  <span id="name">{post[0].commenter_name}</span>
                </div>
                <MyComponent />
                {/* <InputCommponent id="Input_Commponent"></InputCommponent> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">footer</div>
    </div>
  );
}

export default App;
