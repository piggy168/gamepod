import {requestCategory} from "../../actions/search_actions";
import Category from './category';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    search: state.search
  });

const mapDispatchToProps = dispatch => ({
  requestCategory: (data) => dispatch(requestCategory(data))
  });

export default connect(mapStateToProps, mapDispatchToProps)(Category);
