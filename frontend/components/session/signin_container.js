import React from 'react';
import { connect } from 'react-redux'
import { login, clearErrors } from '../../actions/session_actions'
import sessionForm from './session_form'
import { Link } from 'react-router-dom'


//doesnt need to rely on any part of state


//pass in action that it would need to sign up a user

const mapStateToProps = (state, ownProps) => ({
    // key: selector(state)
    errors: state.errors.session,
    formType: "Sign In",
    link: <Link to="/signup">Create account</Link>
})


//return POJ with sign up as key.  
const mapDispatchToProps = dispatch => ({
    //action_name: () => dispatch(action_name())
    processForm: formUser => dispatch(login(formUser)),
    processDemo: formUser => dispatch(login(formUser)),
    clearErrors: () => dispatch(clearErrors())
})

//give us function called sign up inside our sign up presentational component 

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);
