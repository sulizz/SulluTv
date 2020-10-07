import React from 'react';

class EditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: "",
      thumbnail: null,
    };

    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleThumbnailChange = this.handleThumbnailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
  }

  componentDidMount() {
    this.props.requestVideo(this.props.match.params.videoId);
    // this.props.requestAllVideos();
  }
  // componentWillMount() {
  //   this.props.requestVideo(this.props.match.params.videoId);
  //   // this.props.requestAllVideos();
  //   this.setState({ title: this.props.video.title });
  // }

  handleTitleChange(e) {
    this.setState({ title: e.currentTarget.value });
  }
  handleDescriptionChange(e) {
    this.setState({ description: e.currentTarget.value });
  }

  handleThumbnailChange(e) {
    this.setState({ thumbnail: e.currentTarget.files[0] });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    // formData.append('video[id]', this.props.video.id);
    formData.append("video[title]", this.state.title);
    formData.append("video[description]", this.state.description);
    formData.append("video[photo]", this.state.thumbnail);
    this.props
      .editVideo(formData, this.props.video.id)
      .then(() => this.props.history.push("/"));
  }

  handleDeleteSubmit(e) {
    e.preventDefault();
    this.props
      .deleteVideo(this.props.video.id)
      .then(() => this.props.history.push("/"));
  }

  // params.require(: video).permit(: title, : description, : photo)

  render() {

    return (
      <div className="form-container">
        <div className="header-text">Edit Video</div>

        <form className="from-items" onSubmit={this.handleSubmit}>
          <div className="form-input-box">
            <label> Title</label>
            <br></br>
            <input
              className="input"
              type="text"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </div>
          <br></br>
          <div className="form-input-box">
            <label> Description</label>
            <br></br>
            <textarea
              type="text"
              value={this.state.description}
              // placeholder={this.props.video.description}
              onChange={this.handleDescriptionChange}
            />
          </div>
          <br></br>
          <div className="data-input-box">
            <label>Thumbnail</label>
            <input type="file" onChange={this.handleThumbnailChange} />
          </div>

          <button className="submit">Edit Video</button>
        </form>
      </div>
    );
  }
}

export default EditForm;