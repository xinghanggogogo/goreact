import React, {PropTypes} from 'react';
import numStore from '../store/store.js'
import {add, subtract} from '../actions/actions.js'

class Son extends React.Component {
	constructor() {
        super();
        this.state = {text: 'placeholder'};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }
	render() {
		const {value2, onIncreaseClick, ajaxtest} = this.props
		var son_info = 'son_info'
		return (
			<div className="son">
				<p>这是子组件</p>
				<p>{value2}</p>
				<button onClick={onIncreaseClick}>子组件调用祖父组件方法计数</button>
				<br/>
				<button onClick={ajaxtest.bind(this, son_info)}>父组件调用祖父组件函数2</button>
				<br/>
				Type something:
	            <input onChange={this.handleChange} value={this.state.text} />
			   	<p>{this.state.text}</p>
			</div>
		);
	}
}

//实现绑定参数!passinfo.bind(this, this.props.vaule1)
class Parent extends React.Component {
	render() {
		const {value1, onIncreaseClick, passinfo, ajaxtest} = this.props
		var parent_value = 'parent_info'
		return (
			<div className="Counter">
				<p>这是父组件.</p>
				<p>{value1}</p>
				<button onClick={onIncreaseClick}>父组件调用祖父组件方法计数</button>
				<br/>
	          	<h3>Login</h3>
	          	<input onChange={passinfo.bind(this, 'username')} placeholder="username"/>
				<input onChange={passinfo.bind(this, 'password')} placeholder="password"/>
				<br/>
	          	<button onClick={ajaxtest.bind(this, parent_value)}>父组件调用祖父组件函数1</button>
				<button onClick={ajaxtest.bind(this, this.props.value1)}>父组件调用祖父组件函数2</button>
				<Son
					value2={this.props.value1}
					onIncreaseClick={onIncreaseClick}
					ajaxtest={ajaxtest}
					/>
			</div>
		)
	}
}

class GrandP extends React.Component {
	constructor(props) {
	    super(props);
		this.state = {
			num: props.num,
			username: props.username,
			password: props.password
		};
		this.passinfo = this.passinfo.bind(this); 	//不需要绑定参数可以不在构造函数中绑定,用es6的写法
		this.ajaxtest = this.ajaxtest.bind(this);	//同上
	}
	//不需要传递参数,可以直接使用es6绑定
	counter() {
		console.log('祖父组件方法');
      	this.setState({
        	num:this.state.num+1
      	});
    }
	//取多值的方法
	passinfo(name, event) {
		var newState={};
		console.log(name)
		newState[name]=event.target.value;
		this.setState(newState);
	}
	ajaxtest(text) {
		alert(text)
	}
	render() {
		return (
			<div className="TestReducer">
				<a href="/">返回首页</a>
				<p>这是祖父组件.</p>
				<p>{this.state.num}</p>
				<p>{this.state.username},{this.state.password}</p>
				<button onClick ={()=>this.counter()}>祖父组件计数</button>
				<Parent
					value1={this.state.num}
					onIncreaseClick={()=>this.counter()}
					passinfo={this.passinfo}
					ajaxtest={this.ajaxtest}
					/>
			</div>
		)
	}
}
GrandP.propTypes={
    num: React.PropTypes.number.isRequired,
	username: React.PropTypes.string.isRequired,
	password: React.PropTypes.string.isRequired

}
GrandP.defaultProps={
	num: 12,
	username: 'username',
	password: 'password',
}

export default GrandP
