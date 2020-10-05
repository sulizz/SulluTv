import React, { useState } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const CommentIndexItem = ({ comment, deleteComment, updateComment, currentUser }) => {
    
    const [isEditing, setIsEditing] = useState(false);
    const [commentBody, setCommentBody] = useState(comment.body)

    const handleEdit = () => {
        setIsEditing(false);
        updateComment({
            ...comment,
            body: commentBody
        }); 
    } 

    // let currentUser = state.session.currentUser;

    let commentAuthor = false;
    if (currentUser === null) {
      commentAuthor = false;
    }else if(currentUser.id === comment.user_id) {
      commentAuthor = true;
    }


    const editComment = isEditing ? (
      <div className='modal'>
        <div className='modal-content'>
          <textarea  className='edit-comment-box'onChange={(event) => setCommentBody(event.target.value)}>
            {commentBody}
          </textarea>
          <button className='close-modal' onClick={() => setIsEditing(false)}>X</button>
          <button className='submit-modal'onClick={handleEdit}>Submit</button>
        </div>
      </div>
    ) : (
      <div className='comment-edit'>
        <span className="button" onClick={() => deleteComment(comment.id)}>Delete</span>
        <span className="modal-button"  onClick={() => setIsEditing(true)}>Edit</span>
        
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
        
        <div>{ commentAuthor ? editComment : null}</div>
      </div>
    );
};

export default CommentIndexItem;