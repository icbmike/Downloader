/** @jsx React.DOM */

var React = require('react');


module.exports = React.createClass({
	

	render: function(){
		return (
			<div className="progressBarComponent">
				<div className="progressBar" data-progress={this.props.progress}></div>
				<span className="progressText">{this.props.progress}</span>
			</div>
		);
	}
});