/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<tr className="pendingDownload">
				<td className="nameColumn">
					{this.props.name}
				</td>
				<td className="urlColumn">
					{this.props.URL}
				</td>
			</tr>
		);
	}
});