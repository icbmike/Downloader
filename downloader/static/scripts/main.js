var React = require('react');
var LoginComponent = require('./components/login.jsx');

//We'll use the main element as our root container

React.renderComponent(
	LoginComponent(),
	document.getElementsByTagName("main")[0]
);
