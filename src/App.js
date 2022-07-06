
import './App.css';
import PostForm from './components/ClassComponents/PostForm';
import PostList from './components/ClassComponents/PostList';
import PostFormFunc from './components/FuncComponents/PostFormFunc';
import PostListFunc from './components/FuncComponents/PostListFunc';

function App() {
  return (
    <div className="App">
      <PostFormFunc />
      <PostListFunc />
      {/*
    <PostForm />
      <PostList />
  */}
    </div>
  );
}

export default App;
