import React from "react";
import { Input, Button } from "antd";
import {
  getMyName,
  getMyProfileImg,
  getOtherName,
  getOtherProfileImg,
  getId,
} from "users/index";

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      replies: [
        {
          img: "",
          name: "",
          text: "",
        },
      ],
      newReply: "",
    };
  }

  textChange = (e) => {
    this.setState({
      newReply: e.target.value,
    });
  };
  textUpload = () => {
    let arr = this.state.replies;
    arr.push({
      img: getOtherProfileImg(getId()),
      name: getOtherName(getId()),
      text: this.state.newReply,
    });
    this.setState({
      replies: arr,
      newReply: "",
    });
  };
  pressEnter = (e) => {
    if (e.key === "Enter" && this.state.newReply) {
      this.textUpload();
      e.target.value = "";
    }
  };

  render() {
    return (
      <div>
        <ul id="read_comment">
          {this.state.replies.map((el) => (
            <li id="test">
              <div id="user_comment">
                <img src={el.img}></img>
                <span>{el.name}</span>
                <span>{el.text}</span>
              </div>
            </li>
          ))}
        </ul>
        <div id="comment">
          <div id="profile_img">
            <img src={getMyProfileImg(getId())}></img>
          </div>
          <div id="profile_name">
            <span id="name">{getMyName(getId())}</span>
          </div>
          <div className="Input_Commponent">
            <Input
              type="text"
              placeholder="댓글 달기..."
              onChange={this.textChange}
              onKeyPress={this.pressEnter}
              value={this.state.newReply}
              size="middle"
              id="Input_Comment"
            ></Input>
            <Button
              id="upload_comment_btn"
              type="primary"
              size="middle"
              style={{
                textAlign: "center",
                textJustify: "center",
                paddingLeft: "3px",
                fontSize: "5px",
                width: "30px",
                height: "30px",
              }}
              onClick={this.textUpload}
            >
              게시
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Comment;
