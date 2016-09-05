import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => (
  <div>
    <header>
      <img className="logo" src="http://res.cloudinary.com/dlszpthqv/image/upload/v1472926977/c0672c5f32c0e15228b0f573fb56a4c0_bd0hwo.png"/>
      <Link to="/" className="header-link">Game Pod</Link>
      <Link to="/start" className='start'>Start a project</Link>
      <GreetingContainer />
    </header>
    {children}
  </div>
);

export default App;
