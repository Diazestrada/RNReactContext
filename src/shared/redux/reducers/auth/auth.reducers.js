import { LOGGEDIN, LOGOUT } from "../../types/auth.type";

const INITIAL_STATE = { auth: false }

export const authLogin = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGGEDIN: {
      return { ...state, auth: payload.auth }
    }

    case LOGOUT: {
      return INITIAL_STATE
    }

    default: {
      return state
    }
  }

}
