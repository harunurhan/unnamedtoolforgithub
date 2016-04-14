import merge from 'lodash/merge';
import * as actionTypes from '../actionTypes/checkup';

<<<<<<< HEAD
const initalState = {
  warnings: [],
};

export default function checkup(state = initalState, action) {
  switch (action.type) {
    // TODO: remove (REQUEST_CHECK_RESULT) case if it is completely unnecessary (seems so)
=======
export default function checkup(state = {}, action) {
  switch (action.type) {
>>>>>>> d5a53951a92cb18e518772372753fddbc5f683b4
    case actionTypes.REQUEST_CHECKUP_RESULT:
      return merge({}, state, action.data);
    case actionTypes.REQUEST_CHECKUP_RESULT_SUCCESS:
      return merge({}, state, action.checkup);
    case actionTypes.REQUEST_CHECKUP_RESULT_ERROR:
      return merge({}, state, action.error);
    default:
      return state;
  }
}
