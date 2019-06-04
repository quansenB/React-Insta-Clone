import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar.js";
import PostContainer from "./components/PostContainer/PostContainer.js";
import dummyData from "./dummy-data.js";
import propTypes from "prop-types";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <PostContainer data={dummyData} />
    </div>
  );
}

App.propTypes = {
  dummyData: propTypes.arrayOf(propTypes.object)
};

export default App;
