/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
	
	//propTypes
	propTypes: {
		loginHandler : React.PropTypes.func,
		registerHandler : React.PropTypes.func
	},

	//Setup
	getInitialState: function (){

		return {
			username: "",
			password: "",
			error: null
		}
	},

	_toggleButtons: function(enabled){
		if(enabled){
			//enable the buttons
			this.refs.loginButton.getDOMNode().removeAttribute("disabled");
			this.refs.registerButton.getDOMNode().removeAttribute("disabled");
		}else{
			//disable the button to prevent subsequent requests while waiting for a response
			this.refs.loginButton.getDOMNode().setAttribute("disabled", true);
			this.refs.registerButton.getDOMNode().setAttribute("disabled", true);
		}

	},

	//Click handlers
	handleLoginClick: function(e){
		this._toggleButtons(false);

		if (this.props.loginHandler !== undefined){
			//Call the loginHandler callback if it was defined
			this.props.loginHandler(this.state);
		}
	},

	handleRegisterClick: function(e){
		this._toggleButtons(false);

		if (this.props.registerHandler !== undefined){
			//Call the registerHandler callback if it was defined
			this.props.registerHandler(this.state);
		}
	},

	handleChange: function(e){
		//Get input values
		var username = this.refs.username.getDOMNode().value;
		var password = this.refs.password.getDOMNode().value;

		this.setState({
			username: username, 
			password: password
		});
	},
	
	loginFailed: function(errorMessage){
		//renable the buttons
		this._toggleButtons(true);

		this.setState({
			error: errorMessage
		});

	},

	//THE Render method
	render : function(){
		return (
			<div className="loginComponent">
				<h2>Login</h2>
				
				{this.state.error === null
					? '' 
					: <span className="error">{this.state.error}</span>
				}
				
				<input type="text" ref="username" value={this.state.username} onChange={this.handleChange} />
				<input type="password" ref="password" value={this.state.password} onChange={this.handleChange} />
				
				<button onClick={this.handleRegisterClick} ref="registerButton">Register</button>
				<button onClick={this.handleLoginClick} ref="loginButton">Login</button>
			</div>
		);
	}
});
