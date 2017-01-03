import React, {PropTypes} from 'react';
import numStore from '../store/store.js'
import {add, subtract} from '../actions/actions.js'

class InputControlES6 extends React.Component {
	constructor(props) {
        super(props);
        this.state = {text: props.initialValue || 'placeholder'};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <div className='test'>
				<h2>这是测试页面</h2>
				<a href="/">返回首页</a>
				<br/>
				<br/>
                Type something:
                <input onChange={this.handleChange} value={this.state.text} />
		   		<p>{this.state.text}</p>
            </div>
        );
    }
}
InputControlES6.propTypes = {
    initialValue: React.PropTypes.string
};
InputControlES6.defaultProps = {
    initialValue: ''
};

export default InputControlES6
