import React from 'react'

class SignUp extends React.Component {

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
        this.props.signup(this.state)
        .then( ()=> this.props.history.push('/')) //==> redirect on sucessfull login 
    } 

    render () {
        return (
            <div className= "session-form">
                <h2>Sign Up</h2>
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
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        )
    }
};

export default SignUp;

