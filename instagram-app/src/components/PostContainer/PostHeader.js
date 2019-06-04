import React from "react";

function PostHeader(props) {
  return (
    <div className="header flexrow">
      <img
        className="thumbnail"
        src={props.element.thumbnailUrl}
        alt="thumbnail"
      />

      <span className="bold">{props.element.username}</span>
    </div>
  );
}

export default PostHeader;
