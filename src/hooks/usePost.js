import { useEffect, useReducer } from 'react'
import axios from 'axios';

const initialState = {
  posts: [],
  errorMsg: ''
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS': {
      return {
        errorMsg: '',
        posts: action.payload
      }
    }
    case 'FETCH_FAIL': {
      return {
        errorMsg: 'Something Went Wrong',
        posts: []
      }
    }
    default: {
      return state;
    }
  }
}
function usePost(uri) {
  const [{ posts, errorMsg }, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get(uri)
      .then((res) => {
        console.log(res);
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: 'FETCH_FAIL' })
      })
  }, [])
  const openWindow = (id) => {
    console.log(id);

    window.open(`${uri}/${id}`, '_blank')
  }
  return [posts, errorMsg, openWindow]
}

export default usePost