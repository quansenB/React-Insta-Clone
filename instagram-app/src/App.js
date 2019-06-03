import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar.js";
import PostContainer from "./components/PostContainer/PostContainer.js";
import CommentSection from "./components/CommentSection/CommentSection.js";
import dummyData from "./dummy-data.js";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <SearchBar />
      
        {dummyData.map( element => {
          return (
          <div>
            <PostContainer data={element} />
            <CommentSection data={element.comments} />
          </div>
          )
          }
        )
        }
      
    </div>
  );
}

export default App;
