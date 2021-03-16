import { combineReducers } from 'redux';
import { authLogin } from './auth.reducers';

const authReducers = combineReducers({
  login: authLogin
})

export default authReducers;