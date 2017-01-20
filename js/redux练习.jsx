import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
const DEFAULTSTATE=0;
// reduces函数
const reduces = (state=DEFAULTSTATE,action) => {
	switch (action.type){
		case 'ADD':
			return state+1;
		case 'DEL':
			return state-1;
		default:
			return state;
	}
}
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
const store=createStore(reduces);
const render =() => ReactDOM.render(
		<App 
			value={store.getState()} 
			onIncrement={() => store.dispatch({ type: 'ADD' })}
    		onDecrement={() => store.dispatch({ type: 'DEL' })}
		/>,
		document.getElementById('app')
	)
render();
store.subscribe(render);