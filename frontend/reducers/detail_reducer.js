import { ProjectConstants } from '../actions/project_actions';

const DetailReducer = (state = {reward:[]}, action) => {
    switch(action.type){
      case ProjectConstants.RECEIVE_DETAIL:
        return action.detail;
      default:
        return state;
    }
  };

  export default DetailReducer;
