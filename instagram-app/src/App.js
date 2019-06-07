import React from "react";
import "./App.css";
import dummyData from "./dummy-data.js";
import PostPage from "./components/PostContainer/PostPage.js";

localStorage.setItem("Username", "Iñaki");
localStorage.setItem("Password", "password123");
sessionStorage.setItem("isAuthed", false);

const withAuth = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isAuthed: sessionStorage.getItem("isAuthed"),
        currentUsername: "",
        currentPw: "",
        errorCssDisplay: ""
      };
    }

    componentDidMount = () => {
      console.log(this.state.isAuthed);
    };

    onPwChange = event => {
      event.preventDefault();
      this.setState({ currentPw: event.target.value });
    };

    onUsernameChange = event => {
      event.preventDefault();
      this.setState({ currentUsername: event.target.value });
    };

    onLogin = event => {
      event.preventDefault();
      if (
        this.state.currentUsername === localStorage.getItem("Username") &&
        this.state.currentPw === localStorage.getItem("Password")
      ) {
        localStorage.setItem("isAuthed", true);
        this.setState({ isAuthed: true });
      } else {
        this.setState({ errorCssDisplay: "CssDisplay" });
      }
    };

    render() {
      return (
        <Component
          isAuthed={this.state.isAuthed}
          parent={this}
          cssDisplay={this.state.errorCssDisplay}
          {...this.props}
        />
      );
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
        <PostPageWithAuth parent={this} />
      </div>
    );
  }
}

export default App;
