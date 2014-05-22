/** @jsx React.DOM */

var React = require('react');

//Components
var DownloadComponent = require('./DownloadComponent.jsx');

//Services
var ApiService = require('../services/apiService.js');
var ModalComponent = require('./ModalComponent.jsx');
var NewDownloadComponent = require('./NewDownloadComponent.jsx');

module.exports = React.createClass({
	
	//propTypes
	propTypes: {
		apiService: React.PropTypes.instanceOf(ApiService).isRequired
	},

	handleAddClick: function(){
		var modal = (
			<ModalComponent>
				<NewDownloadComponent apiService={this.props.apiService} />
			</ModalComponent>
		);

		//Render the modal over everything else so that it intercepts events
		React.renderComponent(
			modal,
			document.getElementById("modalAnchor")
		);
	},

	getInitialState: function(){
		return {
			downloads: [
				{
					id: 1,
					name: 'DS9 Season 3',
					progress: 54.2,
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
				<button onClick={this.handleAddClick}><i className="fa fa-plus-circle"></i></button>
			</div>
		);
	}
});

