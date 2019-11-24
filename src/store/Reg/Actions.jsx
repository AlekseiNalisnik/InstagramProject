export const REG_CHANGE_EMAIL_TEXT = 'REG_CHANGE_EMAIL_TEXT';
export const REG_CHANGE_PASSWORD_TEXT = 'REG_CHANGE_PASSWORD_TEXT';
export const REG_CHANGE_NAME_TEXT = 'REG_CHANGE_NAME_TEXT';
export const REG_CHANGE_REPEAT_FULLNAME_TEXT = 'REG_CHANGE_REPEAT_FULLNAME_TEXT';

export const setEmailText = (email) => ({
    type: REG_CHANGE_EMAIL_TEXT,
    payload: email
});

export const setPasswordText = (password) => ({
    type: REG_CHANGE_PASSWORD_TEXT,
    payload: password
});

export const setNameText = (name) => ({
    type: REG_CHANGE_NAME_TEXT,
    payload: name
});

export const setFullNameText = (fullName) => ({
    type: REG_CHANGE_REPEAT_FULLNAME_TEXT,
    payload: fullName
});
