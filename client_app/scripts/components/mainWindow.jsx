/** @jsx React.DOM */

var React = require('react');

var TabbedContainer = require('./TabbedContainer.jsx');

var Downloads = require('./Downloads.jsx');

var Settings = require('./Settings.jsx');

//Services
var ApiService = require('../services/apiService.js');

module.exports = React.createClass({
	
	//propTypes
	propTypes: {
		apiService: React.PropTypes.instanceOf(ApiService).isRequired
	},

	render: function(){
		return(
			<div className="mainWindow">
				<h1>Downloader</h1>
				<TabbedContainer>
					<Downloads apiService={this.props.apiService} tabTitle="Downloads" />
					
					<Settings tabTitle="Settings" />

				</TabbedContainer>
			</div>
		);
	}
});