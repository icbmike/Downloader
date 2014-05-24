/** @jsx React.DOM */

var React = require('react');

//Components
var Download = require('./Download.jsx');
var PendingDownload = require('./PendingDownload.jsx');
var Modal = require('./Modal.jsx');
var NewDownload = require('./NewDownload.jsx');
//Services
var ApiService = require('../services/apiService.js');


module.exports = React.createClass({
	
	//propTypes
	propTypes: {
		apiService: React.PropTypes.instanceOf(ApiService).isRequired
	},

	createNewDownload: function(name, url){

		var newDownloadPromise = this.props.apiService.createDownload(name, url);

		newDownloadPromise.then(
			//success
			function(){
				React.unmountComponentAtNode(document.getElementById('modalAnchor'));
				return this.props.apiService.getPendingDownloads();
			}.bind(this),
			//error
			function(){
				console.log("Error creating new download");
			}).then(
			function(downloads){
				this.setState({
					pendingDownloads: downloads
				});
			}.bind(this), 
			function(error){
				console.log("Error getting new downloads");
			}
		);

	},

	handleAddClick: function(){

		var modal = (
			<Modal>
				<NewDownload saveCallback={this.createNewDownload} />
			</Modal>
		);

		//Render the modal over everything else so that it intercepts events
		React.renderComponent(
			modal,
			document.getElementById("modalAnchor")
		);
	},
	componentWillMount: function(){
		var downloadsPromise = this.props.apiService.getDownloads();
		var pendingDownloadsPromise = this.props.apiService.getPendingDownloads();

		downloadsPromise.then(
			function(downloads){
				this.setState({
					downloads: downloads
				});
			}.bind(this), 
			function(error){

			}
		);

		pendingDownloadsPromise.then(
			function(downloads){
				this.setState({
					pendingDownloads: downloads
				});
			}.bind(this), 
			function(error){

			}
		);
	},

	getInitialState: function(){
		return {
			downloads:[],
			pendingDownloads:[]
		};
	},

	render: function(){

		var downloads = this.state.downloads.map(function(download) {
			return (<Download
						key={download.id}
						name={download.name} 
						progress={download.progress}
						status={download.status}
						eta={download.eta}
						/>
					);
		}.bind(this));


		var pendingDownloads = this.state.pendingDownloads.map(function(pendingDownload) {
			return (<PendingDownload 
				key={pendingDownload.name}
				name={pendingDownload.name}
				URL={pendingDownload.url}
				/>);
		}.bind(this));

		return (
			<div className="downloadListComponent">
				<table className="downloads">
					<tr>
						<th>Name</th>
						<th>Progress</th>
						<th>Status</th>
						<th>ETA</th>
					</tr>
					{downloads}
				</table>
				<table className="pendingDownloads">
					<tr>
						<th>Name</th>
						<th>URL</th>
					</tr>
					{pendingDownloads}
				</table>
				<button onClick={this.handleAddClick}><i className="fa fa-plus-circle"></i></button>
			</div>
		);
	}
});

