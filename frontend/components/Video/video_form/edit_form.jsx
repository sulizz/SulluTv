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

    // handleDeleteSubmit(e) {
    //     e.preventDefault();

    // }

    // params.require(: video).permit(: title, : description, : photo)


    render () {
        return (
            <>
            {/* <h1>Currently Editing {this.props.video.title}</h1> */}
            {/* <video controls>
                <source src={this.props.video.videoUrl} type='video/mp4' />
            </video> */}
            
            <div className='form-container'>
                <form className='from-items' onSubmit={this.handleSubmit} >

                    <label> Title</label>
                    <input
                        type='text'
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                    />
                    <br></br>
                    <label> description</label>
                    <textarea
                        type='text'
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}
                    />

                    <br></br>
                    <label>Thumbnail</label>
                    <input
                        type='file'
                        onChange={this.handleThumbnailChange}
                    />
                    <button>Edit Video</button>
                </form>

            </div>
        </>
        )
    }
}

export default EditForm;