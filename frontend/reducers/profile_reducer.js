import { SessionConstants } from '../actions/session_actions';

const ProfileReducer = (state = {projects:[]}, action) => {
    switch(action.type){
      case SessionConstants.RECEIVE_PROFILE:
        return action.profile;
      default:
        return state;
    }
  };

  export default ProfileReducer;
