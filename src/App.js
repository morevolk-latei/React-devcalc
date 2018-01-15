import React from 'react';
import { Header } from './components/header';
import { Textfield } from './components/textfield';
import Button from './components/button';
import BigEval from 'bigeval';

const numbers = [1,2,3,4,5,6,7,8,9,0];

export default class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tval: '',
			result: ''
		};
		this.updateTextfieldContent = this.updateTextfieldContent.bind(this);
		this.handleResetAction = this.handleResetAction.bind(this);
		this.evaluateExpression = this.evaluateExpression.bind(this);
	}
	updateTextfieldContent(newContent) {
		this.setState(prevState => {
			return {
				tval: prevState.tval.toString().trim()+newContent.toString().trim()
			}
		 });
	}
	handleResetAction(){
		this.setState({
			tval: '',
			result: ''
		});
	}
	evaluateExpression() {
		const currentExp = this.state.tval;
		console.log(`Exp: ${currentExp} and of type: ${typeof(currentExp)}`);
		const result = this.eval.exec(currentExp);
		this.setState({result});
	}

	componentWillMount() {
		this.buttonList = numbers.map((number,id) => <Button key={id} style={styles.button} onClick={this.updateTextfieldContent} > {number} </Button>);
	}
	componentDidMount() {
		this.eval = new BigEval();
	}
  render() {

    return (
            <div style={styles.mainContainer}>
              <Header style={styles.header} />
              <Textfield style={styles.resultTextField} value={this.state.result} />
              <Textfield style={styles.textField} value={this.state.tval} />
              <div className="left-btn-container" style={styles.buttonsBoxLeft}>{this.buttonList}<Button style={styles.buttonReset} onClick={this.handleResetAction}>Reset</Button></div>
              <aside className="right-btn-container" style={styles.buttonsBoxRight} >
              	<Button style={styles.buttonsRight} onClick={this.updateTextfieldContent} >/</Button>
              	<Button style={styles.buttonsRight} onClick={this.updateTextfieldContent} >+</Button>
              	<Button style={styles.buttonsRight} onClick={this.updateTextfieldContent} >-</Button>
              </aside>
              <div className="bottom-btn-container">
              	<Button style={styles.buttonBottom1} onClick={this.updateTextfieldContent} >*</Button>
              	<Button style={styles.buttonBottom1} onClick={this.updateTextfieldContent} >(</Button>
              	<Button style={styles.buttonBottom1} onClick={this.updateTextfieldContent} >)</Button>
              	<Button style={styles.buttonBottom2} onClick={this.evaluateExpression} >=</Button>
              </div>
            </div>
            );
  }
}


const styles = {
	mainContainer: {
		width: '350px',
		display:'block',
		margin: '90px auto 10px auto',
		borderRadius: '5px'
	},
	header: {
		background: '#266',
		color: '#fffe',
		padding: '10px 0',
		textAlign: 'center',
		userSelect: 'none'
	},
	textField: {
		width: '100%',
		fontSize: '1.7em',
		padding: '4px 1px',
		fontFamily: "'Roboto','sans-serif'",
		color: '#222'
	},
	resultTextField: {
		width: '100%',
		fontSize: '1.7em',
		padding: '4px 1px',
		fontFamily: "'Roboto','sans-serif'",
		color: '#222'
	},
	buttonsBoxLeft: {
		width: '80%',
		display: 'inline-block'
	},
	button: {
		width: 'calc(100% / 4)',
		fontSize: '1.4em',
		fontFamily: 'Roboto',
		height: '42px',
		color: '#222',
		background: 'rgba(150,150,150,0.35)',
		border: 'inset 1px solid #fff1',
		outline: 'none'
	},
	buttonReset: {
		width: 'calc(100% / 2)',
		fontSize: '1.4em',
		fontFamily: 'Roboto',
		height: '42px',
		color: '#222',
		background: 'rgba(150,150,150,0.35)',
		border: 'inset 1px solid #fff1',
		outline: 'none'
	},
	buttonsBoxRight: {
		display: 'inline-block',
		width: '20%'
	},
	buttonsRight: {
		width: '100%',
		fontSize: '1.4em',
		fontFamily: 'Roboto',
		height: '42px',
		color: '#222',
		background: 'rgba(150,150,150,0.35)',
		border: 'inset 1px solid #fff1',
		outline: 'none'
	},
	buttonBottom1: {
		width: 'calc(100% / 5)',
		fontSize: '1.4em',
		fontFamily: 'Roboto',
		height: '42px',
		color: '#222',
		background: 'rgba(150,150,150,0.35)',
		border: 'inset 1px solid #fff1',
		outline: 'none'	
	},
	buttonBottom2: {
		width: '40%',
		fontSize: '1.4em',
		fontFamily: 'Roboto',
		height: '42px',
		color: '#222',
		background: 'rgba(150,150,150,0.35)',
		border: 'inset 1px solid #fff1',
		outline: 'none'	
	}
};