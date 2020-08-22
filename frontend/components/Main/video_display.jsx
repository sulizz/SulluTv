// import React from 'react';
// import VideoForm from '../Video/video_form';
// import VideoIndex from '../Video/video_index'

// class VideoDisplay extends React.Component {
//     constructor(props) {
//         super(props) 
//         this.state = {
//             videos: []
//         };
//         this.fetchvideos =this.fetchvideos.bind(this);
//     }

    
//     fetchvideos() {
//         debugger
//         return $.ajax({
//             url: '/api/videos'
//         }).then(videos => {
//             debugger
//             this.setState({videos});
//         });
//     }

//     componentDidMount() {
//         this.fetchvideos();
//     }

//     render () {
//         return (
//             <div>
//                 <VideoForm fetchvideos={this.fetchvideos} />
//                 <VideoIndex videos={this.state.videos} />
//             </div>
//         )
//     }

// }

// export default VideoDisplay;
