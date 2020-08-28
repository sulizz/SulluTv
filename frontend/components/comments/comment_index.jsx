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
            <div>
                <h1>Comment Here</h1> 
                
                <form onSubmit= {this.handleSubmit}>
                    <textarea 
                        type='text'
                        value={this.state.body}
                        onChange={this.handleBodyChange}
                    />
                    <button>Submit</button>
                </form>

                <div>
                    <h3>{this.props.comments.length}</h3>
                    {this.props.comments.map(comment => (
                          <h1>{comment.body}</h1>  
                    )) 
                    }
                </div>
            </div>
        )
    }
}

export default CommentIndex;