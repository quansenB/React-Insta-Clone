import React from "react";
import PostHeader from "./PostHeader.js";
import CommentSection from "./CommentSection/CommentSection.js";

function PostContainer(props) {
  return props.data.map(element => (
    <div className="postContainer grey-border">
      <PostHeader element={element} />
      <div className="imgDiv">
      <img className="img" src={element.imageUrl} alt="Postimage" />
      </div>
      <div className="bold spacebottop marginleft">{element.likes} likes</div>
      <CommentSection comments={element.comments} />
      <input className="comment spacebottop commentbox marginleft"value="Add a comment..." type="text" />
    </div>
  ));
}

export default PostContainer;
