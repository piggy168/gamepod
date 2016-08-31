import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate(){
		this.redirectIfLoggedIn();
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
		const user = this.state;
		if (this.props.formType === "login"){
		this.props.login({user});
		} else {
			this.props.signup({user});
		}
	}

	renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (

			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					{(this.props.formType === "login") ? "Log In" : "Sign Up"}
					<br/>

					<div className="login-form">
						<br />
						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>

						<br />
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>

						<br />
						<input type="submit" value="Submit"/>
					</div>
				</form>
			</div>

		);
	}

}

export default SessionForm;
