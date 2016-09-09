import React from 'react';
import {hashHistory} from 'react-router';
import Modal from 'react-modal';

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state={
      photo_url: "",
      bio: "",
      modal: false,
      style:  {
        overlay : {
            position        : 'fixed',
            top             : 50,
            left            : 0,
            right           : 0,
            bottom          : 0,
            backgroundColor : 'rgba(0, 0, 0, 0.4)',
          },
        content : {
            margin          : 'auto',
            width           : '250px',
            height          : '270px',
            padding         : '20px',
            border          : 'none',
            backgroundColor : 'rgba(0, 0, 0, 0.7)',
          }
      }
    }
  }
  componentDidMount(){
    this.props.requestProfile(this.props.params.id);
  }

  showDetail(id){
    hashHistory.push(`/projects/${id}`);
  }

  uploadPic(e){
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        this.state.photo_url=results[0].url;
        this.props.updateUser(this.props.profile.id, {
          photo_url: results[0].url
        });

      }
    }.bind(this));
  }

  updateText(e){
    this.setState({bio: e.target.value});
  }

  editBio(e){
    this.props.updateUser(this.props.profile.id, {
      bio: this.state.bio
    });
    this.setState({modal:false});

  }

  closeModal(){
    this.setState({modal:false});
  }
  openModal(){
    this.setState({modal:true});
  }

  render(){
    if (this.update === false){
    this.state.photo_url=this.props.profile.photo_url;
    this.state.bio=this.props.profile.bio;
    this.update = true;}
    let control;
    if ((this.props.currentUser) && (this.props.currentUser.id === this.props.profile.id)){
      control = <div className="control">
        <button className="edit-pic" onClick={this.uploadPic.bind(this)}>Change</button>
        <button className="edit-bio" onClick={this.openModal.bind(this)}>Edit About Me</button>
      </div>;
    } else {
      control = <div></div>;
      }
    const {profile} = this.props;
    let projectTitle;
    if (profile.projects.lenth > 0){
      projectTitle = <h1 className="profile-projects">Projects</h1>;
      } else {
        projectTitle = <div></div>;
      }
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
      {control}
      {projectTitle}
          <div className="category">
            {panel}
         </div>
         <Modal isOpen={this.state.modal} onRequestClose={this.closeModal.bind(this)} style={this.state.style}>
            <textarea className='textarea-bio' onChange={this.updateText.bind(this)} value={this.state.bio}></textarea>
            <button className="edit-bio" onClick={this.editBio.bind(this)} >Save</button>
         </Modal>
      </div>
    );
  }
}

export default Profile;
