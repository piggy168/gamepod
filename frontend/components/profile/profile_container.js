import { requestProfile } from '../../actions/session_actions';
import { updateUser } from '../../actions/session_actions';
import Profile from './profile';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    projects: state.projects,
    profile: state.profile
  });

const mapDispatchToProps = dispatch => ({
    requestProfile: (id) => dispatch(requestProfile(id)),
    updateUser: (id,data) => dispatch(updateUser(id,data))
  });

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
