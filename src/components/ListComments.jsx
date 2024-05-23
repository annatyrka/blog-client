import React from 'react';
const ListComments = ({ comments }) => (
  <div className="d-flex flex-row flex-wrap justify-content-between">
    {Object.values(comments).map(comment => {
      let content;
      if (comment.status === 'approved') {
        content = comment.content
      }

      if (comment.status === 'pending') {
        content = 'This comment is awaiting moderation'
      }

      if (comment.status === 'rejected') {
        content = 'This comment has been rejected'
      }   
      return (
      <div key={comment.id}>
        <div className="card" style={{ marginBottom: '20px' }}>
          <div className="card-body">
            <p>{content}</p>
          </div>
        </div>
      </div>
    )})}
  </div>
);

export default ListComments;
