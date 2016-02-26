import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import injectTapEventPlugin from 'react-tap-event-plugin';
import reducers from './reducers';
import Home from './containers/Home';

// Fix for material-ui TODO: remove this when react 1.0 released.
injectTapEventPlugin();

// Redux Store (Instance)
const store = applyMiddleware(
  thunk,
  promise,
  createLogger()
)(createStore)(reducers);

render(
  <Home store={store} />,
  document.getElementById('root')
);
