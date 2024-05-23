import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [title, setTtile] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setTtile(value);
  };

  const handleOnSubmit = async event => {
    event.preventDefault();
    // Send a POST request
    try {
      await axios({
        method: 'post',
        url: 'http://localhost:4000/posts',
        data: {
          title: title
        }
      });
    } catch (error) {
      console.log(error);
    }

    setTtile('');
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="title"
              onChange={handleChange}
              value={title}
            />
          </div>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
