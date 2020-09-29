import React from 'react';

const CommentIndexItem = ({ comment, deleteComment }) => {

  const handleDelete = (e) => {
      e.preventDefault(); 
      deleteComment(comment.id);
  }


  return (
    <div>
      {comment.username[0].toUpperCase()}
      {comment.username}
      {comment.body}
      {currentUser.id === comment.user_id ? 
        <button onClick={handleDelete}>Delete</button> :''
      }
      
    </div>
  );
};

export default CommentIndexItem;