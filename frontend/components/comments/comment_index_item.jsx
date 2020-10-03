import React, { useState } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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
        <textarea onChange={(event) => setCommentBody(event.target.value)}>
          {commentBody}
        </textarea>
        <button onClick={handleEdit}>Submit</button>
      </>
    ) : (
      <div className='comment-edit'>
        <div className="button" onClick={() => deleteComment(comment.id)}>Delete</div>
        <div className="button"  onClick={() => setIsEditing(true)}>Edit</div>
        
      </div>
    );



    return (
      <div className="comment-item">
        <div>
          <span className="logo">{comment.username[0].toUpperCase()}</span>
          <div className="name-comments">
            <div className="comment-name">{comment.username}</div>
            <div className="comment-comment">{comment.body}</div>
          </div>
        </div>

        <div>{commentAuthor ? editComment : null}</div>
      </div>
    );
};

export default CommentIndexItem;