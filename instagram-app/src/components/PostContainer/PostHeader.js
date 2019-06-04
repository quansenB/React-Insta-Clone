import React from "react";
import propTypes from "prop-types"

function PostHeader(props) {
  
  return (
    <div className="header flexrow">
      <img
        className="thumbnail"
        src={props.src}
        alt="thumbnail"
      />

      <span className="bold">{props.username}</span>
    </div>
  );
}

PostHeader.propTypes = {
  src: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
}

PostHeader.defaultProps = {
  className : "",
};

export default PostHeader;
