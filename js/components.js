import React, { Component, PropTypes } from 'react';
class App extends Component{
	constructor(props){
		super(props)
	};
	render(){
		const { value, onIncrement, onDecrement } = this.props
		return(
			<div>
				<p>简单的加减法</p>
				<p>{value}</p>
				<button onClick={onIncrement}>加一</button>
				<button onClick={onDecrement}>减一</button>
			</div>
			)
	}
}
export default App;