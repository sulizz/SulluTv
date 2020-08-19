import React from 'react';
import { connect } from 'react-redux'
import { signup, clearErrors } from '../../actions/session_actions'
import sessionForm from './session_form'
import { Link } from 'react-router-dom'


//doesnt need to rely on any part of state


//pass in action that it would need to sign up a user

const mapStateToProps = (state, ownProps) => ({

    errors: state.errors.session,
    formType: "Sign Up",
    link: <Link to="/login">Sign in instead</Link>
})


//return POJ with sign up as key.  
const mapDispatchToProps = dispatch => ({
    processForm: formUser => dispatch(signup(formUser)),
    processDemo: formUser => dispatch(login(formUser)),
    clearErrors: () => dispatch(clearErrors())
})

//give us function called sign up inside our sign up presentational component 

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);
