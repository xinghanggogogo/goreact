import React, {PropTypes} from 'react';
import {Link} from 'react-router'
import $ from 'jquery'

import '../styles/list.scss';

class List extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			list_info: []
		}
	}
	componentWillMount() {
		const {page} = this.props.params
		$.ajax({
			url: '',
			type: 'GET',
			data: {page: page},
			success: data => {
				this.setState({
					list_info: [{id:1},{id:2},{id:3}]
				})
			}
		})
	}
	render() {
		//迭代方法, 路由的两种方法.
		//如果子级要在多个渲染阶段保持自己的特征和状态，在这种情况下，你可以通过给子级设置惟一标识的 key 来区分.
		//当 React 校正带有 key 的子级时，它会确保它们被重新排序（而不是破坏）或者删除（而不是重用）.
		const showes = this.state.list_info
		return (
			<div className='List'>
				<h2>这是列表页</h2>
				<ul>
					{showes.map((show) =>
						<li key={show.id}>
							<Link to={`/detail/${show.id}`}>
							    <span>{show.id}</span>
							</Link>
							<br/>
							<a href={'/detail/'+show.id}>
								{show.id}
							</a>
						</li>
					)}
				</ul>
				<div><a href="/">返回首页</a></div>
			</div>
		)
	}
}

export default List
