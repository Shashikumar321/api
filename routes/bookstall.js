const bookstall = require('express').Router();
const booksController = require('../controller/bookstallController');

bookstall.get('/', (request, response) => {
    response.send("Welcome to UI.Focus");
})

//heartbeat route
bookstall.get('/heartbeat', (request, response) => {
    response.send("Application is LIVE!");
})

//Fetch all books
bookstall.get('/books', booksController.getAllBooks);

//Fetch a single book
bookstall.get('/books/:id', booksController.getBookById);

module.exports = bookstall;