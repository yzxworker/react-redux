const DEFAULTSTATE={
	count:0,
	sfcount:1
};
function countreducer(state=DEFAULTSTATE,action){
	var count=state.count;
	var sfcount=state.sfcount;
	console.log(state);
	switch(action.type){
		case 'ADD':
			return Object.assign({}, state, {count: count+1});
		case 'DEL':
			return Object.assign({}, state, {count: count-1});
		case 'SHFA':
			return Object.assign({}, state, {sfcount: sfcount*2});
		case 'CHFA':
			return Object.assign({}, state, {sfcount: sfcount/2});
		default:
			return state;
	}
}
export default countreducer;