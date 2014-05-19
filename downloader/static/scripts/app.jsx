/** @jsx React.DOM */

var React = require('react');

//Components
var LoginComponent = require('./components/login.jsx');
var MainWindow = require('./components/mainWindow.jsx');

//Services
var ApiService = require('./services/apiService.js');

var AppComponent = React.createClass({

	//propTypes
	propTypes: {
		apiService: React.PropTypes.instanceOf(ApiService).isRequired
	},

	loginHandler: function(loginState){
		this.props.apiService.login(loginState.username, loginState.password, function(success){
			if(!success){
				this.refs.loginComponent.loginFailed("Failed to login");
			}else{
				this.forceUpdate();	
			}
		}.bind(this));
	},

	registerHandler: function (registerState){
		this.props.apiService.register(registerState.username, registerState.password, function(success){
			if(!success){
				this.refs.loginComponent.loginFailed("Failed to register");
			}else{
				this.forceUpdate();	
			}
		}.bind(this));
	},

	//Render method
	render: function () {
		return (
			<main>
				{
					this.props.apiService.isAuthenticated()
					? <MainWindow />
					: <LoginComponent loginHandler={this.loginHandler} registerHandler={this.registerHandler} ref="loginComponent" />
				}
			</main>
		);
	}
});

var apiService = new ApiService();

//We'll use the main element as our root container
React.renderComponent(
	<AppComponent apiService={apiService}/>,
	document.getElementsByTagName("body")[0]
);
