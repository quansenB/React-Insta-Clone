import React from "react";
import SearchBar from "../SearchBar/SearchBar.js";
import PostContainer from "./PostContainer.js";
import uuid from "uuid";


function PostPage(props) {
  return (
    <div className="App">
        <SearchBar
          searchValue={props.parent.state.search}
          onChange={props.parent.onChange}
          onSearch={props.parent.onSearch}
        />
        {props.parent.state.filteredData.length
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
            ))}
      </div>
  );
}

export default PostPage;
