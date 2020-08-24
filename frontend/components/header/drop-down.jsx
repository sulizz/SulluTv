import React from 'react';
import { Link } from 'react-router-dom';

class DropDown extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {

        return (
            <div className = 'hovered'> 
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        ) 
    }
}

export default DropDown;