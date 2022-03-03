const { request, response, urlencoded } = require('express');
const express = require('express');

const app = express();

const PORT = '8000';

const routes = require('./routes/index.js')

//Adding CORS middleware.
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

//Adding body-parser middleware
app.use(urlencoded({extended:true}));
app.use(express.json());

app.use('/', routes);

app.listen(PORT, () => { 
    console.log("App is running at http://localhost:8000")
});

