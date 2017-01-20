import countreducer from './reducer.js';
import { createStore } from 'redux';
const store= createStore(countreducer);
export default store;