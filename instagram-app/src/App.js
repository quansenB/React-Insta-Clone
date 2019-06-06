import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar.js";
import PostContainer from "./components/PostContainer/PostContainer.js";
import dummyData from "./dummy-data.js";
import uuid from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData,
      filteredData: dummyData,
      search: "Search",
    };

  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  onClickHeart = (uuid) => {
    const postRight = this.state.data.filter(post => {
      return post.uuid === uuid;
    });
    postRight[0].likes = postRight[0].likes + 1;
    const abc = postRight[0];
    this.setState( {abc} );
  }

  
  onSearch = (event) => {
    event.preventDefault();
    console.log(this.state.search);
    this.setState({ search: event.target.value });
    const filtered = this.state.data.filter((entry) => {
      return entry.username === this.state.search;
    })
    console.log(filtered);
    this.setState({filteredData: filtered} );
  };

  onChange = (event) => {
    event.preventDefault();
    this.setState({ search: event.target.value });
  };

  onSearchClick = () =>{
    if(this.state.search === "Search"){
      this.setState({search : ""});
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar key={uuid()} default={this.state.search} onChange={this.onChange} onSearch={this.onSearch} onSearchClick={this.onSearchClick}/>
        {this.state.filteredData.map(element => (
          <PostContainer
            element={element}
            key={uuid()}
            uuid={element.uuid}
            onClickHeart={this.onClickHeart}
          />
        ))}
      </div>
    );
  }
}

export default App;
