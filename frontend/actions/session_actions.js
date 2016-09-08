export const SessionConstants = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SIGNUP: "SIGNUP",
  UPDATE: "UPDATE",
  REQUEST_PROFILE: "REQUEST_PROFILE",
  RECEIVE_CURRENT_USER: "RECEIVE_CURRENT_USER",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",
  RECEIVE_PROFILE: "RECEIVE_PROFILE"
};

export const signup = user => ({
  type: SessionConstants.SIGNUP,
  user
});

export const login = user => ({
  type: SessionConstants.LOGIN,
  user
});

export const update = (id) => ({
  type: SessionConstants.UPDATE,
  id
});

export const requestProfile = (id) => ({
  type: SessionConstants.REQUEST_PROFILE,
  id
});

export const receiveProfile = (profile) => ({
  type: SessionConstants.RECEIVE_PROFILE,
  profile
});

export const logout = () => ({
  type: SessionConstants.LOGOUT
});

export const receiveCurrentUser = currentUser => ({
  type: SessionConstants.RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: SessionConstants.RECEIVE_ERRORS,
  errors
});
