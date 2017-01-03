import React, {PropTypes} from 'react';

import '../styles/list.scss';

const List = React.createClass({
	render() {
		return (
			<div className='List'>
				<h2>这是列表页</h2>
				<div><a href="/">返回首页</a></div>
			</div>
		)
	}
})

export default List
