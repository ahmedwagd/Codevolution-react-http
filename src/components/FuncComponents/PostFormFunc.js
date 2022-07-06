import React from 'react';
import usePostForm from '../../hooks/usePostForm';

function PostFormFunc() {
  const URI = 'https://jsonplaceholder.typicode.com/posts'
  const [{ userId, title, body }, changeHandler, submitHandler, errorMsg, loading] = usePostForm(URI)
  return (
    <div>
      {
        loading ? <div>Loading...</div>
          : (
            <form onSubmit={submitHandler}>
              <div><input type="text" name="userId" value={userId} onChange={changeHandler} /></div>
              <div><input type="text" name="title" value={title} onChange={changeHandler} /></div>
              <div><input type="text" name="body" value={body} onChange={changeHandler} /></div>
              <button type="submit">Submit</button>
            </form>
          )
      }
      {
        errorMsg ? errorMsg
          : null
      }
    </div>
  )
}

export default PostFormFunc