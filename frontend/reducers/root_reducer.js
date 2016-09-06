import {combineReducers} from 'redux';
import ProjectReducer from './project_reducer';
import SessionReducer from './session_reducer';
import DetailReducer from './detail_reducer';
import BackerReducer from './backer_reducer';

const RootReducer = combineReducers({
    projects: ProjectReducer,
    session: SessionReducer,
    detail: DetailReducer,
    backer: BackerReducer
  });

export default RootReducer;
