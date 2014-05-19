/** @jsx React.DOM */

var React = require('react');

var TabComponent = require('./TabComponent.jsx');

var AComponent = React.createClass({
	render: function(){return (<p>Heyo BOI</p>);}
});

var BComponent = React.createClass({
	render: function(){return (<p>Thingy</p>);}
});

module.exports = React.createClass({
	
	render: function(){
		return(
			<div className="mainWindow">
				<h1>Downloader</h1>
				<TabComponent>
					<AComponent title="Heyo" />
					
					<BComponent title="Thingy" />

				</TabComponent>
			</div>
		);
	}
});