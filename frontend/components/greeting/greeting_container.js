import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { login, signup } from '../../actions/session_actions';
import { requestSearch } from '../../actions/search_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  signup: user => dispatch(signup(user)),
  requestSearch: data => dispatch(requestSearch(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
