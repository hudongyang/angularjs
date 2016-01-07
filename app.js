var express = require('express'),
    bodyParser = require('body-parser'),
    jsonParser = bodyParser.json();

express()
    .use(express.static(__dirname + '/public'))
    .use(bodyParser.urlencoded({extended: false}))

    // .use(function(req, res, next) {
    //     var url = parse(req.url);

    //     url.query && (req.params = qs.parse(url.query));

    //     next();
    // })

    .use(jsonParser)

    .post('/api/users', function(req, res) {
        console.log(req.body, req.query);

        res.end();
    })

    .get('/api/users', function(req, res) {

        var query = req.query;

        if(query.callback) {
            var data = {name: 'hudy', sex: 19};

            res.write(query.callback + '(' + JSON.stringify(data) + ')');
        }

        res.end();
    })

    .listen(3000);