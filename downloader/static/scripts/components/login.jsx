/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
	
	//propTypes
	propTypes: {
		submitHandler : React.PropTypes.func
	},

	//Setup
	getInitialState: function (){

		return {
			username: "",
			password: "",
			error: null
		}
	},

	//Click handler
	handleClick: function(e){
		//disable the button to prevent subsequent requests while waiting for a response

		e.target.setAttribute("disabled", "true");

		if (this.props.submitHandler !== undefined){
			//Call the submitHandler callback if it were defined
			this.props.submitHandler(this.state);
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
	
	loginFailed: function(){
		//renable the button
		e.target.setAttribute("disabled", "false");
		
		this.setState({
			error: "Failed to login"
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
				<button onClick={this.handleClick} ref="button">Login</button>
			</div>
		);
	}
});
