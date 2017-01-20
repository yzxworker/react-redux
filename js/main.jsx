import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
// 导入Provider, connect
import { Provider, connect } from 'react-redux';
// 导入store
import store from './reactRedux/store.js';
// 导入connect需要的函数
import {mapStateToProps,mapDispatchToProps} from './reactRedux/dispatch.js';
// UI层
import Count from './UIcomponent/Conut.jsx';


// 定义映射，数据的传入传出


// Action生成器

// 生成容器组件
const App=connect(mapStateToProps,mapDispatchToProps)(Count);
// 定义reducer

// const store= createStore(countreducer);
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
)