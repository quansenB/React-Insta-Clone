import React from "react";

function CommentSection(props) {
  return props.comments.map(element => (
    <div className="marginleft">
      <span className="bold">{element.username} </span> {element.text}
    </div>
  ));
}

export default CommentSection;
