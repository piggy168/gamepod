import { ProjectConstants } from '../actions/project_actions';

const BackerReducer = (state = [], action) => {
    switch(action.type){
      case ProjectConstants.BACK_PROJECTS:
        return action.backing;
      default:
        return state;
    }
  };

  export default BackerReducer;
