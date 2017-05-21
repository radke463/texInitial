var React = require('react');
var Button;

Button = React.createClass({
	render() {
		var me = this;

		return (
			<button onClick={me.props.onClick}>{me.props.text}</button>
		);
	}
});

module.exports = Button;