import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
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
