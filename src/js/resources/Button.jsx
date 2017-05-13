import React from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var me = this;

		return (
			<button onClick={me.props.onClick}>{me.props.text}</button>
		);
	}
};

export default Button;