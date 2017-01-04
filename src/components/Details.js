import React, {PropTypes} from 'react';
import '../styles/details.scss';
import $ from 'jquery'

class Details extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			info: ''
		}
	}
	//注意加了params参数
	componentWillMount() {
		const {id} = this.props.params
		$.ajax({
			url: '',
			type: 'GET',
			data: {id: id},
			success: data => {
				this.setState({
					info: '来自ajax'+' '+id
				})
			}
		})
	}
	render() {
		return (
			<div className='Details'>
				<h2>这是详情页</h2>
				<h2>详情是: {this.state.info}</h2>
				<a href="/">返回首页</a>
			</div>
		)
	}
}

export default Details
