import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import RouteMap from './router/routeMap';
import configureStore from './store/configureStore';

// 引用并执行 redux-demo
// import fn from './redux-demo';
// fn();

// 通用样式
import './static/css/common.less';

// import Todo from './containers/Todo';
// import Hello from './containers/Hello';

// 性能测试
// import Perf from 'react-addons-perf';
// if (__DEV__) {
//   window.Perf = Perf;
// }
// console.log(hashHistory);

const store = configureStore();

// 测试 fetch 的功能
// import { getData, postData } from './fetch/test';
// import { getData, postData } from './fetch/data';
// getData();
// postData();


render(
  // <Hello />,
  // <Todo />,
  // <RouteMap history={hashHistory} />,
  // <Provider store={store}>
  //   <Hello />
  // </Provider>,
  <Provider store={store}>
    <RouteMap history={hashHistory} />
  </Provider>,
  document.getElementById('root')
)