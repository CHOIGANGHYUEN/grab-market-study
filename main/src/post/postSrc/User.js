import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";

let Users = [
  {
    id: 0,
    name: "정게이",
    profileImg: "images/쩡게이.jpg",
  },
  {
    id: 1,
    name: "김진혁",
    profileImg: "images/김진혁이준사진.jpg",
  },
  {
    id: 2,
    name: "댓글사기꾼",
    profileImg: "images/엉덩이이쁜누나.jpeg",
  },
];
const getMyName = () => {
  return `${Users[0].name}`;
};
const getMyProfileImg = () => {
  return `${Users[0].profileImg}`;
};
const getOtherName = (user) => {
  return `${Users[user].name}`;
};
const getOtherProfileImg = (user) => {
  return `${Users[user].profileImg}`;
};
var id = 0;

const getId = () => {
  return id;
};
function ChangeUser() {
  const [user, setUser] = React.useState(0);
  const nextUser = () => {
    if (user < Users.length - 1) {
      setUser(user + 1);
      console.log(user);
      id = user;
    }
  };
  const prevUser = () => {
    if (user > 0) {
      setUser(user - 1);
      console.log(user);

      id = user;
    }
  };

  return (
    <div>
      <div
        style={{
          paddingLeft: "3px",
          paddingTop: "1px",
          fontSize: "5px",
          width: "50px",
          height: "20px",
        }}
      >
        {id}
      </div>
      <Button
        size="small"
        onClick={prevUser}
        style={{
          paddingLeft: "3px",
          paddingTop: "1px",
          fontSize: "5px",
          width: "50px",
          height: "20px",
        }}
      >
        prev
      </Button>
      <Button
        size="small"
        onClick={nextUser}
        style={{
          paddingLeft: "3px",
          paddingTop: "1px",
          fontSize: "5px",
          width: "50px",
          height: "20px",
        }}
      >
        next
      </Button>
    </div>
  );
}
export {
  getMyName,
  getMyProfileImg,
  getOtherName,
  getOtherProfileImg,
  ChangeUser,
  getId,
};
