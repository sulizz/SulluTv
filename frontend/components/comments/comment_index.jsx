import React from 'react'

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: ''
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

    componentDidUpdate () {
        
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

        let allcomments = this.props.comments.map(comment => (
            comment
        ))

        return (
            <div className='comments-all'>
                
                <span className='comments-numbers'>{this.props.comments.length} Comments</span>
                <form onSubmit={this.handleSubmit} className='comments-form'>
                    <textarea 
                        type='text'
                        placeholder='Comments here...'
                        value={this.state.body}
                        onChange={this.handleBodyChange}
                    />
                    <button>Comment</button>
                </form>

                <div>
                    {this.props.comments.slice(0).reverse().map((comment,idx) => (
                        <div className='comments-display'>{comment.body}</div>  
                    )) 
                    }
                </div>
            </div>
        )
    }
}

export default CommentIndex;