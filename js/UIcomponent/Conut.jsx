import React, { Component, PropTypes } from 'react';
import Shenn from './shengfa.jsx';
class Count extends Component{
	render(){
		const {value,numup,numdown,sfvalue,Shengyitwo,Chuyitwo} =this.props;
		return (
			<div>
				<span>{value}</span>
				<button onClick={numup}>加一</button>
				<button onClick={numdown}>减一</button>
				<Shenn sfvalue={sfvalue} Shengyitwo={Shengyitwo} Chuyitwo={Chuyitwo}/>
			</div>
		)
	}
}

Count.propTypes={
	value:PropTypes.number.isRequired,
	numup:PropTypes.func.isRequired,
	numdown:PropTypes.func.isRequired,
}
export default Count;
