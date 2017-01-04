import React, {PropTypes} from 'react';
import {Link} from 'react-router'
import '../styles/list.scss';
import $ from 'jquery'

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
		const showes = this.state.list_info
		return (
			<div className='List'>
				<h2>这是列表页</h2>
				<ul>
					{showes.map((show) =>
						<li>
							<Link to={`/detail/${show.id}`}>
							    <span>{show.id}</span>
							</Link>
						</li>
					)}
				</ul>
				<div><a href="/">返回首页</a></div>
			</div>
		)
	}
}

export default List
