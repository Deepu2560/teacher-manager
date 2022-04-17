export const LOG_IN_LOADING = "LOG_IN_LOADING";
export const LOG_IN = "LOG_IN";
export const LOG_IN_ERROR = "LOG_IN_ERROR";
export const LOG_OUT = "LOG_OUT";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";

export const loginLoading = () => ({ type: LOG_IN_LOADING });

export const loginSuccess = (payload) => ({ type: LOG_IN, payload });

export const loginError = () => ({ type: LOG_IN_ERROR });

export const logoutSuccess = () => ({ type: LOG_OUT });

export const signupSuccess = () => ({ type: SIGN_UP_SUCCESS });
