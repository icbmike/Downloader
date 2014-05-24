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
				<td className="cancelButton">
					<button><i class="fa fa-times-circle-o"></i></button>
				</td>
			</tr>
		);
	}
});