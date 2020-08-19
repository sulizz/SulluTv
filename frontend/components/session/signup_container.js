import { connect } from 'react-redux'
import { signup } from '../../actions/session_actions'
import SignUp from './signup'
//doesnt need to rely on any part of state


//pass in action that it would need to sign up a user


//return POJ with sign up as key.  
const mapDispatchToProps = dispatch => ({
    signup: formUser => dispatch(signup(formUser))
})

//give us function called sign up inside our sign up presentational component 

export default connect(null, mapDispatchToProps)(SignUp);
