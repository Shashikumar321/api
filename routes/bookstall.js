const bookstall = require('express').Router();

bookstall.get('/', (request, response) => {
    response.send("Welcome to UI.Focus");
})

bookstall.get('/heartbeat', (request, response) => {
    response.send("Application is LIVE!");
})

module.exports = bookstall;