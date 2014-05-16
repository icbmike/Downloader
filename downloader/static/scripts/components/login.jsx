/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
	
	//Click handler
	handleClick: function(){
		//Get input values
		var username = this.refs.username.getDOMNode().value;
		var password = this.refs.password.getDOMNode().value;
		console.log(username);
		console.log(password);
	},

	//THE Render method
	render : function(){
		return (
			<div className="loginComponent">
				<h2>Login</h2>
				<input type="text" name="username" ref="username" />
				<input type="password" name="password" ref="password"/>
				<button onClick={this.handleClick} >Login</button>
			</div>
		);
	}
});
