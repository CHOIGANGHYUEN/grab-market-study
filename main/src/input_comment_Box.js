import "antd/dist/antd.css";
import { Button, Input } from "antd";
function InputCommponent() {
  return (
    <div className="Input_Commponent">
      <Input size="middle" id="Input_Comment"></Input>
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
      >
        게시
      </Button>
    </div>
  );
}
export default InputCommponent;
