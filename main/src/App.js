import "./App.css";
import "antd/dist/antd.css";
import PostComponent from "./post";
import { Button } from "antd";
import React from "react";

function App() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
        <PostComponent></PostComponent>
      </div>
      <div id="footer">footer</div>
    </div>
  );
}

export default App;
