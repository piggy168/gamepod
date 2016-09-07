import React from 'react';
import { Link, hashHistory } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => (
  <div>
    <header>
      <img className="logo" src="http://res.cloudinary.com/dlszpthqv/image/upload/v1473266661/Polished-Gold-Metal-Texture-photo_e7jups.png" onClick={()=>hashHistory.push("/")}/>
      <Link to="/start" className='start'>Start a project</Link>
      <GreetingContainer />
    </header>
    {children}
  </div>
);

export default App;
