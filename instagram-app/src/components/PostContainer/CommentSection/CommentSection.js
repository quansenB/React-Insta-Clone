import React from "react";
import propTypes from "prop-types";
import Moment from "./Moment.js";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.element.comments,
      newComment: "Add"
    };
  }

  onChange = event => {
    this.setState({ newComment: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      comments: this.state.comments.concat({
        username: "Iñaki",
        text: this.state.newComment
      })
    });
    console.log(this.state.comments);
  };

  render() {
    return (
      <div>
        {this.state.comments.map(element => (
          <div className="marginleft" key={element.text}>
            <span className="bold">{element.username} </span> {element.text}
          </div>
        ))}

        <Moment time={this.props.element.timestamp} />

        <form onSubmit={this.onSubmit}>
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
