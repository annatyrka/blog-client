import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateComment from './CreateComment';

const ListPosts = () => {
  const [posts, setPosts] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:4002/posts')
      .then(res => setPosts(res.data))
      .catch(error => setError(error));
  }, []);

  console.log(posts);
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {error && <p>{error}</p>}
      {Object.values(posts).map(post => (
        <div key={post.id}>
          <div className="card" style={{ marginBottom: '20px' }}>
            <div className="card-body">
              <h3>{post.title}</h3>
            </div>
          </div>
          <CreateComment postId={post.id} comments={post.comments} />
        </div>
      ))}
    </div>
  );
};

export default ListPosts;
