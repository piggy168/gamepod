import {requestDetail} from '../../actions/project_actions';
import Detail from './detail';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  detail: state.detail
});

const mapDispatchToProps = dispatch => ({
  requestDetail: (id) => dispatch(requestDetail(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
