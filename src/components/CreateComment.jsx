import React, { useState } from 'react';
import axios from 'axios';
import ListComments from './ListComments';

const CreateComment = ({ postId, comments }) => {
  const [comment, setComment] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setComment(value);
  };
  
  const handleOnSubmit = async event => {
    event.preventDefault();
    try {
      console.log('comment: ', comment);
      const resp =await axios({
        method: 'post',
        url: `http://localhost:4001/posts/${postId}/comments`,

        data: {
          content: comment
        }
      });
      console.log(resp)
    } catch (error) {
      console.log(error);
    }

    setComment('');
  };
  return (
    <div>
      <div>
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="comment" className="row-md-2 col-form-label">
              New Comment
            </label>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="comment"
                onChange={handleChange}
                value={comment}
              />
            </div>
          </div>
          <button className="btn btn-primary">Add Comment</button>
        </form>
      </div>
      <ListComments comments={comments} />
    </div>
  );
};

export default CreateComment;
