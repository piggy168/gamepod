import { ProjectConstants } from '../actions/project_actions';
import { fetchProjects } from '../util/project_api_util';
import { receiveProjects } from '../actions/project_actions';

const ProjectsMiddleware = ({getState, dispatch}) => next => action => {
    switch(action.type){
      case ProjectConstants.REQUEST_PROJECTS:
        const success = data => dispatch(receiveProjects(data));
        fetchProjects(success);

        return next(action);
      default:
        return next(action);
    }
  };

export default ProjectsMiddleware;
