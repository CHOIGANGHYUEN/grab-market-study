import React from "react";
import { Input, Button } from "antd";
let user_comment = [
  {
    commenter_profile_imgUrl: "images/쩡게이.jpg",
    commenter_name: "쩡게이",
  },
];
class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      commenter: [
        {
          profile_img: "",
          profile_name: "",
        },
      ],
      newReply: "",
      replies: [
        {
          text: "",
        },
      ],
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
        <div id="comment-space">
          <div>
            <ul id="read_comment">
              {this.state.replies.map((el) => (
                <li>{el.text}</li>
              ))}
            </ul>
          </div>
          <div id="comment">
            <div id="profile_img">
              <img src={user_comment[0].commenter_profile_imgUrl}></img>
            </div>
            <div id="profile_name">
              <span id="name">{user_comment[0].commenter_name}</span>
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
                onClick={this.add}
              >
                게시
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Comment;
