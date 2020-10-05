import React from 'react';
import { Link } from 'react-router-dom';

class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout()
        // .then(() => this.props.history.push("/"));
    }
    render () {

        
        return (
          <div className="hovered">
            <button onClick={this.handleLogout}>Log Out</button>
          </div>
        ); 
    }
}

export default DropDown;