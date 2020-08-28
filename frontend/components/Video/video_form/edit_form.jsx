import React from 'react';
import video_form_container from './video_form_container';

class EditForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            thumbnail: null
        }

        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleThumbnailChange = this.handleThumbnailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
    }

    handleTitleChange(e) {
        this.setState({ title: e.currentTarget.value })
    }
    handleDescriptionChange(e) {
        this.setState({ description: e.currentTarget.value })
    }

    handleThumbnailChange(e) {
        this.setState({ thumbnail: e.currentTarget.files[0] })
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        // formData.append('video[id]', this.props.video.id);
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[photo]', this.state.thumbnail);
        this.props.editVideo(formData, this.props.video.id)
            .then(() => this.props.history.push('/'));
    }

    handleDeleteSubmit(e) {
        e.preventDefault();
        this.props.deleteVideo(this.props.video.id)
        .then(() => this.props.history.push('/'));
    }

    // params.require(: video).permit(: title, : description, : photo)


    render () {
        return (
            <>
            
            <div className='form-container'>
                <form className='from-items' onSubmit={this.handleSubmit} >
                        <div className='input-box'>
                            <label> Title</label>
                            <input
                                className = 'input'
                                type='text'
                                value={this.state.title}
                                onChange={this.handleTitleChange}
                            />
                    </div>
                        <br></br>
                        <div className='input-box'>
                            <label> Description</label>
                            <textarea
                                type='text'
                                value={this.state.description}
                                onChange={this.handleDescriptionChange}
                            />
                        </div>
                    <br></br>
                        <div className='input-box'>
                            <label>Thumbnail</label>
                            <input
                                type='file'
                                onChange={this.handleThumbnailChange}
                            />
                        </div>

                    <button className= 'edit'>Edit Video</button>
                    <button onClick={this.handleDeleteSubmit} className='delete'>Delete Video</button>
                </form>
            </div>
        </>
        )
    }
}

export default EditForm;