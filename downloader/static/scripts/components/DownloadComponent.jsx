/** @jsx React.DOM */

var React = require('react');

var ProgressBarComponent = require('./ProgressBarComponent.jsx');

module.exports = React.createClass({

	render: function(){
		return (
			<tr className="downloadComponent">
				<td className="nameColumn">
					{this.props.name}
				</td>
				<td className="progressColumn">
					<ProgressBarComponent progress={this.props.progress} />
				</td>
				<td className="statusColumn">
					{this.props.status}
				</td>
				<td className="etaColumn">
					{this.props.eta}
				</td>
			</tr>
		);
	}
});

