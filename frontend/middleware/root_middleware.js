import { applyMiddleware } from 'redux';
import ProjectsMiddleware from './projects_middleware';
import SessionMiddleware from './session_middleware';
import SearchMiddleware from './search_middleware';

const RootMiddleware = applyMiddleware(
  ProjectsMiddleware,
  SessionMiddleware,
  SearchMiddleware
);

export default RootMiddleware;
