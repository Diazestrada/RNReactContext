import { LOGGEDIN, LOGOUT } from "../types/auth.type";

export const LOGGED_IN = (data) => {
  return {
    type: LOGGEDIN,
    payload: data,
  };
}

export const USERS_LOGOUT = () => {
  return {
    type: LOGOUT
  };
}
