import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, logout, signup } from '../../actions/session_actions';


const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  // const formType = ownProps.location.pathname.slice(1);
  const formType = ownProps.formType;
  const processForm = (formType === 'login') ? login : signup;

  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
