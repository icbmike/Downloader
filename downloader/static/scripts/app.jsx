/** @jsx React.DOM */

var React = require('react');
var LoginComponent = require('./components/login.jsx');
var MainWindow = require('./components/mainWindow.jsx');
var ApiService = require('./services/apiService.js');

var AppComponent = React.createClass({

	//propTypes
	propTypes: {
		apiService: React.PropTypes.instanceOf(ApiService).isRequired
	},

	loginHandler: function(loginState){
		var success = this.props.apiService.Login(loginState.username, loginState.password);
		if(!success){
			this.refs.loginComponent.loginFailed();
		}else{
			this.forceUpdate();	
		}
	},

	//Render method
	render: function () {
		return (
			<main>
				{
					this.props.apiService.isAuthenticated()
					? <MainWindow />
					: <LoginComponent submitHandler={this.loginHandler} ref="loginComponent" />
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
