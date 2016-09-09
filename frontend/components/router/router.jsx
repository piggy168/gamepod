import React from 'react';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ProjectIndexContainer from '../projects/project_index_container';
import SessionFormContainer from '../session_form/session_form_container';
import DetailContainer from "../detail/detail_container";
import StartFormContainer from "../start_form/start_form_container";
import SearchContainer from "../search/search_container";
import EditFormContainer from "../start_form/edit_form_container";
import ProfileContainer from "../profile/profile_container";
import CategoryContainer from "../search/category_container";
//Components
import App from '../app';

const AppRouter = () => (
  <Router history={ hashHistory }>
    <Route path="/" onUpdate={() => window.scrollTo(0, 0)} component={ App }>
      <IndexRoute component= { ProjectIndexContainer }/>
      <Route path="/projects/:projectId" onUpdate={() => window.scrollTo(0, 0)} component = { DetailContainer }/>
      <Route path="/start" onUpdate={() => window.scrollTo(0, 0)} component = { StartFormContainer }/>
      <Route path="/search" onUpdate={() => window.scrollTo(0, 0)} component = { SearchContainer }/>
      <Route path="/edit/:projectId" onUpdate={() => window.scrollTo(0, 0)} component = { EditFormContainer }/>
      <Route path="/user/:id" onUpdate={() => window.scrollTo(0, 0)} component = { ProfileContainer }/>
      <Route path="/category/:type" onUpdate={() => window.scrollTo(0, 0)} component = { CategoryContainer }/>
    </Route>
  </Router>
);

export default AppRouter;
