import {
    REG_CHANGE_EMAIL_TEXT,
    REG_CHANGE_PASSWORD_TEXT,
    REG_CHANGE_NAME_TEXT,
    REG_CHANGE_REPEAT_FULLNAME_TEXT
} from './actions';

const defaultState = {
    email: '',
    password: '',
    name: '',
    fullName: ''
};

export const regReducer = (state = defaultState, action) => {
    switch(action.type) {
        case REG_CHANGE_EMAIL_TEXT:
            return { ...state, email: action.payload };
        case REG_CHANGE_PASSWORD_TEXT:
            return { ...state, password: action.payload };
        case REG_CHANGE_NAME_TEXT:
            return { ...state, name: action.payload };
        case REG_CHANGE_REPEAT_FULLNAME_TEXT:
            return { ...state, fullName: action.payload };
        default: return state;
    }
};