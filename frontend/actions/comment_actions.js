import * as CommentsAPIUtil from '../utils/comments_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const UPDATE_COMMENTS = 'UPDATE_COMMENTS';

export const RECEIVE_ERRORS = "RECIEVE_ERRORS";



const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const createComment = comment => dispatch => (
    CommentsAPIUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)), 
        (err) => dispatch(receiveErrors(err.responseJSON))
    )
);

export const updateComment = (comment, commentId) => (dispatch) =>
  CommentsAPIUtil.updateComment(comment, commentId)
    .then((comment) => dispatch(receiveComment(comment)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));

export const deleteComment = commentId => dispatch => (
    CommentsAPIUtil.deleteComment(commentId)
        .then(comment => dispatch(removeComment(comment.id)),
        (err) => dispatch(receiveErrors(err.responseJSON))

    )
);