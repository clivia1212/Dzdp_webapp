import { createStore } from 'redux';

export default function() {
  // 以下是https://www.redux.org.cn/ redux官网counter demo

  // 第一步：定义计算规则，即reducer
  function counter(state = 0, action) {
    switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
    }
  }
  
  // 第二步：根据计算规则生成store
  // 创建 Redux store 来存放应用的状态。
  // API 是 { subscribe, dispatch, getState }。
  let store = createStore(counter);
  
  // 第三步：定义数据（即state）变化之后的派发规则
  // 可以手动订阅更新，也可以事件绑定到视图层。
  store.subscribe(() =>
    console.log(store.getState())
  );
  
  // 第四步：触发数据变化
  // 改变内部 state 惟一方法是 dispatch 一个 action。
  // action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
  store.dispatch({ type: 'INCREMENT' });
  // 1
  store.dispatch({ type: 'INCREMENT' });
  // 2
  store.dispatch({ type: 'DECREMENT' });
  // 1
}