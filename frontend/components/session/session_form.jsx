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
        this.renderErrors = this.renderErrors.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    //handle inputting for username, email and password
    handleInput(type) {
        return (e) => {
            //[type] is dynamic.. any key that matches our state will get updated
            //e is event obj from event handler
            this.setState({[type]:  e.target.value}) 
        }
    }

    handleDemoSubmit(e) {
        e.preventDefault();
        this.props.processDemo({
            username: 'DemoUser101',
            email: 'DemoUser101',
            password: 'DemoUser101'
        })
        .then(() => this.props.history.push('/')) //==> redirect on sucessfull login or signup 
    } 

    renderErrors() {
        return (
            this.props.errors.map(error => (
                <li key={error}>
                    {error}
                </li>
            ))
        )
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
                <h3> to continue to SulluTV</h3>
                
                <ul className = "errors">
                    {this.renderErrors()}
                </ul>

                <form>
                    <div className= 'input-box'>
                            <input
                                // placeholder="Username"
                                type= 'text'
                                value = {this.state.username}
                                onChange={this.handleInput('username')}
                            />
                        <label className ='label'>Username
                        </label>
                    </div>
                    <br />
                    <div className='input-box'>
                            <input
                                // placeholder="Email"
                                type= 'text'
                                value = {this.state.email}
                                onChange={this.handleInput('email')}
                            />
                        <label className='label'>Email
                        </label>
                    </div>
                    <br />
                    <div className= 'input-box'>
                            <input
                                // placeholder="Password"
                                type= 'password'
                                value = {this.state.password}
                                onChange={this.handleInput('password')}
                            />
                        <label className='label'>Password
                        </label>
                    </div>
                    <br />
                    
                    <button onClick={this.handleSubmit}>{this.props.formType}</button>
                </form>

                <h5 onClick={this.handleDemoSubmit}>Demo User</h5>


                <h4> {this.props.link} </h4>
            </div>
        )
    }
};


export default SessionForm;

