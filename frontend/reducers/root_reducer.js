import {combineReducers} from 'redux';
import ProjectReducer from './project_reducer';
import SessionReducer from './session_reducer';
import DetailReducer from './detail_reducer';
import BackerReducer from './backer_reducer';
import SearchReducer from './search_reducer';
import ProfileReducer from './profile_reducer';

const RootReducer = combineReducers({
    projects: ProjectReducer,
    session: SessionReducer,
    detail: DetailReducer,
    backer: BackerReducer,
    search: SearchReducer,
    profile: ProfileReducer
  });

export default RootReducer;
