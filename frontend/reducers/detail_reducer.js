import { ProjectConstants } from '../actions/project_actions';
import merge from 'lodash/merge';

const DetailReducer = (state = {reward:[], error:[]}, action) => {
    switch(action.type){
      case ProjectConstants.RECEIVE_DETAIL:
        action.detail.error= [];
        return action.detail;
      case ProjectConstants.RECEIVE_OTHER_ERROR:
        const newstate = merge({},state);
        newstate.error = action.error;
        console.log(newstate);
        return newstate;
      default:
        return state;
    }
  };

  export default DetailReducer;
