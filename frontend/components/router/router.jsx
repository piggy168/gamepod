import React from 'react';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ProjectIndexContainer from '../projects/project_index_container';
import SessionFormContainer from '../session_form/session_form_container';
import DetailContainer from "../detail/detail_container";
import StartFormContainer from "../start_form/start_form_container";
//Components
import App from '../app';

const AppRouter = () => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component= { ProjectIndexContainer }/>
      <Route path="/projects/:projectId" component = { DetailContainer }/>
      <Route path="/start" component = { StartFormContainer }/>
    </Route>
  </Router>
);

export default AppRouter;
