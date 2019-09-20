import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Post from './Post';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      userId: 1
    }
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
  }
  componentDidMount() {
    console.log('component did mount working?')

    axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then(response => {
        console.log('Result: ', response)
        this.setState({
          posts: response.data,

        })
      })
  }


  handleLeftClick(e) {
    console.log('left click works!')
    e.preventDefault();
    //set decrementing of user id
    var userId = this.state.userId - 1
    console.log(userId);
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    //set maximum user-id information available to 10
    if (userId >= 10) {
      //decrement user-id 
      // userId--;
      this.setState({
        userId
      })
    } else {
      userId = 1;
      this.setState({
        userId
      })
    }
    console.log("about to call axios with this url:", url)
    axios.get(url).then(result => {
      this.setState({
        posts: result.data
      })
    })
  }
  handleRightClick(e) {
    console.log('right click works!')
    e.preventDefault();
    var userId = this.state.userId + 1
    console.log(userId);
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    if (userId <= 10) {
      // userId++;
      this.setState({
        userId
      })
    } else {
      userId = 1;
      this.setState({
        userId
      })
    }
    console.log("axios call to this url:", url)
    axios.get(url).then(result => {
      this.setState({
        posts: result.data
      })
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        Project 3 Assessment
        User Cycle Posts
        </header>
        <h1>User Cycle Posts</h1>
          <form >
            <button  
            onClick={this.handleLeftClick}
            className="arrow" ><strong>←</strong></button>
            <button 
            onClick={this.handleRightClick} 
            className="arrow"><strong>→</strong></button>
          </form>
        {/* Display posts below */}
        <div >
        <Post posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default App;
