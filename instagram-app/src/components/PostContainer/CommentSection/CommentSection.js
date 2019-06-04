import React from "react";
import propTypes from "prop-types";
import Moment from "./Moment.js";

class CommentSection extends React.Component {
  
  constructor(props){
    super(props);
    this.state ={
      comments: props.element.comments,
      newComment: "",
    }
  }

  render() {
    return (
      <div>
        {this.props.element.comments.map(element => (
          <div className="marginleft" key={element.text}>
            <span className="bold">{element.username} </span> {element.text}
          </div>
        ))}

        <Moment time={this.props.element.timestamp} />

        <form onSubmit={() => console.log("text")}>
          <input
            onChange={(event) => this.setState( {newComment: event.target.value} )
            }
            className="comment spacebottop commentbox marginleft"
            value="Add a comment..."
            type="text"
          />
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  element: propTypes.object.isRequired,
};

export default CommentSection;
