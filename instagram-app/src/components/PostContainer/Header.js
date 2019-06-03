import React from 'react';
/* import { directive } from '@babel/types'; */
/* import CommentSection from "./components/CommentSection/CommentSection.js" */

function Header(thumbnail, username) {
  return (
    <div className="Header">
      <div className="thumbnail">
          <img src={thumbnail} alt = "thumbnail"></img>
      </div>
        <span>{username}</span>
    </div>
  );
}

export default Header;
