import React, { useState } from "react";

const CommentIndexItem = ({ comment, deleteComment, updateComment }) => {
    
    const [isEditing, setIsEditing] = useState(false);
    const [commentBody, setCommentBody] = useState(comment.body)

    const handleEdit = () => {
        setIsEditing(false);
        updateComment({
            ...comment,
            body: commentBody
        }); 
    } 
    
    const commentAuthor = (currentUser.id === comment.user_id)

    const editComment = isEditing ? (
      <>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
        <textarea onChange={(event) => setCommentBody(event.target.value)}>{commentBody}</textarea>
        <button onClick={handleEdit}>Submit</button>
      </>
    ) : (
      <>
        <button onClick={() => deleteComment(comment.id)}>Delete</button>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );



    return (
      <div className="comment-item">
        <div>
          <span className='logo'>{comment.username[0].toUpperCase()}</span>
          {comment.username}
          {comment.body}
        </div>

        <div>
          {commentAuthor ? editComment : null}
        </div>
      </div>
    );
};

export default CommentIndexItem;