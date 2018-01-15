import React from 'react';

export default class Button extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		const orig_val = e.target.innerHTML;
		if (orig_val === 'Reset' || orig_val === '=')
		{
			this.props.onClick();
		}
		else 
		{
			// const val = parseInt(orig_val,10);
			this.props.onClick(orig_val);
		}
		// alert(`${val} is pressed and ${typeof(val)}`);
	}
	render() {
		return <button onClick={this.handleClick} style={this.props.style} >{this.props.children}</button>;
	}
}