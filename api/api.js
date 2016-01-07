'use strict';

//modules we are using in our app
const express    = require('express');
const bodyParser = require('body-parser');

const api = express();

api.get('/', (req, res) =>
{

    res.render('pages/index');
});

api.get('/about', (req,res) =>
{
    res.render('pages/about')
})

//bundle this code and make it visable to other parts of our code
module.exports = api;
