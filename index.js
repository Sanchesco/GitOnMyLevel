'use strict';

//moduels we are using in this app
const express = require('express');
const api = require('./Api/api');

api.set('port', (process.env.PORT || 5000));

api.use(express.static(__dirname));


//set the view engine as ejs
api.set('views', __dirname + '/views');
api.set('view engine', 'ejs');


/*
//our port number
const port = process.env.PORT || 4242;

//listen to a port and notify when server is up
api.listen(port, () =>
{
    console.log('Server starting on port: ', port);
});
*/


api.listen(api.get('port'), function() {
  console.log('Node app is running on port', api.get('port'));
});
