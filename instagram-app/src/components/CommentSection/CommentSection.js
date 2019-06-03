import React from 'react';

function CommentSection(comment) {
  return (
    <div className="CommentSection">
     comments.map( (element) => (
       <div> 
         <span className="commenter">{comment.username}</span>
         {comment.text}
       </div>
     ))

    </div>
  );
}

export default CommentSection;
