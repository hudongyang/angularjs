var express = require('express');

express()
    .get('/api/users', function(req, res) {

        res.header('Content-Type', 'application/json');
        // res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.send(JSON.stringify({name: 'hudy'}));
        
    })

    .listen(3001)