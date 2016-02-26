import { combineReducers } from 'redux';
import checkup from './checkup';
import form from './form';

const reducers = combineReducers({
  checkup,
  form,
});

export default reducers;
