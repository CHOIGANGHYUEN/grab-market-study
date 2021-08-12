import "antd/dist/antd.css";
import { Button } from "antd";
import React from "react";
function InteractionComponent() {
  const [good, setGood] = React.useState(0);
  const click_goodBTN = () => {
    setGood(good + 1);
  };
  const copyLink = () => {
    alert("localhost:3000/");
  };
  return (
    <div id="interaction">
      <div id="good_button">
        <Button onClick={click_goodBTN} size="small">
          좋아요
        </Button>
        <span id="goodCount">{good}</span>
      </div>
      <div id="share_button">
        <Button size="small" onClick={copyLink}>
          공유
        </Button>
      </div>
    </div>
  );
}
export default InteractionComponent;
