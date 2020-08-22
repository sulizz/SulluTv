// import React from 'react';


// class VideoForm extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             title: '',
//             description:'',
//             videoFile: null,
//             views: 1,
//             user_id: 28
//         }
//     }

//     handleInput(type) {
//         return (e) => {
//             //[type] is dynamic.. any key that matches our state will get updated
//             //e is event obj from event handler
//             this.setState({ [type]: e.target.value })
//         }
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('video[title]',this.state.title);
//         formData.append('video[description]', this.state.description);
//         formData.append('video[video]', this.state.videoFile);
//         formData.append('video[views]', this.state.views);
//         formData.append('video[user_id]', this.state.user_id );
//         debugger 
//         $.ajax({
//             url: 'api/videos',
//             method: 'POST',
//             data: formData, 
//             contentType: false,
//             processData: false
//         }).then(
//             (response) => console.log(response.message),
//             (response) => console.log(response.responseJSON)
//         );
//     }

//     handleEvent(e){
//         this.setState({videoFile: e.currentTarget.files[0]});
//     }

//     render() {
//         console.log(this.state);
//         return (
//             <div>

//                 <form onSubmit={this.handleSubmit.bind(this)}> 
//                     <label htmlFor ="video-body"> Title</label>
//                     <input type = 'text'
//                         value = {this.state.title}
//                         onChange={this.handleInput('title')} 
//                     />
//                     <label htmlFor="video-body"> description</label>
//                     <input type='text'
//                         value={this.state.description}
//                         onChange={this.handleInput('description')} 
//                     />
//                     <input type ='file'
//                     onChange={this.handleEvent.bind(this)}
//                     /> 
//                     <button>Upload a Video</button>
//                 </form>

//             </div>
//         )
//     }
// }

// export default VideoForm;