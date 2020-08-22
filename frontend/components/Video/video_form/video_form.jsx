import React from 'react';


class VideoForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            file: null
        }
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
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

    handleSubmit(e) {
        console.log(this.state)
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[video]', this.state.file);
        this.props.uploadNewVideo(formData);
    }
    // params.require(: video).permit(: title, : description, : file) 


    render() {
        return (
            <div>

                <form onSubmit= {this.handleSubmit} >
                    <label> Title</label>
                    <input
                        type='text'
                        value = {this.state.title}
                        onChange= {this.handleTitleChange}
                    />
                    <label> description</label>
                    <input
                        type='text'
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}
                    />
                    <input
                        type='file'
                        onChange={this.handleFileChange}
                    />
                    <button>Upload a Video</button>
                </form>

            </div>
        )
    }
}

export default VideoForm;