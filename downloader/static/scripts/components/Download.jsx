/** @jsx React.DOM */

var React = require('react');

var ProgressBar = require('./ProgressBar.jsx');

module.exports = React.createClass({

	render: function(){
		return (
			<tr className="downloadComponent">
				<td className="nameColumn">
					{this.props.name}
				</td>
				<td className="progressColumn">
					<ProgressBar progress={this.props.progress} />
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

