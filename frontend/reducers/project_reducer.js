import { ProjectConstants } from '../actions/project_actions';

const ProjectReducer = (state = {boardgames: [],videogames:[], mobilegames:[]}, action) => {
    switch(action.type){
      case ProjectConstants.RECEIVE_PROJECTS:
        return action.projects;
      default:
        return state;
    }
  };

  export default ProjectReducer;
