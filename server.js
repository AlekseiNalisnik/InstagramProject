const { join } = require('path');
const express = require('express');
const { data } = require('./data.js');
const { usersInfo } = require('./usersInfo.js');


const app = express();

app.use(express.static(join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.get('/usersInfo', (req, res) => {
    console.log('UsersInfo - ', usersInfo);
    res.send(usersInfo);
});

app.post('/usersInfo', (req, res) => {
    res.sendStatus(200);
});

app.get('/data', (req, res) => {
    // console.log(data);
    res.send(data);
});

app.post('/data', (req, res) => {
    res.sendStatus(200);
});

app.get('/isAuthorized', (req, res) => {
    res.send(200);
});

app.post('/isAuthorized', (req, res) => {
    res.sendStatus(200);
});

app.listen(3000, () => console.log('port 3000'));