import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: "",
			error: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate(){
		this.redirectIfLoggedIn();
	}

	guestlogin(){
    const guestUser = ['g', 'u', 'e', 's', 't', '1', '1', '1', '1',
'1', '1', '1'];
     let idx = 0;
     let interval = setInterval(()=>{
       if (idx < 6) {
         const name = this.state.username + guestUser[idx];
         this.setState({ username: name });
       } else if (idx < 12) {
         const pw = this.state.password + guestUser[idx];
         this.setState({ password: pw });
       } else {
         this.props.login({user:{
	 				username: this.state.username,
	 				password: this.state.password
	 				}});
         clearInterval(interval);
       }
       idx += 1;
     }, 100);
  }


	redirectIfLoggedIn(){
		if (this.props.loggedIn){
			hashHistory.push("/");
		}
	}

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	handleSubmit(e){
		e.preventDefault();
		if (this.state.password.length < -6){
				this.setState({
				error: true
			});

		}else {
			this.state.error = false;
			if (this.props.formType === "login"){
			this.props.login({user:{
				username: this.state.username,
				password: this.state.password
				}});
			} else {
				this.props.signup({user:
					{
				username: this.state.username,
				password: this.state.password
			}});
			}
		}
	}

	render() {

		let error;
		if (this.props.errors.length>0){
			error = <p className="error">{this.props.errors[0]}</p>;
		} else {
			error = <div></div>;
		}
		return (

			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					{(this.props.formType === "login") ? "Log In" : "Sign Up"}
					<br/>

					<div className="login-form">
						<br />

							<input type="text"
								placeholder="Username"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />


						<br />

							<input type="password"
								placeholder="Password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />

						<br />
						<input className="submit" type="submit" value="Submit"/>
						{error}
						<input className="guest" onClick={this.guestlogin.bind(this)} value="Guest Login"/>
					</div>
				</form>
			</div>

		);
	}

}

export default SessionForm;
