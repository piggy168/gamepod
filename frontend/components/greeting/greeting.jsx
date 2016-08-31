import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';
import SessionForm from '../session_form/session_form';

class Greeting extends React.Component{
  constructor(props){
    super(props);

    this.state= {
      modal: false,
      form: "signup",
      style:  {
        overlay : {
            position        : 'fixed',
            top             : 0,
            left            : 0,
            right           : 0,
            bottom          : 0,
            backgroundColor : 'rgba(255, 255, 255, 0.75)',
          },
        content : {
            position        : 'fixed',
            top             : '100px',
            left            : '150px',
            right           : '150px',
            bottom          : '100px',
            border          : '1px solid #ccc',
            padding         : '20px',
          }
        }
      };
    const { store } = this.props;

  }

  closeModal(){
    this.setState({modal: false});

  }

  openSignupModal(){
    this.setState({modal: true});
    this.setState({form: "signup"});
  }

  openLoginModal(){
    this.setState({modal: true});
    this.setState({form: "login"});
  }


  sessionLinks(){ return(
    <nav className="login-signup">
      <button id="signun" onClick={this.openSignupModal.bind(this)}> Sign up</button>
      <button id="login" onClick={this.openLoginModal.bind(this)}> Login</button>
        <Modal isOpen={this.state.modal} onRequestClose={this.closeModal.bind(this)} style={this.state.style}>
          <button onClick={this.closeModal.bind(this)}>Close</button>
           <SessionFormContainer formType={this.state.form} />
        </Modal>
    </nav>
    );
  }

  personalGreeting(currentUser, logout) {return (
  	<hgroup className="header-group">
  		<h2 className="header-name">Hi, {currentUser.username}!</h2>
      <h3 className="header-favorites">
        wellcome to Game Pod
      </h3>
  		<button className="header-button" onClick={logout}>Log Out</button>


  	</hgroup>
    );
    }
  render(){
    if (this.props.currentUser){
      return this.personalGreeting(this.props.currentUser, this.props.logout);
    } else {
      return this.sessionLinks();
    }
    }
}
export default Greeting;
