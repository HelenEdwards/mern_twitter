import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mSTP = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.session.errors
  };
};

const mDTP = (dispatch) => {
  return {
    signup: user => dispatch(signup(user))
  }
}

export default connect(mSTP, mDTP)(SignupForm);