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
                <h1> Something </h1>
                <h1>Something</h1>
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        ) 
    }
}

export default DropDown;