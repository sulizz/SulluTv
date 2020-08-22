import React from 'react';


class VideoForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    handleInput(type) {

    }

    handleSubmit(e) {

    }

    handleEvent(e) {

    }

    render() {
        return (
            <div>

                <form>
                    <label> Title</label>
                    <input
                        type='text'
                    />
                    <label> description</label>
                    <input
                        type='text'

                    />
                    <input
                        type='file'
                    />
                    <button>Upload a Video</button>
                </form>

            </div>
        )
    }
}

export default VideoForm;