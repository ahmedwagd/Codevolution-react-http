import React, { Component, Fragment } from 'react';

import axios from 'axios';

class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      errorMsg: ''
    }
    this.openWindow = this.openWindow.bind(this)
  }
  componentDidMount() {
    // This method  will be excuted when the component mount for the first time and only excuted once during the component lifecycle
    //  Perfect place to make a Get request
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res);
        this.setState({ posts: res.data })
      })
      .catch(error => {
        console.log(error);
        this.setState({ errorMsg: "Error reteriving data" })
      })
  }
  openWindow(id) {
    console.log(id);

    window.open(`https://jsonplaceholder.typicode.com/posts/${id}`, '_blank')
  }
  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        List of posts
        <br />
        {
          posts.length ?
            posts.map(post => (
              <Fragment key={post.id}><button onClick={() => { this.openWindow(post.id) }}>{post.title}</button><br /></Fragment>
            )) :
            null
        }
        {
          errorMsg ? <div>{errorMsg}</div> : null
        }
      </div>
    );
  }
}

export default PostList;