import React from 'react';
import CreatePost from './components/CreatePost';
import ListPosts from './components/ListPosts';
const App = () => (
  <div className="container">
    <h1>Create Post</h1>
    <CreatePost />
    <hr />
    <h1>Posts</h1>
    <ListPosts />
  </div>
);

export default App;
