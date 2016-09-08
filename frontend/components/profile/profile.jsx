import React from 'react';
import {hashHistory} from 'react-router';

class Profile extends React.Component{
  constructor(props){
    super(props);

  }
  componentDidMount(){
    this.props.requestProfile(this.props.params.id);
  }

  showDetail(id){
    hashHistory.push(`/projects/${id}`);
  }

  render(){

    const {profile} = this.props;
    const panel = profile.projects.
    map((project)=>{return(
                    <div key={project.id} className="profile-panel" onClick={this.showDetail.bind(this, project.id)}>
                      <img className="panel-image" src={project.photo_url} />
                      <p className="panel-title">{project.title}</p>
                      <p className="panel-description">{project.short}</p>
                      <div className="profile-panel-footer">
                        <p className="profile-panel-enddate">{project.end_date}</p>
                      </div>
                    </div>

                  );});
    return(
      <div className="detail-container">
        <div className="profile-upper">
        <img className="profile-image" src={profile.photo_url}/>
        <div className="profile-text">
        <p className="profile-title">{profile.username}</p>
        <p className="profile-bio">{profile.bio}</p>
        </div>
      </div>
          <h1 className="profile-projects">Projects</h1>
          <div className="category">
            {panel}
         </div>
      </div>
    );
  }
}

export default Profile;
