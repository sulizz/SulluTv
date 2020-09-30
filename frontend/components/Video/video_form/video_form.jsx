import React from 'react';


class VideoForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            file: null,
            thumbnail: null
        }
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleThumbnailChange = this.handleThumbnailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(e) {
        this.setState({ title: e.currentTarget.value })
    }
    handleDescriptionChange(e) {
        this.setState({ description: e.currentTarget.value})
    }

    handleFileChange(e) {
        this.setState({ file: e.currentTarget.files[0] })
    }

    handleThumbnailChange(e) {
        this.setState({ thumbnail: e.currentTarget.files[0]})
    }

    handleSubmit(e) {
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[video]', this.state.file);
        formData.append('video[photo]', this.state.thumbnail);
        this.props.uploadNewVideo(formData)
        .then(() => this.props.requestAllVideos())
        .then(() => this.props.history.push('/'));
    }
    // params.require(: video).permit(: title, : description, : video, :photo )


    render() {
        return (
            <div className= 'form-container'> 

                <form className= 'from-items'onSubmit= {this.handleSubmit} >
                    <div className='input-box'>
                        <label> Title</label>
                        <input
                            type='text'
                            value = {this.state.title}
                            onChange= {this.handleTitleChange}
                        />
                    </div>
                    <br></br>
                    <div className='input-box'>
                        <label> description</label>
                        <input
                            type='text'
                            value={this.state.description}
                            onChange={this.handleDescriptionChange}
                        />
                    </div>
                    <br></br>
                    <div className='input-box'> 
                        <label>Video File</label>
                        <input
                            type='file'
                            onChange={this.handleFileChange}
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
                    <button className='edit'>Upload a Video</button>
                </form>

            </div>
        )
    }
}

export default VideoForm;