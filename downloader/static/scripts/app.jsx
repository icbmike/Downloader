/** @jsx React.DOM */

var React = require('react');
var LoginComponent = require('./components/login.jsx');


var AppComponent = React.createClass({
	render: function () {
		return (
			<LoginComponent />
		);
	}
});


//We'll use the main element as our root container
React.renderComponent(
	AppComponent(),
	document.getElementsByTagName("main")[0]
);
