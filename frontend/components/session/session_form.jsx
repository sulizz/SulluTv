import React from 'react'

class SessionForm extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            username:'',
            email:'',
            password:''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //handle inputting for username, email and password
    handleInput(type) {
        return (e) => {
            //[type] is dynamic.. any key that matches our state will get updated
            //e is event obj from event handler
            this.setState({[type]:  e.target.value}) 
        }
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.processForm(this.state)
        .then( ()=> this.props.history.push('/')) //==> redirect on sucessfull login or signup 
    } 

    render () {
        return (
            <div className= "session-form">
                <h2>{this.props.formType}</h2>
                <h4>{this.props.link}</h4>
                <form>
                    <label>Username:
                        <input
                            type= 'text'
                            value = {this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <label>Email:
                        <input
                            type= 'text'
                            value = {this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password:
                        <input
                            type= 'password'
                            value = {this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>{this.props.formType}</button>
                </form>
            </div>
        )
    }
};

export default SessionForm;

