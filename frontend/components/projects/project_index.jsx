import React from 'react';

class ProjectIndex extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.requestProjects();

  }

  render (){

    const {projects} = this.props;

    return(
      <div>
        <h1>Projects</h1>
          <ul className='projects'>
            {projects.map((project=><li>{project.title}</li>))}
          </ul>
        </div>
    );
  }
}

export default ProjectIndex;
