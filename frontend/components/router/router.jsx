import React from 'react';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ProjectIndexContainer from '../projects/project_index_container';
import SessionFormContainer from '../session_form/session_form_container';
//Components
import App from '../app';

const AppRouter = () => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component= { ProjectIndexContainer }/>
      <Route path='/login' component={ SessionFormContainer }/>
      <Route path='/signup' component={ SessionFormContainer }/>
    </Route>
  </Router>
);

export default AppRouter;
