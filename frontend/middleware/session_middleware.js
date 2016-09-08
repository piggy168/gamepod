import { receiveCurrentUser,
         receiveErrors,
         SessionConstants,
         receiveProfile
       } from '../actions/session_actions';

import { login, signup, logout, update, fetchProfile } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case SessionConstants.LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case SessionConstants.UPDATE:
      update(action.id, successCallback);
      return next(action);
    case SessionConstants.LOGOUT:
      logout(() => next(action));
      break;
    case SessionConstants.SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    case SessionConstants.REQUEST_PROFILE:
      const successProfile = profile => dispatch(receiveProfile(profile));
      fetchProfile(action.id, successProfile);
      return next(action);
    default:
      return next(action);
  }
};
