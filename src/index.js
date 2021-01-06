import React from 'react';
import ReactDOM from 'react-dom';
// import '../src/css/portals.css'
// import './index.css';
import 'antd/dist/antd.css';
import store from './redux';
import { StoreContext } from './utils/context';
// import { Provider } from 'react-redux';
// import '../src/transition/CSSTransitionDemo.css'
// import App from '../src/通信案例/App'
// import App from '../src/插槽/App'
// import App from '../src/组件内容补充/02-portals的使用'
// import App from '../src/transition/CSSTransitionDemo'
import App from '../src/reduxdemo/index'






ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root')
);
