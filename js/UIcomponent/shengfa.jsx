import React, { Component, PropTypes } from 'react';
class Shengfa extends Component{
	render(){
		const {sfvalue,Shengyitwo,Chuyitwo} =this.props;
		return(
			<div>
				<p>这是乘除法:</p>
				<p>{sfvalue}</p>
				<button onClick={Shengyitwo}>乘以2</button>
				<button onClick={Chuyitwo}>除以2</button>
			</div>
		)
	}
}
Shengfa.PropTypes={
	sfvalue:PropTypes.number.isRequired,
	Shengyitwo:PropTypes.func.isRequired,
	Chuyitwo:PropTypes.func.isRequired,
}
export default Shengfa;