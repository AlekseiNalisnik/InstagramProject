import { combineReducers } from 'redux';
import { authReducer } from './auth/reducers';
import { regReducer } from './reg/reducers';

export default combineReducers({
    auth: authReducer,
    reg: regReducer
});