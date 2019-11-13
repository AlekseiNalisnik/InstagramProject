import axios from 'axios';

const getData = () => axios.get('/data');
const createData = data => axios.post('/data', data);

export { getData, createData };