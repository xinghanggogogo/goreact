import {createStore} from 'redux'
import numReducer from '../reducer/reducer.js'

export default function numStore(initState){
  	return createStore(numReducer); // 初始化创建
}
