import React from 'react';
import Header from './Header.js';
/* import CommentSection from "./components/CommentSection/CommentSection.js" */

function PostContainer(data) {
  return (
    <div className="PostContainer">
        <Header thumbnail= {data.thumbnail} name={data.username} />
        <img src = {data.imgURL} alt="img"/>
        <div>
            <span>{data.likes} likes</span>
        </div>
    </div>
  );
}

export default PostContainer;
