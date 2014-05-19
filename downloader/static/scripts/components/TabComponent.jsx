/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

	getInitialState: function(){
		return {
			selectedIndex : 0
		};
	},

	render: function () {

		var tabLabels = React.Children.map(this.props.children, function(component) {
			return <li>{component.props.title}</li>;
		});

		var content = this.props.children !== undefined
			? this.props.children[this.state.selectedIndex]
			: <span>No children</span>;

		return (
			<div className="tabComponent">
				<ul className="tabs">
					{tabLabels}
				</ul>
				<div className="tabContent">
					{content}
				</div>
			</div>
		);
	}

});