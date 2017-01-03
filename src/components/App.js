'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Details from './Details.js'
import List from './List.js'
import Testnest from './Testnest.js'
import Test from './Test.js'

var App = React.createClass({
    render: function() {
        return (
            <div>
                <h2>这是首页路由页</h2>
                <div><a href="/list">列表页</a></div>
                <div><a href="/detail">详情页</a></div>
                <div><a href="/testnest">验证嵌套</a></div>
                <div><a href="/test">测试链接</a></div>
            </div>
        );
    }
});

//最终渲染
ReactDom.render((
    <Router history={browserHistory}>
        <Route path='/' component={App}></Route>
        <Route path='/list' component={List} />
        <Route path='/detail' component={Details} />
        <Route path='/testnest' component={Testnest} />
        <Route path='/test' component={Test} />
    </Router>
), document.getElementById('app'));