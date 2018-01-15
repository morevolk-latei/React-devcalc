import React from 'react';

export class Textfield extends React.Component {
	render() {
		return <input type="text" style={this.props.style} value={this.props.value}/>;
	}
}

Textfield.defaultProps = {
	value: ''
};	