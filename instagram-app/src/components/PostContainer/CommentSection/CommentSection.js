import React from "react";
import propTypes from "prop-types";

function CommentSection(props) {
  return props.comments.map(element => (
    <div className="marginleft">
      <span className="bold">{element.username} </span> {element.text}
    </div>
  ));
}

CommentSection.propTypes = {
  comments: propTypes.arrayOf(propTypes.object).isRequired,
  className: propTypes.string,
  username: propTypes.string.isRequired,
  element: propTypes.object.isRequired,
  text: propTypes.string.isRequired
};

CommentSection.defaultProps = {
  className : "",
};

export default CommentSection;
