import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import store from './store';
// import AppReducer from './reducer/reducer';
// import { createStore } from 'redux';


ReactDOM.render(
  (
    <div>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </div>

  ),
  document.getElementById('root'),
);
