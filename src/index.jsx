import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import { HashRouter } from 'react-router-dom'
import App from './components/App';
import store from './store';
import { Provider } from 'react-redux';
// import AppReducer from './reducer/reducer';
// import { createStore } from 'redux';


ReactDOM.render(
  (
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>

  ),
  document.getElementById('root'),
);
