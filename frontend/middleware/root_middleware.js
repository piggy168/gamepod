import { applyMiddleware } from 'redux';
import ProjectsMiddleware from './projects_middleware';
import SessionMiddleware from './session_middleware';

const RootMiddleware = applyMiddleware(
  ProjectsMiddleware,
  SessionMiddleware
);

export default RootMiddleware;
