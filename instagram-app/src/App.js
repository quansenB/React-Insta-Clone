import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar.js";
import PostContainer from "./components/PostContainer/PostContainer.js";
import dummyData from "./dummy-data.js";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <PostContainer data={dummyData} />
      
    </div>
  );
}

export default App;
