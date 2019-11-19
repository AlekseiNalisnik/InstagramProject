import axios from 'axios';

const getData = () => axios.get('/data');
const createData = data => axios.post('/data', data);

const getUsersInfo = () => axios.get('/usersInfo');
const createUsersInfo = info => axios.post('/usersInfo', info);

const getIsAuthorizedFlag = () => axios.get('/isAuthorized');
const createIsAuthorizedFlag = flag => axios.post('/isAuthorized', flag);

export { getData, createData, getUsersInfo, createUsersInfo, createIsAuthorizedFlag, getIsAuthorizedFlag };