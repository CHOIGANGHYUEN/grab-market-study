import React from "react";
class Comment extends React.Component{
  render(){
    constructor(){
      super();
      this.state = {
        newReply: "",
        replies: [{ text: ""}]
      };
    }
    textChange=(e)=>{
      this.setState({newReply:e.target.value})
    }
    buttonClick=()=>{
      let arr=this.state.replies;
      arr=arr.concat({text :})
    }
  }