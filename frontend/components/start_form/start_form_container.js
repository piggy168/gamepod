import { createProject } from '../../actions/project_actions';
import StartForm from './start_form';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    detail: state.detail,
    currentUser: state.session.currentUser
  });

const mapDispatchToProps = dispatch => ({
    createProject: (project) => dispatch(createProject(project))
  });

export default connect(mapStateToProps, mapDispatchToProps)(StartForm);
