import React from "react";
import propTypes from "prop-types";
import Moment from "./Moment.js";
import uuid from "uuid";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.element.comments,
      newComment: "Add a comment..."
    };
  }

  onChange = event => {
    this.setState({ newComment: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      comments: this.state.comments.concat({
        uuid: uuid(),
        username: "Iñaki",
        text: this.state.newComment
      }),
      newComment: "Add a comment..."
    });
  };

  onClick = event => {
    if (this.state.newComment === "Add a comment...")
      this.setState({
        newComment: ""
      });
  };


  render() {
    return (
      <div>
        {this.state.comments.map(element => (
          <div className="marginleft" key={uuid()}>
            <span className="bold">{element.username} </span> {element.text}
          </div>
        ))}

        <Moment time={this.props.element.timestamp} />

        <form onSubmit={this.onSubmit} onClick={this.onClick}>
          <input
            onChange={this.onChange}
            className="comment spacebottop commentbox marginleft"
            value={this.state.newComment}
            type="text"
          />
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  element: propTypes.object.isRequired
};

export default CommentSection;
