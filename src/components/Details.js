import React, {PropTypes} from 'react';

import '../styles/details.scss';

class Details extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			info_about_id: ''
		}
	}
	//注意加了params参数
	componentWillMount() {
		const {id} = this.props.params
		console.log(id);
		//somefunction about id
		this.setState({
			info_about_id: id*4
		})
	}
	render() {
		return (
			<div className='Details'>
				<h2>这是详情页</h2>
				<h2>详情id是:{this.state.info_about_id}</h2>
				<a href="/">返回首页</a>
			</div>
		)
	}
}

export default Details
