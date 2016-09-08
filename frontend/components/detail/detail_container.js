import {requestDetail} from '../../actions/project_actions';
import {backProject} from '../../actions/project_actions';
import {deleteProject} from '../../actions/project_actions';
import Detail from './detail';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  detail: state.detail,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestDetail: (id) => dispatch(requestDetail(id)),
  fund: (userID, rewardID) => dispatch(backProject(userID, rewardID)),
  delete: (id)=>dispatch(deleteProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
