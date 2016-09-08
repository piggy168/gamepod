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

  componentDidMount () {
    $('.search-bar').on('keyup', e => this.onKeyUp(e));
  }

  onKeyUp(e) {
    e.preventDefault();
    if (e.key === "Enter") {

      $('.search-bar').val('');
    }
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

  out(){
    this.setState({modal:false});
    this.props.logout();
  }

  search(e){
    this.props.requestSearch(e.target.value);
    hashHistory.push(`/search`);
  }

  sessionLinks(){ return(
    <nav className="login-signup">
      <div method="get" id="search">
        <input className='search-bar' name="q" type="text" size="40" placeholder="Discover" onChange={this.search.bind(this)}/>
      </div>
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
      <form method="get" action="/search" id="search">
        <input className='search-bar' name="q" type="text" size="40" placeholder="Search..." onChange={this.search.bind(this)}/>
      </form>
      <button className="header-button" onClick={this.out.bind(this)}>Log Out</button>
        <img className='imglog' src={currentUser.photo_url} onClick={()=>hashHistory.push(`/user/${currentUser.id}`)}/>
      <div className="userinfo">
    		<h2 className="header-name">{currentUser.username}</h2>
        <h3 className="header-favorites">
          $ {currentUser.money}
        </h3>
      </div>


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
