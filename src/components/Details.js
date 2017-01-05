import React, {PropTypes} from 'react';
import LIB from '../lib/utils.js'
import '../styles/details.scss';

class Details extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			info: 'test-git'
		}
	}
	//注意加了params参数
	componentWillMount() {
		const {id} = this.props.params

		// ajax 后端解决跨域(cors)
		// $.ajax({
		// 	url: 'http://101.254.157.124:8030/test',
		// 	type: 'GET',
		// 	data: {id: id},
		// 	success: data => {
		// 		this.setState({
		// 			info: data.anchors[4][5]
		// 		})
		// 	}
		// })

		// ajax jsonp解决跨域, 以下会生成'jsonp='kehu...'传递给后端'
		// $.ajax({
		// 	url: 'http://101.254.157.124:8030/test',
		// 	type: 'GET',
		// 	data: {id: id},
		// 	dataType: "jsonp",
		// 	// jsonp: "jsonp", 默认值callback
		// 	// jsonpCallback: "kehuduandingyihanshu",
		// 	success: data => {
		// 		this.setState({
		// 			info: data.anchors[4][5]
		// 		})
		// 	}
		// })

		//封装实现
		const TEST_URL = 'http://101.254.157.124:8030/test'
		LIB.fetch(TEST_URL, 'GET', {id:id}, (data)=>{
			this.setState({
				info: data.anchors[4][5]+id
			})
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
