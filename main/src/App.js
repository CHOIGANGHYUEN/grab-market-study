import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Comment, Avatar, Form, Button, List, Input } from "antd";
import moment from "moment";

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
      </div>
      <div id="body">
        <div id="post">
          <div id="author-space">
            <img src="logo192.png"></img>
            <div id="author-profile">작성자</div>
          </div>
          <div id="map">
            <img src="images\지도캡쳐본.png"></img>
          </div>
          <div id="interaction">
            <div id="good_button">
              <Button size="small">좋아요</Button>
            </div>
            <div id="share_button">
              <Button size="small">공유</Button>
            </div>
          </div>
          <div id="social_space">
            <div id="main-comment">2021-08-03 날씨좋음</div>
            <div id="comment-space">
              <div id="read_comment">댓글들</div>
              <div id="comment"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">footer</div>
    </div>
  );
}

export default App;
