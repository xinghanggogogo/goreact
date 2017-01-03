// 定义初始化状态和reducer函数

const initState = {
  value:1
}


// 定义灯转换的reducer函数
export default function numReducer(state=initState,action){
  switch(action.type){
    case ADD:
      return {
        vale: 2
      }

    case SUB:
      return {
        value: 0
      }

    default:
      return state
  }
}
