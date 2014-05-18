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

	getInitialState: function(){
		return {
			authToken: null
		};
	},

	loginHandler: function(loginState){
		var token = this.props.apiService.Login(loginState.username, loginState.password);
		if(token == null){
			this.refs.loginComponent.loginFailed();
		}else{
			setState({
				authToken: token
			});
		}
	},

	//Render method
	render: function () {
		return (
			<main>
				{
					this.state.authToken !== null
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
