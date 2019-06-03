import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar.js"
import PostContainer from "./components/PostContainer/PostContainer.js"

import DummyData from "./dummy-data"

function App() {
  return (
    <div className="App">
     <h1>Hello World</h1>
     <SearchBar/>
     <PostContainer/>
    </div>
  );
}

export default App;
