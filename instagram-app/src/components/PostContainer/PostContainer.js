import React from "react";
import PostHeader from "./PostHeader.js";
import propTypes from "prop-types";
import CommentSection from "./CommentSection/CommentSection.js";

function PostContainer(props) {
  return props.data.map(element => (
    <div className="postContainer grey-border" key={element.timestamp}>
      <PostHeader src={element.imageUrl} username={element.username} />
      <div className="imgDiv">
        <img className="img" src={element.imageUrl} alt="Postimage" />
      </div>
      <div className="bold spacebottop marginleft">{element.likes} likes</div>
      
      <CommentSection element={element} />
    </div>
  ));
}

PostContainer.propTypes = {
  element: propTypes.shape({
    username: propTypes.string.isRequired,
    thumbnailUrl: propTypes.string.isRequired,
    imageUrl: propTypes.string.isRequired,
    likes: propTypes.number.isRequired,
    timestamp: propTypes.string.isRequired,
    comments: propTypes.shape({
      username: propTypes.string.isRequired,
      text: propTypes.string.isRequired
    })
  })
};

PostContainer.defaultProps = {
  className: ""
};

export default PostContainer;
