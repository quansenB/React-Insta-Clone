import React from "react";
import SearchBar from "../SearchBar/SearchBar.js";
import PostContainer from "./PostContainer.js";
import uuid from "uuid";
import Login from "../Login/Login.js";

function PostPage(props) {
  return (
    <div className="App">
      {props.isAuthed===true ? (
        ((
          <SearchBar
            searchValue={props.parent.state.search}
            onChange={props.parent.onChange}
            onSearch={props.parent.onSearch}
          />
        ),
        props.parent.state.filteredData.length
          ? props.parent.state.filteredData.map(element => (
              <PostContainer
                element={element}
                key={uuid()}
                uuid={element.uuid}
                onClickHeart={props.parent.onClickHeart}
              />
            ))
          : props.parent.state.data.map(element => (
              <PostContainer
                element={element}
                key={uuid()}
                uuid={element.uuid}
                onClickHeart={props.parent.onClickHeart}
              />
            )))
      ) : (
        <Login
          onPwChange={props.parent.onPwChange}
          onUsernameChange={props.parent.onUsernameChange}
          onLogin={props.parent.onLogin}
          valueUsername={props.parent.state.currentUsername}
          valuePw={props.parent.state.currentPw}
        />
      )}
    </div>
  );
}

export default PostPage;
