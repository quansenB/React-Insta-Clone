import React from "react";
import "./App.css";
import dummyData from "./dummy-data.js";
import PostPage from "./components/PostContainer/PostPage.js";

localStorage.setItem("Username", "Iñaki");
localStorage.setItem("Username", "password123");
sessionStorage.setItem("isAuthed", false);

const withAuth = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isAuthed: sessionStorage.getItem("isAuthed")
      };
    }

    onPwChange = () => {
      console.log("test");
    };

    onUsernameChange = () => {
      console.log("test");
    };

    onLogin = () => {
      console.log("test");
    };

    render() {
      return <Component isAuthed={this.state.isAuthed} parent={this} />;
    }
  };
};

const PostPageWithAuth = withAuth(PostPage);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData,
      filteredData: [],
      search: "",
      currentUsername: "",
      currentPw: ""
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
        <PostPageWithAuth />
      </div>
    );
  }
}

export default App;
