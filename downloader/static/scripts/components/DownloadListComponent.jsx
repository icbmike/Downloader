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
			downloads: []
		};
	},

	render: function(){

		var downloads = this.state.downloads.map(function(index, elem) {
			return <DownloadComponent apiService={this.props.apiService} data={elem} />;
		}.bind(this));

		return (
			<div className="downloadListComponent">
				<div>
					{downloads}
				</div>
				<button onClick={this.handleAddClick}>+</button>
			</div>
		);
	}
});

