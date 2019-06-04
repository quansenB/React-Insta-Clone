import React from "react";
import PostHeader from "./PostHeader.js";
import CommentSection from "./CommentSection/CommentSection.js";
import Moment from "./Moment.js"

function PostContainer(props) {
  return props.data.map(element => (
    <div className="postContainer grey-border">
      <PostHeader element={element} />
      <div className="imgDiv">
      <img className="img" src={element.imageUrl} alt="Postimage" />
      </div>
      <div className="bold spacebottop marginleft">{element.likes} likes</div>
      <CommentSection comments={element.comments} />
      <Moment className="grey marginleft smaller" time={element.timestamp}/>
      <input className="comment spacebottop commentbox marginleft"value="Add a comment..." type="text" />
    </div>
  ));
}

export default PostContainer;
