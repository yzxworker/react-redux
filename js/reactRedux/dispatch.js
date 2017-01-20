import {actioncreate} from './actoion.js';
export function mapStateToProps(state){
	console.log(state);
	return {
		value:state.count,
		sfvalue:state.sfcount
	}
}
export function mapDispatchToProps(dispatch){
	return {
		numup:() => dispatch(actioncreate('ADD')),
		numdown:() => dispatch(actioncreate('DEL')),
		Shengyitwo:() => dispatch(actioncreate('SHFA')),
		Chuyitwo:() => dispatch(actioncreate('CHFA'))
	}
}
// export default {mapStateToProps,mapDispatchToProps};