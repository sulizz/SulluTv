import React from 'react';

class DropDown extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {

        return (
            <div className = 'hovered'> 
                <h1>Place 1</h1>
                <h1> Something </h1>
                <h1>Something</h1>
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        ) 
    }
}

export default DropDown;