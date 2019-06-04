import React from "react";
import propTypes from "prop-types"

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

PostHeader.propTypes = {
  className: propTypes.string,
  src: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
}

PostHeader.defaultProps = {
  className : "",
};

export default PostHeader;
