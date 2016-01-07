'use strict';

//modules we are using in our app
const express    = require('express');
const bodyParser = require('body-parser');
const data       = require('../Config/database');

const api = express();

api.get('/', (req, res) =>
{

    res.render('pages/index');
});

//bundle this code and make it visable to other parts of our code
module.exports = api;
