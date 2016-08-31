import {combineReducers} from 'redux';
import ProjectReducer from './project_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
    projects: ProjectReducer,
    session: SessionReducer
  });

export default RootReducer;
