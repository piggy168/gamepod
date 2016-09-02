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
      <button className="login" onClick={this.openLoginModal.bind(this)}> Login</button>
      <button className="signup" onClick={this.openSignupModal.bind(this)}> Sign up</button>
        <Modal isOpen={this.state.modal} onRequestClose={this.closeModal.bind(this)} style={this.state.style}>
           <SessionFormContainer formType={this.state.form} />
        </Modal>
    </nav>
    );
  }

  personalGreeting(currentUser, logout) {return (
  	<hgroup className="header-group">
      <button className="header-button" onClick={logout}>Log Out</button>
  		<h2 className="header-name">Hi, {currentUser.username}!</h2>
      <h3 className="header-favorites">
        welcome to Game Pod
      </h3>


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
