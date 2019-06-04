import React from "react";
import PostHeader from "./PostHeader.js";
import CommentSection from "./CommentSection/CommentSection.js";
import Moment from "./Moment.js"
import propTypes from "prop-types"

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

PostContainer.propTypes = {
    element : propTypes.shape(
      {
      username: propTypes.string.isRequired,
      thumbnailUrl: propTypes.string.isRequired,
      imageUrl: propTypes.string.isRequired,
      likes: propTypes.number.isRequired,
      timestamp: propTypes.string.isRequired,
      comments : propTypes.shape(
        {
          username: propTypes.string.isRequired,
          text: propTypes.string.isRequired,
        }
      )
      }
    ),
    className: propTypes.string,
}

PostContainer.defaultProps = {
  className : "",
};

export default PostContainer;
