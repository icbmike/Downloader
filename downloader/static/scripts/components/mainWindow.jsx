/** @jsx React.DOM */

var React = require('react');

var TabComponent = require('./TabComponent.jsx');

var DownloadListComponent = require('./DownloadListComponent.jsx');

var SettingsComponent = require('./SettingsComponent.jsx');

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
				<TabComponent>
					<DownloadListComponent apiService={this.props.apiService} tabTitle="Downloads" />
					
					<SettingsComponent tabTitle="Settings" />

				</TabComponent>
			</div>
		);
	}
});