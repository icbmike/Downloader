/** @jsx React.DOM */

var React = require('react');

//Services
var ApiService = require('../services/apiService.js');


module.exports = React.createClass({

	//propTypes
	propTypes: {
		apiService: React.PropTypes.instanceOf(ApiService).isRequired
	},

	render: function(){
		return (
			<div className="downloadComponent">
			</div>
		);
	}
});

