import { useState, useReducer } from 'react';
import axios from 'axios';

const initialState = {
  userId: '',
  title: '',
  body: '',
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'userId': {
      return {
        ...state, userId: action.payload
      }
    }
    case 'title': {
      return {
        ...state, title: action.payload
      }
    }
    case 'body': {
      return {
        ...state, body: action.payload
      }
    }
    default: {
      return state;
    }
  }
}
function usePostForm(URI) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const changeHandler = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    setLoading(true)
    console.log(state)
    axios.post(URI, state)
      .then((res) => {
        console.log(res);
        setLoading(false)
      })
      .catch(error => {
        console.log(error);
        setLoading(false)
        setErrorMsg(error.message)
      })
  }

  return [state, changeHandler, submitHandler, errorMsg, loading]
}

export default usePostForm