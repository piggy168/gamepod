import { requestProjects } from '../../actions/project_actions';
import ProjectIndex from './project_index';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    projects: state.projects
  });

const mapDispatchToProps = dispatch => ({
    requestProjects: () => dispatch(requestProjects())
  });

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);
