import React from 'react';
import CommentIndexItem from './comment_index_item'
import { Link } from "react-router-dom";


class CommentIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: '',
        }
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleBodyChange(e) {
        this.setState({body: e.currentTarget.value})
    }

    componentDidMount () {
        this.props.requestVideo(this.props.video.id)
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment({
            body: this.state.body,
            video_id: this.props.video.id
        })
        .then(this.setState({body: ''}));
    }   

    render () {

        if (!this.props.video) return null;

        let commentAuthor = false;
        if (this.props.currentUser === null) {
          commentAuthor = false;
        } else {
          commentAuthor = true;
        }

        const comments = this.props.comments
          .slice(0)
          .reverse()
          .map((comment) => (
            <CommentIndexItem
              comment={comment}
              key={comment.id}
              deleteComment={this.props.deleteComment}
              updateComment={this.props.updateComment}
              currentUser={this.props.currentUser}
            />
          )); 

        return (
          <div className="comments-form">
            <span className="comments-numbers">
              {this.props.comments.length} Comments
            </span>
            {commentAuthor ? (
              <form onSubmit={this.handleSubmit} className="comments-form">
                <textarea
                  className="test"
                  type="text"
                  placeholder="Comments here..."
                  value={this.state.body}
                  onChange={this.handleBodyChange}
                />
                <button>Comment</button>
              </form>
            ) : (
              <span className="log-in-info">
                <Link to="/login">Log In to comment</Link>
              </span>
            )}

            {comments}
          </div>
        );
    }
}

export default CommentIndex;