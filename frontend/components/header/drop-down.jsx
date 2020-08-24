import React from 'react';
import { Link } from 'react-router-dom';

class DropDown extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {

        return (
            <div className = 'hovered'> 
                <Link to='/upload'>Upload</Link>
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        ) 
    }
}

export default DropDown;