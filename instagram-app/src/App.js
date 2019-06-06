import React from "react";
import "./App.css";
import dummyData from "./dummy-data.js";
import PostPage from "./components/PostContainer/PostPage.js";
import Login from "./components/Login/login";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData,
      filteredData: [],
      search: ""
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  onClickHeart = uuid => {
    const postRight = this.state.data.filter(post => {
      return post.uuid === uuid;
    });
    postRight[0].likes = postRight[0].likes + 1;
    const abc = postRight[0];
    this.setState({ abc });
  };

  onSearch = event => {
    event.preventDefault();
    const filtered = this.state.data.filter(entry => {
      return entry.username === this.state.search;
    });
    this.setState({ filteredData: filtered });
  };

  onChange = event => {
    event.preventDefault();
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <PostPage parent={this} />
      </div>
    );
  }
}

export default App;
