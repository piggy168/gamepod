import { ProjectConstants } from '../actions/project_actions';
import { fetchProjects } from '../util/project_api_util';
import { fetchDetail } from '../util/project_api_util';
import { receiveProjects } from '../actions/project_actions';
import { receiveDetail } from '../actions/project_actions';
import { saveProject } from '../util/project_api_util';
import { backingProject } from '../util/project_api_util';
import { Link, hashHistory } from 'react-router';
import { updateProject } from '../util/project_api_util';
import { update } from "../actions/session_actions";
import { destroyProject } from '../util/project_api_util';

const ProjectsMiddleware = ({getState, dispatch}) => next => action => {
  debugger
    switch(action.type){
      case ProjectConstants.REQUEST_PROJECTS:
        const success = data => dispatch(receiveProjects(data));
        fetchProjects(success);
        return next(action);
      case ProjectConstants.REQUEST_DETAIL:
        const detailSuccess = data => dispatch(receiveDetail(data));
        fetchDetail(detailSuccess,action.id);
        return next(action);
      case ProjectConstants.CREATE_PROJECT:
        const createSuccess = data => {
          hashHistory.push(`/projects/${data.id}`);
          return dispatch(receiveDetail(data));};
        saveProject(createSuccess,action.project);
        return next(action);
      case ProjectConstants.DELETE_PROJECT:
        destroyProject(action.id);
        return next(action);
      case ProjectConstants.UPDATE_DETAIL:
        const updateSuccess = data => {
          hashHistory.push(`/projects/${data.id}`);
          return dispatch(receiveDetail(data));};
        updateProject(updateSuccess,action.project);
        return next(action);
      case ProjectConstants.BACK_PROJECT:
        const backSuccess = data => {

            dispatch(receiveDetail(data));
            dispatch(update(data.currentUser_id));

        };

        backingProject(backSuccess, action.userID, action.rewardID);
        return next(action);
      default:
        return next(action);
    }
  };

export default ProjectsMiddleware;
