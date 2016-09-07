import { requestDetail, updateDetail } from '../../actions/project_actions';
import EditForm from './edit_form';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    detail: state.detail,
    currentUser: state.session.currentUser
  });

const mapDispatchToProps = dispatch => ({
    requestDetail: (id) => dispatch(requestDetail(id)),
    updateDetail: (project) => dispatch(updateDetail(project))
  });

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
