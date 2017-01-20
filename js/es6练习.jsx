import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Employee from './esliuclass.js';
import '../css/base.css';
var Obj=new Employee('78','李易峰','厨师');
console.log(Obj.getMesg());
//es6语法
class HelloWorld extends Component{
    render(){
       return(
            <h1>aaa</h1>
        )
   }
}
//渲染虚拟dom
ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('app')
);