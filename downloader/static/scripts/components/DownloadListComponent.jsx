/** @jsx React.DOM */

var React = require('react');

//Components
var DownloadComponent = require('./DownloadComponent.jsx');

//Services
var ApiService = require('../services/apiService.js');

module.exports = React.createClass({
	
	//propTypes
	propTypes: {
		apiService: React.PropTypes.instanceOf(ApiService).isRequired
	},


	getInitialState: function(){
		return {
			downloads: [
				{
					id: 1,
					name: 'DS9 Season 3',
					progress: '100%',
					status: 'paused',
					eta: '4 hours'	
				}
			]
		};
	},

	render: function(){

		var downloads = this.state.downloads.map(function(download) {
			return (<DownloadComponent
						key={download.id}
						name={download.name} 
						progress={download.progress}
						status={download.status}
						eta={download.eta}
						/>
					);
		}.bind(this));

		return (
			<div className="downloadListComponent">
				<table>
					<tr>
						<th>Name</th>
						<th>Progress</th>
						<th>Status</th>
						<th>ETA</th>
					</tr>
					{downloads}
				</table>
				<button onClick={this.handleAddClick}>+</button>
			</div>
		);
	}
});

