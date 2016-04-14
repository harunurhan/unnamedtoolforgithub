import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
<<<<<<< HEAD
import { createStore, applyMiddleware, compose } from 'redux';
=======
import { createStore, applyMiddleware } from 'redux';
>>>>>>> d5a53951a92cb18e518772372753fddbc5f683b4
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import injectTapEventPlugin from 'react-tap-event-plugin';
import reducers from './reducers';
import Home from './containers/Home';

// Fix for material-ui TODO: remove this when react 1.0 released.
injectTapEventPlugin();

// Redux Store (Instance)
<<<<<<< HEAD
const store = compose(applyMiddleware(
  thunk,
  promise,
  createLogger()
))(createStore)(reducers);
=======
const store = applyMiddleware(
  thunk,
  promise,
  createLogger()
)(createStore)(reducers);
>>>>>>> d5a53951a92cb18e518772372753fddbc5f683b4

render(
  <Home store={store} />,
  document.getElementById('root')
);
