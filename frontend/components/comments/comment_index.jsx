import React from 'react';
import CommentIndexItem from './comment_index_item'

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
        });
    }   

    render () {

        if (!this.props.video) return null;

        const comments = this.props.comments
          .slice(0)
          .reverse()
          .map((comment) => (
            <CommentIndexItem
              comment={comment}
              key={comment.id}
              deleteComment={this.props.deleteComment}
              updateComment = {this.props.updateComment}
            />
          )); 

        return (
            <div className='comments-all'>
                
                <span className='comments-numbers'>{this.props.comments.length} Comments</span>
                
                <form onSubmit={this.handleSubmit} className='comments-form'>
                    <textarea className='test'
                        
                        type='text'
                        placeholder='Comments here...'
                        value={this.state.body}
                        onChange={this.handleBodyChange}
                    />
                    <button>Comment</button>
                </form>
                {comments}
            </div>
        )
    }
}

export default CommentIndex;