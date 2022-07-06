import React, { Fragment } from 'react'
import usePost from '../../hooks/usePost';

function PostListFunc() {
  const [post, errorMsg, openWindow] = usePost('https://jsonplaceholder.typicode.com/posts')
  return (
    <div>
      List of posts
      <br />
      {
        post.length ?
          post.map(item => (
            <Fragment key={item.id}><button onClick={() => { openWindow(item.id) }}>{item.title}</button><br /></Fragment>
          )) :
          null
      }
      {
        errorMsg ? <div>{errorMsg}</div> : null
      }
    </div>
  )
}

export default PostListFunc